module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const action = body?.action || "parse_prescription";
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: "GEMINI_API_KEY is not configured." });
    }

    let systemPrompt = "";
    const userParts = [];

    if (action === "parse_prescription") {
      const text = (body?.text || "").trim();
      const imageBase64 = body?.imageBase64 || "";
      const mimeType = body?.mimeType || "image/jpeg";

      if (!text && !imageBase64) {
        return res.status(400).json({ error: "Provide prescription text or an image." });
      }

      systemPrompt = `You are MediTrack AI, an elderly-friendly medical prescription parser.
Extract all medications from the provided prescription image or doctor's note into a structured daily schedule.
Return ONLY valid JSON matching this exact schema:
{
  "medicines": [
    {
      "name": "<Medicine name and strength, e.g., Metformin 500mg>",
      "dosage": "<e.g., 1 Tablet or 5 ml>",
      "slot": <"Morning" | "Afternoon" | "Night">,
      "time": "<e.g., 08:30 AM>",
      "instruction": "<e.g., After Breakfast, Before Lunch, After Dinner, Empty Stomach>",
      "purpose": "<Simple 3-5 word plain-language purpose for an elderly patient, e.g., Controls blood sugar>",
      "pillColor": <"blue" | "amber" | "emerald" | "rose">
    }
  ],
  "doctorNoteSummary": "<2 short, reassuring sentences summarizing the schedule in plain language for a senior>"
}

Rules:
- If a medicine is taken twice a day (BD / 1-0-1), create two entries: one for "Morning" and one for "Night".
- If taken three times a day (TDS / 1-1-1), create entries for "Morning", "Afternoon", and "Night".
- Keep explanations simple, warm, and easy for an elderly person to understand.`;

      if (imageBase64) {
        userParts.push({
          inlineData: {
            mimeType,
            data: imageBase64
          }
        });
      }
      userParts.push({
        text: text
          ? `Extract the medication schedule from this prescription/note:\n\n${text}`
          : "Extract the medication schedule from this prescription or medicine strip image."
      });
    } else if (action === "check_interactions") {
      const medicines = Array.isArray(body?.medicines) ? body.medicines : [];
      if (!medicines.length) {
        return res.status(400).json({ error: "No medicines provided for safety check." });
      }

      systemPrompt = `You are MediTrack Clinical Safety AI, helping elderly patients and caregivers spot food-timing rules, duplicate ingredients, or common medication precautions.
Return ONLY valid JSON matching this exact schema:
{
  "safetyStatus": <"All Clear" | "Timing Tips" | "Consult Doctor">,
  "headline": "<1 clear summary sentence>",
  "alerts": [
    {
      "title": "<Short title of the tip or interaction>",
      "detail": "<Plain-language explanation for a senior or caregiver>"
    }
  ],
  "elderlyTip": "<1 practical daily habit tip, e.g., hydration, keeping a glass of water by the bedside>"
}
Always remind the user to confirm dosage changes with their doctor.`;

      userParts.push({
        text: `Review this patient's daily medication list for food timing, spacing, and safety tips:\n${JSON.stringify(medicines)}`
      });
    } else {
      return res.status(400).json({ error: "Invalid action." });
    }

    const models = ["gemini-3.8-flash", "gemini-3.5-flash-lite"];
    let parsedJson = null;
    let lastError = null;

    for (const model of models) {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            systemInstruction: {
              parts: [{ text: systemPrompt }]
            },
            contents: [{ role: "user", parts: userParts }],
            generationConfig: {
              temperature: 0.2,
              responseMimeType: "application/json"
            }
          })
        }
      );

      if (response.ok) {
        const result = await response.json();
        const rawText = result?.candidates?.[0]?.content?.parts?.[0]?.text || "";
        const cleaned = rawText.replace(/^```json\s*/i, "").replace(/```\s*$/i, "").trim();
        if (cleaned) {
          parsedJson = JSON.parse(cleaned);
          break;
        }
      } else {
        lastError = await response.text();
      }
    }

    if (!parsedJson) {
      return res.status(502).json({ error: "AI service unavailable", details: lastError });
    }

    return res.status(200).json({ source: "gemini-ai", ...parsedJson });
  } catch (err) {
    return res.status(500).json({ error: "Server error", details: err.message });
  }
};
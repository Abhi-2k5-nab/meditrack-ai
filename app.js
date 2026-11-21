(function (root) {
  "use strict";

  const I18N = {
    en: {
      subtitle: "Gentle Medicine & Family Care Companion",
      fontNormal: "A+ Text",
      fontLarge: "A Text",
      navSenior: "My Medicines",
      navCaregiver: "Caregiver & Rx",
      navVitals: "Vitals & Vision",
      sosBtn: "♥ SOS Card",
      alarmBtn: "🔔 Live Alarm",
      familyProfile: "Family Care Profile:",
      addElder: "+ Add Elder",
      offlineBadge: "♥ Offline-Ready • Auto-Saved Locally",
      routineTag: "♥ Today's Routine",
      langLabel: "Language:",
      takenProgress: "{t} of {n} Medicines Taken Today",
      subHelp: "Tap + Add Medicine to add your own pills, or tap Listen to hear instructions aloud.",
      addMed: "Add Medicine",
      readAloud: "Read Aloud",
      sayTaken: "Say \"Taken\"",
      reset: "Reset",
      listeningPrompt: "🎤 Listening... Say \"Taken\" or \"Dawai le li\".",
      stopBtn: "Stop",
      dailyProgress: "♥ Daily Care Progress",
      slotAll: "All Doses",
      slotMorning: "☀️ Morning",
      slotAfternoon: "🌤️ Afternoon",
      slotNight: "🌙 Night",
      slots: { Morning: "Morning", Afternoon: "Afternoon", Night: "Night" },
      listen: "🔊 Listen",
      forLabel: "Purpose",
      remainingLabel: "Remaining in strip",
      pillsUnit: "pills",
      lowStockAlert: "⚠️ Low Stock Alert: Only {s} pills left — Refill soon",
      markTaken: "♥ MARK AS TAKEN",
      takenAt: "♥ TAKEN AT {time} (Tap to Undo)",
      addCardTitle: "Add Your Own Medicine",
      addCardDesc: "Tap here to add a tablet or capsule with an optional pill photo.",
      rxTag: "♥ Smart Prescription Reader",
      loadSample: "Load Sample Doctor Note",
      rxTitle: "Scan Prescription Photo or Doctor's Note",
      rxSub: "Upload a prescription photo or paste dosage shorthand (1-0-1, BD) to create senior reminders automatically.",
      uploadRx: "📷 Tap to Upload Prescription or Medicine Strip Photo",
      uploadSupport: "Supports JPG, PNG, WebP",
      removeBtn: "Remove",
      pasteRxLabel: "Or Paste Prescription / Dosage Instructions",
      rxPlaceholder: "Example: Tab Thyronorm 50mcg 1-0-0 empty stomach before breakfast.",
      extractBtn: "♥ Extract Senior Schedule",
      extractedTitle: "Extracted Medicines",
      addAllBtn: "+ Add All Extracted Medicines to Schedule",
      safetyTitle: "♥ Meal-Timing & Safety Check",
      safetySub: "Checks empty-stomach rules, spacing, and senior care tips.",
      runSafetyBtn: "🩺 Run Safety Check",
      refillCardTitle: "💊 Low-Stock Pharmacy Refill List",
      refillCardSub: "Medicines with 3 or fewer pills left for quick chemist ordering.",
      copyRefillBtn: "📋 Copy Refill List",
      allStockGood: "All medicines currently have more than 3 pills left.",
      addManualTitle: "Add Medicine Manually",
      medNamePlaceholder: "Medicine Name in English (e.g., Amlodipine 5mg)",
      optMorning: "Morning (08:30 AM)",
      optAfternoon: "Afternoon (01:30 PM)",
      optNight: "Night (09:00 PM)",
      purposePlaceholder: "Purpose (e.g., Blood pressure)",
      addScheduleBtn: "+ Add to Schedule",
      completeListTitle: "Complete Medicine List",
      restoreBtn: "Restore Demo Data",
      copyWhatsappBtn: "♥ Copy Status",
      directWhatsappBtn: "💬 Send on WhatsApp",
      refillBtn: "+10 Refill",
      wellnessTag: "♥ Daily Wellness Check",
      vitalsTitle: "Vitals & Post-Dose Symptom Log",
      docSummaryBtn: "📄 Doctor Summary",
      bpPlaceholder: "BP (e.g., 124/80)",
      sugarPlaceholder: "Sugar (e.g., 112 mg/dL)",
      moodGood: "😊 Good",
      moodDizzy: "💫 Dizzy",
      moodAcidity: "🔥 Acidity",
      moodTired: "😴 Tired",
      saveVitalsBtn: "♥ Save Today's Vitals Check-In",
      activeRefTitle: "Active Doses & Medicines",
      visionTag: "♥ Product Vision & Scale",
      visionTitle: "CarePulse Connected Care Ecosystem",
      eco1Title: "1. WhatsApp Alerts & 30-Min Caregiver Escalation",
      eco1Desc: "If a critical BP or diabetes dose goes unconfirmed for 30 minutes, CarePulse triggers a family WhatsApp alert and caregiver voice call.",
      simEscBtn: "▶ Preview 30-Min Missed Dose Escalation",
      eco2Title: "2. ABHA / Ayushman Bharat Digital Mission Sync",
      eco2Desc: "One-tap prescription import from ABDM-verified hospital records using a senior's 14-digit ABHA ID.",
      eco3Title: "3. Offline-First PWA & Multi-Elder Household Support",
      eco3Desc: "Local-first schedules, pill photos, and female voice reminders run directly on-device during low connectivity.",
      modalAddTitle: "♥ Add Your Own Medicine",
      attachPhoto: "📷 Attach Tablet / Strip Photo (Optional)",
      chooseBtn: "Choose",
      saveListBtn: "♥ Save to My List",
      cancelBtn: "Cancel",
      sosTag: "No-Login Emergency Medical ID",
      bloodLabel: "Blood Group",
      contactLabel: "Emergency Contact",
      allergiesLabel: "Allergies & Conditions",
      saveCardBtn: "Save Emergency Card",
      editDetailsBtn: "✎ Edit Details",
      closeBtn: "Close",
      alarmTag: "Gentle Medicine Reminder",
      alarmVoiceHint: "🎤 Hands-Free Ready: Say \"Taken\" or \"Dawai le li\"",
      repeatVoiceBtn: "🔊 Repeat Voice",
      listenNowBtn: "🎤 Listen Now",
      iTookItBtn: "♥ I Took It",
      snoozeBtn: "Snooze 10m",
      footerText: "Gentle Senior Healthcare Companion • Always follow your doctor's prescribed dosage",
      profiles: { p1: "👴 Dada (Ramesh, 72)", p2: "👵 Dadi (Sunita, 68)" }
    },
    hi: {
      subtitle: "बुजुर्गों की दवा और परिवार देखभाल साथी",
      fontNormal: "A+ बड़ा अक्षर",
      fontLarge: "A सामान्य",
      navSenior: "मेरी दवाइयाँ",
      navCaregiver: "देखभाल और पर्चा",
      navVitals: "स्वास्थ्य और विज़न",
      sosBtn: "♥ आपातकालीन कार्ड",
      alarmBtn: "🔔 लाइव अलार्म",
      familyProfile: "परिवार देखभाल प्रोफ़ाइल:",
      addElder: "+ बुजुर्ग जोड़ें",
      offlineBadge: "♥ ऑफ़लाइन तैयार • फ़ोन में सुरक्षित",
      routineTag: "♥ आज की दिनचर्या",
      langLabel: "भाषा:",
      takenProgress: "आज {n} में से {t} दवाइयाँ ली गईं",
      subHelp: "नई दवा जोड़ने के लिए '+ दवा जोड़ें' दबाएं या निर्देश सुनने के लिए 'सुनें' दबाएं।",
      addMed: "दवा जोड़ें",
      readAloud: "बोलकर सुनाएं",
      sayTaken: "\"दवाई ले ली\" बोलें",
      reset: "रीसेट",
      listeningPrompt: "🎤 सुन रहा है... \"दवाई ले ली\" बोलें।",
      stopBtn: "रोकें",
      dailyProgress: "♥ आज की देखभाल प्रगति",
      slotAll: "सभी खुराकें",
      slotMorning: "☀️ सुबह",
      slotAfternoon: "🌤️ दोपहर",
      slotNight: "🌙 रात",
      slots: { Morning: "सुबह", Afternoon: "दोपहर", Night: "रात" },
      listen: "🔊 सुनें",
      forLabel: "उपयोग",
      remainingLabel: "पत्ते में बची दवा",
      pillsUnit: "गोलियाँ",
      lowStockAlert: "⚠️ कम स्टॉक चेतावनी: केवल {s} गोलियाँ बची हैं — जल्द मंगवाएं",
      markTaken: "♥ दवाई ले ली (निशान लगाएं)",
      takenAt: "♥ {time} पर ली गई (बदलें)",
      addCardTitle: "अपनी नई दवा जोड़ें",
      addCardDesc: "दवा की गोली या पत्ते की फ़ोटो के साथ नई दवा जोड़ने के लिए यहाँ दबाएं।",
      rxTag: "♥ स्मार्ट पर्चा रीडर",
      loadSample: "नमूना डॉक्टर पर्चा भरें",
      rxTitle: "डॉक्टर के पर्चे की फ़ोटो या निर्देश स्कैन करें",
      rxSub: "बुजुर्गों के लिए स्वचालित रिमाइंडर बनाने हेतु पर्चे की फ़ोटो अपलोड करें या खुराक लिखें।",
      uploadRx: "📷 डॉक्टर के पर्चे या दवा के पत्ते की फ़ोटो अपलोड करें",
      uploadSupport: "JPG, PNG, WebP समर्थित",
      removeBtn: "हटाएं",
      pasteRxLabel: "या दवा की खुराक के निर्देश यहाँ लिखें",
      rxPlaceholder: "उदाहरण: Tab Thyronorm 50mcg 1-0-0 सुबह खाली पेट।",
      extractBtn: "♥ दवा समय-सारणी बनाएं",
      extractedTitle: "पर्चे से निकाली गई दवाइयाँ",
      addAllBtn: "+ सभी दवाइयाँ सूची में जोड़ें",
      safetyTitle: "♥ भोजन-समय और सुरक्षा जांच",
      safetySub: "खाली पेट की दवाओं और खुराक के अंतर की जांच करता है।",
      runSafetyBtn: "🩺 सुरक्षा जांच करें",
      refillCardTitle: "💊 कम स्टॉक दवा की सूची",
      refillCardSub: "जिन दवाओं में 3 या उससे कम गोलियाँ बची हैं उनकी सूची।",
      copyRefillBtn: "📋 सूची कॉपी करें",
      allStockGood: "सभी दवाओं में 3 से अधिक गोलियाँ उपलब्ध हैं।",
      addManualTitle: "दवा स्वयं जोड़ें",
      medNamePlaceholder: "दवा का नाम अंग्रेजी में (जैसे: Amlodipine 5mg)",
      optMorning: "सुबह (08:30 AM)",
      optAfternoon: "दोपहर (01:30 PM)",
      optNight: "रात (09:00 PM)",
      purposePlaceholder: "उपयोग (जैसे: रक्तचाप नियंत्रण)",
      addScheduleBtn: "+ सूची में जोड़ें",
      completeListTitle: "पूरी दवा सूची",
      restoreBtn: "पुराना डेटा वापस लाएं",
      copyWhatsappBtn: "♥ रिपोर्ट कॉपी करें",
      directWhatsappBtn: "💬 व्हाट्सएप पर भेजें",
      refillBtn: "+10 और जोड़ें",
      wellnessTag: "♥ दैनिक स्वास्थ्य जांच",
      vitalsTitle: "रक्तचाप, शुगर और लक्षण लॉग",
      docSummaryBtn: "📄 डॉक्टर सारांश",
      bpPlaceholder: "रक्तचाप / BP (जैसे: 124/80)",
      sugarPlaceholder: "शुगर (जैसे: 112 mg/dL)",
      moodGood: "😊 अच्छा",
      moodDizzy: "💫 चक्कर",
      moodAcidity: "🔥 एसिडिटी",
      moodTired: "😴 थकान",
      saveVitalsBtn: "♥ आज की स्वास्थ्य रिपोर्ट सहेजें",
      activeRefTitle: "सक्रिय खुराकें और दवाइयाँ",
      visionTag: "♥ उत्पाद विज़न और विस्तार",
      visionTitle: "CarePulse परिवार स्वास्थ्य प्रणाली",
      eco1Title: "1. व्हाट्सएप अलर्ट और 30-मिनट परिवार सूचना",
      eco1Desc: "यदि 30 मिनट तक महत्वपूर्ण दवा की पुष्टि नहीं होती है, तो परिवार को व्हाट्सएप संदेश और कॉल जाता है।",
      simEscBtn: "▶ 30-मिनट अलर्ट का पूर्वावलोकन देखें",
      eco2Title: "2. ABHA / आयुष्मान भारत डिजिटल मिशन सिंक",
      eco2Desc: "14-अंकों की ABHA आईडी से अस्पताल के पर्चे सीधे आयात करें।",
      eco3Title: "3. ऑफ़लाइन PWA और बहु-बुजुर्ग परिवार सहायता",
      eco3Desc: "कम इंटरनेट में भी दवा की फ़ोटो और आवाज़ रिमाइंडर फ़ोन पर काम करते हैं।",
      modalAddTitle: "♥ अपनी नई दवा जोड़ें",
      attachPhoto: "📷 गोली या पत्ते की फ़ोटो लगाएं (वैकल्पिक)",
      chooseBtn: "चुनें",
      saveListBtn: "♥ मेरी सूची में सहेजें",
      cancelBtn: "रद्द करें",
      sosTag: "बिना लॉगिन आपातकालीन चिकित्सा पहचान",
      bloodLabel: "रक्त समूह",
      contactLabel: "आपातकालीन संपर्क",
      allergiesLabel: "एलर्जी और बीमारियाँ",
      saveCardBtn: "आपातकालीन कार्ड सहेजें",
      editDetailsBtn: "✎ विवरण बदलें",
      closeBtn: "बंद करें",
      alarmTag: "दवा लेने का समय",
      alarmVoiceHint: "🎤 बोलकर पुष्टि करें: \"दवाई ले ली\" कहें",
      repeatVoiceBtn: "🔊 फिर से सुनें",
      listenNowBtn: "🎤 अभी सुनें",
      iTookItBtn: "♥ मैंने दवा ले ली",
      snoozeBtn: "10 मिनट बाद",
      footerText: "बुजुर्गों का स्वास्थ्य साथी • हमेशा डॉक्टर द्वारा बताई गई खुराक का पालन करें",
      profiles: { p1: "👴 दादाजी (रमेश, 72)", p2: "👵 दादीजी (सुनीता, 68)" }
    },
    as: {
      subtitle: "জ্যেষ্ঠজনৰ ঔষধ আৰু পৰিয়ালৰ যত্নৰ সংগী",
      fontNormal: "A+ ডাঙৰ আখৰ",
      fontLarge: "A সাধাৰণ",
      navSenior: "মোৰ ঔষধসমূহ",
      navCaregiver: "যত্ন লওঁতা আৰু পৰ্চা",
      navVitals: "স্বাস্থ্য আৰু পৰিকল্পনা",
      sosBtn: "♥ জৰুৰীকালীন কাৰ্ড",
      alarmBtn: "🔔 লাইভ এলাৰ্ম",
      familyProfile: "পৰিয়ালৰ যত্নৰ প্ৰ’ফাইল:",
      addElder: "+ জ্যেষ্ঠজন যোগ কৰক",
      offlineBadge: "♥ অফলাইন সাজু • স্বয়ংক্ৰিয়ভাৱে সংৰক্ষিত",
      routineTag: "♥ আজিৰ দৈনন্দিন তালিকা",
      langLabel: "ভাষা:",
      takenProgress: "আজি {n} টা ঔষধৰ ভিতৰত {t} টা খোৱা হৈছে",
      subHelp: "নতুন ঔষধ যোগ দিবলৈ '+ ঔষধ যোগ কৰক' টিপক বা নিৰ্দেশনা শুনিবলৈ 'শুনক' টিপক।",
      addMed: "ঔষধ যোগ কৰক",
      readAloud: "পঢ়ি শুনাওক",
      sayTaken: "\"ঔষধ খালোঁ\" বুলি কওক",
      reset: "ৰিছেট",
      listeningPrompt: "🎤 শুনি থকা হৈছে... \"ঔষধ খালোঁ\" বুলি কওক।",
      stopBtn: "বন্ধ কৰক",
      dailyProgress: "♥ দৈনিক যত্নৰ অগ্ৰগতি",
      slotAll: "সকলো পালি",
      slotMorning: "☀️ ৰাতিপুৱা",
      slotAfternoon: "🌤️ দুপৰীয়া",
      slotNight: "🌙 ৰাতি",
      slots: { Morning: "ৰাতিপুৱা", Afternoon: "দুপৰীয়া", Night: "ৰাতি" },
      listen: "🔊 শুনক",
      forLabel: "উদ্দেশ্য",
      remainingLabel: "পেকত বাকী থকা ঔষধ",
      pillsUnit: "টা বড়ি",
      lowStockAlert: "⚠️ কম ষ্টক সতৰ্কবাণী: মাত্ৰ {s} টা বড়ি বাকী আছে — সোনকালে আনক",
      markTaken: "♥ ঔষধ খালোঁ (চিহ্নিত কৰক)",
      takenAt: "♥ {time} বজাত খোৱা হৈছে (সলনি কৰক)",
      addCardTitle: "আপোনাৰ নিজৰ ঔষধ যোগ কৰক",
      addCardDesc: "ঔষধৰ ফটোৰ সৈতে নতুন টেবলেট বা কেপচুল যোগ দিবলৈ ইয়াত টিপক।",
      rxTag: "♥ স্মাৰ্ট প্ৰেছক্ৰিপচন ৰিডাৰ",
      loadSample: "নমুনা ডাক্তৰৰ টোকা ভৰাওক",
      rxTitle: "ডাক্তৰৰ পৰ্চাৰ ফটো বা নিৰ্দেশনা স্কেন কৰক",
      rxSub: "স্বয়ংক্ৰিয় সোঁৱৰণী বনাবলৈ পৰ্চাৰ ফটো আপলোড কৰক বা খোৱাৰ নিয়ম লিখক।",
      uploadRx: "📷 ডাক্তৰৰ পৰ্চা বা ঔষধৰ পাতৰ ফটো আপলোড কৰক",
      uploadSupport: "JPG, PNG, WebP সমৰ্থিত",
      removeBtn: "আঁতৰাওক",
      pasteRxLabel: "বা ঔষধ খোৱাৰ নিৰ্দেশনা ইয়াত লিখক",
      rxPlaceholder: "উদাহৰণ: Tab Thyronorm 50mcg 1-0-0 ৰাতিপুৱা খালী পেটত।",
      extractBtn: "♥ ঔষধৰ সময়সূচী বনাওক",
      extractedTitle: "পৰ্চাৰ পৰা পোৱা ঔষধসমূহ",
      addAllBtn: "+ আটাইবোৰ ঔষধ তালিকাত যোগ কৰক",
      safetyTitle: "♥ আহাৰৰ সময় আৰু সুৰক্ষা পৰীক্ষা",
      safetySub: "খালী পেটত খোৱা ঔষধ আৰু সময়ৰ ব্যৱধান পৰীক্ষা কৰে।",
      runSafetyBtn: "🩺 সুৰক্ষা পৰীক্ষা কৰক",
      refillCardTitle: "💊 কম ষ্টক ঔষধৰ তালিকা",
      refillCardSub: "৩ টা বা তাতকৈ কম বড়ি বাকী থকা ঔষধসমূহৰ তালিকা।",
      copyRefillBtn: "📋 তালিকা কপি কৰক",
      allStockGood: "সকলো ঔষধতে ৩ টাতকৈ অধিক বড়ি আছে।",
      addManualTitle: "নিজে ঔষধ যোগ কৰক",
      medNamePlaceholder: "ঔষধৰ নাম ইংৰাজীত (যেনে: Amlodipine 5mg)",
      optMorning: "ৰাতিপুৱা (08:30 AM)",
      optAfternoon: "দুপৰীয়া (01:30 PM)",
      optNight: "ৰাতি (09:00 PM)",
      purposePlaceholder: "উদ্দেশ্য (যেনে: ৰক্তচাপ নিয়ন্ত্ৰণ)",
      addScheduleBtn: "+ তালিকাত যোগ কৰক",
      completeListTitle: "সম্পূৰ্ণ ঔষধৰ তালিকা",
      restoreBtn: "আগৰ তথ্য ঘূৰাই আনক",
      copyWhatsappBtn: "♥ তালিকা কপি কৰক",
      directWhatsappBtn: "💬 হোৱাটছএপত পঠিয়াওক",
      refillBtn: "+১০ যোগ কৰক",
      wellnessTag: "♥ দৈনিক স্বাস্থ্য পৰীক্ষা",
      vitalsTitle: "ৰক্তচাপ, চুগাৰ আৰু লক্ষণৰ তালিকা",
      docSummaryBtn: "📄 ডাক্তৰৰ সাৰাংশ",
      bpPlaceholder: "ৰক্তচাপ / BP (যেনে: 124/80)",
      sugarPlaceholder: "চুগাৰ (যেনে: 112 mg/dL)",
      moodGood: "😊 ভালে আছোঁ",
      moodDizzy: "💫 মূৰ ঘূৰণি",
      moodAcidity: "🔥 এচিডিটি",
      moodTired: "😴 ভাগৰ",
      saveVitalsBtn: "♥ আজিৰ স্বাস্থ্য পৰীক্ষা সংৰক্ষণ কৰক",
      activeRefTitle: "সক্ৰিয় পালি আৰু ঔষধসমূহ",
      visionTag: "♥ ভৱিষ্যত পৰিকল্পনা আৰু বিস্তাৰ",
      visionTitle: "CarePulse সংযুক্ত স্বাস্থ্য সেৱা",
      eco1Title: "1. হোৱাটছএপ এলাৰ্ম আৰু ৩০-মিনিট পৰিয়ালৰ খবৰ",
      eco1Desc: "যদি ৩০ মিনিটলৈ গুৰুত্বপূৰ্ণ ঔষধ খোৱা নিশ্চিত নহয়, তেন্তে পৰিয়াললৈ হোৱাটছএপ বাৰ্তা আৰু ফোন যায়।",
      simEscBtn: "▶ ৩০-মিনিট এলাৰ্মৰ নমুনা চাওক",
      eco2Title: "2. ABHA / আয়ুষ্মান ভাৰত ডিজিটেল মিছন সংযোগ",
      eco2Desc: "১৪-অংকৰ ABHA আইডিৰ জৰিয়তে চিকিৎসালয়ৰ পৰ্চা পোনপটীয়াকৈ আনক।",
      eco3Title: "3. অফলাইন PWA আৰু একাধিক জ্যেষ্ঠজনৰ সহায়",
      eco3Desc: "কম ইণ্টাৰনেটতো ঔষধৰ ফটো আৰু মাতৰ সোঁৱৰণী ফোনত কাম কৰে।",
      modalAddTitle: "♥ আপোনাৰ নিজৰ ঔষধ যোগ কৰক",
      attachPhoto: "📷 বড়ি বা পাতৰ ফটো লগাওক (বৈকল্পিক)",
      chooseBtn: "বাছনি কৰক",
      saveListBtn: "♥ মোৰ তালিকাত সংৰক্ষণ কৰক",
      cancelBtn: "বাতিল কৰক",
      sosTag: "লগইন অবিহনে জৰুৰীকালীন চিকিৎসা পৰিচয়",
      bloodLabel: "তেজৰ গ্ৰুপ",
      contactLabel: "জৰুৰীকালীন যোগাযোগ",
      allergiesLabel: "এলাৰ্জী আৰু ৰোগসমূহ",
      saveCardBtn: "জৰুৰীকালীন কাৰ্ড সংৰক্ষণ কৰক",
      editDetailsBtn: "✎ তথ্য সলনি কৰক",
      closeBtn: "বন্ধ কৰক",
      alarmTag: "ঔষধ খোৱাৰ সময় হৈছে",
      alarmVoiceHint: "🎤 মুখেৰে কওক: \"ঔষধ খালোঁ\" বুলি কওক",
      repeatVoiceBtn: "🔊 আকৌ শুনক",
      listenNowBtn: "🎤 এতিয়া শুনক",
      iTookItBtn: "♥ মই ঔষধ খালোঁ",
      snoozeBtn: "১০ মিনিট পিছত",
      footerText: "জ্যেষ্ঠজনৰ স্বাস্থ্য সংগী • সদায় ডাক্তৰৰ পৰামৰ্শ অনুসৰি ঔষধ খাব",
      profiles: { p1: "👴 ককা (ৰমেশ, ৭২)", p2: "👵 আইতা (সুনীতা, ৬৮)" }
    }
  };

  const PHRASE_MAP = {
    hi: {
      "1 Tablet": "1 गोली",
      "1 Capsule": "1 कैप्सूल",
      "1 Softgel": "1 सॉफ्टजेल",
      "10 ml": "10 मिली",
      "Empty Stomach (30 mins before food)": "खाली पेट (भोजन से 30 मिनट पहले)",
      "Empty Stomach (45 mins before tea)": "खाली पेट (चाय से 45 मिनट पहले)",
      "Empty Stomach": "खाली पेट",
      "After Breakfast": "नाश्ते के बाद",
      "After Lunch": "दोपहर के खाने के बाद",
      "After Lunch (Weekly)": "दोपहर के खाने के बाद (साप्ताहिक)",
      "After Dinner": "रात के खाने के बाद",
      "After Food": "खाना खाने के बाद",
      "Before Food": "खाना खाने से पहले",
      "Protects stomach from acidity": "पेट को एसिडिटी से बचाता है",
      "Keeps blood pressure steady": "रक्तचाप नियंत्रित रखता है",
      "Bone strength & calcium support": "हड्डियों की मजबूती और कैल्शियम के लिए",
      "Controls blood sugar overnight": "रात भर ब्लड शुगर नियंत्रित रखता है",
      "Thyroid hormone balance": "थायरॉइड हार्मोन संतुलन के लिए",
      "Joint & bone health": "जोड़ों और हड्डियों के स्वास्थ्य के लिए",
      "Daily prescribed care": "दैनिक निर्धारित देखभाल",
      "Daily care": "दैनिक देखभाल"
    },
    as: {
      "1 Tablet": "১ টা টেবলেট",
      "1 Capsule": "১ টা কেপচুল",
      "1 Softgel": "১ টা ছফ্টজেল",
      "10 ml": "১০ মি.লি.",
      "Empty Stomach (30 mins before food)": "খালী পেটত (আহাৰৰ ৩০ মিনিট আগতে)",
      "Empty Stomach (45 mins before tea)": "খালী পেটত (চাহৰ ৪৫ মিনিট আগতে)",
      "Empty Stomach": "খালী পেটত",
      "After Breakfast": "পুৱাৰ আহাৰৰ পিছত",
      "After Lunch": "দুপৰীয়াৰ আহাৰৰ পিছত",
      "After Lunch (Weekly)": "দুপৰীয়াৰ আহাৰৰ পিছত (সাপ্তাহিক)",
      "After Dinner": "ৰাতিৰ আহাৰৰ পিছত",
      "After Food": "আহাৰ খোৱাৰ পিছত",
      "Before Food": "আহাৰ খোৱাৰ আগতে",
      "Protects stomach from acidity": "পেটক এচিডিটিৰ পৰা ৰক্ষা কৰে",
      "Keeps blood pressure steady": "ৰক্তচাপ নিয়ন্ত্ৰণত ৰাখে",
      "Bone strength & calcium support": "হাড়ৰ শক্তি আৰু কেলচিয়ামৰ বাবে",
      "Controls blood sugar overnight": "ওৰে ৰাতি ব্লাড চুগাৰ নিয়ন্ত্ৰণত ৰাখে",
      "Thyroid hormone balance": "থাইৰয়ড হৰম’নৰ ভাৰসাম্যৰ বাবে",
      "Joint & bone health": "গাঁঠি আৰু হাড়ৰ স্বাস্থ্যৰ বাবে",
      "Daily prescribed care": "দৈনিক নিৰ্ধাৰিত যত্ন",
      "Daily care": "দৈনিক যত্ন"
    }
  };

  function trPhrase(text, lang) {
    if (!text || lang === "en") return text;
    const map = PHRASE_MAP[lang] || {};
    if (map[text]) return map[text];
    let out = text;
    if (lang === "hi") {
      out = out.replace(/Tablet/gi, "गोली").replace(/Capsule/gi, "कैप्सूल").replace(/After Food/gi, "खाना खाने के बाद").replace(/Empty Stomach/gi, "खाली पेट");
    } else if (lang === "as") {
      out = out.replace(/Tablet/gi, "টেবলেট").replace(/Capsule/gi, "কেপচুল").replace(/After Food/gi, "আহাৰ খোৱাৰ পিছত").replace(/Empty Stomach/gi, "খালী পেটত");
    }
    return out;
  }

  function formatDoseAndMedicine(med, lang) {
    return trPhrase(med.dosage, lang) + " — " + trPhrase(med.instruction, lang) + " — " + med.name;
  }

  function getLowStockMedicines(medicines) {
    return (medicines || []).filter(m => Number(m.stock) <= 3);
  }

  function calculateAdherence(medicines) {
    const list = medicines || [];
    const total = list.length;
    const taken = list.filter(m => Boolean(m.taken)).length;
    const percent = total ? Math.round((taken / total) * 100) : 0;
    return { taken, total, percent };
  }

  function parsePrescriptionLines(rawText) {
    const lines = String(rawText || "").split("\n").map(l => l.trim()).filter(Boolean);
    return lines.slice(0, 5).map((line, i) => ({
      name: line.replace(/^\d+[\.\)]\s*/, "").split("—")[0].split("-")[0].trim().slice(0, 36),
      dosage: /10\s*ml/i.test(line) ? "10 ml" : "1 Tablet",
      slot: /night|dinner|bedtime|0-0-1/i.test(line) ? "Night" : /lunch|afternoon|0-1-0/i.test(line) ? "Afternoon" : "Morning",
      time: /night|dinner|bedtime|0-0-1/i.test(line) ? "09:00 PM" : /lunch|afternoon|0-1-0/i.test(line) ? "01:30 PM" : "08:30 AM",
      instruction: /empty/i.test(line) ? "Empty Stomach" : "After Food",
      purpose: "Daily prescribed care",
      pillColor: i % 2 === 0 ? "purple" : "fuchsia"
    }));
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = {
      I18N,
      trPhrase,
      formatDoseAndMedicine,
      getLowStockMedicines,
      calculateAdherence,
      parsePrescriptionLines
    };
  }

  if (typeof document === "undefined") return;

  const DEFAULT_STATE = {
    lang: "en",
    largeFont: false,
    activeProfileId: "p1",
    profiles: [
      {
        id: "p1",
        fullName: "Ramesh Borah (72)",
        bloodGroup: "O+",
        contactName: "Abhinab",
        contactPhone: "+91 98765 43210",
        conditions: "Hypertension, Type-2 Diabetes",
        medicines: [
          { id: "m1", name: "Pan-D Capsule", dosage: "1 Capsule", slot: "Morning", time: "07:30 AM", instruction: "Empty Stomach (30 mins before food)", purpose: "Protects stomach from acidity", pillColor: "amber", stock: 8, taken: true, takenAt: "07:35 AM", photo: "" },
          { id: "m2", name: "Telma 40mg", dosage: "1 Tablet", slot: "Morning", time: "08:30 AM", instruction: "After Breakfast", purpose: "Keeps blood pressure steady", pillColor: "purple", stock: 3, taken: false, takenAt: null, photo: "" },
          { id: "m3", name: "Shelcal 500mg", dosage: "1 Tablet", slot: "Afternoon", time: "01:30 PM", instruction: "After Lunch", purpose: "Bone strength & calcium support", pillColor: "fuchsia", stock: 12, taken: false, takenAt: null, photo: "" },
          { id: "m4", name: "Metformin 500mg", dosage: "1 Tablet", slot: "Night", time: "09:00 PM", instruction: "After Dinner", purpose: "Controls blood sugar overnight", pillColor: "violet", stock: 6, taken: false, takenAt: null, photo: "" }
        ],
        vitals: [{ time: "08:15 AM", bp: "126/82", sugar: "114 mg/dL", moodKey: "moodGood" }]
      },
      {
        id: "p2",
        fullName: "Sunita Borah (68)",
        bloodGroup: "B+",
        contactName: "Abhinab",
        contactPhone: "+91 98765 43210",
        conditions: "Hypothyroidism, Osteoarthritis",
        medicines: [
          { id: "s1", name: "Thyronorm 50mcg", dosage: "1 Tablet", slot: "Morning", time: "07:00 AM", instruction: "Empty Stomach (45 mins before tea)", purpose: "Thyroid hormone balance", pillColor: "purple", stock: 14, taken: true, takenAt: "07:05 AM", photo: "" },
          { id: "s2", name: "Vitamin D3 60K", dosage: "1 Softgel", slot: "Afternoon", time: "01:30 PM", instruction: "After Lunch (Weekly)", purpose: "Joint & bone health", pillColor: "amber", stock: 4, taken: false, takenAt: null, photo: "" }
        ],
        vitals: [{ time: "08:00 AM", bp: "120/78", sugar: "102 mg/dL", moodKey: "moodGood" }]
      }
    ]
  };

  let appState;
  try {
    const raw = JSON.parse(localStorage.getItem("carepulse_v6"));
    appState = raw && Array.isArray(raw.profiles) && raw.profiles.length ? raw : JSON.parse(JSON.stringify(DEFAULT_STATE));
  } catch (e) {
    appState = JSON.parse(JSON.stringify(DEFAULT_STATE));
  }

  let currentSlotFilter = "All";
  let uploadedImageBase64 = "";
  let modalPillPhotoBase64 = "";
  let pendingExtractedMeds = [];
  let activeAlarmMedId = null;
  let selectedMoodKey = "moodGood";
  let cachedFemaleVoice = null;
  let activeRecognition = null;

  function getActiveProfile() {
    return appState.profiles.find(p => p.id === appState.activeProfileId) || appState.profiles[0];
  }

  function saveState() {
    try { localStorage.setItem("carepulse_v6", JSON.stringify(appState)); } catch (e) {}
    renderAll();
  }

  function selectFemaleVoice() {
    if (!("speechSynthesis" in window)) return null;
    const voices = window.speechSynthesis.getVoices() || [];
    if (!voices.length) return null;
    const prefix = appState.lang === "hi" ? "hi" : "en";
    const femaleHints = ["lekha", "swara", "heera", "veena", "samantha", "ava", "allison", "susan", "karen", "moira", "tessa", "aria", "jenny", "sonia", "zira", "female"];
    const maleHints = ["daniel", "alex", "fred", "rishi", "ravi", "david", "mark", "thomas", "madhur", "male"];
    for (const hint of femaleHints) {
      const v = voices.find(item => item.name.toLowerCase().includes(hint) && item.lang.toLowerCase().startsWith(prefix));
      if (v) { cachedFemaleVoice = v; return v; }
    }
    cachedFemaleVoice = voices.find(v => v.lang.toLowerCase().startsWith(prefix) && !maleHints.some(m => v.name.toLowerCase().includes(m)))
      || voices.find(v => v.lang.toLowerCase().startsWith("en") && !maleHints.some(m => v.name.toLowerCase().includes(m)))
      || voices[0];
    return cachedFemaleVoice;
  }

  if ("speechSynthesis" in window) {
    selectFemaleVoice();
    window.speechSynthesis.onvoiceschanged = selectFemaleVoice;
  }

  function speakText(text) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    const voice = cachedFemaleVoice || selectFemaleVoice();
    if (voice) u.voice = voice;
    u.rate = 0.94;
    u.pitch = 1.08;
    window.speechSynthesis.speak(u);
  }

  function applyFontSize() {
    document.documentElement.classList.toggle("large-font", Boolean(appState.largeFont));
    const t = I18N[appState.lang] || I18N.en;
    const btn = document.getElementById("fontSizeToggleBtn");
    if (btn) {
      btn.textContent = appState.largeFont ? t.fontLarge : t.fontNormal;
      btn.setAttribute("aria-pressed", String(Boolean(appState.largeFont)));
    }
  }

  function applyStaticTranslations() {
    const lang = appState.lang;
    const t = I18N[lang] || I18N.en;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (key === "fontNormal") return;
      if (t[key]) el.textContent = t[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (t[key]) el.setAttribute("placeholder", t[key]);
    });

    document.querySelectorAll(".lang-btn").forEach(btn => {
      const isMatch = btn.getAttribute("data-lang") === lang;
      btn.setAttribute("aria-pressed", String(isMatch));
      btn.className = isMatch
        ? "lang-btn px-2.5 py-1 rounded-lg bg-purple-700 text-white cursor-pointer"
        : "lang-btn px-2.5 py-1 rounded-lg text-purple-900 hover:bg-purple-100 cursor-pointer";
    });

    applyFontSize();
  }

  function switchMode(mode) {
    ["senior", "caregiver", "roadmap"].forEach(key => {
      document.getElementById(key + "View").classList.toggle("hidden", key !== mode);
      const btn = document.getElementById("btn" + key.charAt(0).toUpperCase() + key.slice(1) + "Mode");
      btn.setAttribute("aria-selected", String(key === mode));
      btn.className = key === mode
        ? "px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-sm cursor-pointer"
        : "px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold text-purple-900/75 hover:text-purple-950 cursor-pointer";
    });
  }

  function setLanguage(lang) {
    appState.lang = lang;
    cachedFemaleVoice = null;
    selectFemaleVoice();
    saveState();
  }

  function toggleTaken(id) {
    const prof = getActiveProfile();
    const med = prof.medicines.find(m => m.id === id);
    if (!med) return;
    if (!med.taken) {
      med.taken = true;
      med.takenAt = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      if (med.stock > 0) med.stock -= 1;
      speakText(trPhrase(med.dosage, appState.lang) + ", " + med.name);
    } else {
      med.taken = false;
      med.takenAt = null;
      med.stock += 1;
    }
    saveState();
  }

  function buildStatusReport() {
    const lang = appState.lang;
    const prof = getActiveProfile();
    const lines = prof.medicines.map(m =>
      (m.taken ? "♥ " : "⏳ ") + trPhrase(m.dosage, lang) + " — " + m.name
    );
    return "CarePulse ♥ — " + prof.fullName + "\n" + lines.join("\n");
  }

  function buildRefillListText() {
    const lang = appState.lang;
    const t = I18N[lang] || I18N.en;
    const low = getLowStockMedicines(getActiveProfile().medicines);
    if (!low.length) return t.allStockGood;
    return low.map(m => "• " + trPhrase(m.dosage, lang) + " — " + m.name + " (" + m.stock + " " + t.pillsUnit + ")").join("\n");
  }

  function renderProfileBar() {
    const t = I18N[appState.lang] || I18N.en;
    const wrap = document.getElementById("profileButtonsWrap");
    wrap.textContent = "";
    appState.profiles.forEach(prof => {
      const btn = document.createElement("button");
      btn.type = "button";
      const isSelected = prof.id === appState.activeProfileId;
      btn.setAttribute("aria-pressed", String(isSelected));
      btn.textContent = (t.profiles && t.profiles[prof.id]) ? t.profiles[prof.id] : ("♥ " + prof.fullName);
      btn.className = isSelected
        ? "px-3 py-1 rounded-lg bg-purple-700 text-white font-extrabold text-xs shadow-sm cursor-pointer"
        : "px-3 py-1 rounded-lg bg-white text-purple-950 font-bold text-xs border border-purple-200 hover:bg-purple-50 cursor-pointer";
      btn.addEventListener("click", () => { appState.activeProfileId = prof.id; saveState(); });
      wrap.appendChild(btn);
    });
  }

  function renderSeniorCards() {
    const lang = appState.lang;
    const t = I18N[lang] || I18N.en;
    const prof = getActiveProfile();
    const grid = document.getElementById("seniorCardsGrid");
    grid.textContent = "";

    const filtered = currentSlotFilter === "All"
      ? prof.medicines
      : prof.medicines.filter(m => m.slot === currentSlotFilter);

    const colors = {
      purple: "bg-purple-100 text-purple-900 border-purple-200",
      amber: "bg-amber-100 text-amber-900 border-amber-200",
      fuchsia: "bg-fuchsia-100 text-fuchsia-900 border-fuchsia-200",
      violet: "bg-violet-100 text-violet-900 border-violet-200"
    };

    filtered.forEach(med => {
      const doseText = trPhrase(med.dosage, lang);
      const instText = trPhrase(med.instruction, lang);
      const purposeText = trPhrase(med.purpose, lang);

      const card = document.createElement("article");
      card.className = "senior-card rounded-3xl p-6 border-2 shadow-sm flex flex-col justify-between gap-5 " + (med.taken ? "bg-purple-50/90 border-purple-300" : "bg-white border-purple-100");

      const top = document.createElement("div");
      top.className = "space-y-3";

      const headerRow = document.createElement("div");
      headerRow.className = "flex items-center justify-between gap-2";

      const badge = document.createElement("span");
      badge.className = "px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-extrabold border " + (colors[med.pillColor] || colors.purple);
      badge.textContent = (t.slots[med.slot] || med.slot) + " • " + med.time;

      const listenBtn = document.createElement("button");
      listenBtn.type = "button";
      listenBtn.setAttribute("aria-label", t.listen + " " + med.name);
      listenBtn.className = "px-3.5 py-2 rounded-xl bg-purple-100 hover:bg-purple-200 text-purple-900 font-bold text-xs sm:text-sm border border-purple-200 cursor-pointer";
      listenBtn.textContent = t.listen;
      listenBtn.addEventListener("click", () => {
        speakText((t.slots[med.slot] || med.slot) + ", " + doseText + ", " + instText + " — " + med.name);
      });

      headerRow.append(badge, listenBtn);

      const bodyRow = document.createElement("div");
      bodyRow.className = "flex items-start gap-3.5";

      if (med.photo) {
        const img = document.createElement("img");
        img.src = med.photo;
        img.alt = med.name;
        img.className = "w-16 h-16 rounded-2xl object-cover border-2 border-purple-200 shrink-0";
        bodyRow.appendChild(img);
      } else {
        const pillIcon = document.createElement("div");
        pillIcon.setAttribute("aria-hidden", "true");
        pillIcon.className = "w-14 h-14 rounded-2xl bg-purple-100/80 border border-purple-200 flex items-center justify-center text-2xl shrink-0";
        pillIcon.textContent = "💊";
        bodyRow.appendChild(pillIcon);
      }

      const info = document.createElement("div");

      const doseLine = document.createElement("p");
      doseLine.className = "text-base sm:text-lg font-extrabold text-purple-700";
      doseLine.textContent = doseText + " — " + instText;

      const medNameEl = document.createElement("h3");
      medNameEl.className = "text-2xl font-extrabold text-slate-900 mt-0.5";
      medNameEl.textContent = med.name;

      const purposeEl = document.createElement("p");
      purposeEl.className = "text-sm text-slate-600 mt-1";
      purposeEl.textContent = t.forLabel + ": " + purposeText;

      info.append(doseLine, medNameEl, purposeEl);
      bodyRow.appendChild(info);

      const stockEl = document.createElement("div");
      if (med.stock <= 3) {
        stockEl.className = "px-3.5 py-2 rounded-xl bg-rose-50 border border-rose-200 text-xs font-extrabold text-rose-700";
        stockEl.textContent = t.lowStockAlert.replace("{s}", med.stock);
      } else {
        stockEl.className = "text-xs font-semibold text-purple-900/55";
        stockEl.textContent = t.remainingLabel + ": " + med.stock + " " + t.pillsUnit;
      }

      top.append(headerRow, bodyRow, stockEl);

      const takeBtn = document.createElement("button");
      takeBtn.type = "button";
      takeBtn.setAttribute("aria-pressed", String(Boolean(med.taken)));
      takeBtn.className = "w-full py-4 px-5 rounded-2xl font-extrabold text-base sm:text-lg shadow-sm cursor-pointer " + (med.taken
        ? "bg-purple-200 text-purple-950 hover:bg-purple-300"
        : "bg-gradient-to-r from-purple-600 to-violet-600 text-white hover:from-purple-700 hover:to-violet-700");
      takeBtn.textContent = med.taken ? t.takenAt.replace("{time}", med.takenAt) : t.markTaken;
      takeBtn.addEventListener("click", () => toggleTaken(med.id));

      card.append(top, takeBtn);
      grid.appendChild(card);
    });

    const addCard = document.createElement("button");
    addCard.type = "button";
    addCard.className = "senior-card rounded-3xl p-6 border-2 border-dashed border-purple-300 hover:border-purple-600 bg-white/80 hover:bg-purple-50/60 flex flex-col items-center justify-center text-center gap-2 min-h-[240px] cursor-pointer";
    const plusBox = document.createElement("div");
    plusBox.className = "w-14 h-14 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center text-3xl font-extrabold";
    plusBox.textContent = "+";
    const titleBox = document.createElement("div");
    titleBox.className = "text-lg font-extrabold text-slate-900";
    titleBox.textContent = t.addCardTitle;
    const descBox = document.createElement("p");
    descBox.className = "text-xs text-slate-500 max-w-xs";
    descBox.textContent = t.addCardDesc;
    addCard.append(plusBox, titleBox, descBox);
    addCard.addEventListener("click", openAddMedModal);
    grid.appendChild(addCard);
  }

  function renderCaregiverManageList() {
    const lang = appState.lang;
    const t = I18N[lang] || I18N.en;
    const prof = getActiveProfile();
    const list = document.getElementById("caregiverManageList");
    list.textContent = "";

    prof.medicines.forEach(med => {
      const row = document.createElement("div");
      row.className = "py-3 flex items-center justify-between gap-2 text-xs";

      const left = document.createElement("div");
      const titleLine = document.createElement("div");
      titleLine.className = "font-bold text-slate-800";
      const doseSpan = document.createElement("span");
      doseSpan.className = "text-purple-700";
      doseSpan.textContent = trPhrase(med.dosage, lang);
      titleLine.append(doseSpan, document.createTextNode(" — " + med.name));

      const metaLine = document.createElement("div");
      metaLine.className = "text-slate-500";
      metaLine.textContent = (t.slots[med.slot] || med.slot) + " • " + med.time + " • " + med.stock + " " + t.pillsUnit;
      left.append(titleLine, metaLine);

      const right = document.createElement("div");
      right.className = "flex items-center gap-2";

      const refillBtn = document.createElement("button");
      refillBtn.type = "button";
      refillBtn.className = "px-2 py-1 rounded bg-purple-50 text-purple-700 font-bold border border-purple-200 cursor-pointer";
      refillBtn.textContent = t.refillBtn;
      refillBtn.addEventListener("click", () => { med.stock += 10; saveState(); });

      const delBtn = document.createElement("button");
      delBtn.type = "button";
      delBtn.className = "px-2 py-1 rounded bg-rose-50 text-rose-600 font-bold border border-rose-200 cursor-pointer";
      delBtn.textContent = t.removeBtn;
      delBtn.addEventListener("click", () => {
        prof.medicines = prof.medicines.filter(m => m.id !== med.id);
        saveState();
      });

      right.append(refillBtn, delBtn);
      row.append(left, right);
      list.appendChild(row);
    });

    const refillWrap = document.getElementById("lowStockRefillList");
    refillWrap.textContent = "";
    const lowMeds = getLowStockMedicines(prof.medicines);
    if (!lowMeds.length) {
      const p = document.createElement("p");
      p.className = "text-xs text-slate-500";
      p.textContent = t.allStockGood;
      refillWrap.appendChild(p);
    } else {
      lowMeds.forEach(m => {
        const item = document.createElement("div");
        item.className = "p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-xs flex items-center justify-between font-bold text-amber-950";
        const leftSpan = document.createElement("span");
        const doseTag = document.createElement("span");
        doseTag.className = "text-purple-800";
        doseTag.textContent = trPhrase(m.dosage, lang);
        leftSpan.append(doseTag, document.createTextNode(" — " + m.name));

        const rightSpan = document.createElement("span");
        rightSpan.textContent = m.stock + " " + t.pillsUnit;
        item.append(leftSpan, rightSpan);
        refillWrap.appendChild(item);
      });
    }
  }

  function renderVitalsAndMeds() {
    const lang = appState.lang;
    const t = I18N[lang] || I18N.en;
    const prof = getActiveProfile();

    const wrap = document.getElementById("vitalsHistoryList");
    wrap.textContent = "";
    (prof.vitals || []).forEach(v => {
      const moodLabel = t[v.moodKey] || t.moodGood;
      const div = document.createElement("div");
      div.className = "p-3 rounded-xl bg-purple-50/70 border border-purple-100 text-xs flex items-center justify-between gap-2";

      const leftDiv = document.createElement("div");
      const bpDiv = document.createElement("div");
      bpDiv.className = "font-extrabold text-purple-950";
      bpDiv.textContent = "BP: " + v.bp + " • Sugar: " + v.sugar;
      const timeDiv = document.createElement("div");
      timeDiv.className = "text-slate-500";
      timeDiv.textContent = v.time;
      leftDiv.append(bpDiv, timeDiv);

      const moodBadge = document.createElement("span");
      moodBadge.className = "px-2.5 py-1 rounded-lg bg-white border border-purple-200 font-bold text-purple-900";
      moodBadge.textContent = moodLabel;

      div.append(leftDiv, moodBadge);
      wrap.appendChild(div);
    });

    const medList = document.getElementById("vitalsMedList");
    medList.textContent = "";
    prof.medicines.forEach(m => {
      const item = document.createElement("div");
      item.className = "px-3 py-2 rounded-xl bg-purple-50/60 border border-purple-100 text-xs flex items-center justify-between";
      const leftSpan = document.createElement("span");
      const doseStrong = document.createElement("strong");
      doseStrong.className = "text-purple-800";
      doseStrong.textContent = trPhrase(m.dosage, lang) + " (" + trPhrase(m.instruction, lang) + ")";
      const nameStrong = document.createElement("strong");
      nameStrong.textContent = m.name;
      leftSpan.append(doseStrong, document.createTextNode(" — "), nameStrong);

      const slotSpan = document.createElement("span");
      slotSpan.className = "text-slate-500";
      slotSpan.textContent = t.slots[m.slot] || m.slot;

      item.append(leftSpan, slotSpan);
      medList.appendChild(item);
    });
  }

  function renderAll() {
    const t = I18N[appState.lang] || I18N.en;
    const prof = getActiveProfile();
    const stats = calculateAdherence(prof.medicines);

    applyStaticTranslations();
    document.getElementById("adherenceHeading").textContent = t.takenProgress.replace("{t}", stats.taken).replace("{n}", stats.total);
    document.getElementById("progressPercent").textContent = stats.percent + "%";
    document.getElementById("progressBar").style.width = stats.percent + "%";

    renderProfileBar();
    renderSeniorCards();
    renderCaregiverManageList();
    renderVitalsAndMeds();
  }

  function openAddMedModal() {
    modalPillPhotoBase64 = "";
    document.getElementById("addMedModal").classList.remove("hidden");
  }

  function openEmergencyModal() {
    const lang = appState.lang;
    const t = I18N[lang] || I18N.en;
    const prof = getActiveProfile();
    document.getElementById("sosPatientTitle").textContent = prof.fullName;
    document.getElementById("sosBlood").textContent = prof.bloodGroup;
    document.getElementById("sosContactName").textContent = prof.contactName;
    const phoneEl = document.getElementById("sosContactPhone");
    phoneEl.textContent = prof.contactPhone;
    phoneEl.href = "tel:" + prof.contactPhone.replace(/\s+/g, "");
    document.getElementById("sosConditions").textContent = prof.conditions;

    const medWrap = document.getElementById("sosActiveMeds");
    medWrap.textContent = "";
    prof.medicines.forEach(m => {
      const div = document.createElement("div");
      div.className = "px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs flex justify-between font-bold text-slate-800";
      const leftSpan = document.createElement("span");
      const doseSpan = document.createElement("span");
      doseSpan.className = "text-purple-700";
      doseSpan.textContent = trPhrase(m.dosage, lang);
      leftSpan.append(document.createTextNode("♥ "), doseSpan, document.createTextNode(" — " + m.name));

      const rightSpan = document.createElement("span");
      rightSpan.className = "text-purple-700";
      rightSpan.textContent = t.slots[m.slot] || m.slot;
      div.append(leftSpan, rightSpan);
      medWrap.appendChild(div);
    });

    document.getElementById("editSosBlood").value = prof.bloodGroup;
    document.getElementById("editSosPhone").value = prof.contactPhone;
    document.getElementById("editSosConditions").value = prof.conditions;
    document.getElementById("sosEditForm").classList.add("hidden");
    document.getElementById("emergencyModal").classList.remove("hidden");
  }

  function triggerDemoAlarm() {
    const lang = appState.lang;
    const prof = getActiveProfile();
    const nextMed = prof.medicines.find(m => !m.taken) || prof.medicines[0];
    if (!nextMed) return;
    activeAlarmMedId = nextMed.id;
    document.getElementById("alarmMedDetails").textContent = trPhrase(nextMed.dosage, lang) + " • " + trPhrase(nextMed.instruction, lang);
    document.getElementById("alarmMedName").textContent = nextMed.name;
    document.getElementById("alarmMedPurpose").textContent = trPhrase(nextMed.purpose, lang);
    const visual = document.getElementById("alarmVisualWrap");
    visual.textContent = "";
    if (nextMed.photo) {
      const img = document.createElement("img");
      img.src = nextMed.photo;
      img.alt = nextMed.name;
      img.className = "w-full h-full object-cover";
      visual.appendChild(img);
    } else {
      visual.textContent = "♥";
    }
    document.getElementById("alarmModal").classList.remove("hidden");
    speakText(trPhrase(nextMed.dosage, lang) + ", " + trPhrase(nextMed.instruction, lang) + " — " + nextMed.name);
  }

  function startVoiceRecognition(onMatch, statusEl) {
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRec) return;
    if (activeRecognition) { try { activeRecognition.stop(); } catch (e) {} }
    const rec = new SpeechRec();
    activeRecognition = rec;
    rec.lang = appState.lang === "hi" ? "hi-IN" : "en-IN";
    rec.onresult = function (e) {
      const spoken = (e.results[0][0].transcript || "").toLowerCase();
      if (/taken|done|yes|ok|dawai|le li|kha liya|khalu/i.test(spoken)) {
        onMatch(spoken);
      } else if (statusEl) {
        statusEl.textContent = "\"" + spoken + "\"";
      }
    };
    try { rec.start(); } catch (e) {}
  }

  document.addEventListener("click", function (e) {
    const langBtn = e.target.closest("[data-lang]");
    if (langBtn) { setLanguage(langBtn.getAttribute("data-lang")); return; }

    const modeBtn = e.target.closest("[data-mode]");
    if (modeBtn) { switchMode(modeBtn.getAttribute("data-mode")); return; }

    const slotBtn = e.target.closest("[data-slot]");
    if (slotBtn) {
      currentSlotFilter = slotBtn.getAttribute("data-slot");
      document.querySelectorAll(".slot-tab").forEach(b => {
        b.className = "slot-tab px-5 py-2.5 rounded-2xl font-extrabold text-sm bg-white text-purple-950 border-2 border-purple-100 cursor-pointer";
      });
      slotBtn.className = "slot-tab px-5 py-2.5 rounded-2xl font-extrabold text-sm bg-gradient-to-r from-purple-700 to-violet-700 text-white shadow-sm cursor-pointer";
      renderSeniorCards();
      return;
    }

    const moodBtn = e.target.closest("[data-mood]");
    if (moodBtn) {
      selectedMoodKey = moodBtn.getAttribute("data-i18n");
      document.querySelectorAll(".mood-btn").forEach(b => {
        b.className = b === moodBtn
          ? "mood-btn p-2.5 rounded-xl border-2 border-purple-600 bg-purple-50 text-xs font-extrabold text-purple-950 cursor-pointer"
          : "mood-btn p-2.5 rounded-xl border-2 border-purple-100 bg-white text-xs font-bold text-slate-700 cursor-pointer";
      });
      return;
    }

    const actionEl = e.target.closest("[data-action]");
    if (!actionEl) return;
    const action = actionEl.getAttribute("data-action");
    const prof = getActiveProfile();
    const lang = appState.lang;
    const t = I18N[lang] || I18N.en;

    if (action === "toggle-font-size") {
      appState.largeFont = !appState.largeFont;
      saveState();
    } else if (action === "open-add-med") {
      openAddMedModal();
    } else if (action === "close-add-med") {
      document.getElementById("addMedModal").classList.add("hidden");
    } else if (action === "save-modal-med") {
      const name = document.getElementById("modalMedName").value.trim();
      if (!name) return;
      const slot = document.getElementById("modalMedSlot").value;
      const times = { Morning: "08:30 AM", Afternoon: "01:30 PM", Night: "09:00 PM" };
      prof.medicines.push({
        id: "u_" + Date.now(),
        name,
        dosage: document.getElementById("modalMedDosage").value.trim() || "1 Tablet",
        slot,
        time: document.getElementById("modalMedTime").value.trim() || times[slot],
        instruction: document.getElementById("modalMedInstruction").value.trim() || "After Food",
        purpose: document.getElementById("modalMedPurpose").value.trim() || "Daily prescribed care",
        pillColor: slot === "Afternoon" ? "fuchsia" : slot === "Night" ? "violet" : "purple",
        stock: parseInt(document.getElementById("modalMedStock").value, 10) || 10,
        taken: false,
        takenAt: null,
        photo: modalPillPhotoBase64
      });
      document.getElementById("modalMedName").value = "";
      document.getElementById("modalMedPurpose").value = "";
      document.getElementById("addMedModal").classList.add("hidden");
      saveState();
    } else if (action === "read-all") {
      const pending = prof.medicines.filter(m => !m.taken);
      if (!pending.length) return;
      speakText(pending.map(m => (t.slots[m.slot] || m.slot) + ", " + trPhrase(m.dosage, lang) + ", " + trPhrase(m.instruction, lang) + " — " + m.name).join(". "));
    } else if (action === "voice-log") {
      const banner = document.getElementById("voiceFeedbackBanner");
      const status = document.getElementById("voiceFeedbackText");
      banner.classList.remove("hidden");
      status.textContent = t.listeningPrompt;
      startVoiceRecognition(() => {
        const next = prof.medicines.find(m => !m.taken);
        if (next) toggleTaken(next.id);
        banner.classList.add("hidden");
      }, status);
    } else if (action === "stop-voice") {
      if (activeRecognition) { try { activeRecognition.stop(); } catch (err) {} }
      document.getElementById("voiceFeedbackBanner").classList.add("hidden");
    } else if (action === "reset-day") {
      prof.medicines.forEach(m => { m.taken = false; m.takenAt = null; });
      saveState();
    } else if (action === "add-profile") {
      const name = prompt("Name & Age:");
      if (!name || !name.trim()) return;
      const id = "p_" + Date.now();
      appState.profiles.push({
        id,
        fullName: name.trim(),
        bloodGroup: "O+",
        contactName: "Family",
        contactPhone: "+91 98765 43210",
        conditions: "—",
        medicines: [],
        vitals: []
      });
      appState.activeProfileId = id;
      saveState();
    } else if (action === "open-sos") {
      openEmergencyModal();
    } else if (action === "close-sos") {
      document.getElementById("emergencyModal").classList.add("hidden");
    } else if (action === "toggle-sos-edit") {
      document.getElementById("sosEditForm").classList.toggle("hidden");
    } else if (action === "save-sos") {
      prof.bloodGroup = document.getElementById("editSosBlood").value.trim() || prof.bloodGroup;
      prof.contactPhone = document.getElementById("editSosPhone").value.trim() || prof.contactPhone;
      prof.conditions = document.getElementById("editSosConditions").value.trim() || prof.conditions;
      saveState();
      openEmergencyModal();
    } else if (action === "trigger-alarm") {
      triggerDemoAlarm();
    } else if (action === "repeat-alarm") {
      const m = prof.medicines.find(item => item.id === activeAlarmMedId);
      if (m) speakText(trPhrase(m.dosage, lang) + ", " + trPhrase(m.instruction, lang) + " — " + m.name);
    } else if (action === "listen-alarm") {
      const st = document.getElementById("alarmVoiceStatus");
      startVoiceRecognition(() => {
        const m = prof.medicines.find(item => item.id === activeAlarmMedId);
        if (m && !m.taken) toggleTaken(activeAlarmMedId);
        document.getElementById("alarmModal").classList.add("hidden");
      }, st);
    } else if (action === "confirm-alarm") {
      const m = prof.medicines.find(item => item.id === activeAlarmMedId);
      if (m && !m.taken) toggleTaken(activeAlarmMedId);
      document.getElementById("alarmModal").classList.add("hidden");
    } else if (action === "close-alarm") {
      if (window.speechSynthesis) window.speechSynthesis.cancel();
      document.getElementById("alarmModal").classList.add("hidden");
    } else if (action === "load-sample") {
      document.getElementById("rxTextInput").value = "1. Thyronorm 50mcg — 1-0-0 (Empty Stomach)\n2. Metformin 500mg — 1-0-1 (After Food)\n3. Shelcal 500mg — 0-1-0 (After Lunch)";
    } else if (action === "clear-rx-img") {
      uploadedImageBase64 = "";
      document.getElementById("rxImageInput").value = "";
      document.getElementById("imagePreviewWrap").classList.add("hidden");
    } else if (action === "scan-rx") {
      const text = document.getElementById("rxTextInput").value.trim();
      if (!text && !uploadedImageBase64) return;
      pendingExtractedMeds = parsePrescriptionLines(text || "Vitamin D3 60K - Morning");
      document.getElementById("scanResultBox").classList.remove("hidden");
      document.getElementById("doctorSummaryText").textContent = t.extractedTitle + ":";
      const list = document.getElementById("extractedList");
      list.textContent = "";
      pendingExtractedMeds.forEach(m => {
        const d = document.createElement("div");
        d.className = "p-3 rounded-xl bg-white border border-purple-100 text-xs font-bold text-slate-800";
        const span = document.createElement("span");
        span.className = "text-purple-700";
        span.textContent = (t.slots[m.slot] || m.slot) + " • " + trPhrase(m.dosage, lang) + " (" + trPhrase(m.instruction, lang) + ")";
        d.append(span, document.createTextNode(" — " + m.name));
        list.appendChild(d);
      });
    } else if (action === "apply-extracted") {
      pendingExtractedMeds.forEach((m, idx) => {
        prof.medicines.push({ ...m, id: "rx_" + Date.now() + "_" + idx, stock: 10, taken: false, takenAt: null, photo: "" });
      });
      document.getElementById("scanResultBox").classList.add("hidden");
      saveState();
      switchMode("senior");
    } else if (action === "safety-check") {
      document.getElementById("safetyResultBox").classList.remove("hidden");
      document.getElementById("safetyHeadline").textContent = t.safetySub;
      document.getElementById("safetyBadge").textContent = "♥ OK";
      const alertsWrap = document.getElementById("safetyAlertsList");
      alertsWrap.textContent = "";
      const alertDiv = document.createElement("div");
      alertDiv.className = "p-3 rounded-xl bg-white border border-purple-100 text-xs font-bold";
      alertDiv.textContent = trPhrase("Empty Stomach (30 mins before food)", lang);
      alertsWrap.appendChild(alertDiv);
      document.getElementById("elderlyTipText").textContent = "♥ " + t.footerText;
    } else if (action === "copy-refill") {
      const text = t.refillCardTitle + " (" + prof.fullName + "):\n" + buildRefillListText();
      if (navigator.clipboard) navigator.clipboard.writeText(text);
      alert(text);
    } else if (action === "add-manual") {
      const name = document.getElementById("manName").value.trim();
      if (!name) return;
      const slot = document.getElementById("manSlot").value;
      const times = { Morning: "08:30 AM", Afternoon: "01:30 PM", Night: "09:00 PM" };
      prof.medicines.push({
        id: "m_" + Date.now(),
        name,
        dosage: document.getElementById("manDosage").value.trim() || "1 Tablet",
        slot,
        time: times[slot],
        instruction: document.getElementById("manInstruction").value.trim() || "After Food",
        purpose: document.getElementById("manPurpose").value.trim() || "Daily care",
        pillColor: slot === "Afternoon" ? "fuchsia" : slot === "Night" ? "violet" : "purple",
        stock: parseInt(document.getElementById("manStock").value, 10) || 10,
        taken: false,
        takenAt: null,
        photo: ""
      });
      document.getElementById("manName").value = "";
      document.getElementById("manPurpose").value = "";
      saveState();
      switchMode("senior");
    } else if (action === "restore-defaults") {
      appState = JSON.parse(JSON.stringify(DEFAULT_STATE));
      saveState();
    } else if (action === "copy-report" || action === "export-doctor") {
      const report = buildStatusReport();
      if (navigator.clipboard) navigator.clipboard.writeText(report);
      if (action === "export-doctor") window.print();
      else alert(report);
    } else if (action === "share-whatsapp") {
      const report = buildStatusReport();
      if (navigator.clipboard) navigator.clipboard.writeText(report);
      window.open("https://wa.me/?text=" + encodeURIComponent(report), "_blank", "noopener,noreferrer");
    } else if (action === "log-vitals") {
      prof.vitals.unshift({
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        bp: document.getElementById("vitalBp").value.trim() || "122/80",
        sugar: (document.getElementById("vitalSugar").value.trim() || "110") + " mg/dL",
        moodKey: selectedMoodKey
      });
      document.getElementById("vitalBp").value = "";
      document.getElementById("vitalSugar").value = "";
      saveState();
    } else if (action === "sim-escalation") {
      const next = prof.medicines.find(m => !m.taken) || prof.medicines[0];
      const medName = next ? next.name : "Telma 40mg";
      alert("🚨 " + t.eco1Title + "\n\n" + prof.fullName + " — " + medName);
    }
  });

  document.getElementById("modalMedSlot").addEventListener("change", function () {
    const times = { Morning: "08:30 AM", Afternoon: "01:30 PM", Night: "09:00 PM" };
    document.getElementById("modalMedTime").value = times[this.value] || "08:30 AM";
  });

  document.getElementById("pillPhotoInput").addEventListener("change", function (e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      modalPillPhotoBase64 = ev.target.result;
      document.getElementById("pillPhotoLabel").textContent = "♥ " + file.name;
    };
    reader.readAsDataURL(file);
  });

  document.getElementById("rxImageInput").addEventListener("change", function (e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    uploadedImageBase64 = file.name;
    document.getElementById("imageNameText").textContent = file.name;
    document.getElementById("imagePreviewWrap").classList.remove("hidden");
  });

  renderAll();
})(typeof window !== "undefined" ? window : globalThis);

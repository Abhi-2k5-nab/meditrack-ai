# MediTrack AI — Smart Senior Medicine & Caregiver Assistant

> **Submission for PromptWars x Code1 Innovators**  
> **Problem Statement:** PS02 — MediTrack: Smart Medicine Reminder (Domain: Healthcare)  
> **Developer:** Abhinab Borah

---

## Overview

**MediTrack AI** is an accessible, zero-friction web application designed to help elderly individuals and their caregivers organize, track, and understand daily medication schedules. Instead of forcing seniors to navigate complex menus or type unfamiliar drug names, MediTrack pairs an oversized, voice-assisted **Senior View** with a **Caregiver & AI Scan** workspace powered by Google Gemini.

---

## Key Features

- **Multimodal AI Prescription & Strip Scanner:** Upload a photo of a handwritten prescription or medicine strip—or paste a doctor's shorthand note—and Gemini AI automatically extracts medicine names, dosages, meal timings, and plain-language purposes into a structured daily routine.
- **High-Contrast Senior View:** Large typography, color-coded time slots (**Morning**, **Afternoon**, **Night**), one-tap dose logging, and a visual daily adherence progress bar.
- **Spoken Voice Reminders (Web Speech API):** Built-in text-to-speech reads individual medicine instructions or the full remaining daily schedule aloud with a single tap.
- **Live Voice Alarm Simulator:** Instant full-screen medication alert modal with voice prompts and **I Took It** / **Snooze** controls.
- **AI Food-Timing & Safety Check:** Reviews the active medication list to flag empty-stomach spacing rules and practical senior care precautions.
- **Inventory Tracking & Family WhatsApp Summary:** Automatically decrements pill counts when doses are logged, alerts caregivers when stock drops to 3 pills or fewer, and generates a one-click formatted status update for family WhatsApp groups.

---

## Tech Stack & Architecture

- **Frontend:** HTML5, Tailwind CSS, Vanilla JavaScript, Web Speech API (`speechSynthesis`), `localStorage`
- **Serverless Backend:** Vercel Serverless Functions (`api/meditrack.js`)
- **AI Model:** Google Gemini API (`gemini-3.8-flash` with `gemini-3.5-flash-lite` fallback)
- **Hosting:** Vercel (Zero-localhost cloud deployment)

### Project Structure

```text
meditrack-ai/
├── index.html          # Dual-mode Senior & Caregiver UI + Voice Alarm Engine
├── api/
│   └── meditrack.js    # Serverless proxy for Gemini prescription parsing & safety checks
└── README.md           # Project documentation

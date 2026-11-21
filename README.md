# CarePulse ♥ — Senior Medicine & Family Care Companion

**Live Demo:** [https://meditrack-ai-tau.vercel.app](https://meditrack-ai-tau.vercel.app)  
**Built by:** Abhinab Borah  
**Event:** PromptWars x Code1 Innovation  

---

## Overview

**CarePulse ♥** is an accessible, offline-ready web application designed to help elderly family members manage daily medications independently while keeping caregivers informed. Built with high-contrast senior-friendly cards, natural female voice readouts, hands-free voice confirmation, and full regional language support across **English**, **हिन्दी (Hindi)**, and **অসমীয়া (Assamese)**, CarePulse bridges the gap between complex prescriptions and everyday elder care.

---

## Key Features

### 1. Multilingual Interface with English Medicine Names After Doses
* **Full UI Localization (`English` | `हिन्दी` | `অসমীয়া`):** Switching languages translates every menu, heading, button, meal instruction, and modal across all three views (**My Medicines**, **Caregiver & Rx**, and **Vitals & Vision**).
* **Dose-First, English-Medicine Format:** On every card, list, and alarm, the **dosage and meal timing** appear first in the user's selected language (e.g., `1 गोली — नाश्ते के बाद` or `১ টা টেবলেট — পুৱাৰ আহাৰৰ পিছত`), followed immediately by the **English medicine name** (`Telma 40mg`) so elders and pharmacists never misread drug names.
* **In-Menu Language Selectors:** Synchronized language switchers are accessible from the top navigation bar as well as inside every individual menu tab.

### 2. Senior-Friendly Medicine Routine (`My Medicines`)
* **One-Tap Dose Confirmation & Progress Tracking:** Large, clear cards organized by **Morning**, **Afternoon**, and **Night** with live daily progress tracking and low-stock refill alerts.
* **Natural Female Voice Readout & Hands-Free Logging:** Uses the Web Speech API (`SpeechSynthesis` & `SpeechRecognition`) so seniors can listen to dose instructions aloud or confirm doses hands-free by saying *"Taken"* or *"Dawai le li"*.
* **Custom Medicine & Pill Photo Upload:** Elders or family members can add new medications with an optional photo of the actual tablet or strip for visual verification.
* **Multi-Elder Household Profiles:** Switch between multiple family profiles (e.g., *Dada* and *Dadi*) or add new senior profiles with persistent local storage.

### 3. Caregiver & Prescription Tools (`Caregiver & Rx`)
* **Smart Prescription Reader:** Upload a prescription photo or paste doctor dosage shorthand (`1-0-1`, `BD`) to automatically extract and schedule Morning, Afternoon, and Night reminders.
* **Meal-Timing & Safety Check:** Validates empty-stomach rules and spacing intervals between medications.
* **One-Click Family WhatsApp Update:** Generates a formatted adherence summary ready to paste and share with family members.

### 4. Vitals Log, Emergency SOS Card & Escalation (`Vitals & Vision`)
* **No-Login Emergency SOS Card (`♥ SOS Card`):** Displays blood group, emergency contact with one-tap calling, medical conditions/allergies, and active medications.
* **Live Voice Alarm (`🔔 Live Alarm`):** Interactive reminder modal with voice readout, snooze, and hands-free confirmation.
* **Vitals & Symptom Check-In:** Tracks daily blood pressure, blood sugar, and post-dose well-being alongside a printable doctor summary and 30-minute missed-dose caregiver escalation preview.

---

## Tech Stack

* **Frontend:** HTML5, Tailwind CSS, Vanilla JavaScript (ES6+)
* **Voice & Accessibility:** Web Speech API (`SpeechSynthesis` & `SpeechRecognition`)
* **Storage:** Offline-First `localStorage` state persistence
* **Deployment:** Vercel

---

## Quick Judge Walkthrough

1. Open **[https://meditrack-ai-tau.vercel.app](https://meditrack-ai-tau.vercel.app)** — pre-loaded demo profiles and daily schedules appear immediately with no login required.
2. Switch between **English**, **हिन्दी**, and **অসমীয়া** in the top bar or inside any menu tab to see the entire UI translate while keeping medicine names in English after each dose.
3. Click **🔔 Live Alarm** to preview the voice-guided medicine reminder and hands-free confirmation.
4. Open **Caregiver & Rx** and click **Load Sample Doctor Note → ♥ Extract Senior Schedule** to test automated prescription parsing.
5. Click **♥ SOS Card** in the header to view the instant emergency medical ID.

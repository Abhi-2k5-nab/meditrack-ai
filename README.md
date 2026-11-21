# CarePulse ♥ — Senior Medicine & Family Care Companion

**Live Demo:** [https://meditrack-ai-tau.vercel.app](https://meditrack-ai-tau.vercel.app)  
**Built by:** Abhinab Borah  
**Event:** PromptWars x Code1 Innovation  

---

## Overview

**CarePulse ♥** is an accessible, offline-ready web application designed to help elderly family members manage daily medications independently while keeping caregivers informed. With full localization across **English**, **हिन्दी (Hindi)**, and **অসমীয়া (Assamese)**, natural female voice readouts, hands-free voice confirmation, large-text toggle, direct WhatsApp sharing, and low-stock refill tracking, CarePulse keeps daily elder care simple and reliable.

---

## Key Features

### 1. Multilingual Interface with English Medicine Names After Doses
* **Full UI Localization (`English` | `हिन्दी` | `অসমীয়া`):** Switching languages translates menus, buttons, meal instructions, and modals across all three views (**My Medicines**, **Caregiver & Rx**, and **Vitals & Vision**).
* **Dose-First, English-Medicine Format:** Every card, list, and alarm shows the **dosage and meal timing** first in the chosen language, followed immediately by the **English medicine name** (`Telma 40mg`) for clear recognition.
* **In-Menu Language Selectors:** Language switchers are available in the top bar as well as inside all three menu tabs.

### 2. Senior Accessibility & Voice Support (`My Medicines`)
* **Senior Font-Size Toggle (`A+ Text`):** One-tap larger-text scaling across the app for comfortable reading.
* **One-Tap Dose Confirmation & Progress Tracking:** Cards grouped by **Morning**, **Afternoon**, and **Night** with live daily progress tracking and low-stock indicators (`<= 3` pills left).
* **Natural Female Voice Readout & Hands-Free Logging:** Reads dose schedules aloud using Web Speech API (`SpeechSynthesis`) and supports hands-free voice confirmation (`SpeechRecognition`) by saying *"Taken"* or *"Dawai le li"*.
* **Custom Medicine, Pill Photo & Multi-Elder Profiles:** Add custom medications with optional tablet/strip photos and switch between family profiles (*Dada* and *Dadi*) saved locally in `localStorage`.

### 3. Caregiver, Prescription & Refill Tools (`Caregiver & Rx`)
* **Smart Prescription Reader:** Upload a prescription photo or paste dosage shorthand (`1-0-1`, `BD`) to generate scheduled reminders automatically.
* **Meal-Timing & Safety Check:** Highlights empty-stomach timing and spacing reminders.
* **Low-Stock Pharmacy Refill List:** Automatically lists medications with 3 or fewer pills remaining and copies a quick chemist refill list.
* **Direct WhatsApp Share & Status Copy:** Copies the adherence update or opens `wa.me` directly with the pre-filled summary.

### 4. Vitals Log, Emergency SOS Card & Escalation (`Vitals & Vision`)
* **No-Login Emergency SOS Card (`♥ SOS Card`):** Shows blood group, emergency contact with one-tap calling, allergies/conditions, and active doses.
* **Live Voice Alarm (`🔔 Live Alarm`):** Interactive dose reminder modal with voice readout, snooze, and hands-free confirmation.
* **Vitals & Symptom Log:** Records daily BP, blood sugar, and post-dose symptoms alongside a printable doctor summary and 30-minute missed-dose escalation preview.

---

## Tech Stack

* **Frontend:** HTML5, Tailwind CSS, Vanilla JavaScript (ES6+)
* **Voice & Accessibility:** Web Speech API (`SpeechSynthesis` & `SpeechRecognition`)
* **Storage:** Offline-First `localStorage` state persistence
* **Deployment:** Vercel

---

## Quick Judge Walkthrough

1. Open **[https://meditrack-ai-tau.vercel.app](https://meditrack-ai-tau.vercel.app)** to view pre-loaded elder profiles with zero login required.
2. Switch between **English**, **हिन्दी**, and **অসমীয়া** in the header or inside any menu tab, and click **A+ Text** to test large-font mode.
3. Click **🔔 Live Alarm** to preview voice reminders and hands-free confirmation.
4. Open **Caregiver & Rx** to test **Load Sample Doctor Note → ♥ Extract Senior Schedule**, view the **Low-Stock Pharmacy Refill List**, and use **💬 Send on WhatsApp**.
5. Click **♥ SOS Card** in the header to view the instant emergency medical ID.

# Frontend Development Standards: STEM Fair Website

## 🛠 Tech Stack & Architecture
* [cite_start]**Framework:** React 18 (SPA) [cite: 4]
* **Build Tool:** Vite with TypeScript
* **Routing:** React Router (Client-side only)
* **Animations:** Framer Motion (use for "Phase" transitions and page entries)
* **Styling:** Vanilla CSS (Modular or Global)
* **Deployment:** Static hosting (No backend/external state)

## 🎨 Design Principles (The Funnel)
* [cite_start]**Intuitive Navigation:** A first-time visitor must immediately know how to participate based on their interest[cite: 3].
* [cite_start]**User Paths:** Create distinct visual "lanes" for Students, Professors, and Industry/Sponsors[cite: 5, 23, 25, 42].
* [cite_start]**Visual Hierarchy:** Primary actions (Register/Proposal) must be high-contrast buttons[cite: 42, 93, 94].

## 📝 Styling Parameters (Vanilla CSS)
* **Consistency:** Use CSS Variables for colors and spacing to maintain a unified look.
* **Component Structure:** Each component should have a corresponding `.css` file (e.g., `Hero.tsx` and `Hero.css`).
* [cite_start]**Responsiveness:** Use Flexbox and CSS Grid to ensure the site looks "real good" on all devices[cite: 3].

## 📑 Content Constraints
* [cite_start]**Event Date:** April 17th[cite: 21, 40].
* **Call to Actions:**
    * [cite_start]**Interest Form:** Embed or link the form on the Register page[cite: 31, 55].
    * [cite_start]**Proposal Form:** Must be highlighted for project leads[cite: 13, 55].
    * [cite_start]**Discord:** Emphasize Discord for announcements and team formation[cite: 15, 28, 88].
* [cite_start]**Footer Requirement:** Every page must include the contact email `abaanmajid15@gmail.com` and a note about pinging an "admin role" on Discord[cite: 33, 34, 91].

## 🏗 Coding Rules for AI Agent
1. [cite_start]**No Backend:** Do not suggest `fetch` calls to APIs or database logic; use static data or Google Form links[cite: 24, 25].
2. [cite_start]**Phase Logic:** When building the "Event Flow" page, use a step-by-step UI to represent Phase 1, 2, and 3[cite: 10, 46].
3. [cite_start]**Placeholders:** For the "Mock Schedule" and "Timeline," use clean UI skeletons that are easy to populate later[cite: 35, 37].
# PRD: 01.4 Agendar Reunión (Booking)

**Scenario:** El Gerente de TI encuentra su "Bala de Plata"
**Date:** 2026-07-03
**Agent:** Mimir (WDS Builder)
**Status:** Ready for Build

## 1. Overview
This PRD outlines the technical implementation for the "Agendar Reunión" (Booking) page. This is the ultimate conversion point for the "Bala de Plata" scenario. The page is designed to be completely distraction-free, omitting global navigation to focus the user exclusively on the booking widget.

## 2. Technical Architecture

### 2.1. Routing (React Router v7)
- **Path:** `/contacto/agendar`
- **Element:** `<Booking />` (New Page Component)
- **File:** `client/src/App.jsx` needs to be updated with this route.

### 2.2. Page Component: `Booking.jsx`
- **Location:** `client/src/pages/Booking.jsx`
- **Role:** The main conversion page, isolated from the rest of the site's navigation.
- **Structure:**
  1. `<SimpleHeader />` (New Component)
  2. `main` container centered horizontally and vertically.
  3. `<BookingWidget />` (New Component)
  4. `<TestimonialSnippet />` (New Component)
  5. Simple Footer (minimalist copyright, no heavy links).
- **Styling:** Continuous `#0f172a` (Dark Slate) background. Extremely minimal.

### 2.3. Structural Component: `SimpleHeader.jsx`
- **Location:** `client/src/components/SimpleHeader.jsx`
- **Role:** Replaces `GlobalHeader.jsx` for conversion pages to remove "escape hatches".
- **Styling:** `flex justify-center py-8`.
- **Content:** Reuses the existing `<Logo />` component wrapped in a Link to `/`, but no other navigation items.

### 2.4. Interactive Component: `BookingWidget.jsx`
- **Location:** `client/src/components/BookingWidget.jsx`
- **Role:** Holds the scheduling UI (eventually an iframe to Cal.com or Calendly).
- **Implementation (MVP):** For this build, it will render a beautiful placeholder UI mimicking a scheduling tool, utilizing `max-w-2xl mx-auto bg-slate-900 rounded-xl border border-slate-800 p-6 md:p-10 shadow-2xl`. It will have an H1 "Hablemos de tu desafío técnico".

### 2.5. Social Proof Component: `TestimonialSnippet.jsx`
- **Location:** `client/src/components/TestimonialSnippet.jsx`
- **Role:** A subtle trust anchor placed directly beneath the booking widget to overcome last-minute hesitation.
- **Styling:** Centered, italic text, `text-slate-400`. e.g. *"Con algor por fin pudimos estabilizar nuestro backend. - Director de TI, Empresa Logística"*

## 3. Acceptance Criteria
- [ ] Route `/contacto/agendar` correctly loads the `Booking.jsx` page.
- [ ] The global navigation menu does NOT appear on this page (only the logo).
- [ ] The `BookingWidget` renders centrally on the screen with a premium glassmorphism/dark UI feel.
- [ ] The `TestimonialSnippet` renders cleanly below the widget.
- [ ] The page contains no dead links or horizontal scrolling issues.

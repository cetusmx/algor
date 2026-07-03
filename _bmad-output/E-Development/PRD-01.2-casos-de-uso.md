# PRD: 01.2 Casos de Uso / Portafolio

**Scenario:** El Gerente de TI encuentra su "Bala de Plata"
**Date:** 2026-07-03
**Agent:** Mimir (WDS Builder)
**Status:** Ready for Build

## 1. Overview
This PRD outlines the technical implementation for the "Casos de Uso" (Portfolio) page. The page acts as a curated index of technical case studies, targeted at IT Managers searching for specific operational problem-solving evidence.

## 2. Technical Architecture

### 2.1. Routing (React Router v7)
- **Path:** `/casos-de-uso`
- **Element:** `<Cases />` (New Page Component)
- **File:** `client/src/App.jsx` needs to be updated to include this new route.

### 2.2. Page Component: `Cases.jsx`
- **Location:** `client/src/pages/Cases.jsx`
- **Role:** Main container for the portfolio page.
- **Structure:**
  1. `<GlobalHeader />` (Existing)
  2. Page Header (H1: "Portafolio de Problemas Resueltos", `max-w-3xl mx-auto py-16 md:py-24 text-center`)
  3. Curated Case Studies List (`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-6`)
  4. `<GlobalFooter />` (Existing)

### 2.3. Shared Component: `CaseStudyCard.jsx`
- **Location:** `client/src/components/CaseStudyCard.jsx`
- **Role:** Reusable card component to display individual case studies.
- **Props:**
  - `tag` (string): e.g., "Integración Legacy"
  - `title` (string): e.g., "Extracción en tiempo real de Aspel..."
  - `excerpt` (string): Brief summary of the case study.
  - `slug` (string): URL slug for navigation (e.g., `integracion-aspel-legacy`).
- **Styling Specs:**
  - **Container:** Glassmorphism (`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8`).
  - **Hover Effects:** `group hover:-translate-y-1 hover:border-orange-500/50 transition-all duration-300 cursor-pointer`.
  - **Tag:** `text-orange-400 bg-orange-400/10 px-3 py-1 rounded-full text-xs font-mono inline-block`.
  - **Title:** `text-xl font-bold text-white mt-4`.
  - **Excerpt:** `text-slate-300 mt-3 line-clamp-3`.
  - **Action Link:** `text-orange-500 font-medium mt-6 block group-hover:translate-x-2 transition-transform`.

### 2.4. Mock Data Layer
- Inside `Cases.jsx`, we will initialize a static array of case studies to map over and render `CaseStudyCard` components.
- **Sample Data:**
  - Case 1: Integración Legacy (Aspel)
  - Case 2: Optimización de Nube AWS
  - Case 3: Migración de Base de Datos sin Downtime

## 3. Acceptance Criteria
- [ ] Route `/casos-de-uso` successfully loads the `Cases.jsx` page.
- [ ] Global Navigation and Footer are present and unbroken.
- [ ] At least 3 `CaseStudyCard` components render in a CSS Grid.
- [ ] Grid collapses to 1 column on mobile and 2 columns on desktop (`md:grid-cols-2`).
- [ ] Hover effects on cards work smoothly without layout shifts.
- [ ] Clicking a card uses React Router `<Link>` to navigate to `/casos-de-uso/:slug` (even if the detail page isn't built yet).

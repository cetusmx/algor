# PRD: 01.3 Detalle de Caso de Estudio

**Scenario:** El Gerente de TI encuentra su "Bala de Plata"
**Date:** 2026-07-03
**Agent:** Mimir (WDS Builder)
**Status:** Ready for Build

## 1. Overview
This PRD defines the technical implementation for the "Case Study Detail" page. This page provides deep technical validation, explaining the challenge, the architectural solution, and the metrics of success, aimed at convincing skeptical IT Managers.

## 2. Technical Architecture

### 2.1. Routing (React Router v7)
- **Path:** `/casos-de-uso/:slug`
- **Element:** `<CaseDetail />` (New Page Component)
- **File:** `client/src/App.jsx` needs to be updated with this dynamic route.

### 2.2. Page Component: `CaseDetail.jsx`
- **Location:** `client/src/pages/CaseDetail.jsx`
- **Role:** Displays the full technical case study based on the URL parameter (`slug`).
- **Structure:**
  1. `<GlobalHeader />`
  2. **Breadcrumbs & Header:** "Casos de Uso / [Title]" with an H1 title and tech stack metadata in a flex container.
  3. **The Challenge:** Text block highlighting the operational pain points.
  4. **The Architecture:** Renders `<ArchitectureDiagram />` and a text explanation.
  5. **Results & Metrics:** A grid rendering 3 `<MetricCard />` components.
  6. **Conversion CTA:** "Agendar Consulta Técnica" button pointing to `/contacto/agendar`.
  7. `<GlobalFooter />`
- **Styling:** Brutalist-lite tech aesthetic. Dark Slate (`bg-[#0f172a]`), highly legible text (`text-slate-300`), white headers.

### 2.3. Shared Component: `ArchitectureDiagram.jsx`
- **Location:** `client/src/components/ArchitectureDiagram.jsx`
- **Role:** A visual component representing a system architecture diagram.
- **Implementation:** For the MVP, this will be a CSS/HTML based wireframe diagram (boxes representing DB, API, Client connected by dashed lines) using flex/grid layouts and absolute positioning, styled with `border-white/20` and `text-orange-400` data flow arrows to mimic a C4 model or AWS topology.

### 2.4. Shared Component: `MetricCard.jsx`
- **Location:** `client/src/components/MetricCard.jsx`
- **Role:** Displays a single high-impact metric.
- **Props:**
  - `value` (string): e.g., "0", "< 5s", "99.9%"
  - `label` (string): e.g., "Incidentes en producción", "Tiempo de sincronización"
- **Styling:**
  - **Container:** Minimalist, subtle border (`border border-slate-800 rounded-lg p-6 bg-slate-900/50`).
  - **Value:** `text-5xl text-orange-400 font-mono font-bold tracking-tighter`.
  - **Label:** `text-sm text-slate-400 mt-2 uppercase tracking-wide font-semibold`.

### 2.5. Mock Data Layer
- A static dictionary or lookup function inside `CaseDetail.jsx` to fetch case data based on the `slug` parameter matching the 3 cases defined in `Cases.jsx`.

## 3. Acceptance Criteria
- [ ] Route `/casos-de-uso/:slug` correctly loads the `CaseDetail.jsx` page.
- [ ] If the `slug` is not found, the page displays a generic "Caso no encontrado" state.
- [ ] The `ArchitectureDiagram` component renders a clean, tech-focused visual without relying on external image assets.
- [ ] The `MetricCard` grid uses `grid-cols-1 md:grid-cols-3` and looks solid on mobile.
- [ ] The page features a strong CTA button at the bottom directing users to the scheduling flow (`/contacto/agendar`).

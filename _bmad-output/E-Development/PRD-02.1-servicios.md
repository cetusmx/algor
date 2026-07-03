# PRD: 02.1 Servicios

**Scenario:** Propietario / Validación Partner
**Date:** 2026-07-03
**Agent:** Mimir (WDS Builder)
**Status:** Ready for Build

## 1. Overview
This PRD defines the technical requirements for the "Servicios" page. The goal is to present Algor as an end-to-end technological partner that covers both infrastructure and software. The page relies on a clean grid of "service pillars" to communicate breadth without overwhelming the user.

## 2. Technical Architecture

### 2.1. Routing (React Router v7)
- **Path:** `/servicios`
- **Element:** `<Services />` (New Page Component)
- **File:** `client/src/App.jsx` needs to be updated with this route.

### 2.2. Page Component: `Services.jsx`
- **Location:** `client/src/pages/Services.jsx`
- **Role:** Main container for the services overview.
- **Structure:**
  1. `<GlobalHeader />`
  2. Services Hero (H1: "Infraestructura, Software y Soporte como un solo ecosistema.")
  3. Pillars Grid Container (`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`)
  4. `<GlobalFooter />`
- **Styling:** Consistent dark slate `#0f172a`.

### 2.3. Shared Component: `ServicePillarCard.jsx`
- **Location:** `client/src/components/ServicePillarCard.jsx`
- **Role:** Displays an individual service category.
- **Props:**
  - `icon` (string/component): Lucide React icon name.
  - `title` (string): e.g., "Software a la medida"
  - `description` (string): Brief summary of the service.
- **Styling:**
  - **Container:** `bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:bg-slate-800 transition-colors group cursor-default`.
  - **Icon:** `text-slate-400 group-hover:text-orange-500 transition-colors w-10 h-10 mb-6`.
  - **Title:** `text-xl font-bold text-white mb-3`.
  - **Description:** `text-slate-400 leading-relaxed`.

### 2.4. Mock Data Layer
- **Pillar 1:** Software a la medida (Desarrollo web, móvil y arquitecturas cloud).
- **Pillar 2:** Hardware y Redes (Cableado estructurado, servidores físicos, switches).
- **Pillar 3:** Soporte y Mantenimiento (Igualas mensuales, mesa de ayuda, resolución de incidentes).
- **Pillar 4:** Consultoría C-Level (Auditorías, estrategia tecnológica, CTO as a Service).

## 3. Acceptance Criteria
- [ ] Route `/servicios` correctly loads the `Services.jsx` page.
- [ ] The GlobalHeader and GlobalFooter are present.
- [ ] The `ServicePillarCard` renders a grid that is 1 column on mobile, 2 on tablet, and 4 on desktop (`lg:grid-cols-4`).
- [ ] Hover effects on icons (turning orange) work as specified in the Phase 4 design notes.
- [ ] Uses `lucide-react` for the vector icons.

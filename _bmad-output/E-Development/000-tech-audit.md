# Tech Audit

**Date:** 2026-07-03
**Agent:** Mimir (WDS Builder)

## 1. Project Structure
- **Monorepo Style:** Two distinct folders: `client/` (Frontend) and `server/` (Backend).
- **Client (Frontend):** React 19 + Vite + TailwindCSS 4.
  - Component directory: `client/src/components/` (Contains generic and structural components like `Button.jsx`, `GlobalHeader.jsx`, `GlobalFooter.jsx`, `HeroSection.jsx`, `PainPointsGrid.jsx`).
  - Pages directory: `client/src/pages/` (Contains route-level components like `Home.jsx`).
  - Routing: React Router v7 (`react-router-dom`).
- **Server (Backend):** Node.js + Express 5.
  - Dependencies: `express`, `sqlite3`, `cors`, `dotenv`.
  - Serves static files from `client/dist` and handles wildcard routing (`app.use()`).
  - Database: SQLite (currently persists data in `/app/data/algor.sqlite` when running via Docker).

## 2. Infrastructure & CI/CD
- **Containerization:** Docker (`Dockerfile` in root), built on Alpine Linux.
- **CI/CD:** GitHub Actions `.github/workflows/deploy.yml` which deploys via GHCR to a VPS.
- **Port/Networking:** Exposed on port 3030, behind an NGINX reverse proxy on the host server (handling HTTPS via Certbot).

## 3. Styling Conventions
- **Framework:** TailwindCSS (v4).
- **CSS Strategy:** `client/src/index.css` handles base styles, but utility classes are heavily favored in JSX.
- **Component Styling:** Glassmorphism, dark themes (`bg-slate-900`, `#0f172a`), orange accent colors (industrial theme).

## 4. Current State
- `01.1-inicio-home` is fully implemented (`Home.jsx` assembling components).
- Database is instantiated but not yet utilized by complex endpoints.

## 5. Development Strategy for Upcoming Scenarios
- **01.2-casos-de-uso:** Needs a new page component `Cases.jsx`, a `CaseStudyCard.jsx` component, and a new route in `App.jsx`.
- **01.3-detalle-caso-estudio:** Needs `CaseDetail.jsx`, `ArchitectureDiagram.jsx`, `MetricCard.jsx`, and dynamic routing (e.g. `/casos-de-uso/:slug`).
- **01.4-agendar-reunion:** Needs `Booking.jsx` with a simplified header, `BookingWidget.jsx` and `TestimonialSnippet.jsx`.
- **02.1-servicios:** Needs `Services.jsx`, `ServicePillarCard.jsx`, and routing.

All new components must adhere strictly to the Tailwind utility patterns and React 19 functional component standards already established.

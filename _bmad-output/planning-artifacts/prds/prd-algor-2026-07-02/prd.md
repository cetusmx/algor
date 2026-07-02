---
title: "PRD: algor (Sitio Web B2B)"
status: final
created: "2026-07-02"
updated: "2026-07-02"
---

# PRD: algor (Captación B2B Técnica)

## 0. Document Purpose
Este PRD documenta los requerimientos de ingeniería para el nuevo sitio web de captación B2B de **algor**. Está dirigido al equipo de desarrollo y arquitectura (Mimir). Se apoya directamente en los entregables de diseño y UX previamente definidos en la Fase WDS (Product Brief, Trigger Map y UX Scenarios). Las asunciones técnicas están etiquetadas con `[ASSUMPTION]`.

## 1. Vision
**algor** necesita una plataforma digital orientada a captar leads de altísimo valor: Gerentes de TI y Propietarios de empresas que enfrentan problemas complejos de infraestructura (ej. sistemas legacy cerrados como Aspel). El producto no es un "sitio web folleto", sino una herramienta de validación técnica que proyecta un posicionamiento "David contra Goliat" y facilita el agendamiento de reuniones estratégicas sin fricción.

## 2. Target User

### 2.1 Jobs To Be Done
- **Gerente de TI (Buscador de la Bala de Plata):** Validar si algor tiene la capacidad técnica dura para modernizar su infraestructura sin romper su operación (cero downtime).
- **Propietario (Buscador de Crecimiento):** Validar la madurez, seguridad y casos de éxito de negocio para confiar en algor como partner estratégico.

### 2.2 Non-Users (v1)
- Estudiantes buscando recursos técnicos.
- Startups buscando desarrollo de apps móviles de consumo.

### 2.3 Key User Journeys
*Basados en los escenarios UX diseñados.*

- **UJ-1. El Gerente de TI encuentra su "Bala de Plata".**
  - **Persona + context:** Un Gerente de TI bajo presión, buscando resolver un cuello de botella con un ERP legacy.
  - **Entry state:** Llega al Home desde búsqueda orgánica buscando "Integración Aspel".
  - **Path:** Revisa la propuesta de valor en el Home (01.1), navega a la Lista Curada de Casos de Estudio (01.2), entra al detalle técnico de un caso idéntico al suyo donde analiza la arquitectura C4 (01.3).
  - **Climax:** Convencido del expertise, hace clic en agendar.
  - **Resolution:** Agenda una cita mediante un componente nativo (01.4) de divulgación progresiva, dando solo su correo corporativo.

- **UJ-2. El Propietario valida al partner.**
  - **Persona + context:** Un dueño de negocio buscando un equipo de desarrollo maduro para delegar la tecnología.
  - **Path:** Escanea el "Trust Anchor" en el Home, revisa metodologías y garantías de negocio, finaliza solicitando contacto directivo.

## 3. Glossary
- **Lead Técnico:** Un usuario que completó el agendamiento demostrando interés en infraestructura compleja.
- **Caso de Estudio Curado:** Estructura de contenido que expone un problema, la solución técnica y métricas duras (sin sobre-optimización visual).
- **Divulgación Progresiva:** Patrón de UI/UX en el formulario de contacto donde solo se pide el mínimo indispensable (email corporativo) en el primer paso.

## 4. Features

### 4.1 Exhibición de Casos de Estudio (Portafolio Técnico)
**Description:** Un sistema visual para desplegar problemas técnicos complejos resueltos por algor. Realiza UJ-1 y UJ-2.

**Functional Requirements:**
#### FR-1: Lista Curada de Proyectos
El usuario puede visualizar una lista vertical asimétrica de casos de éxito sin necesidad de filtros complejos.
**Consequences:**
- El listado carga todos los proyectos de forma inmediata y asíncrona.

#### FR-2: Renderizado de Arquitectura (C4 / Diagramas)
El sistema renderiza imágenes de arquitectura o diagramas nativos en las páginas de detalle del caso.
**Consequences:**
- Soporte para SVG escalable y optimizado para diagramas técnicos.

### 4.2 Agendamiento sin Fricción (Booking)
**Description:** Mecanismo de conversión principal para capturar leads técnicos de forma autónoma. Realiza UJ-1.

**Functional Requirements:**
#### FR-3: Componente de Agendamiento Nativo
El usuario interactúa con un calendario integrado directamente en el DOM (respetando el CSS local, sin iframes que causen doble scroll).
**Consequences:**
- Integración vía API (ej. Cal.com API) o similar.

#### FR-4: Captura de Lead (Progressive Disclosure)
Tras seleccionar hora, el sistema captura únicamente el correo corporativo.
**Consequences:**
- Validación de email en tiempo real.
- Notificación al webhook de ventas o CRM de algor.

## 5. Non-Goals (Explicit)
- NO se soportará un sistema de e-commerce o venta directa.
- NO se construirá un panel de administración monolítico en esta v1 `[ASSUMPTION: Si se requiere CMS de contenido, se usará Headless]`.
- NO se usará un iFrame de Calendly crudo; la lógica de agendamiento será propia.

## 6. MVP Scope
### 6.1 In Scope
- Frontend en **React.js**.
- Backend propio para gestión de reuniones y notificaciones.
- Base de Datos relacional o documental para almacenar leads y agendamientos.
- Servicio de envío de correos (notificaciones de agendamiento).
- **Entorno contenerizado con **Docker** (Arquitectura monolítica de un solo contenedor para garantizar 100% portabilidad).
- Pipeline de **CI/CD** para despliegues automatizados y pruebas tempranas.
- Flujo completo de 4 páginas del escenario 01.

### 6.2 Out of Scope for MVP
- Múltiples idiomas (i18n).
- Autenticación o áreas privadas de clientes.

## 7. Cross-Cutting NFRs (Non-Functional Requirements)
- **Tecnología Frontend:** SPA o SSR basado en React.js `[ASSUMPTION: Mimir definirá el framework exacto en arquitectura]`.
- **Tecnología Backend & BD:** API propia y base de datos (stack a definir por arquitectura, priorizando lineamientos principales).
- **Notificaciones:** Integración con proveedor SMTP / Email API para notificaciones transaccionales.
- **Infraestructura:** El proyecto debe ser completamente Dockerizado en un solo contenedor (Single-container deployment) para máxima portabilidad.
- **CI/CD:** Github Actions (o equivalente) para construir imágenes Docker, correr linters y tests en cada push.

## 8. Success Metrics
- **Primary:**
  - **SM-1:** Tasa de Conversión a Reunión (Visitantes a Caso de Estudio -> Agendados exitosamente). Validates FR-3.
- **Secondary:**
  - **SM-2:** Tiempo de Carga Inicial (Core Web Vitals). Crítico para convencer a perfiles técnicos.

## 9. Open Questions
1. ¿Los casos de estudio se escribirán como archivos Markdown locales o los unificaremos en la nueva base de datos?
2. ¿Qué proveedor de correos transaccionales usaremos (SendGrid, Resend, AWS SES)?

## 10. Assumptions Index
- Inline assumption from §5 — Si se requiere CMS de contenido, se usará Headless.
- Inline assumption from §7 — Mimir definirá el framework React exacto (Next.js vs Vite).

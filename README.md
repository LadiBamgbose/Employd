<div align="center">

# Employd

### AI-powered resume builder designed to turn simple intake inputs into professionally structured resumes.



</div>
<div align="center" style="margin-top: 20px; margin-bottom: 20px;">
  <video
    src="https://github.com/user-attachments/assets/32f622bb-b5c8-4855-9f81-6256dfb4ce45"
    width="380"
    controls
  ></video>
</div>

---

## 🌐 Live Application

<div align="center">
  <a href="https://employd.app" target="_blank">
    <strong>👉 Launch Employd</strong>
  </a>
</div>

---

## 🚀 Overview

Employd is a full-stack resume-building platform designed to streamline resume creation through structured data intake and template-driven rendering.

The system is architected to support:

- Typed resume schema validation
- AI-assisted resume generation workflows
- Template-based rendering (server + client)
- Status-driven generation pipelines
- Scalable backend infrastructure

While AI generation is not yet wired, the platform is built with a production-ready architecture to support asynchronous resume generation and iterative refinement.

---

## 🎯 What This Project Demonstrates

- **Product Engineering Discipline**  
  Designed as a real deployable application (Next.js + FastAPI + PostgreSQL).

- **Schema-Driven Resume Architecture**  
  Strongly typed resume model covering experience, education, projects, skills, certifications, awards, and volunteering.

- **Pipeline-Oriented Backend Design**  
  Resume status lifecycle:  
  `draft → needs_info → generating → generated → error`

- **Template Rendering System**  
  Structured HTML/CSS resume templates with separation between preview (frontend) and rendering logic (backend).

- **Modern UI Engineering**  
  WebGL shader background, scroll-based animations, interactive template previews, and motion-based transitions.

---

## 🧠 Core Product Flow (Planned + Structured)

1. User completes intake form (name, email, LinkedIn, resume data)
2. Resume record created in database
3. AI generation pipeline processes structured data
4. Resume rendered using selected template
5. User downloads or iterates via Q/A loop

---

## 🏗 Architecture

### Frontend
- Next.js (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- WebGL (OGL + Three.js)
- Component-driven UI architecture

### Backend
- FastAPI
- SQLAlchemy ORM
- Pydantic validation
- Uvicorn ASGI server

### Database
- PostgreSQL
- JSON columns for flexible resume storage
- Indexed status and email fields

### Deployment
- Netlify (frontend)
- FastAPI service ready for containerized deployment

---

## 🧩 Engineering Highlights

- JSON-based flexible resume storage for schema evolution
- Status-tracked resume generation workflow
- Typed resume data model (end-to-end TypeScript)
- Separation of intake, conversation, and generated data
- WebGL shader-based animated hero background
- Modular template directory structure

---

## 🗂 Database Model

### Resume

- id (Primary Key)
- full_name
- email
- template_id
- status
- intake (JSON)
- conversation (JSON)
- data (JSON)
- error_message
- created_at
- updated_at

Designed to support asynchronous AI generation and iterative refinement.

---

## 🌐 Live Application

<div align="center">
  <a href="https://employd.app" target="_blank">
    <strong>👉 Launch Employd (employd.app)</strong>
  </a>
</div>

---

## ⚙️ Local Development

### Backend

```bash
cd apps/api
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
export DATABASE_URL="postgresql://user:password@localhost:5432/employd"
uvicorn app.main:app --reload
```

### Frontend

```bash
cd apps/web
npm install
npm run dev
```

 # 🚀 ResumeForge AI

AI-powered SaaS platform for resume analysis, ATS scoring, and intelligent career insights using semantic AI, vector search, and subscription-based access.

---

# 🧠 Overview

ResumeForge AI is an AI-driven resume intelligence system that helps users:

* Analyze resumes using AI embeddings
* Match resumes with job descriptions using semantic similarity
* Generate ATS-style resume scores
* Extract skills and keywords automatically
* Provide structured resume improvement feedback
* Support SaaS-based subscription plans

---

# ⚙️ System Architecture

Frontend (React + Vite)
        ↓
Backend (Express API)
        ↓
AI Layer (OpenAI Embeddings)
        ↓
Vector DB (Supabase pgvector)
        ↓
Billing (Stripe Subscriptions)

---

# ✨ Features

## 🧠 AI Intelligence

* OpenAI embedding-based scoring
* Semantic Resume ↔ Job Description matching
* Skill extraction engine
* Keyword density analysis

---

## 📊 Resume Analytics

* ATS score breakdown
* Role matching score
* Resume improvement suggestions
* Future-ready comparison engine support

---

## 💰 SaaS System

* Free / Pro / Enterprise plans
* Feature-based access control
* Usage limits per subscription plan
* Stripe subscription integration

---

## 🔎 Vector Search

* Resume similarity search
* AI-powered ranking system
* Scalable pgvector storage

---

# 🛠 Tech Stack

## Frontend

* React
* TypeScript
* Vite
* Tailwind CSS
* React Router

## Backend

* Node.js
* Express.js
* Supabase (PostgreSQL + pgvector)
* Stripe API

## AI Layer

* OpenAI Embeddings API
* Cosine similarity scoring

---

# 🧠 Core AI Flow

Resume Upload
      ↓
Text Extraction
      ↓
Embedding Generation (OpenAI)
      ↓
Vector DB Storage (Supabase)
      ↓
Semantic Matching with Job Description
      ↓
ATS Score + Role Match Output
---

# 💰 SaaS Flow

User selects plan
      ↓
Stripe checkout session
      ↓
Payment successful
      ↓
Stripe webhook triggers backend
      ↓
User plan upgraded
(FREE → PRO / ENTERPRISE)

---

# 📁 Project Structure

app/
 ├── components/
 ├── routes/
 ├── lib/
 ├── ai/
 ├── billing/
 └── keywordExtractor.ts

server/
 ├── api/
 │    ├── ai.ts
 │    ├── auth.ts
 │    ├── stripe.ts
 │    ├── stripeWebhook.ts
 │    └── vector.ts

lib/
 ├── openai.ts
 ├── supabase.ts
 └── stripe.ts

db/
 └── schema.sql
---

# 🧪 Key APIs

| Endpoint                    | Description            |
| --------------------------- | ---------------------- |
| POST /api/analyze         | AI resume scoring      |
| POST /api/auth/login     | Authentication         |
| POST /api/stripe/checkout | Subscription payment   |
| POST /api/stripe/webhook | Payment confirmation   |
| POST /api/vector/search | Semantic vector search |

---

# 🗄 Database Schema (Supabase)

## users

id
email
plan


## resumes
id
user_id
content
ats_score
role_match


## resume_vectors

sql
id
resume_id
embedding (vector)
---

# 🔐 Subscription Plans

| Plan       | Features                        |
| ---------- | ------------------------------- |
| FREE       | Basic ATS scoring               |
| PRO        | AI scoring + keyword extraction |
| ENTERPRISE | Full analytics + vector search  |

---

# 📸 Screenshots

## Dashboard

<img width="100%" alt="Dashboard" src="./screenshots/dashboard.png" />

## Resume Analysis

<img width="100%" alt="Resume Analysis" src="./screenshots/analysis.png" />

## ATS Score System

<img width="100%" alt="ATS Score" src="./screenshots/ats-score.png" />

---

# 🚀 Future Improvements

* Recruiter dashboard
* Candidate ranking system
* Multi-resume comparison engine
* AI hiring probability score
* Resume benchmarking vs industry datasets
* PDF export reports
* Team collaboration system

---

# ▶️ Run Frontend

npm run dev

# ▶️ Run Backend

cd server
npm install
npm run dev


# 🔑 Environment Variables

env
OPENAI_API_KEY=
SUPABASE_URL=
SUPABASE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
---

# 👨‍💻 Author
Built by Tanishka


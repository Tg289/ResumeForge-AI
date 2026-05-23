<div align="center">

# 🚀 ResumeForge AI

AI-powered SaaS platform for resume analysis, ATS scoring, and intelligent career insights using semantic AI, vector search, and subscription-based access.

</div>

---

## 🧠 Overview

ResumeForge AI is an AI-driven resume intelligence system that helps users:

- Analyze resumes using AI embeddings
- Match resumes with job descriptions (semantic similarity)
- Generate ATS-style scoring
- Extract skills and keywords automatically
- Provide structured improvement feedback
- Support SaaS-based subscription plans

---

## ⚙️ System Architecture

rontend (React + Vite)
↓
Backend (Express API)
↓
AI Layer (OpenAI Embeddings)
↓
Vector DB (Supabase pgvector)
↓
Billing (Stripe Subscriptions)

---
## ✨ Features

### 🧠 AI Intelligence
- OpenAI embedding-based scoring
- Semantic resume ↔ job description matching
- Skill extraction engine
- Keyword density analysis

### 📊 Resume Analytics
- ATS Score breakdown
- Role matching score
- Improvement suggestions
- Resume comparison (future-ready)

### 💰 SaaS System
- Free / Pro / Enterprise plans
- Feature-based access control
- Usage limits per plan
- Stripe subscription integration

### 🔎 Vector Search
- Resume similarity search
- AI-powered ranking system
- Scalable pgvector storage

---

## 🛠 Tech Stack

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS
- React Router

### Backend
- Node.js
- Express.js
- Supabase (PostgreSQL + pgvector)
- Stripe API

### AI Layer
- OpenAI Embeddings API
- Cosine similarity scoring

---

## 🧠 Core AI Flow
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

## 💰 SaaS Flow
User selects plan
↓
Stripe checkout session
↓
Payment successful
↓
Stripe webhook triggers backend
↓
User plan upgraded (FREE → PRO / ENTERPRISE)


---

## 📁 Project Structure
app/
components/
routes/
lib/
ai/
billing/
keywordExtractor.ts

server/
api/
ai.ts
auth.ts
stripe.ts
stripeWebhook.ts
vector.ts

lib/
openai.ts
supabase.ts
stripe.ts

db/
schema.sql


---

## 🧪 Key APIs

- POST /api/analyze → AI resume scoring
- POST /api/auth/login → authentication
- POST /api/stripe/checkout → subscription payment
- POST /api/stripe/webhook → payment confirmation
- POST /api/vector/search → semantic search

---

## 🗄 Database Schema (Supabase)

sql
users
- id
- email
- plan

resumes
- id
- user_id
- content
- ats_score
- role_match

resume_vectors
- id
- resume_id
- embedding (vector)


🔐 Subscription Plans
| Plan       | Features                        |
| ---------- | ------------------------------- |
| FREE       | Basic ATS scoring               |
| PRO        | AI scoring + keyword extraction |
| ENTERPRISE | Full analytics + vector search  |

🚀 Future Improvements
Recruiter dashboard (candidate ranking system)
Multi-resume comparison engine
AI hiring probability score
Resume benchmarking vs industry dataset
PDF export reports
Team collaboration system

📦 Installation
git clone https://github.com/your-repo/resumeforge-ai.git
cd resumeforge-ai
npm install

run Frontend
npm run dev

run Backend
cd server
npm install
npm run dev

🔑 Environment Variables
OPENAI_API_KEY=
SUPABASE_URL=
SUPABASE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

👨‍💻 Author
Built by Tanu

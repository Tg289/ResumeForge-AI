import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

// API ROUTES
import { analyzeResume } from "./api/ai";
import { login } from "./api/auth";
import { createCheckout } from "./api/stripe";
import { stripeWebhook } from "./api/stripeWebhook";
import { searchSimilar } from "./api/vector";

const app = express();

/**
 * ⚠️ IMPORTANT:
 * Stripe webhook MUST use raw body parser
 */
app.post(
  "/api/stripe/webhook",
  express.raw({ type: "application/json" }),
  stripeWebhook
);

// General middleware (AFTER webhook)
app.use(cors());
app.use(express.json());

/**
 * AUTH
 */
app.post("/api/auth/login", login);

/**
 * AI RESUME ANALYSIS
 */
app.post("/api/analyze", analyzeResume);

/**
 * STRIPE CHECKOUT (SUBSCRIPTION)
 */
app.post("/api/stripe/checkout", createCheckout);

/**
 * VECTOR SEARCH (SEMANTIC MATCHING)
 */
app.post("/api/vector/search", searchSimilar);

/**
 * HEALTH CHECK
 */
app.get("/", (_, res) => {
  res.json({
    status: "ok",
    service: "ResumeForge AI Backend",
  });
});

/**
 * START SERVER
 */
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});
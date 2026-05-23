import { getEmbedding } from "../lib/openai";
import { supabase } from "../lib/supabase";

export async function analyzeResume(req, res) {
  const { resumeText, jobDescription, resumeId } = req.body;

  // EMBEDDINGS
  const resumeEmb = await getEmbedding(resumeText);
  const jdEmb = await getEmbedding(jobDescription);

  // SIMPLE SIMILARITY
  const dot = resumeEmb.reduce((a: number, v: number, i: number) =>
    a + v * jdEmb[i], 0
  );

  const score = Math.min(100, Math.max(40, Math.round(dot * 100)));

  // STORE RESULT
  await supabase.from("resumes").insert({
    id: resumeId,
    content: resumeText,
    ats_score: score,
    role_match: score - 5,
  });

  res.json({
    score,
    roleMatch: score - 5,
  });
}
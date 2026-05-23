import { supabase } from "../lib/supabase";
import { getEmbedding } from "../lib/openai";

export async function searchSimilar(req, res) {
  const { query } = req.body;

  const embedding = await getEmbedding(query);

  const { data } = await supabase.rpc("match_resumes", {
    query_embedding: embedding,
    match_threshold: 0.7,
  });

  res.json(data);
}
import { getEmbedding } from "./embeddings";
import { cosineSimilarity } from "./similarity";

export async function computeSemanticScore(resume: string, jd: string) {
  const resumeEmb = await getEmbedding(resume);
  const jdEmb = await getEmbedding(jd);

  const score = cosineSimilarity(resumeEmb, jdEmb) * 100;

  return Math.round(score);
}
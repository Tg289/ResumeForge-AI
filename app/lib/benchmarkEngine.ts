export type BenchmarkLevel =
  | "FAANG"
  | "Mid-Level"
  | "Junior";

const benchmarkData = {
  FAANG: { avgScore: 92, keywords: 85 },
  "Mid-Level": { avgScore: 78, keywords: 70 },
  Junior: { avgScore: 62, keywords: 50 },
};

export function benchmarkResume(score: number) {
  let level: BenchmarkLevel = "Junior";

  if (score >= 85) level = "FAANG";
  else if (score >= 70) level = "Mid-Level";

  return {
    level,
    benchmarkScore: benchmarkData[level],
    gap: benchmarkData[level].avgScore - score,
  };
}
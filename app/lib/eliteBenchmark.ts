export const eliteBenchmark = (score: number) => {
  const industry = 72;
  const faang = 88;
  const startup = 78;

  return {
    industryGap: score - industry,
    faangGap: score - faang,
    startupGap: score - startup,

    level:
      score >= 90
        ? "Elite Candidate"
        : score >= 80
        ? "Strong Candidate"
        : score >= 65
        ? "Average Candidate"
        : "Weak Candidate",
  };
};
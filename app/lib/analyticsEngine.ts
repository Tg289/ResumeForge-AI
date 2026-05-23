export const analyticsEngine = (resumes: any[]) => {
  const scores = resumes.map((r) => r.feedback?.ATS?.score || 0);

  const avg =
    scores.reduce((a, b) => a + b, 0) / (scores.length || 1);

  const distribution = {
    high: scores.filter((s) => s >= 80).length,
    mid: scores.filter((s) => s >= 60 && s < 80).length,
    low: scores.filter((s) => s < 60).length,
  };

  return {
    avgScore: Math.round(avg),
    distribution,
  };
};
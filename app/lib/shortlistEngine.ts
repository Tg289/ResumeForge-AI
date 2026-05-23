export const shortlistEngine = (score: number, skills: any) => {
  const skillAvg =
    Object.values(skills).reduce((a: any, b: any) => a + b, 0) /
    Object.keys(skills).length;

  const finalScore = Math.round(score * 0.7 + skillAvg * 0.3);

  return {
    finalScore,
    decision:
      finalScore > 85
        ? "🔥 Hire"
        : finalScore > 70
        ? "🟡 Review"
        : "❌ Reject",
  };
};

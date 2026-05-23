type Feedback = {
  ATS: { score: number };
  skills?: { score: number };
};

export const calculateHireScore = (
  feedback: Feedback,
  keywordDensity: number
) => {
  const ats = feedback?.ATS?.score || 0;
  const skills = feedback?.skills?.score || 0;

  const base =
    ats * 0.6 +
    skills * 0.25 +
    keywordDensity * 0.15;

  const probability = Math.min(98, Math.max(10, Math.round(base)));

  return {
    hireProbability: probability,
    verdict:
      probability > 80
        ? "Strong Hire"
        : probability > 60
        ? "Maybe Hire"
        : "Weak Candidate",
  };
};
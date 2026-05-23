export function calculateKeywordMatch(resumeText: string, jobDescription: string) {
  const normalize = (text: string) =>
    text.toLowerCase().replace(/[^a-z0-9\s]/g, " ");

  const resumeWords = new Set(normalize(resumeText).split(/\s+/));
  const jobWords = normalize(jobDescription).split(/\s+/);

  let matchCount = 0;
  let totalKeywords = 0;

  jobWords.forEach((word) => {
    if (word.length > 2) {
      totalKeywords++;
      if (resumeWords.has(word)) matchCount++;
    }
  });

  const score = totalKeywords === 0 ? 0 : (matchCount / totalKeywords) * 100;

  return {
    score: Math.round(score),
    matchCount,
    totalKeywords,
  };
}
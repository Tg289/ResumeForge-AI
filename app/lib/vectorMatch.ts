export const computeVectorScore = (text: string) => {
  const clean = text.toLowerCase();

  const keywords = [
    "react",
    "typescript",
    "node",
    "api",
    "system design",
    "database",
    "sql",
    "mongodb",
    "aws",
    "docker",
  ];

  let score = 0;

  keywords.forEach((k) => {
    if (clean.includes(k)) score += 10;
  });

  return Math.min(100, score);
};
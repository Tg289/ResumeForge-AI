type SkillMap = {
  frontend: string[];
  backend: string[];
  ai: string[];
  database: string[];
  tools: string[];
};

const SKILL_DATABASE: SkillMap = {
  frontend: [
    "react",
    "next",
    "javascript",
    "typescript",
    "html",
    "css",
    "tailwind",
    "redux",
  ],
  backend: [
    "node",
    "express",
    "django",
    "flask",
    "spring",
    "api",
    "rest",
  ],
  ai: [
    "machine learning",
    "deep learning",
    "nlp",
    "ai",
    "tensorflow",
    "pytorch",
  ],
  database: [
    "mysql",
    "postgresql",
    "mongodb",
    "firebase",
    "redis",
  ],
  tools: [
    "git",
    "docker",
    "kubernetes",
    "aws",
    "vercel",
    "postman",
  ],
};

export type SkillAnalysis = {
  found: Record<string, string[]>;
  missing: Record<string, string[]>;
  score: number;
  density: number;
};

export const extractSkills = (text: string): SkillAnalysis => {
  const lowerText = text.toLowerCase();

  const found: Record<string, string[]> = {};
  const missing: Record<string, string[]> = {};

  let totalSkills = 0;
  let foundSkills = 0;

  Object.entries(SKILL_DATABASE).forEach(([category, skills]) => {
    found[category] = [];
    missing[category] = [];

    skills.forEach((skill) => {
      totalSkills++;

      if (lowerText.includes(skill)) {
        found[category].push(skill);
        foundSkills++;
      } else {
        missing[category].push(skill);
      }
    });
  });

  const density =
    totalSkills > 0 ? foundSkills / totalSkills : 0;

  const score = Math.min(
    100,
    Math.round(density * 100 + foundSkills * 2)
  );

  return {
    found,
    missing,
    score,
    density,
  };
};
const roleSkillsMap: Record<
  string,
  string[]
> = {
  "Frontend Developer": [
    "react",
    "typescript",
    "javascript",
    "tailwind",
    "css",
    "html",
  ],

  "Backend Developer": [
    "node",
    "express",
    "mongodb",
    "postgresql",
    "api",
    "backend",
  ],

  "Full Stack Developer": [
    "react",
    "node",
    "mongodb",
    "typescript",
    "api",
  ],

  "AI Engineer": [
    "python",
    "machine learning",
    "tensorflow",
    "pytorch",
    "ai",
  ],

  "Data Analyst": [
    "sql",
    "excel",
    "power bi",
    "python",
    "analytics",
  ],
};

export const calculateRoleMatch =
  (
    role: string,
    keywords: string[],
    atsScore: number
  ) => {

    const requiredSkills =
      roleSkillsMap[role] || [];

    const normalizedKeywords =
      keywords.map((k) =>
        k.toLowerCase()
      );

    const matchedSkills =
      requiredSkills.filter((skill) =>
        normalizedKeywords.some((k) =>
          k.includes(skill)
        )
      );

    const skillScore =
      (
        matchedSkills.length /
        requiredSkills.length
      ) * 100;

    const finalScore = Math.round(
      skillScore * 0.7 +
      atsScore * 0.3
    );

    return {
      finalScore: Math.min(
        100,
        finalScore
      ),
      matchedSkills,
      missingSkills:
        requiredSkills.filter(
          (skill) =>
            !matchedSkills.includes(skill)
        ),
    };
  };
export const extractSmartSkills = (feedback: any) => {
  const text = JSON.stringify(feedback || {}).toLowerCase();

  const skillMap = {
    frontend: ["react", "next", "html", "css"],
    backend: ["node", "express", "api", "database"],
    data: ["python", "pandas", "ml", "ai"],
    devops: ["docker", "kubernetes", "aws"],
  };

  const result: Record<string, number> = {};

  Object.keys(skillMap).forEach((key) => {
    let count = 0;

    skillMap[key as keyof typeof skillMap].forEach((s) => {
      if (text.includes(s)) count++;
    });

    result[key] = Math.round((count / skillMap[key as keyof typeof skillMap].length) * 100);
  });

  return result;
};
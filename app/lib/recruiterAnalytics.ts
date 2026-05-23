export type ResumeData = {
  id: string;
  selectedRole?: string;
  feedback: any;
};

export function generateAnalytics(resumes: ResumeData[]) {
  const scores = resumes.map((r) => r.feedback?.ATS?.score || 0);

  // ---------- SCORE ANALYTICS ----------
  const avgScore =
    scores.reduce((a, b) => a + b, 0) / (scores.length || 1);

  const maxScore = Math.max(...scores, 0);
  const minScore = Math.min(...scores, 0);

  // ---------- ROLE DISTRIBUTION ----------
  const roleMap: Record<string, number> = {};

  resumes.forEach((r) => {
    const role = r.selectedRole || "Unknown";
    roleMap[role] = (roleMap[role] || 0) + 1;
  });

  const roleDistribution = Object.entries(roleMap).map(
    ([role, count]) => ({
      role,
      count,
    })
  );

  // ---------- SKILL HEATMAP ----------
  const skillMap: Record<string, number> = {};

  resumes.forEach((r) => {
    const text = JSON.stringify(r.feedback || {}).toLowerCase();

    const skills = [
      "react",
      "node",
      "typescript",
      "mongodb",
      "api",
      "tailwind",
      "sql",
    ];

    skills.forEach((skill) => {
      if (text.includes(skill)) {
        skillMap[skill] = (skillMap[skill] || 0) + 1;
      }
    });
  });

  const skillHeatmap = Object.entries(skillMap)
    .map(([skill, count]) => ({
      skill,
      count,
    }))
    .sort((a, b) => b.count - a.count);

  // ---------- SCORE BUCKETS ----------
  const buckets = {
    "90-100": 0,
    "75-89": 0,
    "50-74": 0,
    "<50": 0,
  };

  scores.forEach((s) => {
    if (s >= 90) buckets["90-100"]++;
    else if (s >= 75) buckets["75-89"]++;
    else if (s >= 50) buckets["50-74"]++;
    else buckets["<50"]++;
  });

  return {
    avgScore: Math.round(avgScore),
    maxScore,
    minScore,
    roleDistribution,
    skillHeatmap,
    buckets,
  };
}
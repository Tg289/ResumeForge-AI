export type BenchmarkLevel = "JUNIOR" | "MID" | "SENIOR";

export type BenchmarkResult = {
  level: BenchmarkLevel;
  industryScore: number;
  faangScore: number;
  roleScore: number;
  insights: string[];
};

export const calculateBenchmark = (
  atsScore: number,
  role: string
): BenchmarkResult => {
  let level: BenchmarkLevel = "JUNIOR";

  if (atsScore >= 85) level = "SENIOR";
  else if (atsScore >= 70) level = "MID";
  else level = "JUNIOR";

  // Industry baseline comparison
  const industryScore =
    level === "SENIOR"
      ? Math.min(95, atsScore + 5)
      : level === "MID"
      ? Math.min(85, atsScore + 3)
      : Math.min(75, atsScore + 2);

  // FAANG benchmark simulation (strict scoring)
  const faangScore = Math.max(50, atsScore - 8);

  // Role-based adjustment
  const roleMultiplier =
    role === "AI Engineer"
      ? 1.05
      : role === "Data Analyst"
      ? 1.02
      : role === "Frontend Developer"
      ? 1.0
      : 0.98;

  const roleScore = Math.min(
    100,
    Math.round(atsScore * roleMultiplier)
  );

  // Insights engine
  const insights: string[] = [];

  if (atsScore < 70) {
    insights.push("Below industry average — needs optimization");
  }

  if (faangScore < 75) {
    insights.push("Not competitive for FAANG-level roles yet");
  }

  if (roleScore > 85) {
    insights.push("Strong match for selected role");
  }

  if (level === "SENIOR") {
    insights.push("Senior-level resume detected");
  }

  return {
    level,
    industryScore,
    faangScore,
    roleScore,
    insights,
  };
};
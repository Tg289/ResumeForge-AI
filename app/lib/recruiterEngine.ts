export type Candidate = {
  id: string;
  name: string;
  atsScore: number;
  roleMatch: number;
  skills: string[];
};

export function rankCandidates(candidates: Candidate[]) {
  return candidates
    .map((c) => ({
      ...c,
      finalScore: Math.round(
        c.atsScore * 0.6 +
        c.roleMatch * 0.3 +
        c.skills.length * 2
      ),
    }))
    .sort((a, b) => b.finalScore - a.finalScore);
}
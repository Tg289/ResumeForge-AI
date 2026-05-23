import { useState } from "react";
import { rankCandidates } from "~/lib/recruiterEngine";

export default function RecruiterDashboard() {
  const [candidates] = useState([
    { id: "1", name: "A", atsScore: 82, roleMatch: 78, skills: ["React", "Node"] },
    { id: "2", name: "B", atsScore: 91, roleMatch: 88, skills: ["AI", "Python"] },
    { id: "3", name: "C", atsScore: 74, roleMatch: 70, skills: ["JS"] },
  ]);

  const ranked = rankCandidates(candidates);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">
        Recruiter Dashboard
      </h1>

      {ranked.map((c) => (
        <div
          key={c.id}
          className="bg-slate-900 p-4 rounded-2xl mb-3 border border-slate-800"
        >
          <p className="text-white font-bold">{c.name}</p>
          <p className="text-slate-400">
            Final Score: {c.finalScore}
          </p>
        </div>
      ))}
    </div>
  );
}
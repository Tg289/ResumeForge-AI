type Props = {
  atsScore: number;
  keywords: string[];
};

const AIRoleRecommendations = ({
  atsScore,
  keywords,
}: Props) => {

  const roles = [
    {
      role: "Frontend Developer",
      match:
        keywords.includes("React") ||
        keywords.includes("Tailwind CSS")
          ? 92
          : 75,
    },

    {
      role: "Backend Developer",
      match:
        keywords.includes("Node.js") ||
        keywords.includes("MongoDB")
          ? 88
          : 70,
    },

    {
      role: "Full Stack Developer",
      match:
        keywords.includes("React") &&
        keywords.includes("Node.js")
          ? 95
          : 78,
    },

    {
      role: "AI Engineer",
      match:
        keywords.includes("Python")
          ? 82
          : 60,
    },

    {
      role: "Data Analyst",
      match:
        keywords.includes("SQL")
          ? 80
          : 65,
    },
  ];

  const sortedRoles = roles.sort(
    (a, b) => b.match - a.match
  );

  const bestRole = sortedRoles[0];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-2xl font-bold text-violet-400">
          AI Role Recommendations
        </h2>

        <div className="bg-violet-500/10 border border-violet-500/20 px-4 py-2 rounded-full text-violet-300 font-semibold">
          Confidence: {bestRole.match}%
        </div>
      </div>

      <div className="bg-slate-800 rounded-2xl p-5 mb-6">

        <p className="text-slate-400 text-sm mb-2">
          Recommended Career Path
        </p>

        <h3 className="text-3xl font-bold text-white">
          {bestRole.role}
        </h3>

        <p className="text-slate-400 mt-3">
          Resume profile aligns strongly
          with this role based on
          detected technologies and ATS
          analysis.
        </p>
      </div>

      <div className="flex flex-col gap-3">

        {sortedRoles.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-slate-800 rounded-2xl p-4"
          >

            <p className="text-slate-200 font-medium">
              {item.role}
            </p>

            <div className="text-cyan-400 font-bold">
              {item.match}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIRoleRecommendations;
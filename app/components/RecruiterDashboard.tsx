const RecruiterDashboard = () => {
  const topSkills = [
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "MongoDB",
  ];

  const candidates = [
    {
      name: "Frontend Resume",
      score: 90,
    },
    {
      name: "Backend Resume",
      score: 84,
    },
    {
      name: "AI Engineer Resume",
      score: 80,
    },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white">
          Recruiter Analytics Dashboard
        </h2>

        <p className="text-slate-400 mt-2">
          Candidate insights, ATS trends,
          and hiring analytics overview.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

        <div className="bg-slate-800 rounded-2xl p-5">
          <p className="text-slate-400 text-sm">
            Total Candidates
          </p>

          <h3 className="text-5xl font-bold text-cyan-400 mt-3">
            24
          </h3>
        </div>

        <div className="bg-slate-800 rounded-2xl p-5">
          <p className="text-slate-400 text-sm">
            Average ATS Score
          </p>

          <h3 className="text-5xl font-bold text-violet-400 mt-3">
            86%
          </h3>
        </div>

        <div className="bg-slate-800 rounded-2xl p-5">
          <p className="text-slate-400 text-sm">
            Interview Ready
          </p>

          <h3 className="text-5xl font-bold text-green-400 mt-3">
            12
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        <div className="bg-slate-800 rounded-2xl p-5">

          <h3 className="text-2xl font-bold text-white mb-4">
            Top Skills
          </h3>

          <div className="flex flex-wrap gap-3">
            {topSkills.map((skill) => (
              <div
                key={skill}
                className="bg-slate-700 border border-slate-600 px-4 py-2 rounded-full text-slate-200"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-800 rounded-2xl p-5">

          <h3 className="text-2xl font-bold text-white mb-4">
            Candidate Ranking
          </h3>

          <div className="flex flex-col gap-4">

            {candidates.map(
              (candidate, index) => (
                <div
                  key={candidate.name}
                  className="flex items-center justify-between bg-slate-700 rounded-xl p-4"
                >

                  <div className="flex items-center gap-3">

                    <div className="bg-violet-500/20 text-violet-400 w-10 h-10 rounded-full flex items-center justify-center font-bold">
                      #{index + 1}
                    </div>

                    <div>
                      <p className="text-white font-semibold">
                        {candidate.name}
                      </p>
                    </div>
                  </div>

                  <div className="text-cyan-400 font-bold text-xl">
                    {candidate.score}%
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterDashboard;
type Props = {
  role: string;
  score: number;
  matchedSkills: string[];
  missingSkills: string[];
};

const RoleMatch = ({
  role,
  score,
  matchedSkills,
  missingSkills,
}: Props) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">

      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold text-cyan-400">
          AI Role Compatibility
        </h2>

        <p className="text-slate-400">
          Resume alignment analysis for your selected role
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-3">

        <div>
          <p className="text-slate-500 text-sm">
            Recommended Role
          </p>

          <h3 className="text-3xl font-bold text-white">
            {role}
          </h3>
        </div>

        <div>
          <p className="text-slate-500 text-sm">
            Compatibility Score
          </p>

          <div className="text-6xl font-extrabold text-violet-400 mt-1">
            {score}%
          </div>
        </div>
      </div>

      <div className="mt-8">

        <h3 className="text-lg font-semibold text-green-400 mb-4">
          Matched Skills
        </h3>

        {matchedSkills.length > 0 ? (
          <div className="flex flex-wrap gap-3">
            {matchedSkills.map(
              (skill, index) => (
                <span
                  key={index}
                  className="bg-green-500/20 text-green-300 border border-green-500/30 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        ) : (
          <p className="text-slate-500">
            No strong skill matches detected.
          </p>
        )}
      </div>

      <div className="mt-8">

        <h3 className="text-lg font-semibold text-yellow-400 mb-4">
          Missing Skills
        </h3>

        {missingSkills.length > 0 ? (
          <div className="flex flex-wrap gap-3">
            {missingSkills.map(
              (skill, index) => (
                <span
                  key={index}
                  className="bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        ) : (
          <p className="text-green-400 font-medium">
            Excellent skill coverage for this role.
          </p>
        )}
      </div>
    </div>
  );
};

export default RoleMatch;
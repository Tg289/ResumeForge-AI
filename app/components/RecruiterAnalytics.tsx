type Props = {
  atsScore: number;
  role: string;
  keywordCount: number;
};

const RecruiterAnalytics = ({
  atsScore,
  role,
  keywordCount,
}: Props) => {

  const averageATS = 81;

  const totalResumes = 124;

  const hiringRate =
    atsScore >= 85
      ? "High"
      : atsScore >= 70
      ? "Moderate"
      : "Low";

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">

      <h2 className="text-2xl font-bold text-cyan-400 mb-6">
        Recruiter Analytics
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <div className="bg-slate-800 rounded-2xl p-4">
          <p className="text-slate-400 text-sm">
            Total Resumes
          </p>

          <div className="text-3xl font-bold text-white mt-2">
            {totalResumes}
          </div>
        </div>

        <div className="bg-slate-800 rounded-2xl p-4">
          <p className="text-slate-400 text-sm">
            Average ATS
          </p>

          <div className="text-3xl font-bold text-white mt-2">
            {averageATS}%
          </div>
        </div>

        <div className="bg-slate-800 rounded-2xl p-4">
          <p className="text-slate-400 text-sm">
            Recommended Role
          </p>

          <div className="text-xl font-bold text-white mt-2">
            {role}
          </div>
        </div>

        <div className="bg-slate-800 rounded-2xl p-4">
          <p className="text-slate-400 text-sm">
            Skills Detected
          </p>

          <div className="text-3xl font-bold text-white mt-2">
            {keywordCount}
          </div>
        </div>
      </div>

      <div className="mt-6 bg-violet-500/10 border border-violet-500/20 rounded-2xl p-4">

        <p className="text-slate-400 text-sm">
          Hiring Probability
        </p>

        <div className="text-2xl font-bold text-violet-300 mt-2">
          {hiringRate}
        </div>
      </div>
    </div>
  );
};

export default RecruiterAnalytics;
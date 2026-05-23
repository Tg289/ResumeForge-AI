type Props = {
  score: number;
};

const ResumeBenchmark = ({
  score,
}: Props) => {

  const percentile =
    Math.min(
      99,
      Math.max(
        1,
        score - 8
      )
    );

  const industryAverage = 72;

  const hiringReadiness =
    score >= 85
      ? "Excellent"
      : score >= 70
      ? "Strong"
      : "Needs Improvement";

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">

      <h2 className="text-2xl font-bold text-cyan-400 mb-6">
        Resume Benchmarking
      </h2>

      <div className="flex flex-col gap-6">

        <div>
          <p className="text-slate-400 text-sm">
            Candidate Ranking
          </p>

          <div className="text-5xl font-extrabold text-violet-400 mt-2">
            Top {100 - percentile}%
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">

          <div className="bg-slate-800 rounded-2xl p-4">
            <p className="text-slate-400 text-sm">
              Industry Average
            </p>

            <div className="text-3xl font-bold text-white mt-2">
              {industryAverage}%
            </div>
          </div>

          <div className="bg-slate-800 rounded-2xl p-4">
            <p className="text-slate-400 text-sm">
              Your ATS Score
            </p>

            <div className="text-3xl font-bold text-white mt-2">
              {score}%
            </div>
          </div>
        </div>

        <div className="bg-violet-500/10 border border-violet-500/20 rounded-2xl p-4">

          <p className="text-slate-400 text-sm">
            Hiring Readiness
          </p>

          <div className="text-2xl font-bold text-violet-300 mt-2">
            {hiringReadiness}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBenchmark;
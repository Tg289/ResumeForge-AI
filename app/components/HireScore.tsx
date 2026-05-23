import { calculateHireScore } from "~/lib/rankingEngine";

const HireScore = ({
  feedback,
  keywordDensity,
}: any) => {
  const result = calculateHireScore(feedback, keywordDensity);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h2 className="text-xl font-bold text-violet-400">
        AI Hire Probability
      </h2>

      <p className="text-5xl font-bold mt-4">
        {result.hireProbability}%
      </p>

      <p className="text-slate-400 mt-2">
        {result.verdict}
      </p>
    </div>
  );
};

export default HireScore;
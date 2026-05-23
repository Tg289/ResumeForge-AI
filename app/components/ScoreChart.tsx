type Props = {
  score: number;
};

const ScoreChart = ({ score }: Props) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-white">
          ATS Performance
        </h2>

        <span className="text-violet-400 text-xl font-bold">
          {score}%
        </span>
      </div>

      <div className="w-full bg-slate-800 rounded-full h-5 overflow-hidden">

        <div
          className="h-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-700"
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
};

export default ScoreChart;
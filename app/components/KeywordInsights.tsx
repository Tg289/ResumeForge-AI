type Props = {
  keywords: string[];
  missingKeywords: string[];
  density: number;
};

const KeywordInsights = ({
  keywords,
  missingKeywords,
  density,
}: Props) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-2xl font-bold text-cyan-400">
          ATS Keyword Insights
        </h2>

        <div className="bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full text-cyan-300 font-semibold">
          Density: {density}%
        </div>
      </div>

      <div className="mb-6">

        <h3 className="text-lg font-semibold text-white mb-3">
          Detected Skills
        </h3>

        <div className="flex flex-wrap gap-3">
          {keywords.map(
            (keyword, index) => (
              <div
                key={index}
                className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-sm font-medium"
              >
                {keyword}
              </div>
            )
          )}
        </div>
      </div>

      <div>

        <h3 className="text-lg font-semibold text-white mb-3">
          Missing Keywords
        </h3>

        <div className="flex flex-wrap gap-3">
          {missingKeywords
            .slice(0, 6)
            .map((keyword, index) => (
              <div
                key={index}
                className="px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-sm font-medium"
              >
                {keyword}
              </div>
            ))}
        </div>
      </div>

      <div className="mt-6 bg-slate-800 rounded-2xl p-4">
        <p className="text-slate-300">
          ATS optimization analysis
          completed successfully.
        </p>
      </div>
    </div>
  );
};

export default KeywordInsights;
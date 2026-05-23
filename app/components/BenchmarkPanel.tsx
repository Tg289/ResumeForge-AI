import { benchmarkResume } from "~/lib/benchmarkEngine";

const BenchmarkPanel = ({ score }: any) => {
  const data = benchmarkResume(score);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h2 className="text-xl font-bold text-cyan-400">
        Industry Benchmark
      </h2>

      <p className="mt-3 text-2xl font-bold">
        {data.level}
      </p>

      <div className="mt-4 text-slate-300 space-y-2">
        <p>Industry Gap: {data.industryGap}</p>
        <p>FAANG Gap: {data.faangGap}</p>
        <p>Junior Comparison: {data.juniorComparison}</p>
      </div>
    </div>
  );
};

export default BenchmarkPanel;
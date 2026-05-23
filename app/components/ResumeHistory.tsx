type ResumeHistoryItem = {
  id: string;
  title: string;
  score: number;
  date: string;
  version: string;
};

type Props = {
  history: ResumeHistoryItem[];
};

const ResumeHistory = ({
  history,
}: Props) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

      <div className="mb-6">
        <h2 className="text-3xl font-bold text-white">
          Resume History
        </h2>

        <p className="text-slate-400 mt-2">
          Track previous resume uploads,
          ATS improvements, and version
          progression.
        </p>
      </div>

      <div className="flex flex-col gap-4">

        {history.map((item) => (
          <div
            key={item.id}
            className="bg-slate-800 border border-slate-700 rounded-2xl p-5 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4"
          >

            <div>
              <h3 className="text-xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="text-slate-400 text-sm mt-1">
                Uploaded on {item.date}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">

              <div className="bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-semibold">
                ATS: {item.score}%
              </div>

              <div className="bg-violet-500/10 text-violet-400 px-4 py-2 rounded-full text-sm font-semibold">
                {item.version}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeHistory;
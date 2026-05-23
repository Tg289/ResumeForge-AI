type Props = {
  title: string;
  atsScore: number;
  roleMatch: number;
  benchmark: string;
  skills: string[];
};

const CompareResumeCard = ({
  title,
  atsScore,
  roleMatch,
  benchmark,
  skills,
}: Props) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col gap-6 w-full">

      <div>
        <h2 className="text-2xl font-bold text-white">
          {title}
        </h2>

        <p className="text-slate-400 mt-1">
          Resume Performance Overview
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">

        <div className="bg-slate-800 rounded-2xl p-4">
          <p className="text-slate-400 text-sm">
            ATS Score
          </p>

          <h3 className="text-4xl font-bold text-cyan-400 mt-2">
            {atsScore}%
          </h3>
        </div>

        <div className="bg-slate-800 rounded-2xl p-4">
          <p className="text-slate-400 text-sm">
            Role Match
          </p>

          <h3 className="text-4xl font-bold text-violet-400 mt-2">
            {roleMatch}%
          </h3>
        </div>
      </div>

      <div className="bg-slate-800 rounded-2xl p-4">
        <p className="text-slate-400 text-sm mb-2">
          Benchmark Level
        </p>

        <h3 className="text-2xl font-bold text-green-400">
          {benchmark}
        </h3>
      </div>

      <div>
        <p className="text-slate-300 font-semibold mb-3">
          Detected Skills
        </p>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-800 border border-slate-700 rounded-full px-4 py-2 text-slate-300 text-sm"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompareResumeCard;
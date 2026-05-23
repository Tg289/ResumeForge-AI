import { extractSkills } from "~/lib/skillExtractor";

type Props = {
  text: string;
};

const SkillInsights = ({ text }: Props) => {
  const analysis = extractSkills(text);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col gap-6">

      <h2 className="text-xl font-bold text-violet-400">
        AI Skill Intelligence
      </h2>

      {/* SCORE */}
      <div className="text-4xl font-bold text-cyan-400">
        {analysis.score}/100
      </div>

      {/* FOUND SKILLS */}
      <div>
        <h3 className="text-green-400 font-semibold mb-2">
          Found Skills
        </h3>

        {Object.entries(analysis.found).map(([cat, skills]) => (
          <div key={cat} className="mb-2">
            <p className="text-slate-400 text-sm">{cat}</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded-lg text-xs">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* MISSING SKILLS */}
      <div>
        <h3 className="text-yellow-400 font-semibold mb-2">
          Missing Skills
        </h3>

        {Object.entries(analysis.missing).map(([cat, skills]) => (
          <div key={cat} className="mb-2">
            <p className="text-slate-400 text-sm">{cat}</p>
            <div className="flex flex-wrap gap-2">
              {skills.slice(0, 4).map((s) => (
                <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-lg text-xs">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* DENSITY */}
      <div className="text-slate-300">
        Keyword Density: {(analysis.density * 100).toFixed(1)}%
      </div>

    </div>
  );
};

export default SkillInsights;
type Props = {
  role: string;
  score: number;
};

const RoleMatch = ({ role, score }: Props) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 mt-6">
      <h2 className="text-2xl font-bold text-cyan-400 mb-2">
        Role Compatibility
      </h2>

      <p className="text-slate-400">
        Resume alignment for:
      </p>

      <p className="text-xl font-semibold text-white mt-2">
        {role}
      </p>

      <div className="text-5xl font-bold text-violet-400 mt-6">
        {score}%
      </div>
    </div>
  );
};

export default RoleMatch;
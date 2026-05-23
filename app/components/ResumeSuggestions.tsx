type Props = {
  score: number;
};

const ResumeSuggestions = ({ score }: Props) => {
  let suggestions: string[] = [];

  if (score < 60) {
    suggestions = [
      "Add more measurable achievements",
      "Improve technical keyword density",
      "Use stronger action verbs",
      "Reduce long paragraphs",
    ];
  } else if (score < 80) {
    suggestions = [
      "Add more project impact metrics",
      "Optimize formatting consistency",
      "Improve skill alignment",
    ];
  } else {
    suggestions = [
      "Resume is well optimized",
      "Maintain concise formatting",
      "Tailor resume for each role",
    ];
  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4 text-white">
        Optimization Suggestions
      </h2>

      <ul className="space-y-3">
        {suggestions.map((item, index) => (
          <li
            key={index}
            className="bg-slate-800 p-4 rounded-xl text-slate-300"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResumeSuggestions;
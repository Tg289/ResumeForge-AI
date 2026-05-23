import Navbar from "~/components/Navbar";
import CompareResumeCard from "~/components/CompareResumeCard";

const Compare = () => {
  return (
    <main className="min-h-screen bg-slate-950">

      <Navbar />

      <section className="main-section">

        <div className="page-heading">
          <h1>
            Compare Resume Performance
          </h1>

          <h2>
            Analyze multiple resumes side-by-side
            using ATS intelligence metrics
          </h2>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 w-full max-w-7xl">

          <CompareResumeCard
            title="Resume Version A"
            atsScore={90}
            roleMatch={88}
            benchmark="Top 10%"
            skills={[
              "React",
              "TypeScript",
              "Node.js",
              "MongoDB",
              "Tailwind CSS",
            ]}
          />

          <CompareResumeCard
            title="Resume Version B"
            atsScore={78}
            roleMatch={72}
            benchmark="Top 35%"
            skills={[
              "JavaScript",
              "HTML",
              "CSS",
              "Express",
            ]}
          />
        </div>
      </section>
    </main>
  );
};

export default Compare;
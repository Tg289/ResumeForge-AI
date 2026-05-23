import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import ResumeCard from "~/components/ResumeCard";
import { usePuterStore } from "~/lib/puter";
import { Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResumeForge AI" },
    {
      name: "description",
      content: "AI-powered ATS resume analysis and optimization platform.",
    },
  ];
}

export default function Home() {
  const { auth, kv } = usePuterStore();
  const navigate = useNavigate();

  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loadingResumes, setLoadingResumes] = useState(false);

  useEffect(() => {
    if (!auth.isAuthenticated) navigate("/auth?next=/");
  }, [auth.isAuthenticated]);

  useEffect(() => {
    const loadResumes = async () => {
      setLoadingResumes(true);

      const data = (await kv.list("resume:*", true)) as KVItem[];

      const parsed = data.map((r) => JSON.parse(r.value) as Resume);

      setResumes(parsed || []);
      setLoadingResumes(false);
    };

    loadResumes();
  }, []);

  return (
    <main className="bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 min-h-screen">
      <Navbar />

      <section className="main-section">

        <div className="page-heading py-16">
          <h1>ResumeForge AI — ATS Resume Intelligence Platform</h1>

          {!loadingResumes && resumes.length === 0 ? (
            <h2>
              Upload your resume for AI-driven ATS scoring and insights
            </h2>
          ) : (
            <h2>Monitor resume performance and insights</h2>
          )}
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex gap-4 justify-center mb-10">
          <Link
            to="/upload"
            className="px-6 py-3 bg-violet-700 rounded-2xl text-white"
          >
            Analyze Resume
          </Link>

          <Link
            to="/recruiter"
            className="px-6 py-3 bg-cyan-700 rounded-2xl text-white"
          >
            Recruiter Dashboard
          </Link>
        </div>

        {loadingResumes && (
          <img src="/images/resume-scan-2.gif" className="w-[200px]" />
        )}

        {!loadingResumes && resumes.length > 0 && (
          <div className="resumes-section">
            {resumes.map((r) => (
              <ResumeCard key={r.id} resume={r} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
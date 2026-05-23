import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import ResumeCard from "~/components/ResumeCard";
import {usePuterStore} from "~/lib/puter";
import {Link, useNavigate} from "react-router";
import {useEffect, useState} from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResumeForge AI" },
    { name: "description",
      content: "AI-powered ATS resume analysis and optimization platform." 
    },
  ];
}

export default function Home() {
  const { auth, kv } = usePuterStore();
  const navigate = useNavigate();
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loadingResumes, setLoadingResumes] = useState(false);

  useEffect(() => {
    if(!auth.isAuthenticated) navigate('/auth?next=/');
  }, [auth.isAuthenticated])

  useEffect(() => {
    const loadResumes = async () => {
      setLoadingResumes(true);

      const resumes = (await kv.list('resume:*', true)) as KVItem[];

      const parsedResumes = resumes?.map((resume) => (
          JSON.parse(resume.value) as Resume
      ))

      setResumes(parsedResumes || []);
      setLoadingResumes(false);
    }

    loadResumes()
  }, []);

  return <main className="bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 min-h-screen">
    <Navbar />

    <section className="main-section">
      <div className="page-heading py-16">
        <h1>ResumeForge AI — ATS Resume Intelligence Platform</h1>
        {!loadingResumes && resumes?.length === 0 ? (
            <h2>  Upload your resume to receive AI-driven ATS scoring,
  improvement suggestions, and keyword optimization.
            </h2>
        ): (
          <h2>Monitor resume performance, ATS compatibility,
  and personalized improvement insights.</h2>
        )}
      </div>
      {loadingResumes && (
          <div className="flex flex-col items-center justify-center">
            <img src="/images/resume-scan-2.gif" className="w-[200px]" />
          </div>
      )}

      {!loadingResumes && resumes.length > 0 && (
        <div className="resumes-section">
          {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
          ))}
        </div>
      )}

      {!loadingResumes && resumes?.length === 0 && (
          <div className="flex flex-col items-center justify-center mt-10 gap-4">
            <Link to="/upload" className="w-fit text-xl font-semibold bg-violet-700 hover:bg-violet-900 text-white px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg">
            Analyze My Resume
            </Link>
          </div>
      )}
    </section>
  </main>
}

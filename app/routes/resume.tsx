import { Link, useNavigate, useParams } from "react-router";
import { useEffect, useState, useMemo } from "react";

import { usePuterStore } from "~/lib/puter";
import { extractKeywords } from "~/lib/keywordExtractor";

import Summary from "~/components/Summary";
import ATS from "~/components/ATS";
import Details from "~/components/Details";
import ResumeSuggestions from "~/components/ResumeSuggestions";
import RoleMatch from "~/components/RoleMatch";
import ScoreChart from "~/components/ScoreChart";
import KeywordInsights from "~/components/KeywordInsights";

import { computeSemanticScore } from "~/lib/ai/resumeMatch";
import { planLimits } from "~/lib/billing/plans";

export const meta = () => [
  { title: "ResumeForge AI | Elite Analysis" },
];

const Resume = () => {
  const { auth, isLoading, fs, kv } = usePuterStore();
  const { id } = useParams();
  const navigate = useNavigate();

  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [resumeUrl, setResumeUrl] = useState("");
  const [plan] = useState<"FREE" | "PRO">("PRO");

  useEffect(() => {
    if (!isLoading && !auth.isAuthenticated) {
      navigate(`/auth?next=/resume/${id}`);
    }
  }, [isLoading]);

  useEffect(() => {
    const load = async () => {
      const resume = await kv.get(`resume:${id}`);
      if (!resume) return;

      const data = JSON.parse(resume);
      setFeedback(data.feedback);

      const pdf = await fs.read(data.resumePath);
      if (pdf) setResumeUrl(URL.createObjectURL(new Blob([pdf])));

      const img = await fs.read(data.imagePath);
      if (img) setImageUrl(URL.createObjectURL(img));
    };

    load();
  }, [id]);

  // fallback ATS score
  const baseScore = feedback?.ATS?.score || 75;

  // semantic AI score (placeholder async-safe fallback)
  const semanticScore = useMemo(() => {
    return Math.min(100, baseScore + 8);
  }, [baseScore]);

  // keyword extraction
  const keywords = useMemo(() => {
    return extractKeywords(JSON.stringify(feedback || {}));
  }, [feedback]);

  // role match
  const roleMatch = Math.min(95, semanticScore - 3);

  const canUseAI = planLimits[plan].aiScore;

  return (
    <main className="!pt-0">

      <nav className="resume-nav">
        <Link to="/" className="back-button">
          <img src="/icons/back.svg" className="w-2.5 h-2.5" />
          <span>Back</span>
        </Link>
      </nav>

      <div className="flex max-lg:flex-col-reverse">

        {/* LEFT */}
        <section className="feedback-section">
          {imageUrl && (
            <img src={imageUrl} className="rounded-2xl" />
          )}
        </section>

        {/* RIGHT */}
        <section className="feedback-section">

          <h2 className="text-3xl font-bold">
            Elite AI Resume Report
          </h2>

          {feedback ? (
            <div className="flex flex-col gap-6">

              <Summary feedback={feedback} />

              <ATS score={semanticScore} suggestions={feedback.ATS.tips || []} />

              <ScoreChart score={semanticScore} />

              <ResumeSuggestions score={semanticScore} />

              <RoleMatch role="AI Engineer" score={roleMatch} />

              <KeywordInsights keywords={keywords} />

              {!canUseAI && (
                <div className="p-4 bg-red-900 text-white rounded-xl">
                  Upgrade to PRO for AI semantic scoring
                </div>
              )}

              <Details feedback={feedback} />
            </div>
          ) : (
            <p>Loading AI analysis...</p>
          )}
        </section>

      </div>
    </main>
  );
};

export default Resume;
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { ExternalLink, ArrowLeft, FlaskConical } from "lucide-react";
import BackgroundGlow from "../components/BackgroundGlow";
import { aiProjects } from "../data/aiProjects";

function Section({ title, children }) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">{title}</h2>
      <div className="text-white/80 leading-relaxed text-base md:text-lg">
        {children}
      </div>
    </section>
  );
}

function BulletList({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex gap-3">
          <span className="mt-2 h-2 w-2 rounded-full bg-white/70 shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function MetricCard({ label, value, detail, description }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 flex flex-col gap-2">
      <p className="text-sm text-white/50 uppercase tracking-widest">{label}</p>
      <p className="text-4xl md:text-5xl font-bold">{value}</p>
      <p className="text-white/60 text-sm font-mono">{detail}</p>
      <p className="text-white/50 text-sm mt-1">{description}</p>
    </div>
  );
}

function AIProjectDetail() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const project = aiProjects.find((item) => item.id === id);

  if (!project) {
    return (
      <main className="min-h-screen bg-[#050816] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-semibold mb-4">Project not found</h1>
          <Link to="/projects" className="underline">
            Back to projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen text-white overflow-x-hidden">
      <BackgroundGlow />

      <div className="relative z-10">
        {/* Breadcrumb */}
        <div className="flex py-8 items-center text-lg">
          <div className="px-6 md:px-20 flex items-center gap-2">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link to="/projects" className="hover:underline">Projects</Link>
            <span>/</span>
          </div>
          <hr className="bg-white/30 w-full border-white/20" />
        </div>

        <div className="max-w-[1300px] mx-auto px-5 pb-32">
          {/* Hero */}
          <section className="grid md:grid-cols-2 gap-10 items-center min-h-[70vh]">
            <div>
              <p className="font-mono text-sm md:text-base text-white/70 mb-4">
                {project.tech} — {project.year}
              </p>

              
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-4 text-4xl md:text-5xl font-bold leading-tight hover:underline"
                >
                  <span>{project.title}</span>
                  <ExternalLink
                    size={32}
                    className="opacity-70 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0"
                  />
                </a>
              ) : (
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  {project.title}
                </h1>
              )}

              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mb-10 mt-8">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-5 py-3 hover:underline transition"
                >
                  <ArrowLeft size={18} />
                  Back to Projects
                </Link>

                {project.links?.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full px-5 py-3 hover:underline transition"
                  >
                    Try Live Demo
                    <ExternalLink size={16} />
                  </a>
                )}

              </div>
            </div>

            <div>
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  loading="eager"
                  className="w-full rounded-2xl border border-white/10 shadow-2xl"
                />
              )}
            </div>
          </section>

          {/* Metrics */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mb-10">
            {project.metrics.map((m, i) => (
              <MetricCard key={i} {...m} />
            ))}
          </section>

          {/* Try It Banner */}
          {(project.links?.demo || project.links?.samples) && (
            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8 mb-4">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">Try It Yourself</h2>
              <p className="text-white/70 text-base md:text-lg leading-relaxed mb-6">
                The demo runs on HuggingFace Spaces. Upload any chest X-ray and the model returns an enhanced version in near real time. If you do not have a scan on hand, grab a few from the sample image folder on Google Drive and use those.
              </p>
              <div className="flex flex-wrap gap-4">
                {project.links?.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 hover:bg-white hover:text-black transition-colors duration-300"
                  >
                    <FlaskConical size={18} />
                    Open Live Demo
                    <ExternalLink size={16} />
                  </a>
                )}
                {project.links?.samples && (
                  <a
                    href={project.links.samples}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 hover:bg-white/10 transition-colors duration-300"
                  >
                    Get Sample Images
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </section>
          )}

          {/* Content sections */}
          <div className="grid gap-6 mt-2">
            <Section title="The Problem">
              <p>{project.problem}</p>
            </Section>

            <Section title="Approach & Architecture">
              <p>{project.approach}</p>
            </Section>

            <Section title="Dataset">
              <p>{project.dataset}</p>
            </Section>

            <Section title="Key Results">
              <BulletList items={project.highlights} />
            </Section>

            <Section title="Tools & Technologies">
              <div className="flex flex-wrap gap-2 mt-1">
                {project.toolsUsed.map((tool, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full border border-white/20 text-sm text-white/70"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </Section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AIProjectDetail;

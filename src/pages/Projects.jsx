import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { projects } from "../data/projects";
import BackgroundGlow from "../components/BackgroundGlow";

function Projects() {
  const [tab, setTab] = useState(() => {
    return localStorage.getItem("projectTab") || "all";
  });

  useEffect(() => {
    localStorage.setItem("projectTab", tab);
  }, [tab]);

  const filteredProjects =
    tab === "all"
      ? projects
      : projects.filter((p) => p.type === tab);

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 80, opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen"
    >
      <main className="relative flex flex-col min-h-screen scroll-smooth text-white overflow-x-hidden">
        <BackgroundGlow />

        <div className="relative z-10 flex flex-col min-h-screen">
          {/* navbar */}
          <div className="flex py-8 items-center text-xl">
            <div className="px-10 md:px-20">
              <Link to="/" className="hover:underline">Home</Link>
              <span>/Projects</span>
            </div>
            <hr className="bg-white w-full" />
          </div>

          <div className="flex-1 flex pl-5 md:pl-15 flex-col pt-4 pb-10">

            <div className="flex items-center gap-4 px-6 mb-6">
              <button
                onClick={() => setTab("all")}
                className={`cursor-pointer ${tab === "all"
                  ? "underline"
                  : "opacity-60 hover:opacity-100"
                  }`}
              >
                All
              </button>

              <span>-</span>

              <button
                onClick={() => setTab("development")}
                className={`cursor-pointer ${tab === "development"
                  ? "underline"
                  : "opacity-60 hover:opacity-100"
                  }`}
              >
                Development
              </button>

              <span>-</span>

              <button
                onClick={() => setTab("analysis")}
                className={`cursor-pointer ${tab === "analysis"
                  ? "underline"
                  : "opacity-60 hover:opacity-100"
                  }`}
              >
                Analysis
              </button>

              <span>-</span>

              <button
                onClick={() => setTab("ai")}
                className={`cursor-pointer ${tab === "ai"
                  ? "underline"
                  : "opacity-60 hover:opacity-100"
                  }`}
              >
                AI
              </button>
            </div>

            {/* projects */}
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                to={
                  project.type === "analysis"
                    ? `/case-study/${project.id}`
                    : project.type === "ai"
                    ? `/ai/${project.id}`
                    : `/projects/${project.id}`
                }
              >
                <div className="pb-2 p-6 border-b shadow-lg hover:bg-white hover:text-black transition-colors duration-300 select-none cursor-pointer">
                  <p className="text-sm md:text-md mb-2">
                    {project.tech} - {project.year}
                  </p>

                  <h2 className="text-3xl md:text-5xl font-medium">
                    {project.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </motion.div>
  );
}

export default Projects;
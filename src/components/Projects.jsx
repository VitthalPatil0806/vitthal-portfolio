import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SquareArrowOutUpRight } from "lucide-react";

import Section from "./Section";
import GlassCard from "./GlassCard";
import Modal from "./Modal";
import { resume } from "../data/resume";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const navigate = useNavigate();

  return (
    <Section title="Projects">
      {/* Project cards (full width) */}
      <div className="space-y-8">
        {resume.projects.map((project, index) => (
          <button
            key={index}
            onClick={() => setActiveProject(project)}
            className="w-full text-left"
          >
            <GlassCard className="hover:scale-[1.01] transition-transform">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {project.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                {project.shortDescription}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="
                      text-xs
                      px-3 py-1
                      rounded-full
                      bg-accent/10
                      text-accent
                      border border-accent/20
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </GlassCard>
          </button>
        ))}
      </div>

      {/* Project Modal */}
      <Modal
        open={!!activeProject}
        onClose={() => setActiveProject(null)}
      >
        {activeProject && (
          <div className="space-y-4">
            
            {/* Header with redirect link */}
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {activeProject.title}
              </h3>

              {/* Redirect to screenshots page */}
              <button
                onClick={() => navigate(`/projects/${activeProject.slug}`)}
                className="
                  inline-flex items-center gap-2
                  text-sm font-medium text-accent
                  hover:underline
                "
                title="See project screenshots"
              >
                See project screenshots
                <SquareArrowOutUpRight size={16} />
              </button>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {activeProject.description}
            </p>

            {/* Features */}
            <div>
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Key Features
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                {activeProject.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 pt-2">
              {activeProject.tech.map((tech, i) => (
                <span
                  key={i}
                  className="
                    text-xs
                    px-3 py-1
                    rounded-full
                    bg-accent/10
                    text-accent
                    border border-accent/20
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>
        )}
      </Modal>
    </Section>
  );
}

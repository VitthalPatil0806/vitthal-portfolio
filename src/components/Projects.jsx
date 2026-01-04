import { useState } from "react";
import Section from "./Section";
import GlassCard from "./GlassCard";
import Modal from "./Modal";
import { resume } from "../data/resume";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <Section title="Projects">
      <div className="space-y-8">
        {resume.projects.map((project, index) => (
          <button
            key={index}
            onClick={() => setActiveProject(project)}
            className="text-left"
          >
            <GlassCard className="h-full hover:scale-[1.01] transition-transform">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {project.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                {project.shortDescription}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="
                      text-xs
                      px-3 py-1
                      rounded-full
                      bg-accent/10 text-accent
                      border border-accent/20
                    "
                  >
                    {t}
                  </span>
                ))}
              </div>
            </GlassCard>
          </button>
        ))}
      </div>

      {/* Modal */}
      <Modal
        open={!!activeProject}
        onClose={() => setActiveProject(null)}
      >
        {activeProject && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              {activeProject.title}
            </h3>

            <p className="text-sm text-gray-700 dark:text-gray-300">
              {activeProject.description}
            </p>

            <div>
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Key Features
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                {activeProject.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {activeProject.tech.map((t, i) => (
                <span
                  key={i}
                  className="
                    text-xs
                    px-3 py-1
                    rounded-full
                    bg-accent/10 text-accent
                    border border-accent/20
                  "
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </Section>
  );
}

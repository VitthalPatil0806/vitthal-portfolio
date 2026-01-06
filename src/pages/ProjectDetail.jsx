import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { resume } from "../data/resume";
import GlassCard from "../components/GlassCard";
import Modal from "../components/Modal";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = resume.projects.find(p => p.slug === slug);
  const [activeImage, setActiveImage] = useState(null);

  if (!project) {
    return <p className="p-6">Project not found</p>;
  }

  return (
    <main
      className="
        max-w-7xl mx-auto px-6
        pt-32 pb-24
        space-y-10
      "
    >
      {/* Header */}
      <GlassCard>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          {project.title}
        </h1>

        <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-3xl">
          {project.description}
        </p>

        {/* Back link */}
        <Link
          to="/"
          className="
            inline-block mt-4
            text-sm font-medium text-accent
            hover:underline
          "
        >
          ← Back to Portfolio
        </Link>
      </GlassCard>

      {/* Screenshots */}
      <section>
        <h2 className="text-xl font-semibold mb-4">
          Project Screenshots
        </h2>

        <div
          className="
            grid grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-6
            gap-4
          "
        >
          {project.images.map((img, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(`${project.imagePath}/${img}`)}
              className="
                relative rounded-xl overflow-hidden
                border border-white/20
                aspect-video
                bg-black/5
              "
            >
              <img
                src={`${project.imagePath}/${img}`}
                alt={`${project.title} screenshot ${index + 1}`}
                className="
                  absolute inset-0
                  w-full h-full
                  object-cover
                  hover:scale-105 transition-transform
                "
              />
            </button>
          ))}
        </div>
      </section>

      {/* IMAGE LIGHTBOX (FIXED SIZE) */}
      <Modal open={!!activeImage} onClose={() => setActiveImage(null)}>
        {activeImage && (
          <div className="relative w-full h-[80vh] flex items-center justify-center">
            
            {/* Blurred background */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
              onClick={() => setActiveImage(null)}
            />

            {/* Fixed-size container */}
            <div
              className="
                relative z-10
                w-[90vw] max-w-5xl
                h-[75vh]
                bg-black
                rounded-xl
                flex items-center justify-center
                overflow-hidden
                shadow-2xl
              "
            >
              <img
                src={activeImage}
                alt="Project preview"
                className="
                  max-w-full max-h-full
                  object-contain
                "
              />
            </div>

          </div>
        )}
      </Modal>
    </main>
  );
}

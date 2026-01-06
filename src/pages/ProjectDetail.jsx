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
    <main className="max-w-7xl mx-auto px-6 pt-32 pb-24 space-y-10">
      
      {/* Header */}
      <GlassCard>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          {project.title}
        </h1>

        <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-3xl">
          {project.description}
        </p>

        <Link
          to="/"
          className="inline-block mt-4 text-sm font-medium text-accent hover:underline"
        >
          ← Back to Portfolio
        </Link>
      </GlassCard>

      {/* Screenshots grid */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Project Screenshots</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {project.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImage(`${project.imagePath}/${img}`)}
              className="relative aspect-video overflow-hidden rounded-xl border border-white/20"
            >
              <img
                src={`${project.imagePath}/${img}`}
                alt={`Screenshot ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}
      <Modal open={!!activeImage} onClose={() => setActiveImage(null)}>
        {activeImage && (
          <>
            {/* MOBILE VIEW (fullscreen, NO black frame) */}
            <div className="sm:hidden fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
              <img
                src={activeImage}
                alt="Preview"
                className="w-full h-full object-contain"
                onClick={() => setActiveImage(null)}
              />
            </div>

            {/* DESKTOP VIEW (framed, premium) */}
            <div className="hidden sm:flex fixed inset-0 items-center justify-center">
              <div
                className="absolute inset-0 bg-black/60 backdrop-blur-md"
                onClick={() => setActiveImage(null)}
              />

              <div className="relative z-10 w-[90vw] max-w-5xl h-[75vh] bg-black rounded-xl flex items-center justify-center shadow-2xl">
                <img
                  src={activeImage}
                  alt="Preview"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </>
        )}
      </Modal>
    </main>
  );
}

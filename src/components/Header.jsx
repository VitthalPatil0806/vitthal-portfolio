import GlassCard from "./GlassCard";
import { resume } from "../data/resume";
import profileImg from "../assets/Profile.jpeg";
import cv from "../assets/Vitthal-Resume.pdf";

export default function Header() {
  return (
    <GlassCard className="p-8">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        
        {/* Profile Image */}
        <div className="shrink-0">
          <img
            src={profileImg}
            alt="Vitthal Patil"
            className="
              w-32 h-32
              rounded-full
              object-cover
              border border-white/60
              shadow-[0_8px_25px_rgba(0,0,0,0.12)]
            "
          />
        </div>

        {/* Text Content */}
        <div className="space-y-4 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
            {resume.name}
          </h1>

          <p className="text-lg font-medium text-accent">
            {resume.role}
          </p>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            {resume.profile}
          </p>

<div className="flex flex-wrap items-center gap-4 pt-2 justify-center md:justify-start">
  <a
    href={`mailto:${resume.email}`}
    className="text-accent hover:underline text-sm font-medium"
  >
    {resume.email}
  </a>

  <a
    href={resume.linkedin}
    target="_blank"
    rel="noopener noreferrer"
    className="text-accent hover:underline text-sm font-medium"
  >
    LinkedIn
  </a>

<a
  href={cv}
  download
  className="
    inline-flex items-center
    px-4 py-2
    -mt-1
    rounded-full
    text-sm font-medium
    bg-accent text-white
    hover:bg-accent/90
    transition
  "
>
  Download Resume
</a>

</div>

        </div>

      </div>
    </GlassCard>
  );
}

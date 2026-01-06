import { useState } from "react";
import { resume } from "../data/resume";
import GlassCard from "./GlassCard";
import Modal from "./Modal";
import profileImg from "../assets/Profile.jpeg";
import cv from "../assets/Vitthal-Resume.pdf";

export default function Header() {
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <>
      <GlassCard className="flex flex-col md:flex-row items-center gap-8">
        
        {/* Profile Image */}
        <button
          onClick={() => setOpenProfile(true)}
          className="shrink-0 focus:outline-none"
          aria-label="Open profile image"
        >
          <img
            src={profileImg}   // ensure this path is correct
            alt={resume.name}
            className="
              w-28 h-28
              md:w-32 md:h-32
              rounded-full
              object-cover
              border border-white/40
              cursor-pointer
              hover:scale-105 transition-transform
            "
          />
        </button>

        {/* Text Content */}
        <div className="text-center md:text-left space-y-3">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            {resume.name}
          </h1>

          <p className="text-lg font-medium text-accent">
            {resume.role}
          </p>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            {resume.profile}
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
            <a
              href={`mailto:${resume.email}`}
              className="text-accent text-sm font-medium hover:underline"
            >
              {resume.email}
            </a>

            <a
              href={resume.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent text-sm font-medium hover:underline"
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
      </GlassCard>

      {/* PROFILE IMAGE MODAL */}
      <Modal open={openProfile} onClose={() => setOpenProfile(false)}>
        <div className="relative w-full flex items-center justify-center py-6">
          
          {/* Mobile-first sizing */}
          <div
            className="
              w-64 h-64
              sm:w-80 sm:h-80
              md:w-96 md:h-96
              rounded-full
              overflow-hidden
              bg-black
              shadow-2xl
            "
          >
            <img
              src={profileImg}
              alt={resume.name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>

        </div>
      </Modal>
    </>
  );
}

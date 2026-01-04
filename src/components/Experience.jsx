import { motion } from "framer-motion";
import Section from "./Section";
import GlassCard from "./GlassCard";
import { resume } from "../data/resume";

export default function Experience() {
  return (
    <Section title="Experience">
      <div className="relative">
        {/* Timeline grid */}
        <div className="grid grid-cols-[40px_1fr] gap-8">

          {/* Timeline column */}
          <div className="relative flex justify-center">
            {/* Vertical line */}
            <div className="absolute top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-700" />
          </div>

          {/* Cards column */}
          <div className="space-y-14">
            {resume.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative"
              >
                {/* Timeline dot */}
                <span
                  className="
                    absolute
                    -left-[57px]
                    top-6
                    w-3 h-3
                    rounded-full
                    bg-accent
                    ring-4 ring-soft dark:ring-softDark
                    z-20
                  "
                />

                <GlassCard>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {exp.role}
                    </h3>

                    <p className="text-sm font-medium text-accent">
                      {exp.company}
                    </p>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {exp.period}
                    </p>

                    <ul className="list-disc list-inside pt-2 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      {exp.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </Section>
  );
}

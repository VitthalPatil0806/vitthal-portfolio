import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import Section from "./Section";
import GlassCard from "./GlassCard";
import { resume } from "../data/resume";

export default function Education() {
  return (
    <Section title="Education">
      <div className="grid md:grid-cols-2 gap-8">
        {resume.education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <GlassCard className="h-full">
              <div className="flex gap-4 items-start">
                
                {/* Icon */}
                <div
                  className="
                    p-3 rounded-xl
                    bg-accent/10 text-accent
                    shrink-0
                  "
                >
                  <GraduationCap size={22} />
                </div>

                {/* Content */}
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {edu.degree}
                  </h3>

                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {edu.institute}
                  </p>

                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {edu.period}
                  </p>
                </div>

              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

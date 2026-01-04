import Section from "./Section";
import GlassCard from "./GlassCard";
import { resume } from "../data/resume";

function SkillGroup({ title, items }) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-gray-700">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {items.map((skill, index) => (
          <span
            key={index}
            className="
              px-3 py-1
              rounded-full
              text-sm
              bg-accent/10
              text-accent
              border border-accent/20
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const { skills } = resume;

  return (
    <Section title="Skills">
      <GlassCard>
        <div className="grid md:grid-cols-2 gap-10">
          <SkillGroup
            title="Programming Languages"
            items={skills.languages}
          />

          <SkillGroup
            title="Frontend Technologies"
            items={skills.frontend}
          />

          <SkillGroup
            title="Backend Technologies"
            items={skills.backend}
          />

          <SkillGroup
            title="Databases & Tools"
            items={[...skills.database, ...skills.tools]}
          />

          <SkillGroup
            title="Soft Skills"
            items={skills.softSkills}
          />

          <SkillGroup
            title="Manual Testing"
            items={skills.manualTesting}
          />

          <SkillGroup
            title="Cloud & DevOps Tools"
            items={skills.cloudTools}
          />
        </div>
      </GlassCard>
    </Section>
  );
}

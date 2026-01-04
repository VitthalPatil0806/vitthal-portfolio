import { motion } from "framer-motion";

export default function Section({ title, children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="space-y-8"
    >
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 tracking-tight">
        {title}
      </h2>

      {children}
    </motion.section>
  );
}

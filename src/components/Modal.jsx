import { motion } from "framer-motion";

export default function Modal({ open, onClose, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="
          relative z-10
          max-w-xl w-full mx-4
          bg-glass dark:bg-glassDark
          border border-white/40 dark:border-white/10
          rounded-xl
          p-6
          shadow-2xl
        "
      >
        {children}
      </motion.div>
    </div>
  );
}

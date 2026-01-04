export default function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`
        bg-glass dark:bg-glassDark
        backdrop-blur-xl
        border border-white/40 dark:border-white/10
        rounded-xl
        shadow-[0_10px_30px_rgba(0,0,0,0.08)]
        dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)]
        p-7 md:p-8
        ${className}
      `}
    >
      {children}
    </div>
  );
}

import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" }
];

export default function Topbar() {
  const [active, setActive] = useState("home");
  const [dark, setDark] = useState(
    document.documentElement.classList.contains("dark")
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);
  const [open, setOpen] = useState(false);

  /* Screen size detection */
  useEffect(() => {
    const onResize = () => {
      const mobile = window.innerWidth < 500;
      setIsMobile(mobile);
      if (!mobile) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* Section observer */
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-50
        bg-glass dark:bg-glassDark
        backdrop-blur-xl
        border-b border-white/40 dark:border-white/10
      "
    >
<nav className="max-w-5xl mx-auto px-6 h-16 flex items-center">
  
  {/* LEFT SIDE */}
  <div className="flex items-center gap-6">
    {/* Desktop nav items */}
    {!isMobile &&
      sections.map(s => (
        <button
          key={s.id}
          onClick={() => scrollTo(s.id)}
          className="relative text-sm font-medium tracking-wide text-gray-700 dark:text-gray-200"
        >
          {s.label}
          <span
            className={`
              absolute -bottom-2 left-0 right-0 h-[2px]
              bg-accent rounded-full transition-opacity
              ${active === s.id ? "opacity-100" : "opacity-0"}
            `}
          />
        </button>
      ))}

    {/* Mobile hamburger (LEFT) */}
    {isMobile && (
      <button
        onClick={() => setOpen(!open)}
        className="w-9 h-9 rounded-lg bg-accent/10 hover:bg-accent/20 transition flex items-center justify-center"
        aria-label="Menu"
      >
        ☰
      </button>
    )}
  </div>

  {/* SPACER */}
  <div className="flex-1" />

  {/* RIGHT SIDE */}
  <button
    onClick={toggleDark}
    className="w-9 h-9 rounded-full bg-accent/10 hover:bg-accent/20 transition"
    title="Toggle theme"
  >
    {dark ? "☀️" : "🌙"}
  </button>
</nav>


      {/* MOBILE DROPDOWN (LEFT-ALIGNED ITEMS) */}
      {isMobile && open && (
        <div
          className="
            bg-glass dark:bg-glassDark
            backdrop-blur-xl
            border-t border-white/30 dark:border-white/10
          "
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {sections.map(s => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="text-left text-sm font-medium tracking-wide text-gray-700 dark:text-gray-200"
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

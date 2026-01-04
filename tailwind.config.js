export default {
  darkMode: "class", // ✅ ADD THIS
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        glass: "rgba(255,255,255,0.65)",
        glassDark: "rgba(30,30,30,0.65)",
        accent: "#3B82F6",
        soft: "#F5F7FA",
        softDark: "#0F1115",
        muted: "#6B7280",
        mutedDark: "#9CA3AF"
      }
    }
  },
  plugins: []
};

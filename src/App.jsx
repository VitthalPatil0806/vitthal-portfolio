import { BrowserRouter, Routes, Route } from "react-router-dom";

import Topbar from "./components/Topbar";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import ProjectDetail from "./pages/ProjectDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Topbar />

      <Routes>
        {/* HOME / PORTFOLIO PAGE */}
        <Route
          path="/"
          element={
            <main className="max-w-5xl mx-auto px-6 py-28 space-y-24">
              <section id="home">
                <Header />
              </section>

              <section id="skills">
                <Skills />
              </section>

              <section id="experience">
                <Experience />
              </section>

              <section id="education">
                <Education />
              </section>

              <section id="projects">
                <Projects />
              </section>

              {/* Spacer for last section underline */}
              <section className="h-40" />
            </main>
          }
        />

        {/* ✅ PROJECT DETAILS PAGE (THIS WAS MISSING) */}
        <Route
          path="/projects/:slug"
          element={<ProjectDetail />}
        />
      </Routes>
    </BrowserRouter>
  );
}

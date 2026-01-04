import Topbar from "./components/Topbar";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";

export default function App() {
  return (
    <>
      <Topbar />

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

        {/* ✅ Projects LAST */}
        <section id="projects">
          <Projects />
        </section>
      </main>
    </>
  );
}

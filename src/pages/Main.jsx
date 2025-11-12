import Projects from "../components/Projects";
import About from "../components/About";
import Home from "../components/Home";
import Contact from "../components/Contact";

function Main() {
  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">

      <Home />

      <About />

      <Projects />

      <Contact />
    </main>
  );
}

export default Main;

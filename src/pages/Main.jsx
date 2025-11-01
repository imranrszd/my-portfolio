import Projects from "../components/Projects";
import About from "../components/About";
import Home from "../components/Home";

function Main() {
  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">

      <Home />

      <About />

      <Projects />

      <section className="snap-start h-screen white flex items-center justify-center">
        <h1 className="text-(--primary-color) text-5xl">Contacts</h1>
      </section>
    </main>
  );
}

export default Main;

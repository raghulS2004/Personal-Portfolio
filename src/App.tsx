import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Resume />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default App;

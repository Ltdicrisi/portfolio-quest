import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import './src/App.css';
import './components/stylesheet.css';
import Hero from './components/hero';

function App() {
return(
  <div className="app-container">
    <Navbar />
    <main>
      <section id="hero">
    <h1 className="hero-title">Lauren DiCrisi's Portfolio</h1>
    </section>
    <section className="about">
    <About />
    </section>
    <section className="projects">
   <Projects />
   </section>
   <section className="contact">
    <Contact />
    </section>
    </main>
    <Footer />
  </div>
);
}

export default App; //THIS LINE IS REQUIRED 

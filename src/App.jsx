import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import './App.css';
import './components/stylesheet.css';
import Hero from './components/Hero';

function App() {

return(
  <div className="app-container">
    <main>
    <Hero />
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

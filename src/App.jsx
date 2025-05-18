import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";

function App() {
return(
  <div>
    <Navbar />
    <h1 style={{color: 'white'}}>Lauren Hawthorne's Portfolio</h1>
    <About />
    <Projects />
    <Contact />
    <Footer />
  </div>
);
}

export default App; //THIS LINE IS REQUIRED 

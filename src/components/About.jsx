import dummyImage from '../assets/images/dummy.svg';

function About() {
    return (
      
  <section id="about" className="about-section">
    <hr className="divider" />
    <div className="about-container">
    <div className="about-image-wrapper">
      <img src={dummyImage}  alt="Portrait of Lauren Di Crisi" className="about-image" />
    </div>
    <div className="about-content">
      <h2 className="about-heading">About Me</h2>
      <p className="about-text">
        I’m Lauren Di Crisi, a Full Stack Developer with 15+ years of cross-industry experience spanning manufacturing, sales, utilities, and creative design. My journey began with printing presses and production workflows — now, I bring that real-world insight to code, specializing in backend development and cloud solutions that solve practical problems at scale.
      </p>
      <p className="about-text">
        Fueled by curiosity and caffeine, I thrive at the intersection of logic and creativity. Whether it’s optimizing a legacy system, building a streamlined dashboard, or crafting a clean, responsive UI — I’m here to build tech that works for the people using it.
      </p>
      <p className="about-text">
        Currently focused on AWS certification, MERN stack mastery, and preparing to step into a junior developer role where I can make meaningful impact from day one.
      </p>
    </div>
  </div>
</section>


    );
}

export default About;
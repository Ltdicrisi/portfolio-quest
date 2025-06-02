import "./Projects.css";

function Projects (){
    const projectList = [
         {
      title: "Work Order Tracker",
      description: "A fullstack web app forged in React, Node, and MongoDB—used to track and manage production floor tasks in real time.",
      tech: "React, Express, Node.js, MongoDB",
      github: "https://github.com/Ltdicrisi/work-order-tracker",
    },
    {
      title: "Portfolio Quest",
      description: "This very site! A showcase of skills and story, crafted in Vite + React and styled with whimsy.",
      tech: "Vite, React, CSS",
      github: "https://github.com/Ltdicrisi/portfolio-quest",
    },
    {
      title: "Curated Souf",
      description: "A curated collection and community spotlight platform, blending aesthetic flair with modern stack power.",
      tech: "Vite, React, Firebase (Planned)",
      github: "https://github.com/Ltdicrisi/portfolio-quest",
    },
    {
      title: "ShiftSync",
      description: "A communication hub for shift-based teams with task handoffs, alerts, and future SMS automation.",
      tech: "MERN Stack, AWS (Planned), Twilio",
      github: "https://github.com/Ltdicrisi/portfolio-quest",
    },
  ];
      return (
    <section className="projects-section">
      <h2 className="projects-title">Relics of My Journey</h2>
      <div className="project-grid">
        {projectList.map((proj, index) => (
          <div className="project-card" key={index}>
            {/* Optional image here */}
            {/* <img src={proj.image} alt={`${proj.title} screenshot`} /> */}
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <p><strong>Tech:</strong> {proj.tech}</p>
            <a href={proj.github} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
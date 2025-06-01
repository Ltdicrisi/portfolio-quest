function Projects (){
    return (
        <section className="projects">
            <h2>Relics of My Journey</h2>
            <div className="project-cards">

                {/* Project 1 */}
                <div className="project-card">
                    <h3>Work Order Tracker</h3>
                    <p>
                        A fullstack web app forged in React, Node, and MongoDB- used to track and manage production floor tasks in real time.
                    </p>
                    <p><strong>Tech:</strong>React, Express, Node.js, MongoDB </p>
                    <a href=" https://github.com/Ltdicrisi/work-order-tracker" target="_blank" >View on GitHub </a>
                </div>

                {/* Project 2 */}
                <div className="project-card">
                    <h3>Portfolio Quest</h3>
                    <p>
                        This very site! A showcases of skills and story, crafted in Vite+ React and styles with whimsy.
                    </p>
                    <p>
                    <strong>
                        Tech:
                    </strong>
                    Vite, React, CSS
                    </p>
                    <a href="https://github.com/Ltdicrisi/portfolio-quest" target="_blank">View on GitHub</a>
                </div>

                {/* Project 3 */}
                <div className="project-card">
                    <h3>Curated Souf</h3>
                    <p>
                        This very site! A showcases of skills and story, crafted in Vite+ React and styles with whimsy.
                    </p>
                    <p>
                    <strong>
                        Tech:
                    </strong>
                    Vite, React, CSS
                    </p>
                    <a href="https://github.com/Ltdicrisi/portfolio-quest" target="_blank">View on GitHub</a>
                </div>

                {/* Project 4 */}
                <div className="project-card">
                    <h3>ShiftSync</h3>
                    <p>
                        This very site! A showcases of skills and story, crafted in Vite+ React and styles with whimsy.
                    </p>
                    <p>
                    <strong>
                        Tech:
                    </strong>
                    Vite, React, CSS
                    </p>
                    <a href="https://github.com/Ltdicrisi/portfolio-quest" target="_blank">View on GitHub</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;
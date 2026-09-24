function Projects() {
  const projects = [
    {
      name: "Personal Portfolio Website",
      description:
        "A personal portfolio website built with React and TypeScript.",
      technologies: "React, TypeScript, Vite, Git, GitHub",
      github: "https://github.com/yangronghua/ronghua-portfolio",
    },
  ]

  return (
    <section className="projects-section" id="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <h3>{project.name}</h3>

            <p>{project.description}</p>

            <p className="project-technologies">
              {project.technologies}
            </p>

            <a
              className="project-link"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub →
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
function Skills() {
  const skills = [
    "PHP",
    "HTML",
    "MySQL",
    "JavaScript",
    "Python",
    "React",
    "Linux",
    "Git",
    "GitHub",
    "Elasticsearch",
  ]

  return (
    <section className="skills-section" id="skills">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
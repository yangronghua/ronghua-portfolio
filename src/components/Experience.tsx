function Experience() {
  return (
    <section className="experience-section" id="experience">
      <h2>Experience</h2>

      <div className="experience-list">
        <article className="experience-card">
          <div className="experience-header">
            <div>
              <h3>KIT512 Help Desk</h3>
              <p className="company">University of Tasmania</p>
            </div>

            <p className="date">July 2024 – October 2024</p>
          </div>

          <p className="location">Hobart, Australia</p>

          <ul>
            <li>
              Monitored computer lab equipment, network connections and
              peripherals to ensure they were working properly.
            </li>
            <li>
              Provided first-level IT support to staff and students,
              troubleshooting common technical issues and responding to
              enquiries in a timely manner.
            </li>
          </ul>
        </article>

        <article className="experience-card">
          <div className="experience-header">
            <div>
              <h3>PHP Engineer</h3>
              <p className="company">Mafengwo</p>
            </div>

            <p className="date">April 2016 – July 2018</p>
          </div>

          <p className="location">Beijing, China</p>

          <ul>
            <li>
              Developed and maintained PHP APIs for mobile app search
              functionality.
            </li>
            <li>
              Used Elasticsearch to support and optimize search performance.
            </li>
            <li>
              Worked with front-end developers to integrate and maintain
              application features.
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Experience
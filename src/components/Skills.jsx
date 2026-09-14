function Skills() {
  const hardSkills = [
    "HTML & CSS",
    "JavaScript",
    "Python",
    "PHP",
    "Java",
    "SQL",
    "Data Analysis",
    "Machine Learning",
    "UI/UX Design",
  ];

  const softSkills = [
    "Problem Solving",
    "Communication",
    "Teamwork",
    "Leadership",
    "Time Management",
    "Adaptability",
    "Attention to Detail",
  ];

  const software = [
    "VS Code",
    "GitHub",
    "Figma",
    "Python",
    "MySQL",
    "Jupyter Notebook",
    "Google Colab",
    "Laravel",
    "Arduino",
    "ESP32",
    "XAMPP",
    "NetBeans",
    "Microsoft Office",
    "Canva",
    "CapCut",
    "Android Studio",
    "Arduino IDE",
    "Adobe Dreamweaver",
    "Cisco Packet Tracer",
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        <div className="section-label">
          SKILLS
        </div>

        <div className="skills-header">
          <h2>
            Skills & <span>Tools.</span>
          </h2>

          <p>
            Kemampuan teknis, interpersonal, serta software dan
            tools yang saya gunakan dalam berbagai project.
          </p>
        </div>

        <div className="skills-grid">

          {/* HARD SKILLS */}
          <div className="skill-card">
            <div className="skill-card-number">
              01 / 03
            </div>

            <h3>
              Hard <span>Skills</span>
            </h3>

            <p className="skill-card-description">
              Kemampuan teknis yang digunakan dalam pengembangan
              aplikasi, pengolahan data, dan machine learning.
            </p>

            <div className="hard-skill-list">
              {hardSkills.map((skill, index) => (
                <div className="hard-skill-item" key={index}>
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p>{skill}</p>
                </div>
              ))}
            </div>
          </div>


          {/* SOFT SKILLS */}
          <div className="skill-card">
            <div className="skill-card-number">
              02 / 03
            </div>

            <h3>
              Soft <span>Skills</span>
            </h3>

            <p className="skill-card-description">
              Kemampuan interpersonal yang mendukung proses
              bekerja, berkomunikasi, dan menyelesaikan masalah.
            </p>

            <div className="soft-skill-list">
              {softSkills.map((skill, index) => (
                <div className="soft-skill-item" key={index}>
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p>{skill}</p>
                </div>
              ))}
            </div>
          </div>


          {/* SOFTWARE & TOOLS */}
          <div className="skill-card">
            <div className="skill-card-number">
              03 / 03
            </div>

            <h3>
              Software <span>& Tools</span>
            </h3>

            <p className="skill-card-description">
              Software dan tools yang pernah digunakan dalam
              pengembangan project akademik maupun profesional.
            </p>

            <div className="tools-list">
              {software.map((tool, index) => (
                <div className="tool-tag" key={index}>
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p>{tool}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;
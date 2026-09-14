function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="section-label">
          ABOUT ME
        </div>

        <div className="about-content">

          <div className="about-photo">
            <img
              src="/public/profile.jpg"
              alt="Yudistira"
            />
          </div>

          <div className="about-text">

            <h2>
              Hi, I'm <span>Yudistira</span>
            </h2>

            <h3>
              Informatics Graduate
            </h3>

            <p>
              Saya adalah lulusan Teknik Informatika Universitas
              Trilogi yang memiliki ketertarikan pada pengembangan
              web, pengolahan data, dan machine learning.
            </p>

            <p>
              Saya memiliki pengalaman dalam membangun aplikasi
              berbasis web, melakukan pengolahan dan analisis data,
              serta mengembangkan berbagai project teknologi melalui
              kegiatan akademik, organisasi, dan pengalaman profesional.
            </p>

            <p>
              Saya senang mempelajari teknologi baru dan
              mengembangkan solusi digital yang terstruktur,
              fungsional, dan dapat memberikan manfaat bagi pengguna.
            </p>

            <a
              href="/CV-Yudistira.pdf"
              className="about-cv"
              download="CV - YUDISTIRA(1).pdf"
            >
              Download CV
              <span>↗</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <p className="hero-greeting">
          HELLO, I'M YUDISTIRA
        </p>

        <h1>
          Informatics
          <span> Graduate.</span>
        </h1>

        <h2>
          Web Development • Data • Machine Learning
        </h2>

        <p className="hero-description">
          Saya membangun solusi digital melalui pengembangan web,
          pengolahan data, dan machine learning dengan pendekatan
          yang terstruktur dan berorientasi pada kebutuhan pengguna.
        </p>

        <div className="hero-buttons">

          <a href="#projects" className="btn-primary">
            View My Projects
          </a>

          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>

        </div>

      </div>


      <div className="hero-visual">

        <div className="visual-card">

          <div className="card-top">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="card-content">

            <p>&lt;developer /&gt;</p>

            <h3>
              DATA
              <br />
              + ML
              <br />
              + WEB
            </h3>

            <div className="card-line"></div>

            <p className="card-status">
              Building digital solutions.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
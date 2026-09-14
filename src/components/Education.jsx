import trilogiLogo from "../assets/trilogi.png";
import trilogi1 from "../assets/e1.png";
import trilogi4 from "../assets/e4.png";
import trilogi3 from "../assets/e3.png";
import trilogi2 from "../assets/e2.png";

function Education() {
  return (
    <section className="education" id="education">
      <div className="education-container">

        <div className="section-label">EDUCATION</div>

        <div className="education-header">
          <h2>
            Education<span>.</span>
          </h2>

          <p>
            Latar belakang pendidikan dan project akademik
            yang menjadi bagian dari perjalanan saya di bidang teknologi.
          </p>
        </div>

        <div className="education-content">

          {/* LEFT - EDUCATION INFORMATION */}
          <div className="education-info">

            <div className="education-logo">
              <img
                src={trilogiLogo} alt=""
              />
            </div>

            <div className="education-main">
              <span className="education-label">
                UNDERGRADUATE
              </span>

              <h3>Universitas Trilogi</h3>

              <h4>S1 Teknik Informatika</h4>

              <div className="education-meta">
                <div>
                  <span>PERIOD</span>
                  <p>2022 — 2026</p>
                </div>

                <div>
                  <span>GPA</span>
                  <p>3.70 / 4.00</p>
                </div>
              </div>
            </div>

            <div className="thesis">
              <span className="thesis-label">
                UNDERGRADUATE THESIS PROJECT
              </span>

              <h4>
                DETEKSI MADU ASLI DAN CAMPURAN MENGGUNAKAN MULTI-SENSOR BERBASIS K-NEAREST NEIGHBOR DAN RANDOM FOREST
              </h4>

              <p>
                Project penelitian yang mengembangkan sistem klasifikasi
                madu menggunakan kombinasi beberapa sensor dan machine
                learning.
              </p>
            </div>

          </div>


          {/* RIGHT - PHOTO COLLAGE */}
          <div className="education-collage">

            <div className="collage-image collage-image-1">
              <img
                src={trilogi1} alt=""
              />
            </div>

            <div className="collage-image collage-image-2">
              <img
                src={trilogi4} alt=""
              />
            </div>

            <div className="collage-image collage-image-3">
              <img
                src={trilogi3} alt=""
              />
            </div>

            <div className="collage-logo">
              <img
                src={trilogi2} alt=""
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;
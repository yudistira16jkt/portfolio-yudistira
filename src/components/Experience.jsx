import esdmImage from "../assets/esdm2.jpg";
import kkpImage from "../assets/kkp1.jpg";
import trilogiImage from "../assets/trilogi.jpg";

function Experience() {
  const experiences = [
    {
      year: "2026",
      company: "Kementerian BPSDM ESDM",
      role: "IT Intern",
      description:
        "Redesign website dengan memperbaiki layout, navigasi, dan komponen antarmuka serta mengimplementasikan rancangan front-end berdasarkan kebutuhan pengguna.",
      image: esdmImage,
    },

    {
      year: "2025 — 2026",
      company: "Kementerian Kelautan dan Perikanan",
      role: "IT Intern",
      description:
        "Berpartisipasi dalam perancangan dan pengembangan sistem informasi berbasis web, termasuk pengembangan fitur Sistem Kinerja DJPRL serta konfigurasi Windows dan penyusunan SOP.",
      image: kkpImage
    },

    {
      year: "2024",
      company: "Universitas Trilogi",
      role: "Teaching Assistant",
      description:
        "Melakukan anotasi dan pelabelan ribuan gambar, observasi CCTV selama 5 hari, ekstraksi informasi tanggal, waktu, individu, dan aktivitas, serta menyusun dan memeriksa konsistensi dataset.",
      image: trilogiImage
    },
  ];

  return (
    <section className="experience" id="experience">

      <div className="experience-container">

        <div className="section-label">
          EXPERIENCE
        </div>

        <div className="experience-header">

          <h2>
            Experience<span>.</span>
          </h2>

          <p>
            Pengalaman akademik dan profesional yang membentuk
            kemampuan saya dalam teknologi, pengembangan sistem,
            dan pengolahan data.
          </p>

        </div>


        <div className="experience-list">

          {experiences.map((experience, index) => (

            <article
              className="experience-item"
              key={index}
            >

              {/* YEAR */}

              <div className="experience-year">
                {experience.year}
              </div>


              {/* IMAGE */}

              <div className="experience-image">

                <img
                  src={experience.image}
                  alt={`${experience.company} experience`}
                />

                <div className="experience-image-overlay">
                  <span>VIEW EXPERIENCE</span>
                  <span>↗</span>
                </div>

              </div>


              {/* CONTENT */}

              <div className="experience-main">

                <div className="experience-top">

                  <span className="experience-number">
                    0{index + 1}
                  </span>

                  <span className="experience-role">
                    {experience.role}
                  </span>

                </div>

                <h3>
                  {experience.company}
                </h3>

                <p>
                  {experience.description}
                </p>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Experience;
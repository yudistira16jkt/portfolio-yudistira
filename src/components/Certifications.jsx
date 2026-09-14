import { Link } from "react-router-dom";

function Certifications() {
  const certifications = [
    {
      number: "01",
      title: "Badan Pengembangan Sumber Daya Manusia ESDM",
      issuer: "BPSDM ESDM",
      category: "User Interface Design",
      year: "2026",
      image: "/certificates/esdm.jpg",
    },
    {
      number: "02",
      title: "Himpunan Mahasiswa Teknik Informatika",
      issuer: "Universitas Trilogi",
      category: "Leadership",
      year: "2025",
      image: "/certificates/wakil.jpg",
    },
    {
      number: "03",
      title: "APAC Solution Challenge 2025",
      issuer: "Google Developer Groups × Hack2skill",
      category: "Technology & AI",
      year: "2025",
      image: "/certificates/apac-solution-challenge.jpg",
    },
    {
      number: "04",
      title: "Technical Camp 2024",
      issuer: "Universitas Trilogi",
      category: "Leadership",
      year: "2024",
      image: "/certificates/technical-camp-2024.jpg",
    },
    {
      number: "05",
      title: "Penanggung Jawab",
      issuer: "HIMATIKA Universitas Trilogi",
      category: "Leadership",
      year: "2024",
      image: "/certificates/penanggung-jawab.jpg",
    },
    {
      number: "06",
      title: "Company Visit 2025",
      issuer: "GDGOC Trilogi × HIMATIKA",
      category: "Committee",
      year: "2025",
      image: "/certificates/company-visit-2025.jpg",
    },
  ];

  return (
    <section className="certifications" id="certifications">
      <div className="certifications-container">

        <div className="section-label">
          CERTIFICATIONS
        </div>

        <div className="certifications-header">
          <div>
            <h2>Certifications & Achievements</h2>
          </div>

          <p>
            Sertifikasi, pencapaian, dan pengalaman organisasi
            yang mendukung perkembangan teknis dan profesional saya.
          </p>
        </div>

        <div className="certifications-grid">
          {certifications.map((certificate) => (
            <article
              className="certificate-card"
              key={certificate.number}
            >
              <div className="certificate-image">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                />
              </div>

              <div className="certificate-content">

                <div className="certificate-top">
                  <span>{certificate.number}</span>
                  <span>{certificate.year}</span>
                </div>

                <span className="certificate-category">
                  {certificate.category}
                </span>

                <h3>{certificate.title}</h3>

                <p>{certificate.issuer}</p>

                <a
                  href={certificate.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-link"
                >
                  View Certificate
                  <span>↗</span>
                </a>

              </div>
            </article>
          ))}
        </div>

        <div className="certifications-more">
          <Link to="/certifications">
  View All Certifications
  <span>↗</span>
</Link>
        </div>

      </div>
    </section>
  );
}

export default Certifications;
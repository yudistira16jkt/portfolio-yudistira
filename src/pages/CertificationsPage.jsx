import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function CertificationsPage() {
  const certifications = [
    {
      number: "01",
      title: "APAC Solution Challenge 2025",
      issuer: "Google Developer Groups × Hack2skill",
      category: "Technology & AI",
      year: "2025",
      file: "/certificates/apac-solution-challenge.jpg",
      type: "image",
    },
    {
      number: "02",
      title: "Company Visit 2025",
      issuer: "GDGOC Trilogi × HIMATIKA",
      category: "Committee",
      year: "2025",
      file: "/certificates/company-visit-2025.jpg",
      type: "image",
    },
    {
      number: "03",
      title: "Technical Camp 2024",
      issuer: "Universitas Trilogi",
      category: "Leadership",
      year: "2024",
      file: "/certificates/technical-camp-2024.jpg",
      type: "image",
    },
    {
      number: "04",
      title: "Certificate of Appreciation — BPSDM",
      issuer: "HIMATIKA Universitas Trilogi",
      category: "Achievement",
      year: "2024",
      file: "/certificates/bpsdm-appreciation.jpg",
      type: "image",
    },
    {
      number: "05",
      title: "Penanggung Jawab",
      issuer: "HIMATIKA Universitas Trilogi",
      category: "Leadership",
      year: "2024",
      file: "/certificates/penanggung-jawab.jpg",
      type: "image",
    },
    {
      number: "06",
      title: "T-ESPORT 4.0",
      issuer: "HIMATIKA × BEM Universitas Trilogi",
      category: "Event & Operations",
      year: "2025",
      file: "/certificates/t-esport-2025.jpg",
      type: "image",
    },
    {
      number: "07",
      title: "Navigating The Digital Ethics Landscape",
      issuer: "Cyber University × UPNM Malaysia",
      category: "Technology",
      year: "2023",
      file: "/certificates/digital-ethics-2023.jpg",
      type: "image",
    },
    {
      number: "08",
      title: "Enterprise Architecture pada Industry 5.0",
      issuer: "BRI Institute × Cyber University",
      category: "Technology",
      year: "2022",
      file: "/certificates/enterprise-architecture-2022.jpg",
      type: "image",
    },
    {
      number: "09",
      title: "Signifikansi Audit terhadap Pelaksanaan GCG dan Investasi",
      issuer: "Cyber University",
      category: "Webinar",
      year: "2023",
      file: "/certificates/audit-gcg-2023.jpg",
      type: "image",
    },
    {
      number: "10",
      title: "Anggota Divisi Keilmuan HIMATIKA",
      issuer: "HIMATIKA Universitas Trilogi",
      category: "Organization",
      year: "2022–2023",
      file: "/certificates/himatika-keilmuan-2022.jpg",
      type: "image",
    },
    {
      number: "11",
      title: "Technical Camp 2023",
      issuer: "Teknik Informatika Universitas Trilogi",
      category: "Participation",
      year: "2023",
      file: "/certificates/technical-camp-2023.jpg",
      type: "image",
    },
    {
      number: "12",
      title: "Technology Camping Teknik Informatika",
      issuer: "Teknik Informatika Universitas Trilogi",
      category: "Participation",
      year: "2023",
      file: "/certificates/technology-camping-2023.jpg",
      type: "image",
    },
    {
      number: "13",
      title: "Pengenalan Kehidupan Kampus Mahasiswa Baru",
      issuer: "Universitas Trilogi",
      category: "Participation",
      year: "2022",
      file: "/certificates/pkkmb-2022.jpg",
      type: "image",
    },
        {
      number: "14",
      title: "Badan Pengembangan Sumber Daya Manusia ESDM",
      issuer: "BPSDM ESDM",
      category: "User Interface Design",
      year: "2026",
      file: "/certificates/esdm.jpg",
      type: "image",
    },
        {
      number: "15",
      title: "Himpunan Mahasiswa Teknik Informatika",
      issuer: "Universitas Trilogi",
      category: "Leadership",
      year: "2025",
      file: "/certificates/wakil.jpg",
      type: "image",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="certifications-page">
        <div className="certifications-page-container">

          <Link to="/" className="back-projects">
            ← Back to Home
          </Link>

          <div className="certifications-page-header">
            <div className="section-label">
              CERTIFICATIONS
            </div>

            <h1>
              Certifications
              <span> & Achievements.</span>
            </h1>

            <p>
              Koleksi sertifikasi, pencapaian, pengalaman organisasi,
              dan partisipasi kegiatan yang mendukung perkembangan
              teknis dan profesional saya.
            </p>
          </div>

          <div className="all-certifications-grid">

            {certifications.map((certificate) => (
              <article
                className="all-certificate-card"
                key={certificate.number}
              >

                <div className="all-certificate-preview">

                  {certificate.type === "image" ? (
                    <img
                      src={certificate.file}
                      alt={certificate.title}
                    />
                  ) : (
                    <div className="pdf-preview">
                      <span>PDF</span>
                      <p>Certificate Document</p>
                    </div>
                  )}

                </div>

                <div className="all-certificate-content">

                  <div className="all-certificate-top">
                    <span>{certificate.number}</span>
                    <span>{certificate.year}</span>
                  </div>

                  <span className="all-certificate-category">
                    {certificate.category}
                  </span>

                  <h2>{certificate.title}</h2>

                  <p>{certificate.issuer}</p>

                  <a
                    href={certificate.file}
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

        </div>
      </main>
    </>
  );
}

export default CertificationsPage;
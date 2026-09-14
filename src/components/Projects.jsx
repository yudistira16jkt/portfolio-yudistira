import { Link } from "react-router-dom";

function Projects() {
  const projects = [
    {
      number: "01",
      category: "MACHINE LEARNING • IoT",
      title: "Honey Detection System",
      slug: "honey-detection",
      description:
        "Sistem klasifikasi madu asli dan campuran menggunakan multi-sensor berbasis machine learning. Menggabungkan pengambilan data sensor dengan proses klasifikasi menggunakan algoritma machine learning.",
      tech: ["Python", "Scikit-learn", "Random Forest", "ESP32"],
      image: "/honey-detection.jpg",
      featured: true,
    },

        {
      number: "02",
      category: "WEB DEVELOPMENT • PROFESSIONAL",
      title: "Sistem Kinerja DJPRL Kementerian Kelautan dan Perikanan",
      slug: "djprl-system",
      description:
        "Pengembangan sistem informasi berbasis web untuk mendukung kebutuhan sistem kinerja DJPRL selama pelaksanaan kegiatan magang.",
      tech: ["Web Development", "System Development"],
      image: "/kkp.jpg",
    },

    {
      number: "03",
      category: "UI/UX • FRONT-END",
      title: "Website BPSDM ESDM Redesign",
      slug: "bpsdm-redesign",
      description:
        "Redesign tampilan website dengan memperbaiki layout, navigasi, dan komponen antarmuka serta mengimplementasikan rancangan front-end.",
      tech: ["UI/UX", "Figma", "Front-End"],
      image: "/esdm.jpg",
    },
    
    {
      number: "04",
      category: "MACHINE LEARNING • WEB",
      title: "Text Emotion Detection",
      slug: "text-emotion",
      description:
        "Aplikasi berbasis web untuk mendeteksi emosi dari teks menggunakan TF-IDF dan Logistic Regression.",
      tech: ["Python", "TF-IDF", "Logistic Regression", "Flask"],
      image: "/emotion-detection.jpg",
    },

    {
      number: "05",
      category: "WEB DEVELOPMENT",
      title: "Travel Website",
      slug: "travel-website",
      description:
        "Website travel yang memungkinkan pengguna mencari dan melakukan pemesanan paket perjalanan secara online serta mendukung pengelolaan data pelanggan dan laporan penjualan.",
      tech: ["HTML", "CSS", "JavaScript", "MySQL", "Laravel"],
      image: "/travel.jpg",
    },

    {
      number: "06",
      category: "APPLICATION",
      title: "Cinema Ticket Booking",
      slug: "cinema-ticket",
      description:
        "Aplikasi pemesanan tiket bioskop yang dirancang untuk memudahkan pengguna melakukan pemesanan tiket secara praktis.",
      tech: ["Java", "NetBeans", "Database"],
      image: "/bioskop.jpg",
    },

    {
      number: "07",
      category: "UI/UX DESIGN",
      title: "Game Top Up Website",
      slug: "game-topup",
      description:
        "Perancangan UI/UX website top up game dengan tampilan modern, rapi, dan memberikan kesan terpercaya kepada pengguna.",
      tech: ["Figma", "UI Design", "Prototyping"],
      image: "/game.jpg",
    },

    {
      number: "08",
      category: "HARDWARE • ENGINEERING",
      title: "Drone Project",
      slug: "drone-project",
      description:
        "Project tim dalam merancang dan mengembangkan prototype drone sebagai bagian dari project engineering.",
      tech: ["Hardware", "Electronics", "Team Project"],
      image: "/drone.jpg",
    },

    {
      number: "09",
      category: "APPLICATION",
      title: "Coffee Shop Application",
      slug: "coffee-shop",
      description:
        "Aplikasi coffee shop yang dikembangkan sebagai project tim untuk menerapkan konsep pengembangan aplikasi dan pengelolaan data.",
      tech: ["Java", "Database", "Application"],
      image: "/coffee.jpg",
    },
  ];

  return (
    <section className="projects" id="projects">

      <div className="projects-container">

        <div className="section-label">
          SELECTED WORK
        </div>

        <div className="projects-header">

          <div>
            <h2>Projects</h2>
          </div>

          <p>
            A selection of projects covering machine learning,
            web development, UI/UX, applications, and hardware.
          </p>

        </div>


        <div className="projects-grid">

          {projects.map((project) => (

            <article
              className={`project-card ${
                project.featured ? "project-featured" : ""
              }`}
              key={project.number}
            >

              <div className="project-image">

                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                  />
                ) : (
                  <div className="project-placeholder">

                    <span>
                      PROJECT {project.number}
                    </span>

                  </div>
                )}

              </div>


              <div className="project-info">

                <div className="project-top">

                  <span className="project-number">
                    {project.number}
                  </span>

                  <span className="project-category">
                    {project.category}
                  </span>

                </div>


                <h3>
                  {project.title}
                </h3>


                <p className="project-description">
                  {project.description}
                </p>


                <div className="project-tech">

                  {project.tech.map((item) => (
                    <span key={item}>
                      {item}
                    </span>
                  ))}

                </div>

<Link
  to={`/project/${project.slug}`}
  className="project-link"
>
  View Project
  <span>↗</span>
</Link>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;
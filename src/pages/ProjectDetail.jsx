import { Link, useParams } from "react-router-dom";

function ProjectDetail() {
  const { slug } = useParams();

  const projects = {
    "honey-detection": {
      number: "01",
      category: "MACHINE LEARNING • IoT",
      title: "Honey Detection System",
      description:
        "Sistem klasifikasi madu asli dan campuran menggunakan multi-sensor berbasis machine learning.",

      image: "/honey-detection.jpg",

      overview:
        "Project ini merupakan sistem yang dirancang untuk membantu proses klasifikasi madu asli dan madu campuran dengan memanfaatkan data dari beberapa sensor dan algoritma machine learning.",

      problem:
        "Identifikasi madu secara manual dapat menjadi proses yang subjektif dan membutuhkan pengujian lebih lanjut. Oleh karena itu, project ini dikembangkan sebagai pendekatan berbasis sensor dan machine learning.",

      objective:
        "Membangun sistem yang mampu memanfaatkan karakteristik data sensor untuk melakukan klasifikasi madu asli dan campuran.",

      technology: [
        "ESP32",
        "TCS3200",
        "MQ-2",
        "Soil Moisture Sensor",
        "Python",
        "Scikit-learn",
        "Random Forest",
        "KNN",
      ],
    },

    "text-emotion": {
      number: "02",
      category: "MACHINE LEARNING • WEB",
      title: "Text Emotion Detection",
      description:
        "Aplikasi berbasis web untuk mendeteksi emosi dari teks menggunakan machine learning.",

      image: "/emotion-detection.jpg",

      overview:
        "Aplikasi ini dikembangkan untuk melakukan klasifikasi emosi berdasarkan teks yang diberikan oleh pengguna.",

      problem:
        "Teks memiliki konteks dan pola bahasa yang beragam sehingga diperlukan pendekatan pemrosesan teks sebelum data dapat digunakan oleh model machine learning.",

      objective:
        "Membangun sistem klasifikasi emosi dari teks menggunakan preprocessing, TF-IDF, dan Logistic Regression.",

      technology: [
        "Python",
        "Pandas",
        "TF-IDF",
        "Logistic Regression",
        "Scikit-learn",
        "Flask",
      ],
    },

    "travel-website": {
      number: "03",
      category: "WEB DEVELOPMENT",
      title: "Travel Website",
      description:
        "Website travel untuk pencarian dan pemesanan paket perjalanan secara online.",

      image: "/travel.jpg",

      overview:
        "Project website travel dikembangkan untuk memberikan pengalaman kepada pengguna dalam mencari dan melakukan pemesanan paket perjalanan.",

      problem:
        "Pengguna membutuhkan sistem yang dapat membantu proses pencarian informasi dan pemesanan paket perjalanan secara lebih praktis.",

      objective:
        "Membangun website travel yang memiliki fitur pencarian, pemesanan, pengelolaan data pelanggan, dan laporan penjualan.",

      technology: [
        "HTML",
        "CSS",
        "JavaScript",
        "MySQL",
        "Laravel",
      ],
    },

    "cinema-ticket": {
      number: "04",
      category: "APPLICATION",
      title: "Cinema Ticket Booking",
      description:
        "Aplikasi pemesanan tiket bioskop untuk memudahkan pengguna melakukan pemesanan tiket.",

      image: "/bioskop.jpg",

      overview:
        "Aplikasi ini dibuat sebagai project pengembangan aplikasi pemesanan tiket bioskop.",

      problem:
        "Proses pemesanan tiket membutuhkan sistem yang dapat mengelola informasi film dan pemesanan pengguna secara terstruktur.",

      objective:
        "Membangun aplikasi yang dapat membantu proses pemesanan tiket bioskop.",

      technology: [
        "Java",
        "NetBeans",
        "Database",
      ],
    },

    "game-topup": {
      number: "05",
      category: "UI/UX DESIGN",
      title: "Game Top Up Website",
      description:
        "Perancangan UI/UX website top up game dengan tampilan modern dan terpercaya.",

      image: "/game.jpg",

      overview:
        "Project ini berfokus pada perancangan antarmuka website top up game menggunakan pendekatan UI/UX.",

      problem:
        "Website layanan digital membutuhkan tampilan yang jelas, mudah digunakan, dan mampu memberikan rasa percaya kepada pengguna.",

      objective:
        "Merancang interface website top up game yang modern, rapi, dan mudah digunakan.",

      technology: [
        "Figma",
        "UI Design",
        "UX Design",
        "Prototyping",
      ],
    },

    "drone-project": {
      number: "06",
      category: "HARDWARE • ENGINEERING",
      title: "Drone Project",
      description:
        "Project tim dalam merancang dan mengembangkan prototype drone.",

      image: "/drone.jpg",

      overview:
        "Project drone dilakukan secara berkelompok sebagai bagian dari kegiatan engineering dan perancangan perangkat.",

      problem:
        "Perancangan perangkat membutuhkan integrasi antara komponen hardware dan desain sistem.",

      objective:
        "Merancang prototype drone sebagai implementasi konsep engineering dan hardware.",

      technology: [
        "Hardware",
        "Electronics",
        "Team Project",
      ],
    },

    "coffee-shop": {
      number: "07",
      category: "APPLICATION",
      title: "Coffee Shop Application",
      description:
        "Aplikasi coffee shop yang dikembangkan sebagai project tim.",

      image: "/coffee.jpg",

      overview:
        "Aplikasi ini dikembangkan untuk menerapkan konsep pengembangan aplikasi dan pengelolaan data.",

      problem:
        "Sebuah aplikasi coffee shop membutuhkan sistem yang dapat mengelola informasi produk dan proses transaksi secara terstruktur.",

      objective:
        "Mengembangkan aplikasi coffee shop sebagai implementasi konsep aplikasi dan database.",

      technology: [
        "Java",
        "Database",
        "Application",
      ],
    },

    "djprl-system": {
      number: "08",
      category: "WEB DEVELOPMENT • PROFESSIONAL",
      title: "Sistem Kinerja DJPRL",
      description:
        "Pengembangan sistem informasi berbasis web untuk mendukung kebutuhan sistem kinerja DJPRL.",

      image: "/kkp.jpg",

      overview:
        "Project ini dikerjakan dalam kegiatan magang dan berfokus pada pengembangan sistem informasi berbasis web.",

      problem:
        "Kebutuhan pengelolaan informasi memerlukan sistem berbasis web yang terstruktur dan mudah digunakan.",

      objective:
        "Berpartisipasi dalam perancangan dan pengembangan fitur pada sistem informasi berbasis web.",

      technology: [
        "Web Development",
        "System Development",
      ],
    },

    "bpsdm-redesign": {
      number: "09",
      category: "UI/UX • FRONT-END",
      title: "Website BPSDM ESDM Redesign",
      description:
        "Redesign website dengan fokus pada layout, navigasi, komponen, dan implementasi front-end.",

      image: "/esdm.jpg",

      overview:
        "Project redesign dilakukan untuk meningkatkan tampilan dan struktur antarmuka website.",

      problem:
        "Struktur layout dan navigasi website perlu disesuaikan agar lebih jelas dan mudah digunakan.",

      objective:
        "Merancang ulang UI website serta mengimplementasikan rancangan front-end berdasarkan kebutuhan pengguna.",

      technology: [
        "UI/UX",
        "Figma",
        "Front-End",
      ],
    },
  };

  const project = projects[slug];

  if (!project) {
    return (
      <div className="project-not-found">
        <h1>Project Not Found</h1>

        <Link to="/#projects">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <main className="project-detail">

      <div className="project-detail-container">

        <Link
          to="/#projects"
          className="back-projects"
        >
          ← Back to Projects
        </Link>


        <div className="project-detail-header">

          <span className="project-detail-number">
            {project.number}
          </span>

          <span className="project-detail-category">
            {project.category}
          </span>

          <h1>
            {project.title}
          </h1>

          <p>
            {project.description}
          </p>

        </div>


        {project.image && (
          <div className="project-detail-image">

            <img
              src={project.image}
              alt={project.title}
            />

          </div>
        )}


        <div className="project-detail-content">

          <section>
            <span className="detail-label">
              01 — OVERVIEW
            </span>

            <h2>
              About the project
            </h2>

            <p>
              {project.overview}
            </p>
          </section>


          <section>
            <span className="detail-label">
              02 — PROBLEM
            </span>

            <h2>
              The problem
            </h2>

            <p>
              {project.problem}
            </p>
          </section>


          <section>
            <span className="detail-label">
              03 — OBJECTIVE
            </span>

            <h2>
              Project objective
            </h2>

            <p>
              {project.objective}
            </p>
          </section>


          <section>

            <span className="detail-label">
              04 — TECHNOLOGY
            </span>

            <h2>
              Technologies used
            </h2>

            <div className="detail-tech">

              {project.technology.map((item) => (
                <span key={item}>
                  {item}
                </span>
              ))}

            </div>

          </section>

        </div>


        <div className="project-detail-footer">

          <Link
            to="/#projects"
            className="back-projects"
          >
            ← Back to Projects
          </Link>

        </div>

      </div>

    </main>
  );
}

export default ProjectDetail;
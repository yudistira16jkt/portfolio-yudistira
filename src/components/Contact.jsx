import waImage from "../assets/wa.jpg";
import igImage from "../assets/ig.jpg";
import inImage from "../assets/in.jpg";
import mailImage from "../assets/mail.jpg";

function Contact() {
  const contacts = [
    {
      name: "WhatsApp",
      value: "081298258048",
      link: "https://wa.me/6281298258048",
      image: waImage,
    },
    {
      name: "Instagram",
      value: "yudiis.tiira",
      link: "https://instagram.com/yudiis.tiira",
      image: igImage,
    },
    {
      name: "LinkedIn",
      value: "Yudistira",
      link: "https://linkedin.com/in/yudistira-",
      image: inImage,
    },
    {
      name: "Email",
      value: "yudistira16jkt@gmail.com",
      link: "mailto:yudistira16jkt@gmail.com",
      image: mailImage,
    },
  ];

  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <div className="section-label">CONTACT</div>

        <div className="contact-header">
          <h2>
            Let's work
            <br />
            <span>together.</span>
          </h2>

          <p>
            Punya project, peluang kerja, atau ingin berdiskusi?
            Silakan hubungi saya melalui salah satu platform berikut.
          </p>
        </div>

        <div className="contact-socials">
          {contacts.map((contact, index) => (
            <a
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social"
              key={index}
            >
              <div className="contact-icon">
                <img
                  src={contact.image}
                  alt={`${contact.name} logo`}
                />
              </div>

              <div className="contact-info">
                <span>{contact.name}</span>
                <p>{contact.value}</p>
              </div>

              <div className="contact-arrow">
                ↗
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Contact;
import { useEffect } from "react";

function ScrollRevealObserver() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      const elements = section.querySelectorAll(
        ".section-label, h1, h2, h3, h4, p, a, img, " +
        ".about-photo, .about-text, " +
        ".skill-card, .project-card, " +
        ".experience-item, .experience-image, .experience-main, " +
        ".education-info, .education-collage, " +
        ".collage-image, .collage-logo, " +
        ".certificate-card, .contact-social"
      );

      elements.forEach((element, index) => {
        element.classList.add("scroll-reveal-item");

        element.style.setProperty(
          "--reveal-delay",
          `${Math.min(index * 80, 640)}ms`
        );
      });
    });

    const elements = document.querySelectorAll(".scroll-reveal-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-reveal-show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}

export default ScrollRevealObserver;
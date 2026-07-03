const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const whatsappBtn = document.getElementById("whatsappBtn");
const contactForm = document.getElementById("contactForm");

// Cambiá este número por el WhatsApp real de Bekantor.
// Formato recomendado Argentina: 549 + característica + número.
// Ejemplo Córdoba: 549351XXXXXXX
const whatsappNumber = "5493510000000";

function closeMobileMenu() {
  if (!navLinks || !menuToggle) return;

  navLinks.classList.remove("active");
  document.body.classList.remove("menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
}

function openWhatsApp(message) {
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${5493516437252}?text=${encodedMessage}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

// Menú mobile
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");
    document.body.classList.toggle("menu-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });
}

// Botón WhatsApp de la landing
if (whatsappBtn) {
  whatsappBtn.addEventListener("click", (event) => {
    event.preventDefault();

    openWhatsApp(
      "Hola, quiero consultar cómo Bekantor podría ayudarme a entender mejor mi negocio."
    );
  });
}

// Formulario de contacto de la landing
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name")?.value.trim() || "";
    const business = document.getElementById("business")?.value.trim() || "";
    const industry = document.getElementById("industry")?.value.trim() || "";
    const message = document.getElementById("message")?.value.trim() || "";

    const finalMessage = `Hola, quiero consultar por Bekantor.

Nombre: ${name}
Empresa o negocio: ${business}
Rubro: ${industry || "No especificado"}

Qué quiero entender o mejorar:
${message || "Me interesa entender mejor mi negocio y detectar oportunidades de mejora."}`;

    openWhatsApp(finalMessage);
    contactForm.reset();
  });
}

// Animación al hacer scroll
const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 90) {
      element.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll, { passive: true });
window.addEventListener("load", revealOnScroll);
document.addEventListener("DOMContentLoaded", revealOnScroll);
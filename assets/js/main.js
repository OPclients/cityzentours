const pages = [
  ["Home", "index.html"],
  ["Tours", "tours.html"],
  ["Transport", "transport.html"],
  ["About", "about.html"],
  ["Contact", "contact.html"],
];

const legalLinks = [
  ["Privacy Policy", "privacy.html"],
  ["Refund Policy", "refund.html"],
  ["Terms & Conditions", "terms.html"],
];

const pageName = document.body.dataset.page || "Home";
const whatsappNumber = "212600000000";
const businessEmail = "hello@marrakechprestige.example";

function iconSvg(name) {
  const icons = {
    menu: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h13m0 0-5-5m5 5-5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    compass: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.5"/><path d="m15.5 8.5-2.2 5-4.8 2 2.2-5 4.8-2Z" fill="currentColor"/></svg>',
    car: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6.3 10.5 8 6.8c.3-.7 1-1.1 1.8-1.1h4.4c.8 0 1.5.4 1.8 1.1l1.7 3.7M5 15h14M6.5 17.8h.1M17.4 17.8h.1M4.8 10.5h14.4c.8 0 1.5.7 1.5 1.5v4.6c0 .7-.5 1.2-1.2 1.2H4.5c-.7 0-1.2-.5-1.2-1.2V12c0-.8.7-1.5 1.5-1.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m12 3 2.7 5.6 6.2.9-4.5 4.4 1.1 6.1-5.5-2.9L6.5 20l1.1-6.1-4.5-4.4 6.2-.9L12 3Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7.2 4.5 9.4 9l-2 1.5c1.3 2.6 3.5 4.8 6.1 6.1l1.5-2 4.5 2.2c.5.2.8.8.6 1.3-.4 1.4-1.7 2.4-3.2 2.4C9.5 20.5 3.5 14.5 3.5 7.1c0-1.5 1-2.8 2.4-3.2.5-.2 1.1.1 1.3.6Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>',
  };
  return icons[name] || icons.arrow;
}

function buildHeader() {
  const header = document.createElement("header");
  header.className = "site-header";
  header.innerHTML = `
    <nav class="container-lux flex h-20 items-center justify-between">
      <a href="index.html" class="group flex items-center gap-3" aria-label="Marrakech Prestige home">
        <span class="grid h-11 w-11 place-items-center rounded-full border border-[rgba(201,164,92,.38)] bg-[rgba(248,244,236,.08)] text-[#C9A45C] transition group-hover:bg-[rgba(201,164,92,.16)]">${iconSvg("compass")}</span>
        <span>
          <span class="brand-serif block text-2xl font-bold leading-none text-[#F8F4EC]">Marrakech Prestige</span>
          <span class="block text-[10px] font-bold uppercase tracking-[.28em] text-[#C9A45C]">Tours & Transport</span>
        </span>
      </a>
      <div class="hidden items-center gap-8 lg:flex">
        ${pages.map(([label, href]) => `<a class="nav-link ${pageName === label ? "active" : ""}" href="${href}">${label}</a>`).join("")}
      </div>
      <a href="contact.html" class="btn btn-gold hidden min-h-11 px-5 py-3 lg:inline-flex">Start Planning <span class="h-4 w-4">${iconSvg("arrow")}</span></a>
      <button class="menu-toggle grid h-11 w-11 place-items-center rounded-full border border-[rgba(201,164,92,.32)] text-[#F8F4EC] lg:hidden" aria-label="Open menu" aria-expanded="false">
        <span class="h-6 w-6">${iconSvg("menu")}</span>
      </button>
    </nav>
    <div class="mobile-panel fixed inset-x-0 top-0 z-[-1] bg-[#07111F]/95 px-6 pb-8 pt-24 shadow-2xl backdrop-blur-xl lg:hidden">
      <div class="grid gap-4">
        ${pages.map(([label, href]) => `<a class="rounded-2xl border border-[rgba(201,164,92,.18)] px-5 py-4 text-sm font-bold uppercase tracking-[.16em] text-[#F8F4EC] ${pageName === label ? "bg-[rgba(201,164,92,.12)] text-[#C9A45C]" : ""}" href="${href}">${label}</a>`).join("")}
      </div>
      <a href="contact.html" class="btn btn-gold mt-6">Start Planning <span class="h-4 w-4">${iconSvg("arrow")}</span></a>
    </div>
  `;
  document.body.prepend(header);

  const toggle = header.querySelector(".menu-toggle");
  const panel = header.querySelector(".mobile-panel");
  toggle.addEventListener("click", () => {
    const isOpen = panel.classList.toggle("open");
    document.body.classList.toggle("menu-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.innerHTML = `<span class="h-6 w-6">${iconSvg(isOpen ? "close" : "menu")}</span>`;
  });

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 24);
  }, { passive: true });
  header.classList.toggle("scrolled", window.scrollY > 24);
}

function buildFooter() {
  const footer = document.createElement("footer");
  footer.className = "site-footer section-pad";
  footer.innerHTML = `
    <div class="container-lux">
      <div class="grid gap-10 border-b border-[rgba(201,164,92,.18)] pb-12 lg:grid-cols-[1.35fr_.8fr_.8fr_.8fr_1fr]">
        <div>
          <a href="index.html" class="flex items-center gap-3">
            <span class="grid h-12 w-12 place-items-center rounded-full border border-[rgba(201,164,92,.38)] text-[#C9A45C]">${iconSvg("compass")}</span>
            <span>
              <span class="brand-serif block text-3xl font-bold leading-none text-[#F8F4EC]">Marrakech Prestige</span>
              <span class="block text-[10px] font-bold uppercase tracking-[.28em] text-[#C9A45C]">Tours & Transport</span>
            </span>
          </a>
          <p class="mt-6 max-w-sm leading-8">Private Moroccan journeys, elegant chauffeur services, and luxury transport arranged around your schedule, style, and pace.</p>
          <div class="mt-6 flex gap-3">
            <a class="social-dot" href="#" aria-label="Instagram">IG</a>
            <a class="social-dot" href="#" aria-label="Facebook">FB</a>
            <a class="social-dot" href="#" aria-label="TikTok">TK</a>
          </div>
        </div>
        <div>
          <h3 class="mb-5 text-sm font-bold uppercase tracking-[.2em] text-[#C9A45C]">Quick Links</h3>
          ${pages.map(([label, href]) => `<a class="footer-link" href="${href}">${label}</a>`).join("")}
        </div>
        <div>
          <h3 class="mb-5 text-sm font-bold uppercase tracking-[.2em] text-[#C9A45C]">Services</h3>
          <a class="footer-link" href="tours.html">Custom Tours</a>
          <a class="footer-link" href="transport.html">Luxury Transport</a>
          <a class="footer-link" href="transport.html#services">Airport Transfers</a>
          <a class="footer-link" href="transport.html#services">Private Chauffeur</a>
        </div>
        <div>
          <h3 class="mb-5 text-sm font-bold uppercase tracking-[.2em] text-[#C9A45C]">Legal</h3>
          ${legalLinks.map(([label, href]) => `<a class="footer-link" href="${href}">${label}</a>`).join("")}
        </div>
        <div>
          <h3 class="mb-5 text-sm font-bold uppercase tracking-[.2em] text-[#C9A45C]">Contact</h3>
          <p class="leading-8">Marrakech, Morocco<br>Available across Morocco</p>
          <a class="footer-link mt-3 text-[#C9A45C]" href="https://wa.me/${whatsappNumber}" target="_blank" rel="noreferrer">WhatsApp: +212 600 000 000</a>
          <a class="footer-link" href="mailto:hello@marrakechprestige.example">hello@marrakechprestige.example</a>
        </div>
      </div>
      <div class="flex flex-col gap-3 pt-8 text-sm text-[rgba(248,244,236,.56)] md:flex-row md:items-center md:justify-between">
        <p>Copyright <span id="year"></span> Marrakech Prestige Tours & Transport. All rights reserved.</p>
        <p>Luxury custom tours and private chauffeur service in Morocco.</p>
      </div>
    </div>
  `;
  document.body.append(footer);
  document.getElementById("year").textContent = new Date().getFullYear();
}

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  items.forEach((item) => observer.observe(item));
}

function initCounters() {
  const counters = document.querySelectorAll("[data-count]");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.count);
      const suffix = el.dataset.suffix || "";
      const duration = 1200;
      const start = performance.now();
      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = `${Math.round(target * eased)}${suffix}`;
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      observer.unobserve(el);
    });
  }, { threshold: 0.3 });
  counters.forEach((counter) => observer.observe(counter));
}

function initImageFallbacks() {
  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("error", () => {
      img.closest(".image-card, .split-image, .car-media, .hero-media")?.classList.add("image-fallback");
    }, { once: true });
  });
}

function initContactForm() {
  const form = document.querySelector("#contactForm");
  if (!form) return;
  const status = document.querySelector("#formStatus");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const required = ["serviceDestination", "vehicle", "pickup", "datetime", "name", "phone", "email", "people", "requests"];
    const missing = required.filter((key) => !String(data[key] || "").trim());
    if (missing.length || !form.checkValidity()) {
      status.textContent = "Une erreur est survenue. Veuillez réessayer ou nous contacter sur WhatsApp.";
      status.className = "form-status error";
      form.reportValidity();
      return;
    }

    const subject = "New Tour / Transport Reservation Request";
    const body = [
      "New Tour / Transport Reservation Request",
      "",
      "DÉTAILS DE L’ITINÉRAIRE",
      `Service ou destination: ${data.serviceDestination}`,
      `Véhicule préféré: ${data.vehicle}`,
      `Lieu de prise en charge: ${data.pickup}`,
      `Date et heure: ${data.datetime}`,
      "",
      "CONTACT ET PRÉFÉRENCES",
      `Nom complet: ${data.name}`,
      `Numéro WhatsApp / Téléphone: ${data.phone}`,
      `Email: ${data.email}`,
      `Nombre de personnes: ${data.people}`,
      `Demandes particulières: ${data.requests}`,
    ].join("\n");

    try {
      const mailto = `mailto:${businessEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
      status.textContent = "Merci, votre demande a été envoyée avec succès. Nous vous contacterons bientôt.";
      status.className = "form-status success";
      form.reset();
    } catch (error) {
      status.textContent = "Une erreur est survenue. Veuillez réessayer ou nous contacter sur WhatsApp.";
      status.className = "form-status error";
    }
  });
}

buildHeader();
buildFooter();
initReveal();
initCounters();
initImageFallbacks();
initContactForm();


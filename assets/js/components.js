/**
 * Inject navbar & footer to all pages
 */

const WA_NUMBER = "6281234567890";

/* ── Navbar ─────────────────────────────────────────── */
function renderNavbar() {
  const page = document.body.dataset.page || "";

  const links = [
    { href: "index.html", label: "Beranda", key: "home" },
    { href: "catalog.html", label: "Katalog", key: "katalog" },
    { href: "about.html", label: "Tentang", key: "tentang" },
    { href: "contact.html", label: "Kontak", key: "kontak" },
  ];

  const navLinks = links
    .map(
      (l) => `
    <a href="${l.href}" class="navbar__link${
        page === l.key ? " active" : ""
      }">${l.label}</a>
  `
    )
    .join("");

  const mobileLinks = links
    .map(
      (l) => `
    <a href="${l.href}" class="navbar__link${page === l.key ? " active" : ""}"
       onclick="closeMobileMenu()">${l.label}</a>
  `
    )
    .join("");

  const html = `
    <nav class="navbar" id="navbar" role="navigation" aria-label="Navigasi utama">
      <div class="container">
        <div class="navbar__inner">
          <a href="index.html" class="navbar__logo" aria-label="DQ Florist — Halaman utama">
            <span class="navbar__logo-icon" aria-hidden="true">🌸</span>
            DQ Florist
          </a>
          <div class="navbar__nav" id="navLinks" role="menubar">
            ${navLinks}
          </div>
          <a href="katalog.html" class="btn btn--primary navbar__cta">Lihat Katalog</a>
          <button class="navbar__toggle" id="menuToggle"
                  aria-expanded="false" aria-controls="mobileMenu"
                  aria-label="Buka menu" onclick="toggleMobileMenu()">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>
    <div class="navbar__mobile" id="mobileMenu" role="dialog" aria-label="Menu navigasi">
      ${mobileLinks}
      <a href="katalog.html" class="btn btn--primary btn--lg" onclick="closeMobileMenu()">Lihat Katalog</a>
    </div>
  `;

  const placeholder = document.getElementById("navbar-placeholder");
  if (placeholder) placeholder.outerHTML = html;

  // Scroll shadow
  const navbar = document.getElementById("navbar");
  if (navbar) {
    window.addEventListener(
      "scroll",
      () => {
        navbar.classList.toggle("scrolled", window.scrollY > 10);
      },
      { passive: true }
    );
  }
}

function toggleMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  const toggle = document.getElementById("menuToggle");
  const isOpen = menu.classList.toggle("open");
  toggle.setAttribute("aria-expanded", isOpen);
  document.body.style.overflow = isOpen ? "hidden" : "";
}

function closeMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  const toggle = document.getElementById("menuToggle");
  menu.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}

/* ── Footer ─────────────────────────────────────────── */
function renderFooter() {
  const year = new Date().getFullYear();

  const html = `
    <footer class="footer" role="contentinfo">
      <div class="container">
        <div class="footer__grid">
          <div>
            <div class="footer__brand-name">🌸 DQ Florist</div>
            <p class="footer__brand-desc">
              Kami merangkai lebih dari sekadar bunga — kami menciptakan momen yang tak terlupakan
              dengan setiap helai kelopak.
            </p>
            <div class="footer__socials">
              <a href="https://wa.me/${WA_NUMBER}" class="footer__social-link"
                 target="_blank" rel="noopener" aria-label="WhatsApp DQ Florist">💬</a>
              <a href="https://instagram.com/mekarflorist.bdg" class="footer__social-link"
                 target="_blank" rel="noopener" aria-label="Instagram DQ Florist">📷</a>
            </div>
          </div>

          <div>
            <div class="footer__col-title">Navigasi</div>
            <ul class="footer__links">
              <li><a href="index.html"    class="footer__link">Beranda</a></li>
              <li><a href="katalog.html"  class="footer__link">Katalog Produk</a></li>
              <li><a href="tentang.html"  class="footer__link">Tentang Kami</a></li>
              <li><a href="kontak.html"   class="footer__link">Kontak & Lokasi</a></li>
            </ul>
          </div>

          <div>
            <div class="footer__col-title">Kategori</div>
            <ul class="footer__links">
              <li><a href="katalog.html?kategori=Buket+Mawar"      class="footer__link">Buket Mawar</a></li>
              <li><a href="katalog.html?kategori=Buket+Tulip"      class="footer__link">Buket Tulip</a></li>
              <li><a href="katalog.html?kategori=Buket+Campuran"   class="footer__link">Buket Campuran</a></li>
              <li><a href="katalog.html?kategori=Buket+Wildflower" class="footer__link">Wildflower</a></li>
            </ul>
          </div>

          <div>
            <div class="footer__col-title">Kontak</div>
            <div class="footer__contact-item">
              <span>📍</span>
              <span>Jl. Buah Batu No. 123,<br>Bandung Selatan</span>
            </div>
            <div class="footer__contact-item">
              <span>📞</span>
              <a href="https://wa.me/${WA_NUMBER}" class="footer__link">+62 812-3456-7890</a>
            </div>
            <div class="footer__contact-item">
              <span>🕐</span>
              <span>Sen–Sab: 08.00–20.00<br>Minggu: 09.00–17.00</span>
            </div>
          </div>
        </div>

        <hr class="footer__divider">

        <div class="footer__bottom">
          <span>© ${year} DQ Florist. Semua hak dilindungi.</span>
          <span>Dibuat dengan 🌸 di Bandung</span>
        </div>
      </div>
    </footer>
  `;

  const placeholder = document.getElementById("footer-placeholder");
  if (placeholder) placeholder.outerHTML = html;
}

/* ── WhatsApp Float ──────────────────────────────────── */
function renderWaFloat(
  msg = "Halo DQ Florist, saya ingin tanya-tanya soal buket 🌸"
) {
  const encoded = encodeURIComponent(msg);
  const el = document.createElement("a");
  el.href = `https://wa.me/${WA_NUMBER}?text=${encoded}`;
  el.className = "wa-float";
  el.target = "_blank";
  el.rel = "noopener";
  el.setAttribute("aria-label", "Chat via WhatsApp");
  el.innerHTML = "💬";
  document.body.appendChild(el);
}

/* ── Intersection Observer for fade-up ──────────────── */
function initFadeAnimations() {
  const items = document.querySelectorAll(".fade-up");
  if (!items.length) return;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (prefersReducedMotion) {
    items.forEach((el) => el.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // stagger delay per item group
          const siblings = entry.target.parentElement
            ? [...entry.target.parentElement.querySelectorAll(".fade-up")]
            : [];
          const idx = siblings.indexOf(entry.target);
          entry.target.style.transitionDelay = `${idx * 80}ms`;
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  items.forEach((el) => observer.observe(el));
}

/* ── Init ───────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  renderNavbar();
  renderFooter();
  renderWaFloat();
  initFadeAnimations();
});

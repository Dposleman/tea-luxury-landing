import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = ["Home", "Experiences", "Services", "About", "Contact"];

const offerings = [
  {
    icon: (
      <svg
        viewBox="0 0 64 64"
        className="h-12 w-12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.65"
      >
        <path d="M32 10c2 10-1 18-8 24-5 4-8 8-8 12 0 7 7 12 16 12s16-5 16-12c0-4-3-8-8-12-7-6-10-14-8-24Z" />
        <path d="M32 15c-3 6-3 11 0 17" />
      </svg>
    ),
    title: "Private Tea Tastings",
    description:
      "Exclusive, guided tea experiences curated for intimate gatherings and discerning private clients.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 64 64"
        className="h-12 w-12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.65"
      >
        <path d="M17 42h30" />
        <path d="M22 42V24h20v18" />
        <path d="M15 46h34" />
        <path d="M25 24c0-5 3-8 7-8s7 3 7 8" />
      </svg>
    ),
    title: "Tea Programs for Hotels & Restaurants",
    description:
      "Refined tea menus, pairings, and service frameworks designed for luxury hospitality environments.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 64 64"
        className="h-12 w-12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.65"
      >
        <path d="M32 12l4 9 10 1-7 7 2 10-9-5-9 5 2-10-7-7 10-1 4-9Z" />
        <path d="M17 49h30" />
      </svg>
    ),
    title: "Luxury Events",
    description:
      "Elevated tea service and ceremonial presentation for bespoke occasions, launches, and private celebrations.",
  },
];

const partners = ["AMAN", "RELAIS & CHÂTEAUX", "THE RITZ-CARLTON", "NIMB"];

const process = [
  {
    step: "1.",
    title: "Consultation",
    description:
      "A discovery conversation to understand the guest profile, setting, mood, and service expectations.",
  },
  {
    step: "2.",
    title: "Curated Selection",
    description:
      "A tailored tea direction built around seasonality, origin, rarity, and the tone of the occasion.",
  },
  {
    step: "3.",
    title: "Experience Design",
    description:
      "Ritual, flow, table styling, and pacing are composed into a cohesive and memorable tea experience.",
  },
  {
    step: "4.",
    title: "Elegant Service",
    description:
      "Service is delivered with warmth, restraint, precision, and the quiet confidence of luxury hospitality.",
  },
];

function SectionDivider({ title }: { title: string }) {
  return (
    <div className="section-divider">
      <span className="section-divider-line" />
      <h2>{title}</h2>
      <span className="section-divider-line" />
    </div>
  );
}

function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="mobile-menu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />
          <motion.aside
            className="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mobile-menu-top">
              <div className="mobile-menu-brand">Tea Sommelier</div>
              <button className="menu-close" onClick={onClose} aria-label="Close menu">
                ×
              </button>
            </div>

            <nav className="mobile-menu-nav">
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={onClose}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.25, delay: 0.04 * index }}
                >
                  {item}
                </motion.a>
              ))}
            </nav>

            <div className="mobile-menu-footer">
              <a href="#contact" onClick={onClose} className="btn-primary">
                Book a Private Tasting
              </a>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="site-shell">
      <section id="home" className="hero">
        <div className="hero-media">
          <img
            src="https://images.unsplash.com/photo-1507915135761-41a0a222c709?auto=format&fit=crop&w=1800&q=80"
            alt="Luxury tea service"
          />
          <div className="hero-overlay" />
          <div className="hero-grain" />
        </div>

        <header className={`topbar ${scrolled ? "topbar-scrolled" : ""}`}>
          <div className="container topbar-inner">
            <div className="brand">Tea Sommelier</div>

            <nav className="nav">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`}>
                  {item}
                </a>
              ))}
            </nav>

            <button
              className="menu-toggle"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <span />
              <span />
            </button>
          </div>
        </header>

        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

        <div className="container hero-content">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hero-copy"
          >
            <div className="eyebrow">Luxury Tea Tastings & Hospitality Consulting</div>

            <h1>
              Tea, Elevated to
              <br />
              an Art Form.
            </h1>

            <p className="hero-subtitle">
              Luxury tea tastings & hospitality consulting by a certified tea
              sommelier.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="btn-primary">
                Book a Private Tasting
              </a>

              <a href="#services" className="btn-link">
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="offer-strip">
        <div className="container offer-grid">
          {offerings.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="offer-card"
            >
              <div className="offer-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <span className="offer-line" />
              <p>{item.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="trust-strip">
        <div className="container">
          <div className="trust-header">
            <span />
            <p>Trusted by Luxury Hotels & Fine Dining Establishments</p>
            <span />
          </div>

          <div className="trust-logos">
            {partners.map((partner, index) => (
              <motion.div
                key={partner}
                className="logo-wordmark"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="immersive-banner">
        <div className="immersive-media">
          <img
            src="https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=1800&q=80"
            alt="Tea ritual"
          />
          <div className="immersive-overlay" />
          <div className="immersive-grain" />
        </div>

        <div className="container immersive-content">
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="immersive-copy"
          >
            <h2>The Art & Ritual of Tea</h2>
            <span className="immersive-line" />
            <p>
              Crafting unforgettable moments through the world of rare and
              exceptional teas.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="about" className="process-section">
        <div className="container">
          <SectionDivider title="Our Process" />

          <div className="process-grid">
            {process.map((item, index) => (
              <motion.article
                key={item.step}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="process-item"
              >
                <div className="process-step">{item.step}</div>
                <h3>{item.title}</h3>
                <span className="process-line" />
                <p>{item.description}</p>
              </motion.article>
            ))}
          </div>

          <motion.section
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="profile-card"
          >
            <div className="profile-image">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1000&q=80"
                alt="Tea sommelier portrait"
              />
            </div>

            <div className="profile-copy">
              <div className="profile-kicker">A Personal Approach</div>
              <h3>Meet Your Tea Sommelier</h3>
              <span className="profile-line" />
              <p>
                Dedicated to the art of tea, with a passion for creating refined
                and memorable tea experiences for private clients, luxury
                hospitality settings, and exceptional events.
              </p>

              <a href="#contact" className="btn-dark">
                Book a Consultation
              </a>
            </div>
          </motion.section>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="container footer-inner">
          <div>info@teasommelier.com</div>
          <div className="footer-socials">
            <span>Instagram</span>
            <span>Twitter</span>
          </div>
          <div>Copenhagen, Denmark</div>
        </div>
      </footer>
    </div>
  );
}
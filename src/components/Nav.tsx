import { useState } from "react";
import styles from "../styles/Nav.module.css";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((previous) => !previous);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.nav}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.mark}>
          Gopal Mathur
        </a>
        <button
          type="button"
          className={styles.menuButton}
          onClick={handleToggle}
          aria-expanded={isOpen}
          aria-controls="mobile-nav-overlay"
          aria-label="Toggle navigation menu"
        >
          MENU
        </button>
        <nav aria-label="Primary navigation" className={styles.desktopNav}>
          {LINKS.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div
        id="mobile-nav-overlay"
        className={`${styles.mobileOverlay} ${isOpen ? styles.open : ""}`}
      >
        <nav aria-label="Mobile navigation" className={styles.mobileNav}>
          {LINKS.map((link) => (
            <a key={link.label} href={link.href} onClick={handleClose}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

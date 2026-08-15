import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";

export default function Navbar({ activeSection }) {
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      className="top-navbar"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Brand Logo */}
      <a
        href="#home"
        className="logo-badge"
        data-cursor="link"
        aria-label="Home"
      >
        <span>B</span>
      </a>

      {/* Center Navigation */}
      <nav className="center-pill-nav">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`pill-link ${
              activeSection === link.label ? "active" : ""
            }`}
            data-cursor="link"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Right Search Action */}
      <div className="right-nav-actions">
        <button
          className="icon-circle-btn"
          onClick={() => setSearchOpen(!searchOpen)}
          data-cursor="link"
          aria-label="Search"
        >
          <Search size={18} />
        </button>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            className="search-overlay"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <input
              type="text"
              placeholder="Search skills, projects..."
              autoFocus
              className="search-input"
            />

            <button
              onClick={() => setSearchOpen(false)}
              className="close-search"
              aria-label="Close search"
            >
              <X size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
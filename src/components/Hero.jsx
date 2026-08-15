import React from "react";
import { motion } from "framer-motion";
import myPic from "../assets/my-pic.png";


export default function Hero() {
  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com",
      bgClass: "social-fb",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      bgClass: "social-ig",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.585.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.584.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.584-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.585-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "X (Twitter)",
      href: "https://x.com",
      bgClass: "social-x",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      bgClass: "social-li",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="home" className="portfolio-hero">
      {/* 3-Column Content Layout matching the target mockup */}
      <div className="hero-grid-container">
        {/* Left Column: Welcome Heading, Text & Action Buttons */}
        <motion.div
          className="hero-col hero-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <h1 className="hero-title">
            Hello I'm Sadia <br /> Full Stack Developer
          </h1>
          <p className="hero-description">
            BS Computer Science graduate and software developer passionate about building modern, responsive, and user-focused web and mobile applications with React, React Native, Node.js, and MongoDB.
          </p>

        </motion.div>

        {/* Center Column: Portrait Avatar & Ambient Purple Spotlight Glow */}
        <motion.div
          className="hero-col hero-center"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          {/* Glowing Violet Light behind upper body/head */}
          <div className="ambient-purple-glow" />

          {/* Profile Image Container */}
          <div className="avatar-frame">
            <img
              src={myPic}
              alt="Profile character"
              className="avatar-img"
              onError={(e) => {
                e.currentTarget.src = "/profile.png";
              }}
            />
          </div>

          {/* Central Mouse Scroll Pill Indicator */}
          <a href="#about" className="hero-scroll-indicator" data-cursor="link" aria-label="Scroll Down">
            <div className="mouse-wheel-pill">
              <motion.div
                className="mouse-dot"
                animate={{ y: [0, 9, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </a>
        </motion.div>

        {/* Right Column: About me & Download CV Button */}
        <motion.div
          className="hero-col hero-right"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          <h2 className="hero-subtitle">About me</h2>
          <p className="hero-description">
            I'm a software developer with hands-on experience building full-stack web and mobile applications. I enjoy turning ideas into clean, functional, and visually engaging digital experiences using modern technologies.</p>
          <div className="hero-btn-group">
            <a
              href="public/sadia-cv.pdf"
              download="Sadia Sultana CV.pdf"
              className="btn-glow-solid"
              data-cursor="link"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </div>

      {/* Hero Bottom Footer Bar */}
      <motion.div
        className="hero-footer-bar"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <span className="copyright-text">
          @2024 Bimala all right reserved
        </span>

        <div className="social-pill-group">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className={`social-icon-btn ${social.bgClass}`}
              title={social.name}
              data-cursor="link"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}


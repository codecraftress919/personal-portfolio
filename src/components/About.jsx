import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const stats = [
    ["04+", "Selected Projects"],
    ["12+", "Technologies"],
    ["100%", "Dedication"],
  ];

  return (
    <section id="about" className="section about-section">
      <motion.div
        className="section-kicker"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        01 / ABOUT
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
      >
        I build digital <br />
        <em>experiences </em> that <br />
        feel intuitive & alive.
      </motion.h2>

      <div className="about-grid">
        <motion.p
          className="about-lead"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          Full-stack developer focused on turning complex challenges into simple, elegant, and efficient solutions.
        </motion.p>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, delay: 0.15 }}
        >
          I thrive at the intersection of aesthetic design and reliable code, building seamless user interfaces backed by scalable APIs and database architecture.
        </motion.p>
      </div>

      <div className="stats-bar">
        {stats.map(([num, label], i) => (
          <motion.div
            key={label}
            className="stat-box"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: i * 0.12 }}
          >
            <strong>{num}</strong>
            <span>{label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

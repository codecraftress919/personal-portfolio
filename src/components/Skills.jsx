import React from "react";
import { motion } from "framer-motion";

const skills = [
  "React",
  "JavaScript (ES6+)",
  "Node.js",
  "Express.js",
  "MongoDB",
  "React Native",
  "HTML5 / CSS3",
  "Git & GitHub",
  "REST APIs",
  "Tailwind CSS",
  "Firebase",
  "Vite",
];

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-kicker">02 / SKILLS & TECH</div>
      <div className="skills-heading">
        <h2>
          TOOLS I <br />
          <span>BUILD WITH.</span>
        </h2>
        <p>A growing suite of modern developer tools.</p>
      </div>

      <div className="skill-field">
        {skills.map((skill, i) => (
          <motion.div
            key={skill}
            className="skill-chip"
            data-cursor="link"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: i * 0.05, type: "spring", stiffness: 120 }}
            whileHover={{ scale: 1.1, y: -8, zIndex: 5 }}
          >
            <span>{String(i + 1).padStart(2, "0")}</span>
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

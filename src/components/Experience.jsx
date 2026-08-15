import React, { useRef } from "react";
import { motion } from "framer-motion";

const experienceList = [
  {
    icon: "🏛️",
    badge: "MAY 2025 – PRESENT",
    role: "Full Stack Developer Intern",
    company: "Government of Pakistan (NACTA HQ)",
    text: "Developing and maintaining full-stack web applications for internal government management systems. Building and optimizing REST APIs for real-time data processing, and implementing role-based access control and secure authentication to protect sensitive government data.",
    tools: "React.js, Node.js, Express.js, REST APIs, JWT Auth",
  },
  {
    icon: "🌿",
    badge: "JUL 2025 – SEP 2025",
    role: "UX Designer",
    company: "Tulip Tea (Haji Abdul Waheed Group of Industries)",
    text: "Designed user-friendly mobile app interfaces aligned with brand identity, translating stakeholder requirements into high-fidelity prototypes. Partnered remotely with the development team to refine interaction flows and improve overall user experience.",
    tools: "Figma, Adobe XD, UI/UX Design",
  },
  {
    icon: "📱",
    badge: "AUG 2024 – SEP 2024",
    role: "React Native Intern",
    company: "CodeAlpha",
    text: "Built and maintained cross-platform mobile app features using React Native, following clean, maintainable architecture patterns. Debugged and resolved UI/UX issues across iOS and Android, improving component consistency and usability.",
    tools: "React Native, iOS, Android",
  },
  {
    icon: "🔧",
    badge: "MAY 2024 – JUL 2024",
    role: "React Native Intern",
    company: "DEN Pakistan",
    text: "Contributed to cross-platform mobile application development, implementing new features and fixing reported bugs. Optimized app performance by resolving rendering and state-management bottlenecks, following Agile development workflows.",
    tools: "React Native, Agile, Performance Optimization",
  },
];

export default function Experience() {
  const scrollRef = useRef(null);

  const scrollByAmount = (dir) => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.querySelector(".job-card");
    const step = card ? card.offsetWidth + 28 : 320;
    scrollRef.current.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section id="experience" className="section experience-section">
      <div className="experience-head">
        <div>
          <div className="section-kicker">04 / EXPERIENCE</div>
          <h2>
            CAREER & <br />
            <em>MILESTONES.</em>
          </h2>
        </div>

        <div className="jobs-scroll-controls">
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => scrollByAmount(-1)}
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => scrollByAmount(1)}
          >
            →
          </button>
        </div>
      </div>

      <div className="jobs-scroll" ref={scrollRef}>
        {experienceList.map((item, i) => (
          <motion.article
            key={item.role + item.badge}
            className="job-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: i * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="job-card-header">
              <span className="job-icon">{item.icon}</span>
              <h3>{item.role}</h3>
            </div>

            <span className="job-year-badge">{item.badge}</span>

            <p className="job-company">{item.company}</p>
            <p className="job-text">{item.text}</p>

            <p className="job-tools">
              <strong>Tools:</strong> {item.tools}
            </p>
          </motion.article>
        ))}
      </div>

      <div className="jobs-scroll-hint">
        <span>← swipe to explore →</span>
      </div>
    </section>
  );
}
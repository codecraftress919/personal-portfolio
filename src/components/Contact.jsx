import React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

export default function Contact() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 180, damping: 18 });
  const y = useSpring(my, { stiffness: 180, damping: 18 });

  return (
    <section id="contact" className="section contact-section">
      <div className="section-kicker">05 / CONTACT</div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        LET'S CREATE SOMETHING EXTRAORDINARY TOGETHER.
      </motion.p>

      <h2>
        LET'S WORK <br />
        <em>TOGETHER.</em>
      </h2>

      <motion.a
        href="mailto:ssdev902@gmail.com"
        className="contact-circle-btn"
        data-cursor="link"
        style={{ x, y }}
        onPointerMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          mx.set((e.clientX - r.left - r.width / 2) * 0.16);
          my.set((e.clientY - r.top - r.height / 2) * 0.16);
        }}
        onPointerLeave={() => {
          mx.set(0);
          my.set(0);
        }}
      >
        <span>SAY HELLO</span>
        <ArrowUpRight size={24} />
      </motion.a>

      <a
        className="email-link"
        href="mailto:ssdev902@gmail.com"
        data-cursor="link"
      >
        <Mail size={16} /> ssdev902@gmail.com
      </a>

      <footer>
        <span>© 2026 SADIA SULTANA. ALL RIGHTS RESERVED.</span>
        <span>DESIGNED & BUILT WITH REACT + FRAMER MOTION</span>
      </footer>
    </section>
  );
}

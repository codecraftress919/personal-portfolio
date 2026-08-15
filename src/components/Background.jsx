import React from "react";
import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="portfolio-bg" aria-hidden="true">
      <div className="bg-noise" />
      <div className="bg-grid" />
      <motion.div
        className="purple-orb orb-1"
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -40, 30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="purple-orb orb-2"
        animate={{
          x: [0, -70, 30, 0],
          y: [0, 50, -40, 0],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

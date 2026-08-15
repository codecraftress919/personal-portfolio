import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 450, damping: 35, mass: 0.25 });
  const sy = useSpring(y, { stiffness: 450, damping: 35, mass: 0.25 });
  const [mode, setMode] = useState("normal");

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const enter = (e) => {
      const el = e.target && typeof e.target.closest === "function" ? e.target.closest("[data-cursor]") : null;
      setMode(el?.dataset?.cursor || "normal");
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", enter);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", enter);
    };
  }, [x, y]);

  return (
    <motion.div
      className={`custom-cursor cursor-${mode}`}
      style={{ left: sx, top: sy }}
    >
      {mode === "drag" ? "DRAG" : mode === "link" ? "↗" : ""}
    </motion.div>
  );
}

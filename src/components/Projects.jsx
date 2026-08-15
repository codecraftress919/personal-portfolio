import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { projects } from "../data/projects";

function ProjectCard({ project, index, activeIndex, onDragEnd }) {
  const depth = (index - activeIndex + projects.length) % projects.length;
  const isTop = depth === 0;
  const stack = [
    { scale: 1, y: 0, rotate: -3, opacity: 1 },
    { scale: 0.96, y: 18, rotate: 4, opacity: 0.9 },
    { scale: 0.92, y: 35, rotate: -2, opacity: 0.75 },
    { scale: 0.88, y: 50, rotate: 5, opacity: 0.5 },
  ][Math.min(depth, 3)];

  return (
    <motion.div
      className={`project-card ${isTop ? "top-card" : ""}`}
      data-cursor={isTop ? "drag" : "normal"}
      animate={{
        scale: stack.scale,
        y: stack.y,
        rotate: stack.rotate,
        opacity: stack.opacity,
      }}
      transition={{ type: "spring", stiffness: 150, damping: 20 }}
      drag={isTop ? true : false}
      dragConstraints={{ left: -40, right: 40, top: -20, bottom: 20 }}
      dragElastic={0.8}
      whileDrag={{ scale: 1.04, rotate: 6 }}
      onDragEnd={isTop ? onDragEnd : undefined}
      style={{ zIndex: projects.length - depth }}
    >
      <div
        className="card-image"
        style={{ backgroundImage: `url(${project.image})` }}
      >
        <span>PROJECT {project.id}</span>
        <span>{project.category}</span>
      </div>
      <div className="card-bottom">
        <h3>{project.title}</h3>
        <div className="mini-tags">
          {project.technologies.slice(0, 3).map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [active, setActive] = useState(0);
  const project = projects[active];

  const move = (direction) =>
    setActive((i) => (i + direction + projects.length) % projects.length);

  const onDragEnd = (_, info) => {
    if (Math.abs(info.offset.x) > 100 || Math.abs(info.velocity.x) > 600) {
      move(info.offset.x < 0 ? 1 : -1);
    }
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="section-kicker">03 / SELECTED WORK</div>
      <div className="projects-head">
        <h2>
          FEATURED <br />
          <em>PROJECTS.</em>
        </h2>
        <p>Drag or navigate through selected work.</p>
      </div>

      <div className="project-stage">
        <div className="deck">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              index={i}
              activeIndex={active}
              onDragEnd={onDragEnd}
            />
          ))}
          <div className="swipe-hint">
            <ArrowLeft size={14} /> DRAG CARD TO EXPLORE <ArrowRight size={14} />
          </div>
        </div>

        <div className="project-details">
          <AnimatePresence mode="wait">
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -30, filter: "blur(8px)" }}
              transition={{ duration: 0.4 }}
            >
              <span className="project-number">PROJECT {project.id}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="detail-tags">
                {project.technologies.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="project-actions">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="link"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="link"
                >
                  Live Demo <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="deck-controls">
            <button onClick={() => move(-1)} data-cursor="link">
              <ArrowLeft size={16} /> Previous
            </button>
            <span>
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(projects.length).padStart(2, "0")}
            </span>
            <button onClick={() => move(1)} data-cursor="link">
              Next <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Github,
  X,
  Expand,
} from "lucide-react";
import { projects } from "../data/projects";

function ProjectCard({ project, index, activeIndex, onDragEnd, onOpen }) {
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
      onTap={isTop ? () => onOpen(project) : undefined}
      style={{ zIndex: projects.length - depth }}
    >
      <div
        className="card-image"
        style={{ backgroundImage: `url(${project.image})` }}
      >
        <span>PROJECT {project.id}</span>
        <span>{project.category}</span>
        {isTop && (
          <div className="card-view-hint">
            <Expand size={12} /> VIEW DETAILS
          </div>
        )}
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

function ProjectModal({ project, onClose }) {
  const [activeImage, setActiveImage] = useState(0);

  if (!project) return null;

  const images =
    project.detailImages && project.detailImages.length
      ? project.detailImages
      : [project.image];

  const nextImage = () =>
    setActiveImage((i) => (i + 1) % images.length);
  const prevImage = () =>
    setActiveImage((i) => (i - 1 + images.length) % images.length);

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-content"
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>

        <div className="modal-gallery">
          <div
            className="modal-gallery-image"
            style={{ backgroundImage: `url(${images[activeImage]})` }}
          />
          {images.length > 1 && (
            <>
              <button
                className="modal-gallery-nav modal-gallery-prev"
                onClick={prevImage}
                aria-label="Previous image"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                className="modal-gallery-nav modal-gallery-next"
                onClick={nextImage}
                aria-label="Next image"
              >
                <ArrowRight size={16} />
              </button>
              <div className="modal-gallery-dots">
                {images.map((_, i) => (
                  <button
                    key={i}
                    className={`modal-gallery-dot ${
                      i === activeImage ? "active" : ""
                    }`}
                    onClick={() => setActiveImage(i)}
                    aria-label={`Show image ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="modal-body">
          <span className="project-number">PROJECT {project.id}</span>
          <h3>{project.title}</h3>
          <p className="modal-category">{project.category}</p>
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
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [active, setActive] = useState(0);
  const [openProject, setOpenProject] = useState(null);
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
        <p>Drag or tap a card to explore.</p>
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
              onOpen={setOpenProject}
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
                <button
                  className="btn-view-details"
                  onClick={() => setOpenProject(project)}
                  data-cursor="link"
                >
                  <Expand size={14} /> View Details
                </button>
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

      <AnimatePresence>
        {openProject && (
          <ProjectModal
            project={openProject}
            onClose={() => setOpenProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
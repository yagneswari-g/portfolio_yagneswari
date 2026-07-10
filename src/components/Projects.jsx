import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { projects, FaGithub, FaExternalLinkAlt } from "../data/portfolioData";

function Projects() {
  return (
    <section id="projects" className="section-padding projects">
      <div className="container">
        <SectionTitle
          label="My Work"
          title="Featured Projects"
          subtitle="Projects that show my frontend, backend, database and problem-solving skills."
        />

        <div className="projects-grid">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.article
                className={project.featured ? "project-card card featured" : "project-card card"}
                key={project.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                {project.featured && <span className="featured-label">Featured</span>}

                <div className="project-preview">
                  <Icon />
                  <span>{project.type}</span>
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <ul>
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>

                  <div className="tech-stack">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer" className="btn project-btn filled">
                      <FaGithub /> GitHub
                    </a>
                    <a href={project.live} target="_blank" rel="noreferrer" className="btn project-btn outline">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;

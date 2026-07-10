import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { experiences } from "../data/portfolioData";

function Experience() {
  return (
    <section id="experience" className="section-padding experience">
      <div className="container">
        <SectionTitle
          label="Experience"
          title="Internship Experience"
          subtitle="Practical experience that supports my fresher software developer profile."
        />

        <div className="timeline">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                className="timeline-item"
                key={exp.role}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="timeline-dot"><Icon /></div>
                <div className="timeline-content card">
                  <span>{exp.date}</span>
                  <h3>{exp.role}</h3>
                  <h4>{exp.company}</h4>
                  <ul>
                    {exp.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;

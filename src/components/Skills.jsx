import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { skills } from "../data/portfolioData";

function Skills() {
  return (
    <section id="skills" className="section-padding skills">
      <div className="container">
        <SectionTitle
          label="My Skills"
          title="Technical Skills"
          subtitle="Technologies and tools I use for building web applications."
        />

        <div className="skills-grid">
          {skills.map((group, index) => (
            <motion.div
              className="skill-card card"
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <h3>{group.category}</h3>
              <div className="skill-items">
                {group.items.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <span key={skill.name} className="skill-pill">
                      <Icon /> {skill.name}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

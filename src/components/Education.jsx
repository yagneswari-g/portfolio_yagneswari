import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { education } from "../data/portfolioData";

function Education() {
  return (
    <section id="education" className="section-padding education">
      <div className="container">
        <SectionTitle
          label="Education"
          title="Academic Journey"
          subtitle="My academic details and performance."
        />

        <div className="education-grid">
          {education.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                className="education-card card"
                key={item.degree}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
              >
                <div className="education-icon"><Icon /></div>
                <div>
                  <span>{item.year}</span>
                  <h3>{item.degree}</h3>
                  <p>{item.college}</p>
                  <strong>{item.score}</strong>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Education;

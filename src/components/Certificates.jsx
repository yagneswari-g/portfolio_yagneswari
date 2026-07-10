import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import { certificates } from "../data/portfolioData";

function Certificates() {
  return (
    <section id="certificates" className="section-padding certificates">
      <div className="container">
        <SectionTitle
          label="Certificates"
          title="Certifications"
          subtitle="Certificates that support my programming and database knowledge."
        />

        <div className="certificates-grid">
          {certificates.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                className="certificate-card card"
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
              >
                <div className="certificate-preview">
                  <Icon />
                  <span>{cert.platform}</span>
                </div>
                <h3>{cert.title}</h3>
                <p>{cert.platform}</p>
                <strong>{cert.year}</strong>
                <a href={cert.link} target="_blank" rel="noreferrer" className="view-certificate">
                  View Certificate <FaExternalLinkAlt />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Certificates;

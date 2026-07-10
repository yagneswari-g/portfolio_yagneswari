import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { aboutCards } from "../data/portfolioData";

function About() {
  return (
    <section id="about" className="section-padding about">
      <div className="container">
        <SectionTitle
          label="About Me"
          title="Who I Am"
          subtitle="A quick introduction about my skills, projects and career goal."
        />

        <div className="about-grid">
          <motion.div
            className="about-text card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p>
              I am a Computer Science Engineering student and aspiring Java Full Stack Developer.
              I enjoy building responsive and user-friendly web applications using React JS,
              JavaScript, Java, Spring Boot and MySQL.
            </p>
            <p>
              I have worked on projects like Employee Management System, Food Recipe Website,
              LotusReads Book Store Website and Portfolio Website. Through these projects, I improved
              my skills in frontend design, CRUD operations, authentication, API integration and
              responsive UI development.
            </p>
            <p>
              Currently, I am focusing on improving my full stack development skills and preparing
              for software developer roles.
            </p>
          </motion.div>

          <div className="about-cards">
            {aboutCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  className="about-mini-card card"
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <div className="mini-icon"><Icon /></div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

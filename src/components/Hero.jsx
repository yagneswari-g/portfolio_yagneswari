import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowRight } from "react-icons/fa";
import { heroStats, profile, techBadges } from "../data/portfolioData";

function Hero() {
  return (
    <section id="home" className="hero section-padding">
      <div className="hero-shape shape-one"></div>
      <div className="hero-shape shape-two"></div>

      <div className="container hero-grid">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">Welcome to my portfolio</span>
          <h1>
            Hi, I'm <span>{profile.name.split(" ")[0]}</span> <br />
            {profile.shortRole}
          </h1>
          <p className="hero-subtitle">
            I build responsive web applications using React JS, Java, Spring Boot and MySQL.
            I enjoy creating clean user interfaces and solving real-world problems through code.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              View Projects <FaArrowRight />
            </a>
            <a href={profile.resume} download className="btn secondary-btn">
              Download Resume <FaDownload />
            </a>
          </div>

          <div className="social-links">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-card-wrap"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="hero-profile-card">
            <div className="profile-glow"></div>
            <div className="profile-avatar">Y</div>
            <h3>{profile.name}</h3>
            <p>{profile.role}</p>

            <div className="tech-badges">
              {techBadges.map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container stats-grid">
        {heroStats.map((item) => (
          <motion.div
            className="stat-card"
            key={item.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h3>{item.number}</h3>
            <p>{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Hero;

import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import { profile } from "../data/portfolioData";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = `Portfolio message from ${form.name}`;
    const body = `Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0A%0D%0AMessage:%0D%0A${form.message}`;
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-padding contact">
      <div className="container">
        <SectionTitle
          label="Contact"
          title="Get In Touch"
          subtitle="Have a job opportunity, internship or project idea? Feel free to contact me."
        />

        <div className="contact-grid">
          <motion.div
            className="contact-info card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>Contact Details</h3>
            <p>I am open to software developer, frontend developer and Java full stack fresher opportunities.</p>

            <div className="contact-row">
              <FaEnvelope />
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
            <div className="contact-row">
              <FaPhoneAlt />
              <span>{profile.phone}</span>
            </div>
            <div className="contact-row">
              <FaMapMarkerAlt />
              <span>{profile.location}</span>
            </div>

            <div className="contact-socials">
              <a href={profile.github} target="_blank" rel="noreferrer"><FaGithub /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><FaLinkedin /></a>
            </div>
          </motion.div>

          <motion.form
            className="contact-form card"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message"
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn primary-btn full-btn">
              Send Message <FaPaperPlane />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

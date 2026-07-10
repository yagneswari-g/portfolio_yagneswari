import { FaHeart } from "react-icons/fa";
import { profile } from "../data/portfolioData";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>© 2026 {profile.name}.</p>
        <p>Built with <FaHeart /> using React JS</p>
      </div>
    </footer>
  );
}

export default Footer;

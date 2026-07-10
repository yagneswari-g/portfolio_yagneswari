import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaNodeJs,
  FaExternalLinkAlt,
  FaBookOpen,
  FaUtensils,
  FaUserTie,
  FaLaptopCode,
  FaAward,
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaTools
} from "react-icons/fa";
import { SiSpringboot, SiMysql, SiTailwindcss, SiNetlify } from "react-icons/si";

export const profile = {
  name: "Yagneswari Gangireddy",
  role: "Aspiring Java Full Stack Developer",
  shortRole: "Java Full Stack Developer",
  email: "yagneswarig@gmail.com",
  phone: "+91 9398851127",
  location: "India",
  github: "https://github.com/yagneswari-g",
  linkedin: "https://www.linkedin.com/in/yagneswari/",
  resume: "/resume.pdf"
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" }
];

export const heroStats = [
  { number: "4+", label: "Projects" },
  { number: "10+", label: "Skills" },
  { number: "2026", label: "Graduate" }
];

export const techBadges = ["React", "Java", "Spring Boot", "MySQL"];

export const aboutCards = [
  {
    icon: FaLaptopCode,
    title: "Frontend",
    text: "React JS, JavaScript, HTML, CSS, Tailwind CSS"
  },
  {
    icon: FaCode,
    title: "Backend",
    text: "Java, Spring Boot, REST API"
  },
  {
    icon: FaDatabase,
    title: "Database",
    text: "MySQL, SQL"
  },
  {
    icon: FaTools,
    title: "Tools",
    text: "Git, GitHub, Netlify, VS Code"
  }
];

export const skills = [
  {
    category: "Frontend Development",
    items: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "React JS", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss }
    ]
  },
  {
    category: "Backend Development",
    items: [
      { name: "Java", icon: FaJava },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "REST API", icon: FaNodeJs }
    ]
  },
  {
    category: "Database & Programming",
    items: [
      { name: "MySQL", icon: SiMysql },
      { name: "SQL", icon: FaDatabase },
      { name: "Python", icon: FaPython }
    ]
  },
  {
    category: "Tools & Deployment",
    items: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Netlify", icon: SiNetlify }
    ]
  }
];

export const projects = [
  {
    title: "Employee Management System",
    type: "Full Stack Project",
    icon: FaUserTie,
    description:
      "A full stack web application to manage employee records using React JS, Spring Boot and MySQL.",
    features: [
      "Add, update, view and delete employee records",
      "Employee details with department, salary, email and phone",
      "REST API integration between frontend and backend",
      "MySQL database for storing employee information"
    ],
    tech: ["React JS", "Spring Boot", "Java", "MySQL", "REST API"],
    github: "https://github.com/yagneswari-g/employee-management-project",
    live: "#",
    featured: true
  },
  {
    title: "LotusReads - Book Store Website",
    type: "React Project",
    icon: FaBookOpen,
    description:
      "A responsive online book store where users can explore books, view summaries, add favorites and manage cart items.",
    features: [
      "User signup and login using localStorage",
      "Book categories, summaries, lessons and ratings",
      "Favorites and cart functionality",
      "Responsive UI with modern book cards"
    ],
    tech: ["React JS", "JavaScript", "Tailwind CSS", "React Router", "LocalStorage"],
    github: "https://github.com/yagneswari-g/loutsReads",
    live: "https://loutsreads.netlify.app/",
    featured: true
  },
  {
    title: "Food Recipe Website",
    type: "Frontend Project",
    icon: FaUtensils,
    description:
      "A responsive recipe website where users can search recipes, view details and save favorite recipes.",
    features: [
      "Recipe cards with images, ratings and cooking time",
      "Search and filter recipes",
      "Favorites add and remove functionality",
      "Clean responsive design"
    ],
    tech: ["React JS", "JavaScript", "CSS", "API", "LocalStorage"],
    github: "https://github.com/yagneswari-g/food-recipe",
    live: "https://ornate-strudel-food-recipe.netlify.app/",
    featured: false
  },
  {
    title: "Portfolio Website",
    type: "Personal Project",
    icon: FaLaptopCode,
    description:
      "A personal portfolio website to showcase skills, projects, education, certificates and contact information.",
    features: [
      "Modern responsive layout",
      "Dark mode and smooth animations",
      "Project and certificate showcase",
      "Deployed using Netlify"
    ],
    tech: ["React JS", "JavaScript", "CSS", "Framer Motion", "Netlify"],
    github: "https://github.com/YOUR_GITHUB_USERNAME/portfolio",
    live: "https://yagneswarig-portfolio.netlify.app",
    featured: false
  }
];

export const experiences = [
  {
    role: "Java Full Stack Developer Intern",
    company: "Tap Academy",
    date: "2026",
    icon: FaBriefcase,
    points: [
      "Worked on frontend and backend development using React JS, Java, Spring Boot and MySQL.",
      "Built responsive UI components and practiced CRUD operations in real-time projects.",
      "Improved debugging, testing, Git, GitHub and project development skills."
    ]
  }
];

export const education = [
  {
    degree: "B.Tech in Computer Science Engineering",
    college: "Rajiv Gandhi University of Knowledge Technologies",
    year: "2022 - 2026",
    score: "CGPA: 8.6",
    icon: FaGraduationCap
  },
  {
    degree: "Pre University Course",
    college: "Rajiv Gandhi University of Knowledge Technologies",
    year: "2020 - 2022",
    score: "CGPA: 9.8",
    icon: FaGraduationCap
  }
];

export const certificates = [
  {
    title: "Programming using Java",
    platform: "Infosys Springboard",
    year: "2025",
    icon: FaAward,
    link: "https://drive.google.com/file/d/1kHl7gtbYeeCYAYRbHhSD3Tk30lrKxYYY/view?usp=drive_link"
  },
  {
    title: "Database Management System",
    platform: "Infosys Springboard",
    year: "2025",
    icon: FaAward,
    link: "https://drive.google.com/file/d/1kBAoQGDzPjvVdNYIbYcV8jA6lHiBlV3j/view?usp=drive_link"
  },
  {
    title: "Object Oriented System Development Using UML, Java and Patterns",
    platform: "NPTEL",
    year: "2025",
    icon: FaAward,
    link: "https://drive.google.com/file/d/1W6u2RDAPC8_5PE43S_y0AVILMG3aUU5S/view?usp=drive_link"
  }
];

export { FaGithub, FaExternalLinkAlt };

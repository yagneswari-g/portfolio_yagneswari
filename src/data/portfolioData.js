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
  FaClock,
  FaMotorcycle,
  FaShoppingBag,
  FaFilm,
  FaMusic,
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
  }, 
  {
    title: "Food Delivery Website",
    type: "Vanilla JavaScript Project",
    icon: FaMotorcycle,
    description:
      "A responsive food delivery application where users can explore restaurants, filter cuisines, select food items and manage their cart.",
    features: [
      "Restaurant listing with cuisine and vegetarian filters",
      "Menu page with food items, prices and ratings",
      "Cart with quantity updates, delivery fee and total price",
      "Order confirmation and localStorage cart persistence"
    ],
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Clerk Authentication",
      "LocalStorage"
    ],
    github: "https://github.com/yagneswari-g/food-delivery-website.git",
    live: "#",
    featured: true
  },
   {
    title: "Aurumu Watch Website",
    type: "E-commerce Frontend Project",
    icon: FaClock,
    description:
      "A premium watch shopping website with a modern product catalogue, detailed product pages and cart functionality.",
    features: [
      "Luxury watch product catalogue",
      "Product details with images, price and description",
      "Add-to-cart and quantity management",
      "Responsive design for mobile and desktop devices"
    ],
    tech: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    github: "https://github.com/yagneswari-g/aurum-watch-landing.git",
    live: "#",
    featured: false
  },
   {
    title: "Velora E-commerce Website",
    type: "E-commerce Project",
    icon: FaShoppingBag,
    description:
      "An end-to-end e-commerce website where users can browse products, view product details, manage their cart and complete checkout.",
    features: [
      "Product listing and individual product detail pages",
      "Add, remove and update product quantities in the cart",
      "Live cart count and total price calculation",
      "Google authentication using Clerk before checkout"
    ],
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Clerk Authentication",
      "LocalStorage"
    ],
    github: "https://github.com/yagneswari-g/velora-luxury-ecommerce-v2.git",
    live: "#",
    featured: true
  },
  {
    title: "Netflix Clone",
    type: "React Project",
    icon: FaFilm,
    description:
      "A responsive Netflix-inspired streaming interface with authentication, movie browsing and dynamic movie data.",
    features: [
      "Signup and login pages with protected navigation",
      "Hero banner with Play and More Info buttons",
      "Movie and TV show data fetched from the TMDB API",
      "Horizontal movie rows, hover effects and responsive design"
    ],
    tech: [
      "React JS",
      "JavaScript",
      "CSS",
      "React Router",
      "TMDB API",
      "LocalStorage"
    ],
    github: "https://github.com/yagneswari-g/Netflixclone.git",
    live: "#",
    featured: true
  },
  {
    title: "Spotify Clone",
    type: "React Project",
    icon: FaMusic,
    description:
      "A Spotify-inspired music application where users can browse music, search tracks, manage playlists and use music player controls.",
    features: [
      "Spotify-style sidebar, navbar and music player",
      "Play, pause, next and previous track controls",
      "Search songs, albums and artists",
      "Liked songs and custom playlists using localStorage"
    ],
    tech: [
      "React JS",
      "JavaScript",
      "CSS",
      "React Router",
      "Context API",
      "LocalStorage"
    ],
    github: "https://github.com/yagneswari-g/spotify-clone.git",
    live: "#",
    featured: true
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

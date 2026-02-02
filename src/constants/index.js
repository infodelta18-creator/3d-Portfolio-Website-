import {
  novalearn,
  ponggame,
  portfolio,
  backend,
  creator,
  coursera,
  hr,
  cp,
  fcc,
  mobile,
  web,
  ideas,
  concepts,
  designs,
  code,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "achievement",
    title: "Achievement",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Web Developer",
    icon: creator,
  },
];

const achievements = [
  {
    title: ["ByteX"],
    company_name: "ByteX",
    icon: fcc,
    iconBg: "#383E56",
    date: "May 2025",
    points: ["Responsive Web Design", "JavaScript"],
    credential: [
      "https://instagram.com/car1movvvvv",
      "https://instagram.com/car1movvvvv",
    ],
  },
  {
    title: ["HackerRank"],
    company_name: "HackerRank",
    icon: hr,
    iconBg: "#E6DEDD",
    date: "Aug 2025",
    points: [
      "Python (Basic) Certificate",
      "SQL (Basic) Certificate",
      "CSS (Basic) Certificate",
      "Go (Basic) Certificate",
    ],
    credential: [
      "https://instagram.com/car1movvvvv",
      "https://instagram.com/car1movvvvv",
      "https://instagram.com/car1movvvvv",
      "https://instagram.com/car1movvvvv",
    ],
  },
  {
    title: ["Certiport"],
    company_name: "Certiport",
    icon: cp,
    iconBg: "#383E56",
    date: "Aug 2025",
    points: ["IT Specialist - HTML and CSS", "IT Specialist - Databases"],
    credential: [
      "https://instagram.com/car1movvvvv",
    ],
  },
  {
    title: ["Coursera"],
    company_name: "Coursera",
    icon: coursera,
    iconBg: "#0056d2",
    date: "Nov 2025",
    points: ["IBM Full Stack Software Developer"],
    credential: ["https://instagram.com/car1movvvvv"],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but ByteX proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like ByteX.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "ByteX has increased its company (Netlivy®) traffic by 200% through its smart optimization. We truly believe!During my time working with the CEO of Netlivy, I have learned that our CEO is determined and never gives up on completing any task. I am proud to be part of the Netlivy® team.",
    name: "Lisa Wang",
    designation: "CMO",
    company: "Netlivy®",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Nova-Learn",
    description:
      "NovaLearn is an AI-powered platform that creates personalized learning paths with interactive content and quizzes. Designed with a futuristic 3D UI, it makes learning immersive, efficient, and goal-driven. 🚀(or Netlivy®)",
    tags: [
      {
        name: "node",
        color: "blue-text-gradient",
      },
      {
        name: "spline",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Flask",
        color: "violet-text-gradient",
      },
      {
        name: "sqlite3",
        color: "orange-text-gradient",
      },
    ],
    image: novalearn,
    source_code_link: "https://instagram.com/car1movvvvv",
  },
  {
    name: "Multiplayer Pong Game",
    description:
      "Multiplayer Pong Game with three modes: Play with a friend online, play side-by-side on the same screen, or challenge an AI opponent. Fast, fun, and competitive — classic Pong with modern multiplayer options! 🕹️🔥",
    tags: [
      {
        name: "socket",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: ponggame,
    source_code_link: "https://instagram.com/car1movvvvv",
  },
];

const words = [
  { text: "Ideas", imgPath: ideas, font: "Arial, sans-serif" },
  {
    text: "Concepts",
    imgPath: concepts,
    font: "'Courier New', Courier, monospace",
  },
  {
    text: "Designs",
    imgPath: designs,
    font: "'Times New Roman', Times, serif",
  },
  { text: "Code", imgPath: code, font: "'Fira Mono', monospace" },
  {
    text: "Ideas",
    imgPath: ideas,
    font: "'Comic Sans MS', cursive, sans-serif",
  },
  { text: "Concepts", imgPath: concepts, font: "'Roboto', sans-serif" },
  { text: "Designs", imgPath: designs, font: "'Georgia', serif" },
  { text: "Code", imgPath: code, font: "'Source Code Pro', monospace" },
];

export { achievements, projects, services, testimonials, words };

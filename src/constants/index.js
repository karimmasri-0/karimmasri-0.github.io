import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  typhonagency,
  laser,
  linklift,
  attendin,
  ecommerce,
  artathtetics,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "Typhon Agency",
    icon: typhonagency,
    iconBg: "#E6DEDD",
    date: "December 2021 - August 2022",
    points: [
      "Developing and maintaining web applications using Laravel, Bootstrap and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack bootcamp",
    company_name: "Lebanese Association for Scientific Research (LASeR)",
    icon: laser,
    iconBg: "#E6DEDD",
    date: "December 2022 - February 2023",
    points: [
      "Career Coaching",
      [
        "Technical Skills Training:",
        "React Web Development",
        "Building UI using JSX and Components",
        "React and fetching data from web APIs",
        "React Native Mobile Application",
        "High quality development (re-usability, maintainability, scalability)",
        "Improve development process using Design Patterns",
        "Unit testing",
      ],
      [
        "Project Internship",
        "Developed a mobile app that manages student attendance in a Lab room using QR code authentication, built with React Native.",
      ],
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Lebanese Association for Scientific Research (LASeR)",
    icon: laser,
    iconBg: "#E6DEDD",
    date: "March 2023 - May 2023",
    points: [
      "Mastered the MERN stack, gaining proficiency in full-stack development",
      "Elevated my expertise in UI/UX design, enhancing design skills",
      "Enhanced understanding of responsive design principles",
      "Elevated code quality and efficiency through refined coding practices",
      "Developed skills in crafting high-speed web flows for seamless user experiences",
      "Acquired time management skills, consistently delivering tasks punctually",
    ],
    // points: [
    //   "Created a carpooling website aimed at mitigating traffic congestion and promoting cost savings.",
    //   "Orchestrated the entire project, covering UI/UX design, frontend and backend development.",
    //   "Implemented robust Authorization and Authentication mechanisms to ensure secure access.",
    //   "Achieved seamless responsiveness with a fully adaptive design for optimal user experience.",
    //   "Incorporated advanced search filters for efficient user-driven content refinement.",
    //   "Leveraged third-party APIs, including OpenRouteService and Imgur, to enhance functionality.",
    //   "Ensured consistent high performance throughout the platform's various features.",
    // ],
  },
];

const projects = [
  {
    name: "LinkLift",
    description:
      "A carpooling platform that empowers users to effortlessly search, book, and oversee rides offered by diverse drivers, offering a seamless and effective transportation solution. This not only contributes to traffic reduction but also leads to significant cost savings.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: linklift,
    source_code_link: "https://github.com/karimmasri-0/LinkLift",
  },
  {
    name: "E-commerce",
    description:
      "An e-commerce website designed to sell construction and working tools. It features a search filter that allows users to sort by category, price, or conduct a specific search. The site also includes a shopping cart and user profiles.",
    tags: [
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "php",
        color: "blue-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/karimmasri-0/CCS",
  },
  {
    name: "AttendIn",
    description:
      "A mobile application designed to seamlessly manage student attendance within a laboratory setting, employing QR code authentication for a streamlined experience.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "android",
        color: "green-text-gradient",
      },
      {
        name: "qr-code",
        color: "pink-text-gradient",
      },
    ],
    image: attendin,
    source_code_link: "https://github.com/karimmasri-0/AttendIn",
  },

  {
    name: "ArtAesthetics",
    description: "A high quality image fetcher for Soundcloud album artworks.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "flask",
        color: "text-gray-600",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
    ],
    image: artathtetics,
    source_code_link: "https://github.com/karimmasri-0/ArtAthtetics",
  },
];

export { services, technologies, experiences, projects };

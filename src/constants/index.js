const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
   { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  
];

const counterItems = [
  { value: 2, suffix: "+", label: "Months of React.js Experience" },
  { value: 5, suffix: "+", label: "Completed Projects" },
  { value: 3, suffix: "+", label: "Hackathon Events" },
  { value: 1, suffix: "+", label: "Full Stack Applications" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png"  ,
    title: "Problem Solver",
    desc: "I enjoy solving coding challenges and building scalable backend solutions.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Collaborative",
    desc: "I love working in teams and participating in hackathons with innovative ideas.",
  },
  {
    imgPath: "/images/time.png",
    title: "Quick Learner",
    desc: "I adapt quickly to new technologies like React.js, GSAP, and MERN stack tools.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react-logo.png",
  },
  {
    name: "MERN Stack Enthusiast",
    imgPath: "/images/logos/mern.png",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node-js-logo.png",
  },
  {
    name: "Java Programmer",
    imgPath: "/images/logos/java.png",
  },
  {
    name: "ReactNative Developer",
    imgPath: "/images/logos/reactNative.png",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Balavignesh showed great dedication in learning React.js and GSAP animations in a short time. His ability to create smooth, interactive UIs adds real value to projects.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "React.js Developer (Internship)",
    date: "July 2025 - Present",
    responsibilities: [
      "Built interactive frontends using React.js and GSAP.",
      "Focused on responsive designs and seamless user experience.",
      "Integrated APIs and improved project workflows.",
    ],
  },
  {
    review:
      "During college, Balavignesh played a key role in developing the 'Law Friend' app that helps users access legal information easily. His backend contributions stood out.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Backend Developer - College Project",
    date: "2023 - 2024",
    responsibilities: [
      "Designed and implemented backend APIs with Node.js and MongoDB.",
      "Worked with a team to deliver a hackathon project in Top 10.",
      "Contributed to features ensuring user-friendly access.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
];

const testimonials = [
  {
    name: "Hackathon Mentor",
    mentions: "@hackathon",
    review:
      "Balavignesh is enthusiastic about backend development and MERN stack projects. His problem-solving skills and dedication during hackathon events were impressive.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Project Teammate",
    mentions: "@collegeproject",
    review:
      "Working with Bala on the 'Law Friend' project was a great experience. He took responsibility for backend and APIs, ensuring smooth integration with the frontend.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Trainer",
    mentions: "@qspiders",
    review:
      "Bala quickly picked up Java, React, and GSAP during his training. His eagerness to learn and apply concepts in real-time projects makes him stand out.",
    imgPath: "/images/client3.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};

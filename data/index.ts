export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Journey", link: "#journey" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "The intersection of AI, ethics, and human-centered design is where I love to explore and create.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/ai2.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Currently in Boston, MA",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "",
    description: "My digital DNA includes",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Masters at Northeastern University",
    description: "Life Lately",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.webp",
    spareImg: "/b4.webp",
  },

  {
    id: 5,
    title: "Developing a product to ship to 1000 users",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.webp",
    spareImg: "/grid.webp",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Kitchen Rescue - Your AI Pantry Tracker",
    des: "Kitchen Rescue is an AI powered pantry tracker app that helps you with great recipes and manage your inventory",
    img: "/kitchen-rescue.webp",
    iconLists: [
      "/nextjs.svg",
      "/re.webp",
      "/ts.webp",
      "/mui.png",
      "firebase.svg",
      "/tail.webp",
      "/openai.webp",
    ],
    link: "https://kitchen-rescue.vercel.app",
  },
  {
    id: 2,
    title: "Card Flix - AI Flashcards Generator",
    des: "Card Flix is a flashcards generation app, with the power of AI, create flashcards in an instant.",
    img: "/flashcard-saas.webp",
    iconLists: [
      "/nextjs.svg",
      "/re.webp",
      "/js.webp",
      "firebase.svg",
      "/tail.webp",
      "/mui.png",
      "stripe.svg",
      "openai.webp",
    ],
    link: "https://card-flix.vercel.app",
  },
  {
    id: 3,
    title: "IMBot - AI powered chatbot",
    des: "IMBot is an AI powered chatbot dedicated for Northeastern University's Intramurals Sports. The aim of the chatbot is to provide students with all the information related to Intramurals.",
    img: "/chatbot.png",
    iconLists: [
      "/nextjs.svg",
      "/re.webp",
      "/ts.webp",
      "firebase.svg",
      "/tail.webp",
      "/mui.png",
      "openai.webp",
    ],
    link: "https://neuimbot.vercel.app",
  },
  {
    id: 4,
    title: "Youthopia - A Youth Welfare Platform",
    des: "A MERN Stack web application & an inclusive online platform dedicated to empowering youth through diverse developmental opportunities, facilitated by enthusiastic volunteers.",
    img: "/youthopia.webp",
    iconLists: [
      "/re.webp",
      "/html.webp",
      "/css.webp",
      "/js.webp",
      "/mongo.webp",
      "/exp.webp",
      "/ts.webp",
    ],
    link: "https://github.com/notkannan/youthopia",
  },
  {
    id: 5,
    title: "Secure Stash - A File Encryption App",
    des: "Secure Stash is a secure and versatile file encryption application that allows users to encrypt various types of files",
    img: "/secure-stash.webp",
    iconLists: ["/java.webp"],
    link: "https://github.com/notkannan/secure-stash",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.webp",
    link: "https://github.com/notkannan",
  },
  {
    id: 2,
    img: "/leetcode.webp",
    link: "https://leetcode.com/u/notkannan/",
  },
  {
    id: 3,
    img: "/link.webp",
    link: "https://linkedin.com/in/kannankarthikeyan4",
  },
];

export const flipWordsContent = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Python",
  "C++",
  "AWS",
];

export const experiences = [
  {
    title: "Master of Science in Software Engineering Systems",
    company_name: "Northeastern University",
    icon: "northeastern.webp",
    iconBg: "#fff",
    date: "January 2024 - December 2025",
    points: [
      "GPA: 3.86",
      "Relevant Coursework: Concepts of Object Oriented Design, Web Development and User Experience Engineering",
      "Currently Working on: Network Structures and Cloud Computing , Database Management and Database Design",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Infosys Limited",
    icon: "infosys.webp",
    iconBg: "#fff",
    date: "November 2021 - April 2023",
    points: [
      "Experienced in developing business solutions using Microsoft's Dynamics 365 CE, Sales, Marketing, Field/Project Service.",
      "Developed and deployed customized Dynamics 365 apps for clients from small-scale to multimillion dollar industries, resulting in a 20% increase in client satisfaction ratings",
      "Implemented efficient data migration strategies for clients within Microsoft Dynamics 365, resulting in a successful transfer of over 10 million records without any data loss",
      "Delivered valuable insights of Dynamics 365’s functionality, and configured applications to meet multiple client’s requirements using the Microsoft Dynamics CRM Customization Tool, Workflow Tool, and SDK",
      "Adeptly mentored 5+ junior Systems Engineers, divulging them into Dynamics 365 functionality through continuous supervision and review sessions and as a result, they were certified as Microsoft Consultants",
    ],
  },
];

export const fullStackSkills = [
  {
    title: "Next.js",
    description:
      "Most of my projects were built using Next.js. Due to it's easy routing system and built-in API routes, making it easy to handle server-side logic and integrate with databases or third-party services",
    link: "",
  },
  {
    title: "React",
    description:
      "The component-based architecture allows reusability and helps me transform my ideas to reality without having to worry about writing code a lot.",
    link: "",
  },
  {
    title: "Node",
    description:
      "The perfect run-time environment for JavaScript which makes life so much easier.",
    link: "",
  },
  {
    title: "Tailwind CSS, SCSS",
    description:
      "I've used both Tailwind and SCSS in my projects and I'm well versed with both technologies.",
    link: "",
  },
  {
    title: "HTML",
    description:
      "Developed responsive and accessible web pages using semantic HTML5, adhering to best practices for SEO and web accessibility, including proper use of ARIA roles and attributes",
    link: "",
  },
  {
    title: "JavaScript / TypeScript",
    description:
      "Developed dynamic, scalable web applications using JavaScript (ES6+) for interactive UI elements and TypeScript for ensuring type safety and reducing errors in larger codebases.",
    link: "",
  },
];

export const AISkills = [
  {
    title: "Generative AI",
    description:
      "I'm skilled in building responsive, high-performance web apps using Next.js, React, and Tailwind CSS. Most of my projects focus on creating dynamic, user-friendly interfaces with modern front-end tech for seamless user experiences.",
    link: "https://stripe.com",
  },
  {
    title: "Large Language Models - LLM",
    description:
      "I'm skilled in building responsive, high-performance web apps using Next.js, React, and Tailwind CSS. Most of my projects focus on creating dynamic, user-friendly interfaces with modern front-end tech for seamless user experiences.",
    link: "https://stripe.com",
  },
  {
    title: "Retrieval Augmented Generation - RAG",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "GPT Vision",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "OpenAI API",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
]

export const UIUXSkills = [
  {
    title: "Figma",
    description:
      "I'm skilled in building responsive, high-performance web apps using Next.js, React, and Tailwind CSS. Most of my projects focus on creating dynamic, user-friendly interfaces with modern front-end tech for seamless user experiences.",
    link: "https://stripe.com",
  },
]

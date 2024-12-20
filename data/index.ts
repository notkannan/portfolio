
export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Journey", link: "#journey" },
    { name: "Contact", link: "#contact" },
];
  
  export const gridItems = [
    {
      id: 1,
      title: "The intersection of AI, ethics, and human-centered design is where I love to explore and create.",
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
      iconLists: ["/nextjs.svg","/re.webp", "/ts.webp", "/mui.png", "firebase.svg","/tail.webp", "/openai.webp"],
      link: "https://kitchen-rescue.vercel.app",
    },
    {
      id: 2,
      title: "Card Flix - AI Flashcards Generator",
      des: "Card Flix is a flashcards generation app, with the power of AI, create flashcards in an instant.",
      img: "/flashcard-saas.webp",
      iconLists: ["/nextjs.svg","/re.webp", "/js.webp","firebase.svg", "/tail.webp", "/mui.png","stripe.svg", "openai.webp"],
      link: "https://card-flix.vercel.app",
    },
    {
      id: 3,
      title: "IMBot - AI powered chatbot",
      des: "IMBot is an AI powered chatbot dedicated for Northeastern University's Intramurals Sports. The aim of the chatbot is to provide students with all the information related to Intramurals.",
      img: "/chatbot.png",
      iconLists: ["/nextjs.svg","/re.webp", "/ts.webp","firebase.svg", "/tail.webp", "/mui.png", "openai.webp"],
      link: "https://neuimbot.vercel.app",
    },
    {
      id: 4,
      title: "Youthopia - A Youth Welfare Platform",
      des: "A MERN Stack web application & an inclusive online platform dedicated to empowering youth through diverse developmental opportunities, facilitated by enthusiastic volunteers.",
      img: "/youthopia.webp",
      iconLists: ["/re.webp", "/html.webp", "/css.webp", "/js.webp", "/mongo.webp", "/exp.webp", "/ts.webp"],
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
      link: "https://github.com/notkannan"
    },
    {
      id: 2,
      img: "/leetcode.webp",
      link: "https://leetcode.com/u/notkannan/"
    },
    {
      id: 3,
      img: "/link.webp",
      link: "https://linkedin.com/in/kannankarthikeyan4"
    },
  ];


  export const flipWordsContent = [
    'React', 
    'Next.js',
    'JavaScript',
    'TypeScript', 
    'Python', 
    'C++', 
    'AWS'
  ]

  export const experiences = [
    {
      title: "Master of Science in Software Engineering Systems",
      company_name: "Northeastern University",
      icon: "northeastern.webp",
      iconBg: "#fff",
      date: "January 2024 - December 2025",
      points: [
        "GPA: 3.86",
        "Semester I: Concepts of Object Oriented Design, Web Development and User Experience Engineering",
        "Semester II: Network Structures and Cloud Computing, Database Management and Database Design"
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Infosys Limited",
      icon: "infosys.webp",
      iconBg: "#fff",
      date: "November 2021 - April 2023",
      points: [
        "Developed and deployed full-stack solutions for Dynamics 365 using C#, React and JavaScript, enhancing CRM functionalities for enterprise clients, including Fortune 500 companies, resulting in improved user experience and customer engagement",
        "Led the development of custom plugins and workflows using JavaScript and Dynamics 365 SDK, providing tailored functionality that enhanced system capabilities",
        "Created reusable, modular front-end components using ReactJS, HTML, CSS, and JavaScript frameworks, supporting consistent branding and seamless cross-platform functionality within customized Dynamics 365 environments",
        "Assisted in building responsive UI elements for Power Platform solutions, using ReactJS and JavaScript frameworks to improve accessibility and create a cohesive look and feel for client-facing applications",
        "Built and deployed RESTful APIs to integrate Dynamics 365 with third-party services, using Azure API Management and Azure Functions, improving data synchronization across platforms by 35%",
        "Mentored junior engineers in Dynamics 365 development, guiding them in JavaScript and Azure best practices, which led to a 30% increase in successful project delivery and improved team productivity"
      ],
    },
  ];

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Journey", link: "#journey" },
    { name: "Contact", link: "#contact" },
];
  
  export const gridItems = [
    {
      id: 1,
      title: "Enthusiastic about building highly scalable and available infrastructure all while incorporating AI into software development",
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
      title: "Research Assistant | Full-Stack Developer",
      company_name: "Northeastern University",
      icon: "northeastern.webp",
      iconBg: "#fff",
      date: "December 2024 - Present",
      points: [
        "Architected and deployed a serverless Retro Gaming Database, implementing AWS Lambda with API Gateway for event-driven microservices, and DynamoDB with single-digit millisecond latency at 5,000+ monthly queries", 
        "Engineered performant RESTful APIs with request batching and connection pooling, reducing average response times from 300ms to 195ms through implemented Redis caching layer and query optimization", 
        "Led cloud infrastructure migration from Digital Ocean to AWS, leveraging AWS Free Tier services including EC2, S3, and CloudFront CDN, resulting in 80% cost reduction while maintaining 99.99% SLA compliance", 
        "Refactored database schema and optimized queries, reducing read/write latencies by 40%, enhancing application responsiveness",
      ],
    },
    {
      title: "Master of Science in Software Engineering Systems",
      company_name: "Northeastern University",
      icon: "northeastern.webp",
      iconBg: "#fff",
      date: "January 2024 - December 2025",
      points: [
        "GPA: 3.84",
        "Semester I: Concepts of Object Oriented Design, Web Development and User Experience Engineering",
        "Semester II: Network Structures and Cloud Computing, User Experience Design/Testing",
        "Semester III: Enterprise Software Design, Data Structures and Algorithms",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Infosys Limited",
      icon: "infosys.webp",
      iconBg: "#fff",
      date: "November 2021 - March 2023",
      points: [
        "Spearheaded the development of a full-stack system using React for frontend and Azure Functions for a scalable backend, reducing data retrieval time by 50% and improving team productivity by 40%", 
        "Constructed modular UI elements that improved loading efficiency by decreasing render times on key application pages from an average of 2 seconds to less than 1 second, streamlining user interactions with essential features",
        "Orchestrated serverless backend operations via Azure Functions, incorporating event-driven workflows and microservices integration, slashing manual processes by 50\% through automated pipelines", 
        "Designed a distributed ticket routing system leveraging Apache Kafka's pub/sub model with D365 Customer Service Hub integration, accelerating ticket response times by 40% and elevating satisfaction metrics 32%", 
        "Led Agile development practices including daily standups, sprint planning, and retrospectives, while mentoring team members on best practices, resulting in 20\% improvement in sprint velocity and code quality metrics",
      ],
    },
  ];

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Journey", link: "#journey" },
    { name: "Contact", link: "#contact" },
];
  
  export const gridItems = [
    {
      id: 1,
      title: "Thoughtful user experiences, backed by reliable systems",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "./burningRose.jpeg",
      spareImg: "",
    },
    {
      id: 2,
      title: "Open to software engineering roles starting summer of 2026",
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
      description: "Technologies that I'm familiar with",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Graduating in May 2026",
      description: "Life Lately",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.webp",
      spareImg: "/b4.webp",
    },
  
    {
      id: 5,
      title: "Developing a brand website for an architectural firm",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.webp",
      spareImg: "/grid.webp",
    },
    {
      id: 6,
      title: "I'd love to collaborate, hit me up!",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    // {
    //   id: 1,
    //   title: "Cloud Native Backend Application",
    //   des: "Kitchen Rescue is an AI powered pantry tracker app that helps you with great recipes and manage your inventory",
    //   img: "/kitchen-rescue.webp",
    //   iconLists: ["/nextjs.svg","/re.webp", "/ts.webp", "/mui.png", "firebase.svg","/tail.webp", "/openai.webp"],
    //   link: "https://kitchen-rescue.vercel.app",
    // },
    {
      id: 1,
      title: "Kitchen Rescue - AI Pantry Tracker",
      des: "Kitchen Rescue is an AI powered pantry tracker app that helps you with great recipes and manage your inventory",
      img: "/kitchen-rescue.webp",
      iconLists: ["/nextjs.svg","/re.webp", "/ts.webp", "/mui.png", "firebase.svg","/tail.webp", "/openai.webp"],
      link: "https://kitchen-rescue.vercel.app",
    },
    {
      id: 2,
      title: "Cloud Native Web Application",
      des: "A production-ready, highly scalable cloud-native web application built on AWS, demonstrating enterprise-grade architecture, security, and DevOps practices. This project showcases a complete end-to-end implementation of a RESTful API with event-driven architecture, infrastructure as code, and automated CI/CD pipelines.",
      img: "/CloudNativeWebAppArchitecture.png",
      iconLists: ["/js.webp", "exp.webp", "/aws.svg", "/terraform.svg" ],
      link: "https://github.com/notkannan/webapp_fork",
    },
    {
      id: 3,
      title: "Card Flix - AI Flashcards Generator",
      des: "Card Flix is a flashcards generation app, with the power of AI, create flashcards in an instant.",
      img: "/flashcard-saas.webp",
      iconLists: ["/nextjs.svg","/re.webp", "/js.webp","firebase.svg", "/tail.webp", "/mui.png","stripe.svg", "openai.webp"],
      link: "https://card-flix.vercel.app",
    },
    {
      id: 4,
      title: "IMBot - AI powered chatbot",
      des: "IMBot is an AI powered chatbot dedicated for Northeastern University's Intramurals Sports. The aim of the chatbot is to provide students with all the information related to Intramurals.",
      img: "/chatbot.png",
      iconLists: ["/nextjs.svg","/re.webp", "/ts.webp","firebase.svg", "/tail.webp", "/mui.png", "openai.webp"],
      link: "https://neuimbot.vercel.app",
    },
    {
      id: 5,
      title: "Youthopia - A Youth Welfare Platform",
      des: "A MERN Stack web application & an inclusive online platform dedicated to empowering youth through diverse developmental opportunities, facilitated by enthusiastic volunteers.",
      img: "/youthopia.webp",
      iconLists: ["/re.webp", "/html.webp", "/css.webp", "/js.webp", "/mongo.webp", "/exp.webp", "/ts.webp"],
      link: "https://github.com/notkannan/youthopia",
    },
    {
      id: 6,
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
    'Next.js',
    'JavaScript',
    'TypeScript', 
    'Python', 
    'C++', 
    'AWS',
    'Docker',
    'Kubernetes'
  ]

  export const experiences = [
    {
      title: "Full Stack Engineering Intern",
      company_name: "Skytax",
      icon: "/skytax.png",
      iconBg: "#fff",
      date: "May 2025 - December 2025",
      points: [
        "Built distributed document processing pipeline using AWS Step Functions, Lambda, and Bedrock (Claude Sonnet 4.5 with tool calling), reducing processing time from 20+ seconds to $<$10 seconds across 30+ IRS form types",
        "Designed two-stage extraction combining AWS Textract OCR with Claude tool calling, achieving 95%+ accuracy through confidence scoring and validation",
        "Implemented event-driven microservices using AWS SQS, Lambda, and API Gateway to process Stripe and Veriff webhooks, achieving 100% delivery rate across 200+ alpha test transactions",
        "Developed multi-modal RAG chatbot using Bedrock and S3 Vectors with encrypted storage, PII removal, and safety guardrails, reducing Intercom support tickets by 78%",
        "Deployed 4 production services on ECS/Fargate with ALB, implementing Infrastructure-as-Code via CDK and CI/CD pipelines across dev/test/prod environments",
        "Built schema mapping tool enabling accountants to map 50+ IRS form fields to Intuit Lacerte input codes, streamlining B2B document-to-software workflow",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Northeastern University",
      icon: "northeastern.webp",
      iconBg: "#fff",
      date: "December 2024 - April 2025",
      points: [
        "Migrated from Digital Ocean to serverless AWS with DynamoDB, reducing monthly hosting costs from $40 to <$2", 
        "Deployed 1100+ game images to S3 with CloudFront CDN, reducing global load times from 3s to 400ms", 
        "Built authenticated React admin dashboard with REST API for game CRUD operations, eliminating manual spreadsheet workflow"
      ],
    },
    {
      title: "Master of Science in Software Engineering Systems",
      company_name: "Northeastern University",
      icon: "northeastern.webp",
      iconBg: "#fff",
      date: "January 2024 - May 2026",
      points: [
        "GPA: 3.8",
        "Semester I: Concepts of Object Oriented Design, Web Development and User Experience Engineering",
        "Semester II: Network Structures and Cloud Computing, User Experience Design/Testing",
        "Semester III: Enterprise Software Design, Data Structures and Algorithms",
        "Semester IV: Software Design Patterns, Business Analytics and Information Engineering",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Infosys Limited",
      icon: "infosys.webp",
      iconBg: "#fff",
      date: "November 2021 - March 2023",
      points: [
        "Developed custom React/TypeScript components and JavaScript form scripts for Microsoft Dynamics 365, implementing client-specific business logic, and UI customizations across 10+ production deployments", 
        "Resolved production issues in Dynamics 365 applications, analyzing component state, API interactions, and async workflows to identify root causes and deploy fixes under SLA constraints", 
        "Built event-driven integrations using Power Apps and Azure Functions to automate engagement workflows, reducing manual intervention and improving operational reliability"
      ],
    },
  ];
export const resume = {
  name: "Vitthal Patil",
  role: "Software Developer",
  email: "vitthalpatil5656@gmail.com",
  phone: "+91 9119534617",
  linkedin: "https://www.linkedin.com/in/vitthal-patil",

  profile:
    "Results-driven Software Developer with strong full-stack experience. Skilled in building scalable, high-performance web applications using modern JavaScript frameworks, REST APIs, and cloud-native tooling. Passionate about clean architecture, maintainable UI systems, and real-world problem solving.",

  skills: {
    languages: ["JavaScript", "Java", "Go"],

    frontend: [
      "React.js",
      "TypeScript",
      "Vue.js",
      "HTML",
      "CSS",
      "Bootstrap",
      "Vuetify"
    ],

    backend: [
      "Go (Golang)",
      "REST APIs"
    ],

    database: [
      "MySQL",
      "PostgreSQL"
    ],

    tools: [
      "GitHub",
      "AWS"
    ],

    softSkills: [
      "Logic Building",
      "Creative Design",
      "Problem Solving"
    ],

    manualTesting: [
      "SDLC & STLC Life Cycle",
      "Functional Testing",
      "Regression Testing",
      "Sanity & Smoke Testing",
      "Test Case Writing & Re-testing",
      "Defect Tracking (JIRA)"
    ],

    cloudTools: [
      "Docker (Containerization)",
      "Dockerfile",
      "Image Build & Optimization",
      "Container Lifecycle Management"
    ]
  },

  experience: [
    {
      company: "Exontric Systems",
      role: "Front End Developer",
      period: "June 2023 – January 2024",
      points: [
        "Developed responsive, mobile-first user interfaces using semantic HTML, modern CSS, Bootstrap, and JavaScript",
        "Optimized page performance by minimizing DOM operations and reducing asset sizes",
        "Converted Figma and UI mockups into pixel-perfect, production-ready web pages",
        "Ensured cross-browser compatibility across major desktop and mobile browsers"
      ]
    },
    {
      company: "Zizbey Consultancy",
      role: "Software Developer",
      period: "November 2024 – August 2025",
      points: [
        "Developed dynamic front-end interfaces using React.js and Vue.js to improve user experience and performance",
        "Built scalable and efficient backend services in Go (Golang) following clean architecture principles",
        "Designed and optimized PostgreSQL databases, including schema management and complex queries",
        "Deployed and managed applications on AWS",
        "Collaborated using GitHub with proper branching strategies, pull requests, and code reviews"
      ]
    }
  ],

  projects: [
    {
      title: "Grocery Management System",
      slug: "grocery-management-system",
      imagePath: "/projects/grocery",
      images: [
      "1.png",
      "2.png",
      "3.png"
      ],
      shortDescription:
        "A React-based grocery management system with cart and billing flow.",
      description:
        "The Grocery Management System is a front-end focused application built using React.js. It provides product listing, cart management, and a billing flow. Dummy APIs are used to simulate backend interactions, and the UI is designed for clarity, usability, and smooth user navigation.",
      features: [
        "Product listing using dummy API integration",
        "Add-to-cart and billing flow implementation",
        "Reusable and modular React components",
        "User-friendly and responsive UI design"
      ],
      tech: ["React.js", "JavaScript", "Dummy API"]
    },

    {
      title: "Dynamic Form Builder",
      slug: "dynamic-form-builder",
      imagePath: "/projects/form-builder",
      images: [
        "1.png",
        "2.png",
        "3.png",
        "4.png",
        "5.png",
        "6.png"
      ],
      shortDescription:
        "A metadata-driven dynamic form builder with live preview, layout editing, and PDF export.",
      description:
        "Dynamic Form Builder is an advanced, metadata-driven system that allows users to design, preview, and manage complex form layouts without hardcoded UI. The application supports multiple modes including Create, Edit, View, and Layout Edit, enabling flexible form lifecycle management.",
      features: [
        "Metadata-driven form rendering without hardcoded UI",
        "Section-based layouts with configurable field sizes",
        "Multiple modes: Create, Edit, View, Layout Edit",
        "Form state management and validation using React Hook Form and Zod",
        "Live preview, submission history, and layout editing",
        "PDF export with layout-accurate rendering",
        "NX monorepo architecture with reusable atomic components"
      ],
      tech: [
        "React",
        "TypeScript",
        "NX Monorepo",
        "React Hook Form",
        "Zod",
        "Context API"
      ]
    }
  ],

  education: [
    {
      degree: "Master of Computer Application (MCA)",
      institute: "Dr. D. Y. Patil Agriculture and Technical University, Talsande",
      period: "2021 – 2023"
    },
    {
      degree: "Bachelor of Computer Application (BCA)",
      institute: "Bharati Vidyapeeth, Kolhapur",
      period: "2018 – 2021"
    }
  ]
};

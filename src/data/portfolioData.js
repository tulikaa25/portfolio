export const portfolioData = {
  personalInfo: {
    name: "Tulika Basu",
    title: "Software & Automation Engineer",
    // subTitle: "B.Tech Computer Science Graduate | Automation & Full-Stack Developer",
    hookLine: "Building robust backends • Automating the tedious • Engineering the future with GenAI",
    bio: [
      "I look at software engineering through a lens of continuous evolution. Starting with a strong foundation in backend systems, databases, and full-stack development, I quickly realized that the best developers don't just stick to a fixed stack—they adapt.",
      "Today, my expertise spans creating production-ready applications, building GenAI integrations, and automating workflows. I am passionate about exploring new architectural paradigms, tweaking LLMs, and turning complex technical challenges into seamless user experiences."
    ],
    location: "Prayagraj, Uttar Pradesh, India",
    email: "tulikaa257@gmail.com",
    phone: "+91-8887550142",
    resumeLink: "/resume.pdf", // Resolves to public/resume.pdf
    socials: {
      
      github: "https://github.com/tulikabasu", // Placeholder - user can customize
      linkedin: "https://linkedin.com/in/tulikabasu",
      leetcode: "https://leetcode.com/tulikabasu",
      geeksforgeeks: "https://geeksforgeeks.org/user/tulikabasu"
    }
  },
  skills: [
    {
      category: "Languages",
      icon: "code", // Placeholder for icon. You'll need to add actual icon paths later.
      items: [
        { name: "Java", description: "Primary language for backend development and competitive programming." },
        { name: "SQL", description: "Proficient in database querying and management." },
        { name: "Python", description: "Used for scripting, data analysis, and AI/ML applications." },
        { name: "C++", description: "Foundational language for system programming and DSA." }
      ]
    },
    {
      category: "Frameworks & Technologies",
      icon: "globe",
      items: [
        { name: "Spring Boot", description: "Building robust, production-ready backend services." },
        { name: "React", description: "Developing interactive and dynamic user interfaces." },
        { name: "Node.js", description: "Backend JavaScript runtime." },
        { name: "Express.js", description: "Building RESTful APIs and web applications." },
        { name: "REST APIs", description: "Designing and consuming effective APIs." },
        { name: "Microservices", description: "Architecting scalable distributed systems." }
      ]
    },
    {
      category: "AI & Machine Learning",
      icon: "brain",
      items: [
        { name: "LangChain", description: "Framework for developing applications powered by language models." },
        { name: "LLM Integration", description: "Integrating Large Language Models into various applications." },
        { name: "RAG Systems", description: "Building Retrieval-Augmented Generation systems." },
        { name: "FAISS", description: "Efficient similarity search and clustering of dense vectors." },
        { name: "CLIP Model", description: "Used for multimodal AI applications (image-text embeddings)." },
        { name: "Prompt Engineering", description: "Crafting effective prompts for LLMs." }
      ]
    },
    {
      category: "Databases & Tools",
      icon: "database",
      items: [
        { name: "n8n Automation", description: "Workflow automation for various tasks." },
        { name: "Supabase", description: "Open-source Firebase alternative (Postgres, Auth, Storage)." },
        { name: "pgvector", description: "PostgreSQL extension for vector similarity search." },
        { name: "MongoDB", description: "NoSQL database for flexible data storage." },
        { name: "MySQL", description: "Relational database management system." },
        { name: "SendGrid", description: "Email delivery service." },
        { name: "Twilio", description: "SMS, voice, and video APIs." },
        { name: "GitHub", description: "Version control and collaboration." },
        { name: "VS Code", description: "Integrated Development Environment." },
        { name: "Postman", description: "API development and testing." },
        { name: "Claude Code", description: "AI assistant for coding." }
      ]
    }
  ],
  milestones: [
    {
      period: "March 2026 - Present",
      role: "Automation & Full Stack Intern",
      organization: "BrightRays",
      location: "Noida, UP (Remote)",
      shortDescription: "Automated content workflows and built a RAG-based customer support system, significantly reducing manual overhead and enhancing communication.",
      highlights: [
        "Architected an end-to-end content automation workflow using n8n, SERP API, and LLMs, reducing research, SEO filtering, formatting, and generation turnaround time by 90%.",
        "Developed a daily automated auditing pipeline validating 5+ SEO parameters and publisher categories using LLMs, cutting admin overhead significantly.",
        "Implemented a RAG-based hybrid customer support system featuring Supabase Realtime, pgvector, conversation status tracking, and secure file uploads via Supabase Buckets.",
        "Integrated transactional email services via SendGrid to automate core platform triggers, improving buyer-publisher communication reliability."
      ]
    },
  ],
  projects: [
    {
      id: "multimodal-rag",
      title: "Multimodal RAG System",
      tech: ["LangChain", "CLIP Model", "FAISS", "Google GenAI", "PyMuPDF"],
      thumbnail: "/project-images/multimodal-rag.png", // Placeholder for image
      description: "A Retrieval-Augmented Generation pipeline capable of parsing complex PDF documents containing both text and embedded images, performing semantic search, and generating grounded responses.",
      challenge: "Extracting and semantically searching information from complex PDF documents containing both text and images, and generating accurate, grounded responses without hallucinations.",
      solution: "Developed a RAG pipeline using PyMuPDF for text/image extraction and CLIP embeddings for a unified FAISS vector store. Integrated Google Generative AI with grounded system prompts.",
      impact: "Enabled efficient, cross-modal semantic search and accurate, citation-backed response generation from complex documents.",
      github: "https://github.com/tulikabasu/Multimodal-RAG-System",
      demo: "#"
    },
    {
      id: "agriweather-alert",
      title: "LLM-Driven AgriWeather Alert System",
      tech: ["SpringBoot", "Twilio API", "LLM Integration", "MySQL", "Scheduler"],
      thumbnail: "/project-images/agriweather.png", // Placeholder for image
      description: "An automated SMS, WhatsApp, and voice-call notification system providing localized bilingual weather forecasts and AI-generated agricultural tips for farmers.",
      challenge: "Delivering timely, localized, and easily understandable agricultural weather alerts to farmers, including those with limited digital literacy.",
      solution: "Built Spring Boot scheduling jobs to fetch weather data, used LLMs for bilingual summarization (Hindi/English), and integrated Twilio for SMS, WhatsApp, and voice-call delivery.",
      impact: "Improved accessibility of critical weather information and agricultural tips, empowering farmers to make informed decisions.",
      github: "https://github.com/tulikabasu/AgriWeather-Alert-System",
      demo: "#"
    },
    {
      id: "blood-bank-mgmt",
      title: "Blood Bank Management System",
      tech: ["Node.js", "Express.js", "MongoDB", "JWT Auth", "QR Validation"],
      thumbnail: "/project-images/blood-bank.png", // Placeholder for image
      description: "A comprehensive backend system for digitizing blood donation operations, donor screening, slot scheduling, and inventory checks.",
      challenge: "Streamlining blood donation processes, ensuring secure donor management, efficient slot scheduling, and real-time inventory tracking.",
      solution: "Designed donor eligibility logic, implemented JWT-based role authorization, and created a capacity-aware slot booking system with secure QR-code generation.",
      impact: "Digitized and optimized blood bank operations, improving efficiency, security, and donor experience.",
      github: "https://github.com/tulikabasu/Blood-Bank-Management-System",
      demo: "#"
    }
  ],
  achievements: [
    {
      title: "Oracle Cloud Infrastructure 2025 Generative AI Professional",
      issuer: "Oracle",
      year: "2025"
    },
    {
      title: "Smart India Hackathon (SIH) 2024 Finalist",
      issuer: "College Team Lead",
      year: "2024"
    },
    {
      title: "Open Source Contributor",
      issuer: "Various Repos (GSSoC / Hacktoberfest)",
      year: "2024, 2025"
    },
    {
      title: "1st Place - Foragers 2.0 (VIT Bhopal Annual Fest)",
      issuer: "VIT Bhopal",
      year: "2023"
    }
  ]
};

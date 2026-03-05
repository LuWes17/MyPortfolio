export const projectCategories = [
  "All",
  "Full Stack",
  "Mobile",
  "Web Platform"
];

export const projects = [
  {
    id: 1,
    title: "inara",
    shortTitle: "Structured Community Capital Platform",
    category: "Web",
    tags: [
      "Next.js",
      "TypeScript",
      "React 19",
      "Tailwind CSS",
      "Radix UI",
      "Resend",
      "FinTech",
      "SaaS",
    ],
    description:
      "Designed and built the marketing and pitch website for inara, a structured community capital platform that modernizes contribution-based rotating savings systems for institutional environments. inara enables debt-free access to lump-sum capital through coordinated weekly savings cohorts — sponsored by nonprofits, employers, and community organizations.",
    features: [
      "Custom interactive SVG cohort diagram visualizing rotating savings cycles with animated arrows and member nodes",
      "Institution-facing marketing pages with structured value propositions for nonprofits and employers",
      "Multi-page architecture: How It Works, For Institutions, Security, About, and Contact",
      "Contact form with Resend email API integration and server-side route handling"
    ],
    period: "Feb. 2026 – Present",
    status: "In Development",
    images: ["/project-images/inara.png"],
    github: "", // private
    demo: "https://inarapool.com",
    technologies: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI",
      "Resend",
      "Vercel",
    ],
  },
  {
    id: 2,
    title: "Participay",                                                                                                                                     
    shortTitle: "Research Participation Platform",                                                                                                           
    category: "Web",                                                                                                                                         
    tags: [                                                                                                                                                  
      "Next.js",                                                                                                                                             
      "TypeScript",                                                                                                                                          
      "Supabase",                                                                                                                                            
      "Tailwind CSS",                                                                                                                                        
      "Authentication",                                                                                                                                      
      "SaaS",                                                                                                                                                
      "Research Tech"                                                                                                                                        
    ],                                                                                                                                                       
    description: "Designed and built a web platform connecting researchers with survey participants who want to earn incentives by completing research studies. Participay streamlines the participant recruitment process through secure authentication, profile management, and role-based access control for researchers and administrators.",                                                                                                                        
    features: [                                                                                                                                              
      "Two-step registration process with comprehensive form validation",                                                                                    
      "Profile photo upload with client-side image compression",                                                                                             
      "Philippines-based phone number validation and formatting (+63)",                                                                                      
      "reCAPTCHA integration for bot prevention and security",                                                                                               
      "Role-based access control (participant, researcher, admin)",                                                                                          
      "Supabase authentication and database management",                                                                                                     
      "Secure password requirements with real-time validation feedback",                                                                                     
      "Admin dashboard for user management and research post moderation",                                                                                    
      "Personalized landing page for authenticated participants",                                                                                            
      "Profile management with photo display and user details"                                                                                               
    ],
    period: "Feb. 2026 – Present",
    status: "In Development",
    images: ["/project-images/Participay.png"],
    github: "", // keep empty if private
    demo: "https://participay.vercel.app/",
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Vercel",
      "reCAPTCHA"
    ]
  }, 
  {
    id: 3,
    title: "BurnAtlas",
    shortTitle: "Controlled Burn Planner",
    category: "Web",
    tags: [
      "Next.js",
      "TypeScript",
      "Weather APIs",
      "Stripe",
      "MongoDB",
      "SaaS",
      "Environmental Tech"
    ],
    description: "Designed and built a SaaS web platform for planning controlled agricultural burns using real-time and forecasted weather data. BurnAtlas helps land managers identify safe burn windows through a proprietary burn score algorithm, state regulation awareness, and tier-based access to extended forecasts and compliance data.",
    features: [
      "Location-based weather analysis using ZIP code and state validation",
      "Proprietary burn score algorithm with safety classifications",
      "Multi-day forecast table with color-coded burn conditions",
      "Best day-to-burn recommendations based on forecast analysis",
      "State and county burn ban visibility with regulatory references",
      "Fire danger and air quality index indicators",
      "Free vs Pro tier access with paywall enforcement",
      "Admin dashboard for users, subscriptions, and regulations management"
    ],
    period: "Jan. 2026 - Present",
    status: "In Development",
    images: ["/project-images/BurnAtlas.png"],
    github: "", // keep empty if private
    demo: "https://burnatlas.org/",
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "MongoDB Atlas",
      "Stripe",
      "Vercel",
      "Weather API"
    ]
  },
  {
    id: 4,
    title: "TimelyCare",
    shortTitle: "Smartwatch Health App",
    category: "Mobile",
    tags: ["Kotlin", "Android Studio", "Health Tech", "UX Design", "Participatory Design"],
    description: "Led development of an Android smartwatch health application specifically designed for older adults (60+) using participatory design methodology. Conducted user interviews, co-design sessions, and usability testing with 5 participants to create accessible interfaces tailored to senior users' needs.",
    features: [
      "Medication tracking with customizable reminders",
      "Real-time heart rate monitoring",
      "Fall detection with automatic alerts",
      "Emergency communication system",
      "Large, accessible UI optimized for older adults",
      "Voice-controlled interface options"
    ],
    period: "Jan. 2025 – Present",
    status: "In Development",
    images: ["/project-images/smartwatch.png"],
    github: "https://github.com/LuWes17/TimelyCare.git",
    demo: "",
    technologies: ["Kotlin", "Android Studio", "Wearable OS"]
  },
    {
    id: 5,
    title: "Distributed Database Transactions Manager",
    shortTitle: "DDB Transactions Manager",
    category: "Frontend",
    tags: ["React", "Node.js", "Express", "Distributed Systems", "UI/UX"],
    description:
      "Designed and developed the frontend interface for a distributed database web application simulating concurrency control, replication, and global failure recovery across three nodes. Built responsive UI components for triggering transactions, monitoring node states, and visualizing isolation-level behavior.",
    features: [
      "Interactive dashboard for multi-node transactions",
      "Real-time node status and replication logs",
      "Failure and recovery simulation controls",
      "Data fragmentation and replication visualization"
    ],
    period: "October 2025 – November 2025",
    status: "Completed",
    images: ["/project-images/DDB.png"],
    github: "https://github.com/XENNNOOOO/STADVDB-MC02.git",
    demo: "",
    technologies: ["React", "Node.js", "Express", "Distributed Systems"]
  },
  {
    id: 6,
    title: "Infomatik",
    shortTitle: "Infomatik Civic Platform",
    category: "Full Stack",
    tags: ["MongoDB", "Express", "React", "Node.js", "SMS API", "Civic Tech"],
    description: "Developed a comprehensive full-stack civic engagement web platform serving both citizens and government administrators. The platform provides service delivery, community interaction features, and administrative tools for 47+ barangay locations.",
    features: [
      "User management system supporting 47+ barangay locations with secure registration and authentication",
      "Job portal with application tracking, document upload, and SMS notifications",
      "Solicitation request management with approval workflows and budget tracking",
      "Content management system for announcements, policies, and community feedback",
      "Administrative dashboard with analytics and real-time system statistics",
      "Automated rice distribution system with scheduling and mass SMS notifications"
    ],
    period: "Aug. 2025 – Sept. 2025",
    status: "Completed",
    images: ["/project-images/infomatik.png"],
    github: "https://github.com/LuWes17/infomatik.git",
    demo: "https://infomatik.onrender.com/",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "SMS Integration"]
  },
  {
    id: 7,
    title: "LexSon Inventory and Billings Management System",
    shortTitle: "LexSon Inventory System",
    category: "Full Stack",
    tags: ["MongoDB", "Express", "React", "Node.js", "Team Project", "Business"],
    description: "Developed an automated inventory and billing system for a plasticware distribution business as a core developer in a 9-member team. Contributed to full-stack development and conducted defect analysis to enhance software requirements and system reliability.",
    features: [
      "Automated inventory tracking and management",
      "Billing system with automated invoice generation",
      "Distribution tracking and logistics management",
      "Real-time stock level monitoring",
      "Sales analytics and reporting dashboard",
      "Multi-user access with role-based permissions"
    ],
    period: "June 2024 – August 2024",
    status: "Completed",
    images: ["/project-images/Lexson.png"],
    github: "https://github.com/LexsonAdmin/LIBSP.git",
    demo: "",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "PDF Generation"]
  }
];

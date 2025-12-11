export const projectCategories = [
  "All",
  "Full Stack",
  "Mobile",
  "Web Platform"
];

export const projects = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    demo: "",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "SMS Integration"]
  },
  {
    id: 4,
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

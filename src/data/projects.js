export const projectCategories = [
  "All",
  "Full Stack",
  "Mobile",
  "Web Platform"
];

export const projects = [
  {
    id: 1,
    title: "Smartwatch Health Application for Older Adults",
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
    images: ["/project-images/smartwatch-placeholder.jpg"],
    github: "https://github.com/louise/smartwatch-health",
    demo: "",
    technologies: ["Kotlin", "Android Studio", "Wearable OS"]
  },
  {
    id: 2,
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
    images: ["/project-images/infomatik-placeholder.jpg"],
    github: "https://github.com/louise/infomatik",
    demo: "",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "SMS Integration"]
  },
  {
    id: 3,
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
    images: ["/project-images/lexson-placeholder.jpg"],
    github: "https://github.com/louise/lexson-inventory",
    demo: "",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "PDF Generation"]
  }
];

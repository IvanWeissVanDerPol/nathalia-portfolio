// Education Data
export const educationData = {
  // Section configuration
  sectionId: "education",
  title: "Education",
  subtitle: "My academic journey and qualifications",
  
  // Layout configuration
  layout: {
    wrapperClass: "wrapper style2",
    containerClass: "container",
    timelineClass: "timeline"
  },
  
  // Education entries (ordered by most recent first)
  institutions: [
    {
      id: "fpuna-bachelor",
      institution: "Facultad Politécnica de la Universidad Nacional de Asunción (FP-UNA)",
      shortName: "FP-UNA",
      degree: "Bachelor's Degree in Computer Science",
      duration: "2018 - Present",
      location: "Asunción, Paraguay",
      status: "ongoing",
      website: "#",
      logo: "/src/data/Logo/FPuna_logo.jpg",
      
      description: "Comprehensive program focused on both theoretical foundations and practical applications in computer science, covering a wide range of subjects from algorithms to systems design.",
      
      highlights: [
        "Specialized in Software Engineering, Machine Learning, Data Security, and Database Systems",
        "Achieved top placements in national programming competitions",
        "Paraguay National Programming Competition (2022)",
        "ETYC Programming Competition (2019)",
        "Developed leadership skills through student councils and mentoring",
        "Organized university-level tech events"
      ],
      
      coursework: [
        "Algorithms & Data Structures",
        "Operating Systems", 
        "Web Development",
        "Compiler Design",
        "Network Security",
        "Machine Learning",
        "Database Systems",
        "Software Engineering"
      ]
    },
    
    {
      id: "wichita-exchange",
      institution: "Wichita State University",
      shortName: "WSU",
      degree: "Study Abroad Program in Computer Science",
      duration: "January 2023 - May 2023",
      location: "Kansas, USA",
      status: "completed",
      website: "#",
      logo: "/src/data/Logo/wsu_logo.png",
      
      description: "Selected for an international exchange program to broaden technical knowledge and gain exposure to global perspectives in computer science and project management.",
      
      highlights: [
        "Focused on Negotiation, Strategic Marketing, Entrepreneurship, and Technical Communication",
        "Led development of 'Botanic Buddy' - an AI-powered reforestation rover",
        "Presented at entrepreneurship competition focusing on environmental sustainability",
        "Enhanced English proficiency and cross-cultural communication skills",
        "Traveled across tech hubs: San Francisco, Los Angeles, Kansas, and Colorado"
      ],
      
      coursework: [
        "Negotiation",
        "Strategic Marketing",
        "Entrepreneurship",
        "Technical Communication",
        "Business Strategy",
        "Software Development"
      ]
    }
  ],
  
  // Academic projects
  academicProjects: [
    {
      title: "Botanic Buddy - AI-Powered Reforestation Rover",
      institution: "Wichita State University",
      description: "AI-powered autonomous rover designed for environmental sustainability through automated reforestation",
      technologies: ["Artificial Intelligence", "Robotics", "Python", "Computer Vision"],
      highlights: [
        "Led interdisciplinary team development",
        "Presented at entrepreneurship competition",
        "Combined software engineering with environmental science",
        "Focused on automation for sustainability"
      ]
    }
  ],
  
  // Academic achievements
  achievements: [
    {
      title: "Paraguay National Programming Competition",
      year: "2022",
      placement: "Top Placement",
      description: "Achieved top placement in national-level programming competition"
    },
    {
      title: "ETYC Programming Competition", 
      year: "2019",
      placement: "Top Placement",
      description: "Early career achievement in programming competition"
    }
  ],
  
  // Academic statistics
  statistics: {
    degreesInProgress: 1,
    exchangePrograms: 1,
    competitionsWon: 2,
    yearsOfStudy: 6,
    specializations: 4
  },
  
  // Learning goals
  learningGoals: [
    "Advanced Data Engineering techniques",
    "Cloud Architecture and Infrastructure",
    "Machine Learning and AI applications",
    "Big Data processing frameworks",
    "DevOps and automation",
    "Enterprise software architecture"
  ],
  
  // Call to action
  callToAction: {
    title: "Academic Excellence",
    description: "My educational journey has provided me with a strong foundation in computer science theory and practical skills, enhanced by international exposure and competitive achievements.",
    buttonText: "View Certifications",
    buttonLink: "#certifications"
  }
};
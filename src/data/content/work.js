// Work Experience Data
export const workData = {
  // Section configuration
  sectionId: "work",
  title: "Work Experience",
  subtitle: "My professional journey and career highlights",
  
  // Layout configuration
  layout: {
    wrapperClass: "wrapper style1 fade-up",
    containerClass: "container"
  },
  
  // Work experiences (ordered by most recent first)
  experiences: [
    {
      id: "stoic-finch-technical-lead",
      company: "Stoic Finch",
      position: "Technical Lead - Sturgeon County Project",
      duration: "October 2024 - Present",
      location: "Remote",
      type: "Contract",
      status: "current",
      
      description: "Successfully led a cross-functional team of developers, analysts, and stakeholders to deliver a robust and innovative Power Apps solution tailored for Sturgeon County's unique operational needs.",
      
      responsibilities: [
        "Architected and implemented essential core functionalities, including task management, case handling, and role-based access control",
        "Developed and optimized backend automation workflows using Power Automate",
        "Seamlessly integrated SharePoint for centralized document management",
        "Collaborated closely with a UI/UX developer to enhance the application's design"
      ],
      
      technologies: [
        "Power Apps Development", "Workflow Automation", "Power BI Dashboards", 
        "SharePoint Integration", "Technical Leadership", "Power Automate"
      ],
      
      achievements: [
        "Enhanced operational efficiency by 40% across 5+ departments through automated workflows",
        "Reduced case processing time by 60% through streamlined creation and assignment processes",
        "Improved document management efficiency by 50% with centralized SharePoint integration",
        "Increased user satisfaction by 85% through intuitive UI/UX design improvements",
        "Led cross-functional team of 8+ developers, analysts, and stakeholders to successful delivery"
      ],
      
      companyInfo: {
        website: "#",
        industry: "Technology Consulting",
        size: "Technology Company",
        logo: "/src/data/Logo/Stoic_Finch_logo.jpg",
        clientLogo: "/src/data/Logo/Sturgeon_County_logo.png"
      }
    },
    
    {
      id: "mentormate-quality-engineer",
      company: "MentorMate",
      position: "Quality Engineer II - Professional Development",
      duration: "August 2023 - October 2024",
      location: "Remote",
      type: "Full-time",
      status: "completed",
      
      description: "Engaged in a comprehensive professional development program, significantly enhancing expertise in QA methodologies, compliance standards, and automation techniques.",
      
      responsibilities: [
        "Participated in various training programs and workshops on advanced QA tools",
        "Collaborated with global teams across Paraguay, USA, and Bulgaria",
        "Assisted in training bootcamps focused on API Testing using Postman",
        "Led automation of JSON to XLSX data conversion for client therapy data management",
        "Mentored junior QA engineers on automation best practices"
      ],
      
      technologies: [
        "Postman", "Charles Proxy", "MongoDB", "TestRail", "API Testing",
        "Generative AI", "Test Automation", "JSON Processing", "Data Management"
      ],
      
      achievements: [
        "Achieved 95% proficiency across 12+ advanced QA tools and technologies",
        "Successfully collaborated with global teams across 3 countries (Paraguay, USA, Bulgaria)",
        "Reduced test case generation time by 70% using Generative AI automation",
        "Increased test coverage by 45% for complex healthcare workflows",
        "Improved data processing efficiency by 80% through JSON to XLSX automation pipeline",
        "Mentored 5+ junior QA engineers on automation best practices"
      ],
      
      companyInfo: {
        website: "#",
        industry: "Software Development",
        size: "Large Enterprise",
        logo: "/src/data/Logo/mentormate_logo.jpeg"
      }
    },
    
    {
      id: "mentormate-flyte-project",
      company: "MentorMate",
      position: "Quality Specialist II - Flyte Project",
      duration: "August 2023 - October 2024",
      location: "Remote",
      type: "Full-time",
      status: "completed",
      
      description: "Oversaw quality assurance for the Flyte Project, focusing on a website, mobile application, and FDA-cleared device to improve women's pelvic health.",
      
      responsibilities: [
        "Collaborated with developers and project managers for seamless feature integration",
        "Managed detailed documentation for industry compliance",
        "Developed test plans and strategies for product reliability",
        "Executed test cases using Postman for API interactions",
        "Generated test data in MongoDB for various patient scenarios",
        "Tested mobile application with Bluetooth connectivity and physician website"
      ],
      
      technologies: [
        "Postman", "MongoDB", "Bluetooth Testing", "Mobile Testing",
        "API Testing", "FDA Compliance", "Test Documentation", "Risk Assessment"
      ],
      
      achievements: [
        "Achieved 100% FDA compliance for medical device software across 3 platforms",
        "Maintained 99.5% uptime and high-quality user experiences across web and mobile platforms",
        "Enhanced testing robustness by 60% through comprehensive MongoDB test data scenarios",
        "Reduced communication overhead by 30% through effective documentation and stakeholder alignment",
        "Improved feature adoption rate by 75% through comprehensive training materials and user guides"
      ],
      
      companyInfo: {
        website: "#",
        industry: "Healthcare Technology",
        size: "Large Enterprise",
        logo: "/src/data/Logo/mentormate_logo.jpeg",
        projectLogo: "/src/data/Logo/Flyte_logo.jpeg"
      }
    },
    
    {
      id: "wpg-qa-developer",
      company: "WPG.srl",
      position: "QA Engineer and Software Developer",
      duration: "October 2018 - December 2022",
      location: "Paraguay",
      type: "Full-time",
      status: "completed",
      
      description: "Performed comprehensive manual and automated testing, ensuring all new software features met quality standards before release while contributing to development efforts.",
      
      responsibilities: [
        "Performed comprehensive manual and automated testing",
        "Participated in multiple stages of the software development lifecycle",
        "Created and updated documentation for testing protocols and features",
        "Developed Python tools for test data generation and XML processing",
        "Automated report generation to minimize manual effort"
      ],
      
      technologies: [
        "Python", "Test Automation", "XML Processing", "Software Testing",
        "Software Development", "Machine Learning", "Documentation"
      ],
      
      achievements: [
        "Maintained 100% quality standards across 50+ software releases over 4 years",
        "Contributed to 25+ system architecture improvements and functionality enhancements",
        "Reduced manual testing effort by 85% through Python automation tools",
        "Increased testing efficiency by 300% through automated report generation and XML processing",
        "Created comprehensive documentation suite covering 90% of testing protocols and features"
      ],
      
      companyInfo: {
        website: "#",
        industry: "Software Development",
        size: "Small-Medium Enterprise",
        logo: "/src/data/Logo/wpg_logo.jpeg"
      }
    }
  ],
  
  // Skills gained through work experience
  skillsGained: [
    "Technical Leadership",
    "Quality Assurance",
    "Test Automation",
    "Project Management",
    "Cross-Cultural Collaboration",
    "FDA Compliance",
    "API Testing",
    "Power Platform Development",
    "Python Development",
    "Documentation Management"
  ],
  
  // Work statistics
  statistics: {
    totalProjects: 5,
    professionalPositions: 4,
    technologiesUsed: 25,
    yearsOfExperience: "6+",
    internationalExperience: 3
  },
  
  // Call to action for work section
  callToAction: {
    title: "Let's Work Together",
    description: "I'm always interested in new opportunities and challenging projects. Whether you need a technical leader, quality engineer, or data specialist, I'd love to hear from you.",
    buttonText: "Get In Touch",
    buttonLink: "#contact"
  }
};
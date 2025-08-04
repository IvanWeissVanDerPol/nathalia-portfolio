// Contact section data (extracted from current Contact component)
export const contactData = {
  // Section configuration
  sectionId: "contact",
  wrapperClass: "wrapper style4",
  containerClass: "container medium",
  
  // Contact information
  email: "weissvanderpol.ivan@gmail.com",
  phone: "+595 0981324569",
  location: "Asunción, Paraguay (Available for Remote Work Worldwide)",
  timezone: {
    name: "Paraguay Time",
    code: "PYT",
    offset: "UTC-3",
    iana: "America/Asuncion"
  },
  workingHours: {
    start: "08:00",
    end: "18:00",
    timezone: "America/Asuncion",
    availability: "Monday - Friday",
    note: "Flexible hours for international collaboration"
  },
  languages: ["Spanish (Native)", "English (Fluent)", "Dutch (Fluent)"],
  
  // Text content
  buttonText: "Contact",
  title: "Find me on ...",
  
  // Social links (complete list for contact section)
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/ivanweissvanderpol",
      icon: "fa-github",
      label: "Github"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ivanweissvanderpol/",
      icon: "fa-linkedin-in", 
      label: "LinkedIn"
    },
    {
      name: "Website",
      url: "https://ivanweissvanderpol.github.io/",
      icon: "fa-globe",
      label: "Website"
    },
    {
      name: "Resume",
      url: "/src/data/PersonalData/ResumeIvanWeiss-2025-05.pdf",
      icon: "fa-file-pdf",
      label: "Resume"
    }
  ],
  
  // Footer information
  footer: {
    copyright: "&copy; Ivan Weiss Van Der Pol. All rights reserved.",
    attribution: {
      text: "Designed with ❤️ by",
      linkText: "Ivan Weiss",
      url: "#"
    }
  }
}; 
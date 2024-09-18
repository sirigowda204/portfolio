export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        pythonLogoPosition: isSmall ? [-3, -6, 0] : isMobile ? [6, -4, 0] : isTablet ? [6, -4, 0] : [6, -4, 0],
        javaLogoPosition: isSmall ? [0, 2, 0] : isMobile ? [3, -4, 0] : isTablet ? [3, -4, 0] : [3, -4, 0],
        reactLogoPosition: isSmall ? [3, 3, 0] : isMobile ? [0, -4, 0] : isTablet ? [0, -4, 0] : [0, -4, 0],
        webdevPosition: isSmall ? [-3, -3, 0] : isMobile ? [-5, -5, 0] : isTablet ? [-5, -5, 0] : [-5, -6, 0],
    };
};


export const workExperiences = [
    {
        name: "Quickbase",
        pos: "Software Engineer Co-op",
        duration: "July 2024 – Present",
        title: "Building and deploying plug-in features from scratch for their platform using React and Javascript, used by 25,000+ companies.",
        icon: "/assets/quickbase.png",
        animation: "quickbase"
    },
    {
        name: "PricewaterhouseCoopers (PwC)",
        pos: "Technology Consulting Intern",
        duration: "Jan 2023 – July 2023",
        title: "Developed a chatbot using OneReach.ai with the Intelligent Automation (Conversation AI) team.",
        icon: "/assets/pwc.png",
        animation: "pwc"
    },
    {
        name: "Bharat Electronics Limited",
        pos: "Data Analyst Intern",
        duration: "June 2022 – July 2022",
        title: "Forecasted web traffic for a government portal used by 2 Million+ citizens using ARIMA/SARIMA models.",
        icon: "/assets/bel.png",
        animation: "bel"
    },
    {
        name: "Hitech Services",
        pos: "Software Development Intern",
        duration: "Jan 2022 – May 2022",
        title: "Built product features for tele-callers, implemented data caching jobs using Redis and Spring Boot, created APIs and user interfaces using Angular.",
        icon: "/assets/hitech.png",
        animation: "hitech"
    },
];

export const educationDetails = [
    {
        institution: "Northeastern University",
        degree: "Master's in Computer Science (MSCS)",
        year: "2023 - 2025",
        details: "Programming Design Paradigm, Algorithms, Web Development, Database Management Systems, Scalable Distributed Systems",
        icon: "/assets/northeastern.png" // Optional: Path to the logo of the institution
    },
    {
        institution: "PES University",
        degree: "Bachelor of Technology in Computer Science",
        year: "2019 - 2023",
        details: "Software Engineering, Data Science, Machine Learning, Blockchain Technologies",
        icon: "/assets/pes.png"
    }
];
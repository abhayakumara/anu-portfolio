export const profile = {
  name: "Anushree P D",
  title: "Software Engineer",
  tagline: "React.js · Golang · Full Stack",
  roles: ["Software Engineer", "React.js Developer", "Golang Developer", "Full Stack Engineer"],
  location: "Bengaluru, India",
  email: "anushreepd14@gmail.com",
  phone: "+91 9591789434",
  resumeUrl: "/Anushree_PD_Resume.pdf",
  socials: {
    linkedin: "https://linkedin.com/in/anusheepd",
    github: "https://github.com/anushreepd",
  },
  summary:
    "Software Developer with 4+ years of experience building scalable, high-availability web applications using React.js, TypeScript, JavaScript (ES6+), Golang (Gin), Node.js, and REST APIs. Proven track record in frontend performance optimisation, microservices architecture, and CI/CD-driven delivery. Experienced in Agile/Scrum environments, code reviews, and cross-functional collaboration. Holds foundational knowledge of Large Language Models (LLMs) and prompt engineering. Strong focus on web accessibility (WCAG 2.1), unit testing, and shipping production-grade full stack applications.",
};

export const stats = [
  { label: "Years Experience", value: "4+" },
  { label: "Users Reached", value: "10K+" },
  { label: "Load Time Cut", value: "57%" },
  { label: "Apps Adopting Library", value: "8" },
];

export type SkillCategory = {
  title: string;
  icon: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "layout",
    skills: [
      "React.js",
      "React Hooks",
      "Context API",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Responsive Design",
      "Cross-Browser Compatibility",
      "Web Performance Optimisation",
      "Accessibility (WCAG 2.1)",
    ],
  },
  {
    title: "Backend",
    icon: "server",
    skills: [
      "Go / Golang (Gin)",
      "Node.js",
      "Express.js",
      "RESTful API Design",
      "Microservices Architecture",
      "Concurrency",
      "Redis",
      "MySQL",
      "PostgreSQL",
      "SQL",
    ],
  },
  {
    title: "AI / LLM",
    icon: "sparkles",
    skills: [
      "Large Language Models (LLMs)",
      "Transformer Architecture",
      "Prompt Engineering",
      "Tokenisation",
      "Claude & OpenAI APIs",
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: "cloud",
    skills: [
      "AWS (CloudWatch, CodeBuild, S3)",
      "CI/CD Pipelines",
      "Docker",
      "Git",
      "Bitbucket",
      "SonarQube",
      "Vercel",
      "Postman",
      "Swagger / OpenAPI",
    ],
  },
  {
    title: "Testing & Quality",
    icon: "shield-check",
    skills: [
      "Unit Testing",
      "Integration Testing",
      "Jest",
      "Golang testing package",
      "SonarQube Security Scanning",
      "NVDA Screen Reader Testing",
      "Code Reviews",
    ],
  },
  {
    title: "Methodologies",
    icon: "git-branch",
    skills: [
      "Agile",
      "Scrum",
      "System Design",
      "Data Structures & Algorithms",
      "Performance Debugging",
      "Root Cause Analysis",
    ],
  },
];

export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    company: "Impelsys Pvt Ltd.",
    role: "Software Engineer I",
    location: "Bengaluru, India",
    period: "Apr 2024 – Present",
    highlights: [
      "Led full stack development of a React.js analytics dashboard (Google Charts, React Hooks, Context API) with dynamic multi-level filters; adopted by 10,000+ users, cutting report-generation time by 40%.",
      "Achieved a 57% reduction in initial load time (2.8 s → 1.2 s) through code-splitting, lazy loading, memoisation, and component re-render optimisation — applying advanced web performance optimisation techniques.",
      "Designed and shipped RESTful APIs end-to-end in Golang (Gin) and Node.js / Express.js: schema design, Swagger/OpenAPI documentation, unit & integration tests (Jest), and >90% code coverage.",
      "Architected Golang microservices for international certificate processing with multi-system integrations; Redis caching layer reduced data-retrieval latency by 60% under peak concurrent load.",
      "Achieved WCAG 2.1 compliance through NVDA screen reader audits and ARIA refactoring, ensuring full cross-browser compatibility and inclusive UX across all supported platforms.",
      "Utilised AWS (CloudWatch, CodeBuild CI/CD pipelines, S3) for deployment operations and authored optimised SQL queries for production reporting workflows.",
    ],
  },
  {
    company: "Impelsys Pvt Ltd.",
    role: "Software Engineer Trainee",
    location: "Bengaluru, India",
    period: "Aug 2022 – Apr 2024",
    highlights: [
      "Built a configurable React.js self-serve reporting system using custom hooks and reusable components; reduced report-generation time by 50% and eliminated dependency on engineering for admin-level reports.",
      "Lifted Jest unit & integration test coverage from 30% → 80%; resolved SonarQube-flagged vulnerabilities, resulting in zero security incidents post-release and strengthening CI/CD pipeline reliability.",
      "Primary contact for 5–6 monthly customer-reported bugs in the AHA application; applied root-cause analysis, coordinated cross-team fixes, and improved mean time to resolution (MTTR).",
      "Authored a reusable React.js component library (hooks, Context API patterns) adopted across 8 applications, cutting duplicate code by 50% and accelerating Agile sprint delivery for the frontend team.",
    ],
  },
  {
    company: "Impelsys Pvt Ltd.",
    role: "Software Engineer Intern",
    location: "Bengaluru, India",
    period: "Mar 2022 – Aug 2022",
    highlights: [
      "Built an in-house React.js planning poker application (JavaScript ES6+, REST API integration) adopted as the standard Agile sprint estimation tool, cutting planning sessions from 60+ to under 30 minutes.",
    ],
  },
];

export type Education = {
  degree: string;
  institution: string;
  detail: string;
};

export const education: Education[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "RV College of Engineering, Bengaluru",
    detail: "CGPA: 7.74 / 10.0",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Bapuji Institute",
    detail: "CGPA: 7.53 / 10.0",
  },
];

export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  challenge: string;
  achievement: string;
  github: string;
};

export const projects: Project[] = [
  {
    title: "Analytics Dashboard Platform",
    blurb:
      "Full stack React.js analytics dashboard with Google Charts and dynamic multi-level filters, serving 10,000+ users.",
    tags: ["React.js", "Context API", "Google Charts", "Golang", "REST APIs"],
    challenge:
      "Rendering large, deeply-filterable datasets without janky re-renders while keeping the first load fast.",
    achievement:
      "Cut report-generation time by 40% and initial load by 57% via code-splitting, memoisation & lazy loading.",
    github: profile.socials.github,
  },
  {
    title: "International Certificate Microservices",
    blurb:
      "Golang microservices handling international certificate processing across multiple integrated systems.",
    tags: ["Golang", "Gin", "Microservices", "Redis", "Concurrency"],
    challenge:
      "High data-retrieval latency across multi-system integrations under peak concurrent load.",
    achievement:
      "Introduced a Redis caching layer that reduced data-retrieval latency by 60%.",
    github: profile.socials.github,
  },
  {
    title: "Self-Serve Reporting System",
    blurb:
      "Configurable React.js reporting system built on custom hooks and reusable components.",
    tags: ["React.js", "Custom Hooks", "TypeScript", "Jest"],
    challenge:
      "Admin users depended on engineering for every new report variation, creating a delivery bottleneck.",
    achievement:
      "Halved report-generation time and removed engineering dependency for admin-level reports.",
    github: profile.socials.github,
  },
  {
    title: "Reusable Component Library",
    blurb:
      "A shared React.js component library (hooks + Context API patterns) adopted across 8 applications.",
    tags: ["React.js", "Design System", "Hooks", "Accessibility"],
    challenge:
      "Duplicate UI code drifted across eight applications, slowing sprints and hurting consistency.",
    achievement:
      "Cut duplicate code by 50% and accelerated Agile sprint delivery across the frontend team.",
    github: profile.socials.github,
  },
  {
    title: "Planning Poker App",
    blurb:
      "In-house Agile sprint estimation tool that became the team standard.",
    tags: ["React.js", "JavaScript ES6+", "REST API"],
    challenge:
      "Sprint planning sessions routinely dragged past an hour with inconsistent estimation.",
    achievement:
      "Became the standard estimation tool, shrinking planning sessions from 60+ to under 30 minutes.",
    github: profile.socials.github,
  },
];

export const techMarquee = [
  "React.js",
  "TypeScript",
  "Golang",
  "Gin",
  "Node.js",
  "Express.js",
  "Redis",
  "PostgreSQL",
  "MySQL",
  "Docker",
  "AWS",
  "Jest",
  "REST APIs",
  "Microservices",
  "CI/CD",
  "WCAG 2.1",
];

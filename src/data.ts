import { Project, Skill, Experience, Education, Certificate, GitHubStats } from './types';
import profileAvatar from './assets/images/nigerian_boy_avatar_1783693297126.jpg';

export const PROFILE_IMAGE = profileAvatar;
export const LOGO_IMAGE = 'https://i.postimg.cc/TY8smtt2/Anu-tech.png';

export const BIO_SUMMARY = {
  name: 'Olukayode Anuoluwapo Diekolomo',
  title: 'Computer Science Student | Software Engineer & IT Intern',
  tagline: 'Crafting premium, performant, and beautifully interactive digital experiences with absolute design precision.',
  location: 'Ibadan, Nigeria',
  aboutJourney: `My journey into technology began with a deep interest in how computer systems and networks communicate under the hood. As a Computer Science undergraduate at Bowen University, I have had the privilege of translating academic concepts into practical, hands-on experience through intensive Industrial Training at Odua Investment Company Limited and the University College Hospital (UCH), Ibadan.`,
  aboutPassion: `I am deeply passionate about building scalable web solutions, optimizing network architectures, and maintaining robust IT infrastructure. Whether designing responsive frontend interfaces with React or troubleshooting enterprise network connections, I aim to deliver high-quality, high-performance results.`,
  aboutLearning: `Continuous learning is central to my identity. In addition to my university studies, I have completed certifications like freeCodeCamp's Responsive Web Design and Python Programming Micro-Credentials, expanding my technical capabilities to build elegant, accessible, and performant digital systems.`,
  aboutAspirations: `I aspire to contribute technical expertise and innovative solutions as a Software Engineer, collaborating with cross-functional teams to tackle complex software, networking, and technology integration challenges.`,
  githubUsername: 'anutech952',
  linkedinUrl: 'https://www.linkedin.com/in/anuoluwa-olukayode-b82a25345',
  emailAddress: 'olukayodeanuoluwapo19@gmail.com',
  whatsappNumber: '09013254507',
  whatsappUrl: 'https://wa.me/2349013254507',
};

export const STATS = [
  { id: 'projects', label: 'Projects Completed', value: 4, suffix: '' },
  { id: 'skills', label: 'Technologies Learned', value: 20, suffix: '+' },
  { id: 'certificates', label: 'Certificates Earned', value: 3, suffix: '' },
  { id: 'years', label: 'Years of Dev Learning', value: 3, suffix: '+' },
];

export const SKILLS: Skill[] = [
  // Frontend
  { name: 'HTML5', level: 95, category: 'frontend', iconName: 'Html5' },
  { name: 'CSS3', level: 90, category: 'frontend', iconName: 'Css3' },
  { name: 'JavaScript', level: 92, category: 'frontend', iconName: 'Javascript' },
  { name: 'React.js', level: 88, category: 'frontend', iconName: 'React' },
  { name: 'Responsive Web Design', level: 94, category: 'frontend', iconName: 'Layout' },
  { name: 'Front-End Web Development', level: 90, category: 'frontend', iconName: 'Code2' },

  // Backend
  { name: 'Node.js', level: 75, category: 'backend', iconName: 'Nodejs' },
  { name: 'Python', level: 70, category: 'backend', iconName: 'Python' },
  { name: 'Computer Networking', level: 88, category: 'backend', iconName: 'Network' },
  { name: 'Software Development', level: 85, category: 'backend', iconName: 'Terminal' },

  // Database
  { name: 'Database Management Systems', level: 80, category: 'database', iconName: 'Database' },

  // Tools
  { name: 'Git', level: 88, category: 'tools', iconName: 'Git' },
  { name: 'GitHub', level: 90, category: 'tools', iconName: 'Github' },
  { name: 'Visual Studio Code', level: 95, category: 'tools', iconName: 'Vscode' },
  { name: 'Technical Support', level: 90, category: 'tools', iconName: 'HelpCircle' },
  { name: 'Network Troubleshooting', level: 85, category: 'tools', iconName: 'Activity' },
];

export const PROJECTS: Project[] = [
  {
    id: 'proj1',
    title: 'Frost Bridge Global Logistics',
    description: 'A professional corporate website and cargo platform designed for a logistics and freight forwarding company. Built responsive service pages covering freight forwarding, customs brokerage, warehousing, and logistics operations, featuring an integrated shipment tracking interface optimized for all devices.',
    tech: ['React.js', 'Tailwind CSS', 'JavaScript'],
    category: 'frontend',
    githubUrl: 'https://github.com/anutech952/Frost-bridge-global-logistics.git',
    demoUrl: 'https://www.frostbridgelogistics.com.ng',
    imageUrl: 'https://i.postimg.cc/RVD3sVwN/Frost-Bridge-Logo.png'
  },
  {
    id: 'proj2',
    title: 'Ridgehigh Website',
    description: 'A premium, high-performance web platform designed and built for Ridgehigh. Features fully responsive pages, smooth layout structures, intuitive custom navigations, elegant modern branding, and cross-browser optimizations engineered for supreme usability and fast load times.',
    tech: ['React.js', 'Tailwind CSS', 'JavaScript'],
    category: 'frontend',
    githubUrl: 'https://github.com/anutech952/ridgehigh.git',
    demoUrl: 'https://ridgehigh.netlify.app/',
    imageUrl: 'https://i.postimg.cc/k5zZhZRg/logo.jpg'
  },
  {
    id: 'proj3',
    title: 'Personal Portfolio Website',
    description: 'A highly polished and responsive developer portfolio website showcasing technical projects, skills, certifications, and professional achievements. Optimized for fast performance, accessibility, smooth layouts, and intuitive developer introductions.',
    tech: ['React.js', 'Tailwind CSS', 'Framer Motion'],
    category: 'frontend',
    githubUrl: 'https://github.com/anutech952',
    demoUrl: 'https://anutech952.github.io/portfolio/',
    imageUrl: PROFILE_IMAGE
  },
  {
    id: 'proj4',
    title: 'Weather App',
    description: 'An interactive, responsive, and beautifully styled weather forecasting application delivering real-time meteorological forecasts, current temperatures, atmospheric conditions, and wind metrics for global cities.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    category: 'frontend',
    githubUrl: 'https://github.com/anutech952/Weather-app.git',
    demoUrl: 'https://anutech952.github.io/Weather-app/',
    imageUrl: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=800&q=80'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    role: 'Information Technology Intern',
    company: 'Odua Investment Company Limited',
    location: 'Ibadan, Oyo State, Nigeria',
    duration: 'Industrial Training',
    description: [
      'Worked as part of the Networking, Software Development, and IT Services teams, supporting the organization\'s day-to-day technology operations.',
      'Assisted in configuring, monitoring, and troubleshooting enterprise computer networks.',
      'Supported the development, testing, and maintenance of internal software applications.',
      'Installed, configured, and maintained computer systems, operating systems, and business software.',
      'Diagnosed and resolved hardware, software, and network-related issues while providing technical support to staff.',
      'Collaborated with cross-functional IT teams to maintain secure, reliable, and efficient IT infrastructure.',
      'Gained practical experience in software development, enterprise networking, system administration, and IT service delivery.'
    ],
    skills: ['Computer Networking', 'Network Troubleshooting', 'Software Development', 'IT Support', 'System Administration']
  },
  {
    id: 'exp2',
    role: 'Information Technology Intern',
    company: 'University College Hospital (UCH)',
    location: 'Ibadan, Oyo State, Nigeria',
    duration: 'Industrial Training',
    description: [
      'Rotated through the Networking, Hardware, and Software Units within the Information Technology Department.',
      'Assisted in monitoring and maintaining the hospital\'s network infrastructure.',
      'Installed, configured, and maintained desktop computers, printers, and other IT equipment.',
      'Supported software installation, updates, and troubleshooting for staff across multiple departments.',
      'Diagnosed and resolved hardware, software, and network-related technical issues.',
      'Performed preventive maintenance to improve the reliability and performance of IT systems.',
      'Worked alongside experienced IT professionals to support technology operations in a large healthcare environment.'
    ],
    skills: ['Computer Networking', 'Hardware Installation', 'IT Support', 'Network Troubleshooting', 'Preventive Maintenance']
  }
];

export const EDUCATION_LIST: Education[] = [
  {
    id: 'edu1',
    degree: 'Bachelor of Science (B.Sc.) in Computer Science',
    school: 'Bowen University, Iwo, Osun State, Nigeria',
    duration: 'September 2023 – Present',
    coursework: [
      'Software Development',
      'Computer Programming',
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Web Development',
      'Cyber Security'
    ],
    description: 'Active undergraduate focusing on building deep theoretical knowledge alongside practical technical competencies in software development, algorithm optimizations, and modern database structures.'
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: 'cert1',
    title: 'Responsive Web Design Certification',
    issuer: 'freeCodeCamp.org',
    date: 'September 2025',
    credentialId: 'fcc-0fdfc382-e131-47ba-9831-786b57e25f55',
    credentialUrl: 'https://freecodecamp.org/certification/fcc-0fdfc382-e131-47ba-9831-786b57e25f55/responsive-web-design',
    description: 'Successfully completed 300+ hours of curriculum covering modern responsive styles, media queries, HTML5 structural design, and CSS3 layouts.',
    signatureName: 'Quincy Larson',
    signatureTitle: 'Executive Director, freeCodeCamp.org'
  },
  {
    id: 'cert2',
    title: 'Python Programming Micro-Credential',
    issuer: 'Africa Agility',
    date: 'August 2024',
    credentialId: 'AA-MICRO-PY-2024',
    credentialUrl: 'https://africaagility.org',
    description: 'Acquired key competencies in foundational programming paradigms, algorithm designs, logical controls, and functional object-oriented developments using Python.',
    signatureName: 'Adityakiran',
    signatureTitle: 'Lead Technical Trainer, Africa Agility'
  },
  {
    id: 'cert3',
    title: 'EPS International Summer School Certificate',
    issuer: "Queen's University Belfast",
    date: 'July – August 2024',
    credentialId: 'QUB-EPS-SS-2024',
    credentialUrl: 'https://qub.ac.uk',
    description: 'Acquired research-grade knowledge in modern technology architectures and engineering sciences through rigorous courses and cross-disciplinary collaborations in Belfast, UK.'
  }
];

// Fallback GitHub stats in case API limits or errors occur
export const STATIC_GITHUB_STATS: GitHubStats = {
  followers: 48,
  following: 56,
  public_repos: 18,
  stars: 32,
  total_commits: 412,
  languages: [
    { name: 'TypeScript', percentage: 48, color: '#3178c6' },
    { name: 'JavaScript', percentage: 32, color: '#f1e05a' },
    { name: 'CSS / Tailwind', percentage: 12, color: '#563d7c' },
    { name: 'HTML', percentage: 8, color: '#e34c26' },
  ],
  pinned_repos: [
    {
      name: 'Frost-bridge-global-logistics',
      description: 'A professional cargo and supply chain logistics platform designed for real-time freight tracking and automated shipment quoting.',
      stars: 12,
      forks: 4,
      language: 'JavaScript',
      url: 'https://github.com/anutech952/Frost-bridge-global-logistics'
    },
    {
      name: 'ridgehigh',
      description: 'A highly polished and fully responsive corporate web platform built for Ridgehigh, optimized for speed, performance, and accessible UI.',
      stars: 8,
      forks: 2,
      language: 'JavaScript',
      url: 'https://github.com/anutech952/ridgehigh'
    },
    {
      name: 'portfolio',
      description: 'Interactive and highly polished developer portfolio showcase highlighting technical projects, certifications, and achievements.',
      stars: 7,
      forks: 1,
      language: 'JavaScript',
      url: 'https://github.com/anutech952'
    },
    {
      name: 'Weather-app',
      description: 'An interactive and beautifully designed responsive weather application delivering real-time forecasts and meteorological insights.',
      stars: 5,
      forks: 1,
      language: 'JavaScript',
      url: 'https://github.com/anutech952/Weather-app'
    }
  ]
};

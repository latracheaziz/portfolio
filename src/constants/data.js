export const personalInfo = {
  name: 'Aziz Latrache',
  title: 'Computer Science Student',
  email: 'azizlatrache5@gmail.com',
  phone: "+216 21 686 821 ",
  location: 'Sousse, Tunisia',
  linkedin: 'https://www.linkedin.com/in/aziz-latrache-33146b284',
  github: 'https://github.com/latracheaziz',
  resumePath: `${process.env.PUBLIC_URL}/Aziz Latrache Resume.pdf`
};

export const about = {
  en: 'Motivated and passionate Computer Science student at Institut Supérieur de Gestion de Sousse (ISGS), seeking an end-of-study internship to apply and expand technical expertise in full-stack web development. Skilled in JavaScript with strong proficiency in Node.js, Express.js, React.js, and MongoDB. Possesses solid knowledge of PHP, Python, and MySQL, with a keen interest in building scalable, efficient, and user-friendly applications. Eager to contribute to innovative projects, learn from industry professionals, and grow as a developer in a collaborative environment.',
  fr: 'Étudiant ingénieur en informatique passionné avec une solide base en développement logiciel, résolution de problèmes et innovation. Actuellement à la recherche d\'un stage de fin d\'études pour appliquer mes compétences techniques, contribuer à des projets significatifs et acquérir une expérience concrète dans un environnement dynamique.'
};

export const education = [
    {
    degree: {
      en: 'Baccalaureate in economics and management',
      fr: 'Baccalauréat en économie et gestion'
    },
    school: {
      en: 'High School Sahloul 4',
      fr: 'Lycée Sahloul 4'
    },
    period: '2018 - 2022',
    location: 'Sousse, Tunisia',
    description: {
      en: '',
      fr: ''
    }
  },
  {
    degree: {
      en: 'Bachelor degree in bi management IT',
      fr: 'Licence en gestion informatique BI'
    },
    school: {
      en: 'Higher Institute of Management of Sousse (ISGS)',
      fr: 'Institut Supérieur de Gestion de Sousse (ISGS)'
    },
    period: '2022 - Present',
    location: 'Sousse, Tunisia',
    description: {
      en: '',
      fr: ''
    }
  }
];

export const skills = {
  programming: ['JavaScript', 'Python', 'SQL' , 'HTML', 'CSS', 'PHP' , "Java" ,"C"],
  frameworks: ['React', 'Node.js', 'Express'],
  tools: ['Git',  'VS Code' , 'Jenkins', 'Docker'],
  databases: ['MongoDB', 'PHPMyAdmin', 'MySQL'],
  others : ["views12"  , "WordPress" , "Android studio"]
};

export const projects = [
  {
    name: {
      en: 'Project Contributions – Studyfytn',
      fr: 'Contributions au Projet – Studyfytn'
    },
    description: {
      en: "Collaborated with the team to enhance the platform's student, class, and grade management workflow.",
      fr: 'Collaboration avec l\'équipe pour améliorer le flux de travail de gestion des étudiants, des classes et des notes de la plateforme.'
    },
    technologies: ['React', 'Node.js', 'MongoDB'],
    demo: 'https://app.studyfytn.com/login'
  },
  {
    name: {
      en: 'Personal Portfolio Website',
      fr: 'Site Web Portfolio Personnel'
    },
    description: {
      en: 'Designed and developed a full-stack personal portfolio to showcase projects and technical skills.',
      fr: 'Conception et développement d\'un portfolio personnel full-stack pour présenter des projets et compétences techniques.'
    },
    technologies: ['React', 'Ant Design'],
    github: 'https://github.com/latracheaziz/portfolio'
  }
];

export const volunteer = [
  {
    organization: {
      en: 'Leo Club Sousse Star',
      fr: 'Leo Club Sousse Star'
    },
    role: {
      en: 'Member',
      fr: 'Membre'
    },
    period: '2025 - Present',
    location: 'Sousse, Tunisia',
    activities: {
      en: [
        'Participated in organizing the back-to-school event',
        'Contributed to the health caravan, including logistics and participant support',
        'Assisted in preparing and coordinating activities for the Eid Sghir event'
      ],
      fr: [
        'Participation à l\'organisation de l\'événement de rentrée scolaire',
        'Contribution à la caravane de santé, y compris la logistique et le soutien aux participants',
        'Assistance dans la préparation et la coordination des activités pour l\'événement de l\'Aïd Sghir'
      ]
    }
  },
  {
    organization: {
      en: 'Leo Club Omega Kantaoui',
      fr: 'Leo Club Omega Kantaoui'
    },
    role: {
      en: 'Member',
      fr: 'Membre'
    },
    period: '2023 - 2025',
    location: 'Kantaoui, Sousse',
    activities: {
      en: [
        'Participated in organizing the back-to-school event',
        'Contributed to the health caravan, including logistics and participant support',
        'Assisted in preparing and coordinating activities for the Eid Sghir event'
      ],
      fr: [
        'Participation à l\'organisation de l\'événement de rentrée scolaire',
        'Contribution à la caravane de santé, y compris la logistique et le soutien aux participants',
        'Assistance dans la préparation et la coordination des activités pour l\'événement de l\'Aïd Sghir'
      ]
    }
  }
];

export const languages = [
  {
    name: {
      en: 'Arabic',
      fr: 'Arabe'
    },
    level: {
      en: 'Native',
      fr: 'Langue Maternelle'
    },
    stars: 5
  },
  {
    name: {
      en: 'French',
      fr: 'Français'
    },
    level: {
      en: 'Intermediate',
      fr: 'Intermédiaire'
    },
    stars: 3
  },
  {
    name: {
      en: 'English',
      fr: 'Anglais'
    },
    level: {
      en: 'Intermediate',
      fr: 'Intermédiaire'
    },
    stars: 3
  },
  {
    name: {
      en: 'Italian',
      fr: 'Italien'
    },
    level: {
      en: 'Intermediate',
      fr: 'Intermédiaire'
    },
    stars: 3
  }
];

export const translations = {
  en: {
    nav: {
      about: 'About',
      education: 'Education',
      skills: 'Skills',
      projects: 'Projects',
      volunteer: 'Volunteer Experience',
      languages: 'Languages',
      contact: 'Contact'
    },
    hero: {
      subtitle: 'Looking for End-of-Study Internship',
      download: 'Download Resume',
      contact: 'Contact Me'
    },
    about: {
      title: 'About Me'
    },
    education: {
      title: 'Education'
    },
    skills: {
      title: 'Technical Skills',
      programming: 'Programming Languages',
      frameworks: 'Frameworks & Libraries',
      tools: 'Tools & Technologies',
      databases: 'Databases',
      others: 'Others'
    },
    projects: {
      title: 'Projects',
      viewCode: 'View Code',
      viewDemo: 'Live Demo'
    },
    volunteer: {
      title: 'Volunteer Experience',
      activities: 'Key Activities'
    },
    languages: {
      title: 'Languages'
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Feel free to reach out for internship opportunities or collaboration',
      email: 'Email',
      phone: 'Phone',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      location: 'Location'
    }
  },
  fr: {
    nav: {
      about: 'À Propos',
      education: 'Formation',
      skills: 'Compétences',
      projects: 'Projets',
      volunteer: 'Bénévolat',
      languages: 'Langues',
      contact: 'Contact'
    },
    hero: {
      subtitle: 'À la recherche d\'un Stage de Fin d\'Études',
      download: 'Télécharger CV',
      contact: 'Me Contacter'
    },
    about: {
      title: 'À Propos de Moi'
    },
    education: {
      title: 'Formation'
    },
    skills: {
      title: 'Compétences Techniques',
      programming: 'Langages de Programmation',
      frameworks: 'Frameworks & Bibliothèques',
      tools: 'Outils & Technologies',
      databases: 'Bases de Données',
      others: 'Autres'
    },
    projects: {
      title: 'Projets',
      viewCode: 'Voir le Code',
      viewDemo: 'Démo en Direct'
    },
    volunteer: {
      title: 'Expérience Bénévole',
      activities: 'Activités Principales'
    },
    languages: {
      title: 'Langues'
    },
    contact: {
      title: 'Contactez-Moi',
      subtitle: 'N\'hésitez pas à me contacter pour des opportunités de stage ou de collaboration',
      email: 'Email',
      phone: 'Téléphone',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      location: 'Localisation'
    }
  }
};

import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export const userinfo = {
  logoText: 'Rabina Gurung',
  contact: {
    email: 'rabinagurung347@gmail.com',
    phone: '+1 437 661 9380',
    countrycode: ''
  },
  socials: [
    {
      type: 'github',
      link: 'https://github.com/rabinagurung',
      icon: faGithubAlt
    },
    {
      type: 'linkedin',
      link: 'https://www.linkedin.com/in/rabina-gurung/',
      icon: faLinkedinIn
    }
  ],
  greeting: {
    title: 'Hey there, I am Rabina.',
    subtitle: 'Software Developer based in Canada. Nice to meet you!'
  },
  about: {
    content:
      "I'm a software developer based in Canada with a passion for web and mobile app development. I enjoy creating new things and constantly expanding my knowledge in the tech field. I hold a Bachelor's degree in Computer Science and am currently pursuing a Post-Graduate Diploma in Mobile App Development at Fanshawe College, London, Ontario. My experience includes building web applications using React.js, Next.js, and Node.js, and I’m also familiar with Python and React Native. I'm always eager to learn new technologies and continually improve my skills.",
    resume: '/resume.pdf'
  },
  capabilities: [
    {
      category: 'Frontend',
      skills: [
        'HTML5, CSS3, JS',
        'React JS, Next JS',
        'React Native',
        'Tailwind CSS'
      ]
    },
    {
      category: 'Backend',
      skills: ['NodeJS', 'ExpressJS', 'Python']
    },
    {
      category: 'Database',
      skills: ['Firebase', 'MongoDB', 'PostgreSQL']
    }
  ],
  blogs: { visible: true },
  education: {
    visible: false
  },
  experience: {
    visible: false
  }
};

export const headings = {
  workHomePage: 'Projects',
  capabilities: 'Capabilities',
  about: 'About Me',
  education: 'Education',
  experience: 'Experiences',
  contact: 'Contact Me'
};

export const ctaTexts = {
  landingCTA: 'My work',
  workCTA: 'View All',
  capabCTA: 'Get in Touch',
  educationCTA: 'About Me',
  resumeCTA: 'Resume',
  submitBTN: 'Submit'
};

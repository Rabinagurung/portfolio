import DUO_1 from '../styles/projects/duolingo_1.png';
import DUO_2 from '../styles/projects/duolingo_2.png';
import DUO_3 from '../styles/projects/duolingo_3.png';

import LUX_1 from '../styles/projects/LUX_1.png';
import LUX_2 from '../styles/projects/LUX_2.png';
import LUX_3 from '../styles/projects/LUX_3.png';

import PRISMA_1 from '../styles/projects/PRISMA_1.png';

export const projects = [
  {
    name: 'Duolingo',
    description:
      'A clone of the popular language-learning app Duolingo. This full-stack web application is built with Next.js and utilizes Drizzle ORM for the backend. It features a user-friendly interface and offers a variety of languages to choose from, providing an engaging and educational experience for users',
    githubLink: 'https://github.com/Rabinagurung/Duolingo-clone',
    projectLink: 'https://duolingoclonep1.vercel.app',
    tech: ['Nextjs', 'Tailwind CSS', 'Drizzle ORM', 'PostgreSQL'],
    photo: [DUO_1, DUO_2, DUO_3]
  },
  {
    name: 'Easy Rider',
    description:
      'Easy Rider is a React Native application designed for luxury car enthusiasts. This app allows users to book luxury cars for special occasions, such as weddings, proms, and corporate events. Easy Rider features a user-friendly interface and a seamless booking process, providing a premium experience for users.',
    githubLink: 'https://github.com/Rabinagurung/INFO-6132--01--lab-04',
    projectLink: 'https://github.com/Rabinagurung/INFO-6132--01--lab-04',
    tech: ['React Native', 'Firebase', 'Firestore', 'Expo'],
    photo: [LUX_1, LUX_2, LUX_3]
  },
  {
    name: 'Prismatics',
    description:
      'Prismatics is a sophisticated React Native application designed for wallpaper enthusiasts who crave high-quality images for their devices. Utilizing the Wallhaven API, this app ensures a seamless experience in discovering, downloading, and setting wallpapers.',
    githubLink: 'https://github.com/Rabinagurung/Prismatics',
    projectLink: 'https://github.com/Rabinagurung/Prismatics',
    tech: ['React Native', 'Wallhaven API', 'Firebase', 'Firestore'],
    photo: [PRISMA_1, PRISMA_1, PRISMA_1]
  }
];

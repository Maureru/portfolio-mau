import { IconType } from 'react-icons'
import logos from 'public/logo_mau.svg'

import { SiJavascript, SiMysql, SiNodedotjs, SiRedux } from 'react-icons/si'
import { SiTypescript } from 'react-icons/si'
import { SiPython } from 'react-icons/si'
import { SiPhp, SiMui } from 'react-icons/si'
import { SiReact, SiMongodb, SiFirebase, SiStyledcomponents } from 'react-icons/si'
import { SiNextdotjs, SiDjango, SiExpress, SiLaravel, SiJquery } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { GrMysql } from 'react-icons/gr'
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs'

export type Skill = {
  name: string,
  icon: IconType
}

export const profile: {
  firstName: string,
  secondName: string,
  lastName: string,
  nickName: string,
  profession: string,
  email: string,
  image: string,
  logo: string,
  socials: {
    name: string,
    link: string,
    icon: IconType
  }[]
} = {
  firstName: 'James',
  secondName: 'MAUREL',
  lastName: 'Marapao',
  nickName: 'Mau',
  profession: 'Software Engineer',
  email: 'james.maurels@gmail.com',
  image: '/avatar.png',
  logo: logos,
  socials: [
    {
      name: 'Twitter',
      link: 'https://twitter.com/mauuxxix',
      icon: BsTwitter
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/mauxxix_/',
      icon: BsInstagram
    },
    {
      name: 'Linkedin',
      link: 'https://www.linkedin.com/in/maurel-marapao-462581251/',
      icon: BsLinkedin
    },
    {
      name: 'Github',
      link: 'https://github.com/Maureru',
      icon: BsGithub
    },
  ]
}

export type SkillCategory = 
  | 'backend'
  | 'frontend'
  | 'database'
  | 'ui framework'

export const Skills: Skill[] = [
  {
    name: 'Javascript (ES6+)',
    icon: SiJavascript,
  },
  {
    name: 'Typescript',
    icon: SiTypescript,
  },
  {
    name: 'NodeJs',
    icon: FaNodeJs,
  },
  {
    name: 'Python',
    icon: SiPython,
  },
  {
    name: 'React',
    icon: SiReact,
  },
  {
    name: 'NextJs',
    icon: SiNextdotjs,
  },
  {
    name: 'PHP',
    icon: SiPhp,
  },
  {
    name: 'Mysql',
    icon: GrMysql,
  },
];


export const FullSkill: {
  [i in SkillCategory] : Skill[]
} = {
  backend: [
    {
      name: 'NodeJs',
      icon: SiNodedotjs,
    },
    {
      name: 'Express',
      icon: SiExpress,
    },
    {
      name: 'Javascript (ES6 +)',
      icon: SiJavascript,
    },
    {
      name: 'Typescript',
      icon: SiTypescript,
    },
    {
      name: 'PHP (Vanilla, Wordpress)',
      icon: SiPhp,
    },
    {
      name: 'Laravel',
      icon: SiLaravel,
    },
    {
      name: 'Django',
      icon: SiDjango
    }
  ],
  frontend: [
    {
      name: 'ReactJs',
      icon: SiReact
    },
    {
      name: 'NextJs',
      icon: SiNextdotjs
    },
    {
      name: 'jQuery',
      icon: SiJquery
    },
    {
      name: 'Javascript Vanilla',
      icon: SiJavascript
    },
    {
      name: 'Redux',
      icon: SiRedux
    },
  ],
  database: [
    {
      name: 'Mysql',
      icon: SiMysql
    },
    {
      name: 'MongoDb',
      icon: SiMongodb
    },
    {
      name: 'Firebase',
      icon: SiFirebase
    },
  ],
  "ui framework": [
    {
      name: 'Styled Components',
      icon: SiStyledcomponents
    },
    {
      name: 'Material UI',
      icon: SiMui
    },
  ]
}

export const splitSkills = (srcArray: Skill[]) => {
  const arrLength = srcArray.length
  const isEvenChunk = arrLength % 2 === 0

  let chunk = 4
  if (isEvenChunk) {
    chunk = arrLength / 2
  } else if (arrLength <= 5 && arrLength > 2) {
    chunk = 3
  }

  let i = 0
  let j = 0
  const temporary = []
  for (i = 0, j = srcArray.length; i < j; i += chunk) {
    temporary.push(srcArray.slice(i, i + chunk))
  }
  return temporary
}


export type Project = {
  name: string,
  tech: string[],
  link: string
  image: string,
  details: string,
  status: string
}

export const Projects: Project[] = [
  
  
  
  {
    name: 'YT Chat Games',
    tech: ['Node', 'jQuery', 'Youtube Data Api v3'],
    link: '',
    image: 'slaps.png',
    details: 'Help us defeat Mr. Will Smith Slapper to prevent him SLAP! off our planet earth out of the solar system!!',
    status: ''
  },
  {
    name: 'Text Portrait',
    tech: ['React', 'Typescript'],
    link: 'https://62e6ae7ca868167856120bfa--bucolic-chimera-45106b.netlify.app/',
    image: 'portrait.png',
    details: 'Create amazing and cool text portrait for your social profile',
    status: ''
  },
  {
    name: 'Ravens',
    tech: ['Typescript', 'React', 'Node', 'Express', 'MySQL'],
    link: 'https://monumental-puffpuff-fad65e.netlify.app/',
    image: 'ravenspor.png',
    details: 'Share what you do and socialize online with RAVENS social media',
    status: ''
  },
  
  {
    name: 'Dictionary Online',
    tech: ['Typescript', 'NextJs'],
    link: 'https://dictionary-online.vercel.app/',
    image: 'dictionary.png',
    details: 'Explore new words and improve your vocabulary with the online dictionary.',
    status: ''
  },
  {
    name: 'Mau Resume Builder',
    tech: ['Typescript', 'React', 'Redux'],
    link: 'https://mau-resume-builder.vercel.app/',
    image: 'resumebuilder.png',
    details: 'Create outstanding and impressive resumes online with Mau-Resume Builder.',
    status: ''
  },
  {
    name: 'Tic Tac Toee',
    tech: ['Node', 'React', 'ExpressJs', 'Mongoose'],
    link: 'https://tictactoe-client.vercel.app/',
    image: 'tictactoe.png',
    details: 'Fun and Exciting Tic Tac Toe game to play with your friends',
    status: ''
  },
  {
    name: 'ORX - Clothing',
    tech: ['Typescript', 'NextJs', 'Context Api', 'Node', 'Mongoose'],
    link: 'https://orxecommerce.vercel.app',
    image: 'ORXeco.png',
    details: 'NextJs Ecommerce with Paypal Integration. Admin: Email: maco.senseii@gmail.com, Password: macosenseii',
    status: ''
  },
  {
    name: 'eVoting Platform',
    tech: ['Typescript', 'NextJs', 'Redux', 'Mongoose'],
    link: '/',
    image: 'eVoting.png',
    details: 'Create an e-Voting platform for your school or organization.',
    status: 'on going'
  },
  {
    name: 'Anime Villain',
    tech: ['Typescript', 'React', 'Jikan Api', 'Tailwind CSS'],
    link: 'https://animevillain.vercel.app/',
    image: 'animevillain.png',
    details: 'Explore and enjoy a vast collection of your favorite anime, choosing from thousands of anime available on Anime Villain."',
    status: ''
  },
  
  
]
import { IconType } from 'react-icons'
import logos from 'public/logo_mau.svg'

import { SiJavascript, SiMysql, SiNodedotjs } from 'react-icons/si'
import { SiTypescript } from 'react-icons/si'
import { SiPython } from 'react-icons/si'
import { SiPhp, SiMaterialui } from 'react-icons/si'
import { SiReact, SiMongodb, SiFirebase, SiStyledcomponents } from 'react-icons/si'
import { SiNextdotjs, SiDjango, SiExpress, SiLaravel, SiJquery } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { GrMysql } from 'react-icons/gr'
import { BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs'

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
  profession: 'Software/Mechanical Engineer',
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
      name: 'Github',
      link: 'https://twitter.com/mauuxxix',
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
      icon: SiMaterialui
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
}

export const Projects: Project[] = [
  
  
  {
    name: 'Mau Blog',
    tech: ['React', 'Redux', 'Express', 'Node', 'MongoDB'],
    link: 'https://aesthetic-liger-76762c.netlify.app/',
    image: '1.png',
    details: 'My very first React blogging system project.'
  },
  {
    name: 'Text Portrait Maker',
    tech: ['React', 'Typescript'],
    link: 'https://62e6ae7ca868167856120bfa--bucolic-chimera-45106b.netlify.app/',
    image: '2.png',
    details: 'Text portrait maker with download option. This turns the user image into a text portrait'
  },
  {
    name: 'Ravens',
    tech: ['Typescript', 'React', 'Node', 'Express', 'MySQL'],
    link: 'https://monumental-puffpuff-fad65e.netlify.app/',
    image: '3.png',
    details: 'Ravens is social media website'
  },
  {
    name: 'Youtube Live Chat Games',
    tech: ['Node', 'jQuery', 'Youtube Data Api v3'],
    link: '',
    image: 'ytgames.png',
    details: 'Ravens is social media website'
  },
  
  
  
]
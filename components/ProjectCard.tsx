import Image from 'next/legacy/image'
import Link from 'next/link'
import React from 'react'
import { Project } from '../data/portfolioData'
import Button from './Button'
import TechChunk from './TechChunk'

function ProjectCard({isEven, data} : {isEven: boolean, data: Project}) {

  return (
    <div className='overflow-visible sm:overflow-hidden w-[100%] flex flex-col sm:grid grid-cols-2 h-auto xl:h-80 bg-zinc-200 shadow-md dark:bg-zinc-800 rounded-[1rem]'>
      <div className={`pl-4 py-4 pr-12 flex flex-col h-[100%] justify-center items-center ${isEven ? 'order-last' : 'order-first'}`}>
            <div className=''>
            <p className='text-[32px] font-bold uppercase leading-[48px] tracking-wide'>{data.name}</p>
            <div className='h-[1px] w-[100%] bg-gray-200'/>
            <div className='flex flex-wrap gap-2 mt-2'>
              {
                data.tech.map((techs, i) => (
                  <TechChunk key={i} tech={techs}/>
                ))
              }
            </div>
            <p className='mt-6 text-sm'>{data.details}</p>
            <Link href={data.link} target="_blank">
            <Button className="border-2 border-slate-900 dark:border-slate-200 mt-6" onClick={() => {}}>Check Project</Button>
            </Link>
            </div>
      </div>
      <div className='w-[100%] overflow-hidden group/image h-[100%] relative'>
        <Image className='group-hover/image:scale-110 hover:ease-in ease-out duration-100' objectFit='cover' layout='fill' src={`/${data.image}`} alt="cover" />
      </div>
    </div>
  )
}

export default ProjectCard
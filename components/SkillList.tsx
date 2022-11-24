import React from 'react'
import { Skill } from '../data/portfolioData'
import Icon from './Icon'

function SkillList({title, array}: {title: string, array: Skill[][]}) {

    const [colOne, colTwo = []] = array

  return (
    <div className='mb-4'>
        <p className='text-[14px] font-bold text-gray-400'>{title}</p>
        <div className='h-[1px] w-[100%] bg-zinc-500 dark:bg-gray-200'/>
        <div className='grid grid-cols-2 mt-2'>
            <ul className='flex flex-col gap-2'>
                {
                    colOne.map((col, i) => (
                        <li key={i} className="flex gap-2 items-center text-sm">
                            <Icon className='w-6 h-6 text-[#b96a59] dark:text-[#c58d69]' as={col.icon}/>{col.name}
                        </li>
                    ))
                }
            </ul>
            <ul className='flex flex-col gap-2'>
            {
                    colTwo.map((col, i) => (
                        <li key={i} className="flex gap-2 items-center text-sm">
                            <Icon className='w-6 h-6 text-[#b96a59] dark:text-[#c58d69]' as={col.icon}/>{col.name}
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default SkillList
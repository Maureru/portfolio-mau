import React, { useEffect } from 'react'
import { FullSkill, splitSkills } from '../data/portfolioData'
import SkillList from './SkillList'
import { IoMdClose } from 'react-icons/io';
import { motion, useAnimationControls } from 'framer-motion';
import { fadeInUp } from '../data/animation';


function SkillModal({close}: {close: () => void}) {

    useEffect(() => {
        
    }, [])

    const backendCol = splitSkills(FullSkill.backend)
    const frontendCol = splitSkills(FullSkill.frontend)
    const databaseCol = splitSkills(FullSkill.database)
    const uiCol = splitSkills(FullSkill['ui framework'])

  return (
    <div className='fixed z-[100] flex justify-center items-center w-screen h-screen bg-black/20'>
        <motion.div variants={fadeInUp} initial="initial" animate="animate" exit="initial" className='h-auto w-[350px] sm:w-[400px] lg:w-[450px] bg-zinc-200 dark:bg-[#2D3748] rounded-lg'>
            <div className='relative py-4 px-6'>
                <div onClick={close} className='absolute right-6 hover:bg-slate-700 cursor-pointer rounded flex justify-center items-center p-2'>
                <IoMdClose/>
                </div>
                
                <p className='text-xl font-bold'>Full Skill Set List</p>
            </div>
            {/* Skill List Wrap */}
            <div id='scrollSKil' className='w-[100%] h-[400px] px-6 overflow-y-scroll'>
                <SkillList title='Backend' array={backendCol}/>
                <SkillList title='Frontend' array={frontendCol}/>
                <SkillList title='Database' array={databaseCol}/>
                <SkillList title='UI Framework' array={uiCol}/>
            </div>
            <div className='flex justify-end py-4 px-6'>
                <p className='text-[11px]'>*some micro framework not included</p>
            </div>
        </motion.div>
    </div>
  )
}

export default SkillModal
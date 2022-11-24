import React from 'react'

function TechChunk({tech}: {tech: string}) {
  return (
    <span className='text-[10px] py-1 px-2 bg-slate-300 dark:bg-slate-700 rounded'>
        {tech}
    </span>
  )
}

export default TechChunk
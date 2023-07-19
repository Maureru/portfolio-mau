import Image from 'next/legacy/image';
import Link from 'next/link';
import React from 'react';
import { Project } from '../data/portfolioData';
import Button from './Button';
import TechChunk from './TechChunk';
import { BsFillGearFill } from 'react-icons/bs';

function ProjectCard({ isEven, data }: { isEven: boolean; data: Project }) {
  return (
    <div className="overflow-hidden w-[100%] grid grid-cols-1 sm:grid-cols-2 h-[22rem] sm:h-auto xl:h-80 bg-zinc-200 shadow-md dark:bg-zinc-800 rounded-[1rem]">
      <div
        className={`pl-4 relative py-4 pr-12 flex flex-col h-[100%] w-full justify-center order-last items-center ${
          isEven ? 'sm:order-last' : 'sm:order-first'
        }`}
      >
        {data.status === 'on going' && (
          <span className="absolute animate-pulse flex items-center gap-1 top-3 text-white right-3 text-[0.6rem] p-1 bg-orange-500 font-semibold rounded-md uppercase">
            On Going
            <BsFillGearFill className="animate-spin text-[0.7rem]" />
          </span>
        )}
        <div className="w-full">
          <p className="text-[32px] font-bold uppercase leading-[48px] tracking-wide">
            {data.name}
          </p>
          <div className="h-[1px] w-full bg-gray-200" />
          <div className="flex flex-wrap gap-2 mt-2">
            {data.tech.map((techs, i) => (
              <TechChunk key={i} tech={techs} />
            ))}
          </div>
          <p className="mt-6 text-sm">{data.details}</p>
          <Link href={data.link} target="_blank">
            <Button
              className="border-2 border-slate-900 dark:border-slate-200 mt-6"
              onClick={() => {}}
            >
              Check Project
            </Button>
          </Link>
        </div>
      </div>
      <div className="w-[100%] overflow-hidden group/image h-[100%] relative">
        <Image
          className="group-hover/image:scale-110 hover:ease-in ease-out duration-100"
          objectFit="cover"
          layout="fill"
          src={`/${data.image}`}
          alt="cover"
        />
      </div>
    </div>
  );
}

export default ProjectCard;

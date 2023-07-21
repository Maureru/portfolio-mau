import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { BiSun } from 'react-icons/bi';
import { MdDarkMode } from 'react-icons/md';
import { useTheme } from 'next-themes';

import { profile } from '../data/portfolioData';
import { useAnimationControls, motion } from 'framer-motion';
import { menuAnim, menuAnimSide, simpleOpacity } from '../data/animation';
import Link from 'next/link';

function Nav() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const control = useAnimationControls();
  const navControl = useAnimationControls();

  useEffect(() => {
    setMounted(true);
    control.start('hide');
    setTimeout(() => {
      control.start('show');
    }, 500);
  }, []);

  useEffect(() => {
    const handleNav = () => {
      if (window.scrollY >= 200) {
        control.start('hide');
        navControl.start('show');
      } else {
        control.start('show');
        navControl.start('hide');
      }
    };
    window.addEventListener('scroll', handleNav);
    return () => {
      window.removeEventListener('scroll', handleNav);
    };
  }, [control, navControl]);

  const renderThemeButton = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <div
          onClick={() => setTheme('light')}
          className="hover:bg-slate-700 cursor-pointer rounded flex justify-center items-center p-2"
        >
          <BiSun />
        </div>
      );
    } else {
      return (
        <div
          onClick={() => setTheme('dark')}
          className="hover:bg-slate-200 cursor-pointer rounded flex justify-center items-center p-2"
        >
          <MdDarkMode />
        </div>
      );
    }
  };

  return (
    <motion.div className={`fixed z-[60] top-0 left-0 overflow-hidden`}>
      <Image
        alt="logo"
        className="fixed invisible lg:visible top-2 left-16 z-[60]"
        src={profile.logo}
        width="50"
        height="50"
      />
      <motion.div
        variants={menuAnim}
        animate={control}
        className="transition duration-100 relative ease-linear bg-gray-50 dark:bg-dark xl:bg-gray-50/50 xl:dark:bg-dark50 flex  justify-between px-8 md:px-8 2xl:px-16 h-16 w-screen items-center"
      >
        <Image
          className="lg:invisible sm:visible"
          alt="logo"
          src={profile.logo}
          width="50"
          height="50"
        />
        <div className={`flex gap-2 sm:gap-8 items-center`}>
          <a
            className="font-mono font-thin text-[12px] sm:text-[14px]"
            href={`mailto:${profile.email}`}
          >
            {profile.email}
          </a>
          {renderThemeButton()}
        </div>
      </motion.div>
      <motion.div
        whileHover={{ y: -10 }}
        variants={menuAnimSide}
        animate={navControl}
        className="fixed hidden bottom-0 w-10 right-4 xl:flex flex-col items-center gap-[7rem]"
      >
        {renderThemeButton()}
        <div className="rotate-90">
          <a href={`mailto:${profile.email}`}>
            <h1 className="text-[13px] font-thin font-mono">{profile.email}</h1>
          </a>
        </div>
        <div className="w-[2px] h-[200px] bg-gray-900 dark:bg-gray-200" />
      </motion.div>
    </motion.div>
  );
}

export default Nav;

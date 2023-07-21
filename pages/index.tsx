import Head from 'next/head';
import Image from 'next/image';
import Button from '../components/Button';
import { RiShareBoxFill } from 'react-icons/ri';
/* Skill Icons */

import Nav from '../components/Nav';
import Link from 'next/link';
import { profile, Projects, Skills } from '../data/portfolioData';
import Icon from '../components/Icon';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion';
import {
  fadeInUp,
  hero,
  letterSpace,
  rotateProfession,
  roundBorder,
  stagger,
} from '../data/animation';
import FadeVisible from '../components/FadeVisible';
import SkillModal from '../components/SkillModal';
import { useEffect, useState } from 'react';

export default function Home() {
  /* const fetchManga = async () => {
    await axios.get("https://api.mangadex.org/manga/").then(async(res) => {
      setManga(res.data.data)      
    }).catch((err) => {
      console.log("No Manga");
    })


    
  }; */

  const [isModal, setIsModal] = useState(false);

  const handleModalOpen = () => {
    setIsModal(true);
  };
  const handleModalClose = () => {
    setIsModal(false);
  };

  useEffect(() => {
    if (isModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isModal]);

  return (
    <div
      className="overflow-hidden lg:overflow-visible" /* data-theme={theme} */
    >
      <Head>
        <title>Mau | Software Engineer</title>
        <meta name="description" content="Mau Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      {/* Main */}
      <main className="sm:block block lg:flex xl:flex">
        <AnimatePresence>
          {isModal ? <SkillModal close={handleModalClose} /> : null}
        </AnimatePresence>

        <div className="top-0 w-screen lg:w-[40%] z-50 lg:z-[99] h-auto lg:h-[100vh] mt-20 lg:mt-0 relative lg:sticky px-4 sm:px-8 xl:px-16 flex font-sans items-center">
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="relative z-50"
          >
            <motion.p variants={fadeInUp} className="text-md mb-2">
              Ohh you found me? Howdy! I am
            </motion.p>
            <motion.h2 variants={fadeInUp} className="segoe text-5xl font-bold">
              {profile.firstName}
            </motion.h2>
            <motion.h1
              variants={letterSpace}
              className="segoe leading-[70px] text-7xl sm:text-9xl lg:text-7xl xl:text-8xl text-[#b96a59] dark:text-[#c58d69] font-bold "
            >
              {profile.secondName}.
            </motion.h1>
            <motion.p variants={fadeInUp} className="mt-2">
              Or you could call me {profile.nickName}, that works too . . .
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="mt-2 font-bold text-xl text-[#b96a59] dark:text-[#c58d69]"
            >
              {profile.profession}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="xl:mr-44 mr-4 xl:mr-18 text-[13px] mt-2 text-gray-800 dark:text-gray-300"
            >
              Hey! How nice of you to look at my personal site,{' '}
              <span className="font-semibold text-[#b96a59] dark:text-[#c58d69]">
                Thank you!
              </span>
              <br></br>I am a software engineer freelancer based in the
              Philippines.
            </motion.p>
            <motion.div className=" flex gap-3" variants={fadeInUp}>
              <Button
                className="bg-purple-600  px-6 mt-5 text-gray-100"
                onClick={() => {}}
              >
                <a href={`mailto:${profile.email}`}>Hire Me!</a>
              </Button>
              <Button
                className="bg-transparent group border border-black dark:border-white px-6 mt-5 "
                onClick={() => {}}
              >
                <a className="" href={``}>
                  Blog
                </a>
              </Button>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex gap-4 mt-5">
              {profile.socials.map((social, i) => {
                return (
                  <Link target="_blank" key={i} href={social.link}>
                    <Icon className="text-3xl" as={social.icon} />
                  </Link>
                );
              })}
            </motion.div>
          </motion.div>
          <motion.div
            variants={roundBorder}
            initial="initial"
            animate="animate"
            className="h-[100%] hidden lg:block z-40 w-[100%] absolute lg:right-0 xl:right-10 rounded bg-transparent border-r-4 border-[#b96a59] dark:border-[#c58d69]"
            style={{ borderRadius: '69% 31% 28% 72% / 100% 50% 50% 0% ' }}
          ></motion.div>
        </div>
        {/* Portfolio Main */}
        <div className=" relative h-[100%] w-[100%]  lg:w-[60%] ">
          <div className="h-auto w-[100%] my-8 xl:my-0 lg:h-[100vh] flex justify-center items-center relative overflow-hidden">
            <motion.div
              className="z-[60]"
              variants={hero}
              initial="initial"
              animate="animate"
            >
              <Image
                src={profile.image}
                alt="avatar"
                height={700}
                width={700}
              />
            </motion.div>

            <motion.h1
              variants={rotateProfession}
              initial="initial"
              animate="animate"
              className="select-none absolute z-0 text-[#b96a59]/50 dark:text-[#c58d69]/50 text-[6rem] sm:text-[10rem] lg:text-[11rem] font-bold rotate-[-30deg]"
            >
              DEVELOPER
            </motion.h1>
          </div>
          {/* What I do and Skills */}

          <FadeVisible>
            <div className="mt-5 px-4  h-auto xl:h-[100vh] block xl:flex items-center">
              <div className="w-[100%] xl:w-[60%] ">
                <h1
                  className="segoe text-[48px] font-bold"
                  style={{ fontVariant: 'small-caps' }}
                >
                  My craft.
                </h1>
                <h2 className=" text-[16px] leading-[24px] poppins mt-6">
                  After years of coding experience, I now work as a{' '}
                  <span className="font-bold hover:animate-pulse text-[#b96a59] dark:text-[#c58d69]">
                    Software Developer
                  </span>{' '}
                  specializing in APIs and front-end integration, crafting
                  seamless connections between systems and creating
                  user-friendly interfaces.
                </h2>
                <h2 className="mt-6 text-[16px] leading-[24px] poppins">
                  Here are few technologies that are cup of my tea.
                </h2>
                {/* Skills */}
                <div className="mt-6 flex flex-col gap-4">
                  <div className="grid grid-cols-2">
                    <ul className="flex flex-col gap-3 ">
                      {Skills.slice(0, 4).map((skill, i) => (
                        <li className="flex gap-2 text-sm" key={i}>
                          <Icon
                            className="w-6 h-6 text-[#b96a59] dark:text-[#c58d69]"
                            as={skill.icon}
                          />
                          {skill.name}
                        </li>
                      ))}
                    </ul>
                    <ul className="flex flex-col gap-3 ">
                      {Skills.slice(4, 8).map((skill, i) => (
                        <li className="flex gap-2 text-sm" key={i}>
                          <Icon
                            className="w-6 h-6 text-[#b96a59] dark:text-[#c58d69]"
                            as={skill.icon}
                          />
                          {skill.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p
                    onClick={handleModalOpen}
                    className="flex items-center gap-1 text-sm cursor-pointer"
                  >
                    See my full arsenal <RiShareBoxFill />
                  </p>
                </div>
              </div>
              <div className="xl:w-[40%] w-[100%] flex items-center justify-center">
                <Image
                  src={profile.logo}
                  alt="crown"
                  height={200}
                  width={200}
                />
              </div>
            </div>
          </FadeVisible>

          {/* ================ Projects */}
          <div className="mr-0 p-4 xl:mr-56 pb-16">
            <h2 className="text-[48px] segoe smallCaps font-bold">
              Some of my works.
            </h2>
            <p className="mt-6">
              Check out some of the works I made - a captivating collection of
              personal projects showcasing my passion for Software Development.
            </p>
            <div className="mt-6 flex flex-col gap-6">
              {
                Projects.slice(0)
                  .reverse()
                  .map((project, i) => {
                    const j = i + 1;
                    var isEven;
                    if (j % 2 == 0) {
                      isEven = true;
                    } else {
                      isEven = false;
                    }
                    return (
                      <FadeVisible key={i}>
                        <ProjectCard
                          num={i + 1}
                          isEven={isEven}
                          data={project}
                        />
                      </FadeVisible>
                    );
                  })

                /* manga.map((mang, i) => {

                  const coverId = mang.relationships.filter(item => item.type === "cover_art")[0].id;
                  
                  const im = async () => {
                    const image = await axios.get(`https://api.mangadex.org/cover/${coverId}`);
                    return image
                  }

                  
                  console.log(im());
                  
                  return (
                    <h1 key={i}>{}</h1>
                  )
                }) */
              }
            </div>
          </div>

          <Footer />
        </div>
      </main>
    </div>
  );
}

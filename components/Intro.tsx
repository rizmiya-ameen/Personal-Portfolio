"use client"

import React from 'react'
import Image from 'next/image'
import image4 from "@/public/image4.png";
import { motion } from 'framer-motion'
import Link from 'next/link';
import { HiDownload } from 'react-icons/hi'
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from '@/context/active-section.context';



const Intro = () => {

  const { ref } = useSectionInView("Home", 0.5);
  //const { setActiveSection, setTimeOfLastClick } = //useActiveSectionContext();

  const fadeIn = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        delay: 0.3,
        duration: 1,
        ease: 'easeOut',
      },
    },
  };


  return (
    <section 
      ref={ref} 
      id="home"
      className="mb-28 max-w-[50rem] text-center pt-28 sm:mb-0 scroll-mt-[100rem] sm:pt-36 "
      //className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      /*
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] bg-gradient-to-r from-[rgba(var(--themeClrPrimary),0.8)] to-[rgba(var(--themeClrPrimary),0.8)] bg-center"
  style={{
    backgroundImage: "url(common-bg.svg)",
  }}*/
      >

      
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0}}
            animate={{ opacity: 1, scale: 1}}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image 
              src={image4} 
              alt="profile_picture"
              width="192" 
              height="192" 
              quality="95" 
              priority={true}
              className='h-40 w-40 rounded-full object-cover border-[0.2rem] border-white shadow-xl'
            />
          </motion.div>


          <motion.span 
            className='text-2xl absolute bottom-0 right-5'
            initial={{ opacity: 0, scale: 0}}
            animate={{ opacity: 1, scale: 1}}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋🏼
          </motion.span>
          {/* windows key + . */}
        </div>
      </div>

      <motion.p className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5]'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      >
        Hi, I&apos;m Fathima Rizmiya. I hold a Bachelor of Science degree and have spent the last 7 years as a dedicated educator. But now, I stand at an exciting crossroads, eager to embark on a new path in the digital world.
      </motion.p>

      <motion.div  className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
      }}
      >
        <a className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          href="/CV.pdf"
          download>Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" /></a>


          <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/fathima-rizmiya/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/rizmiya-ameen"
          target="_blank"
        >
          <FaGithubSquare />
        </a>


        
      </motion.div>

      <div className='flex flex-col items-center justify-center'>
      <motion.img
        variants={fadeIn}
          initial="hidden"
          whileInView="show"
        src="arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[90px]"
      />
      </div>

      
      
    </section>
  )
}

export default Intro


'use client'
import Image from 'next/image'
import hero from '../../public/hero.png'
import Header from './_components/NavBar'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import Link from 'next/link'
import github from '../../public/github.svg'
import linkedin from '../../public/icons8-linkedin.svg'
import profile from '../../public/profile.jpg'
import call from '../../public/call.png'

import { Toaster } from 'sonner'
import { HashLink } from 'react-router-hash-link'
import { useState, useEffect } from 'react'
import hr from '../../public/hr.png'
import ww from '../../public/wastywealth.png'
import ww2 from '../../public/wasty3.png'
export default function Home () {
  const [winWidth, setWinWidth] = useState(600)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setWinWidth(window.innerWidth)
      }
    }
    if (typeof window !== 'undefined') {
      setWinWidth(window.innerWidth)
      window.addEventListener('resize', handleResize)
    }
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2
  })

  const fadeIn = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  }
  const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 }
  }

  return (
    <main className='text-white '>
      <motion.h1
        className='text-5xl sm:text-4xl mx-auto px-4 font-semibold py-5 text-center 2xl:py-20'
        animate={{ y: [100, 0] }}
        transition={{ ease: 'easeIn', duration: 1 }}
      >
        <span className='text-lcterine mx-2'>Hey!</span>
        <span className=' text-white hover:bg-gradient-to-r hover:from-bgGrad hover:to-lcterine via-teal-400 via-55% hover:animate-pulse p-2 rounded'>
          Im Emmanuel
        </span>
      </motion.h1>

      <div className=' flex justify-center gap-1 2xl:gap-5 mx-24'>
        <AiFillLinkedin className='text-4xl' />{' '}
        <AiFillGithub className='text-4xl' />
      </div>
      <motion.p
        // initial={{ x: "-300%" }}
        animate={{ x: [-1000, 0] }}
        transition={{ ease: 'easeIn', duration: 1, delay: 1.5 }}
        className='text-white text-xl sm:text-md text-center mx-auto py-4 leading-loose tracking-wider sm:bg-gradient-to-r sm:from-cyan-400 sm:to-teal-500 sm:p-4 sm:text-transparent sm:bg-clip-text'
      >
        Full stack Sotware Engineer, with an eye for aesthetic designs
      </motion.p>
      <div className='flex flex-row sm:flex-col justify-evenly items-center'>
        <motion.div
          animate={winWidth > 768 ? { x: [-100, 0] } : { y: [-1000, 0] }}
          transition={{ ease: 'easeIn', duration: 1 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <Image
            alt='hero-image'
            src={hero}
            width={120}
            className='w-40 sm:w-40'
          />
        </motion.div>
        <motion.div
          ref={ref}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className='sm:w-full w-1/3'
        >
          <motion.h2
            className='text-glacous sm:ml-8 sm:text-lg sm:font-semibold sm:text-left text-center'
            ref={ref}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            ABOUT ME
          </motion.h2>
          <motion.p
            className='sm:text-white sm:mx-auto sm:px-8 sm:text-left sm:tracking-wider sm:py-4'
            ref={ref}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            Im a full-stack Software Engineer, with 4 years of experience
            building projects that solve problems for clients.
          </motion.p>
          <motion.p
            className='sm:text-white sm:mx-auto sm:px-8 sm:text-left sm:tracking-wider sm:py-4'
            ref={ref}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeLeft}
            transition={{ duration: 0.5 }}
          >
            I bring a holistic approach to crafting digital solutions, from
            envisioning creative concepts to translating them into seamless user
            experiences. I thrive on turning complexity into user-friendly
            innovation.
          </motion.p>
          <motion.p
            className='sm:text-white sm:mx-auto sm:px-8 sm:text-left sm:tracking-wider sm:py-4'
            ref={ref}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            When Im not doing that, Im either watching anime or listening to
            Japanese (日本語のうた) songs。 PS: I speak Japanese
          </motion.p>
          <motion.button
            type='button'
            className='border  ml-8 rounded-full p-1 text-white hover:bg-glacous bg-opacity-5 transition-all 2xl:py-2 2xl:px-4 my-4 '
            ref={ref}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <Link href='/about'>Wanna learn more about me?</Link>
          </motion.button>
        </motion.div>
      </div>
      <h2 className='text-glacous ml-8 text-lg font-semibold py-4'>
        FEATURED PROJECT
      </h2>
      {/* bg-[url("../../public/hr.png")] */}
      {/* flex sm:flex-col flex-row flex-wrap sm:justify-center sm:gap-4 sm:items-center gap-10 justify-center items-center */}
      <div className='flex flex-row sm:flex-col gap-10 py-10 mx-10 sm:mx-2'>
        <div className='hidden sm:block relative flex-1  w-74 h-74  bg-[url("../../public/wastywealth.png")] bg-no-repeat bg-cover group hover:bg-[url("../../public/wasty3.png")] hover:transition-all hover:duration-500 hover:bg-transparent'>
          <p className=' h-64 flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-80 transition-opacity duration-500 opacity-0 group-hover:opacity-100'>
            Wasty Wealth
          </p>
        </div>
        <div className='sm:hidden'>
          <Image alt='wasty wealth' src={ww} width={900} />
        </div>

        {/* Click to see mre of my work */}
        <Link href='/about/#projects'>
          <button className='border p-2 rounded-full hover:bg-white/80 hover:text-black hover:transition-all duration-500'>
            View More Projects
          </button>
        </Link>
      </div>
      <div className='text-center sm:py-3 my-40 sm:my-0 sm:border-none border py-10 rounded-md'>
        <h3>Get In Touch</h3>
        <p>
          <span className='text-lcterine'>Have a Project or Job? </span>
          Im open to any New Opportunity
        </p>
        <button className='border p-2 border-lcterine hover:bg-lcterine hover:text-black font-bold hover:transition-all my-2 duration-500'>
          <Link
            href="mailto:emmanuelozigue@gmail.com?subject=Let's work together
   
          "
          >
            {/* // && body=My custom mail body */} Lets Talk{' '}
          </Link>
        </button>
      </div>
    </main>
  )
}

'use client'
import { FaAngular, FaReact } from 'react-icons/fa'
import react from '../../../public/react.svg'
import angular from '../../../public/file-type-angular.svg'
import framer from '../../../public/framer.svg'
import nextjs from '../../../public/nextjs.svg'
import python from '../../../public/python.svg'
import javascript from '../../../public/javascript-js.svg'
import typescript from '../../../public/typescript-icon.svg'
import tailwind from '../../../public/tailwind-css.svg'
import django from '../../../public/file-type-django.svg'
import flask from '../../../public/flask.svg'
import c from '../../../public/c-original.svg'
import csharp from '../../../public/c-sharp.svg'
import reactnative from '../../../public/sdk-react-native.svg'
import linux from '../../../public/linux-svgrepo-com.svg'
import bash from '../../../public/bash.svg'
import vercel from '../../../public/vercel.svg'
import git from '../../../public/git.svg'
import node from '../../../public/file-type-node.svg'
import notion from '../../../public/notion.svg'
import figma from '../../../public/figma.svg'
import vscode from '../../../public/file-type-vscode.svg'
import pycharm from '../../../public/pycharm.svg'
import github from '../../../public/github.svg'
import bootstrap from '../../../public/bootstrap.svg'
import html from '../../../public/file-type-html.svg'
import css from '../../../public/file-type-css.svg'
import svelte from '../../../public/svelte-icon.svg'
import vite from '../../../public/vite-svgrepo-com.svg'
import emacs from '../../../public/emacs.svg'
import chatgpt from '../../../public/chatgpt-icon.svg'
import webflow from '../../../public/webflow.svg'
import wordpress from '../../../public/wordpress.svg'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import dynamic, { LoaderComponent } from 'next/dynamic'

const StackDynamic: LoaderComponent<{}> = dynamic(
  () => Promise.resolve(Stack),
  {
    ssr: false
  }
)

const Stack = () => {
  const [winWidth, setWinWidth] = useState(600)

  useEffect(() => {
    const handleResize = () => {
      setWinWidth(window?.innerWidth)
    }
    if (typeof window !== 'undefined') {
      setWinWidth(window?.innerWidth)
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
    <div className='text-white sm:mx-3 mx-20 max-x-2xl '>
      <h1 className='text-xl  sm:pl-0 pl-4 py-4 md:text-center my-10 font-semibold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
        Frameworks and Languages{' '}
      </h1>
      <p className='md:text-center md:-mt-10 md:pb-5 text-gray-400'>
        Tools I use in my development
      </p>
      {/* className="sm:grid sm:grid-cols-3 sm:gap-5 sm:px-8 sm:py-4 sm:mx-4" */}
      <div className='flex md:flex-col justify-center items-center gap-5 flex-wrap my-5 '>
        <motion.div
          animate={winWidth > 768 ? { x: [-100, 0] } : { x: [-100, 0] }}
          transition={{ ease: 'easeIn', duration: 1 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className='bg-card p-20 rounded-xl md:h-72 h-72 '
        >
          {/* <FaAngular />
          <FaReact /> */}

          <Image alt='img-tech stack' src={react} width={100} />
          <p className='text-center my-10 border p-2 rounded '>React</p>
        </motion.div>
        <motion.div
          animate={winWidth > 768 ? { x: [-100, 0] } : { y: [-100, 0] }}
          transition={{ ease: 'easeIn', duration: 1 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className='bg-card p-20 rounded-xl md:h-72 h-72'
        >
          {/* <FaAngular />
          <FaReact /> */}

          <Image alt='img-tech stack' src={angular} width={100} />
          <p className='text-center my-10 border p-2 rounded '>Angular</p>
        </motion.div>
        <motion.div
          ref={ref}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className='bg-card p-20 rounded-xl md:h-72 h-72'
        >
          {/* <FaAngular />
          <FaReact /> */}

          <Image alt='img-tech stack' src={nextjs} width={100} />
          <p className='text-center my-10 border p-2 rounded '>Next Js</p>
        </motion.div>
        <motion.div
          ref={ref}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className='bg-card p-20 rounded-xl md:h-72 h-72'
        >
          {/* <FaAngular />
          <FaReact /> */}

          <Image alt='img-tech stack' src={python} width={100} />
          <p className='text-center my-10 border p-2 rounded '>Python</p>
        </motion.div>
        <motion.div
          ref={ref}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeLeft}
          transition={{ duration: 0.5 }}
          className='bg-card p-20 rounded-xl md:h-72 h-72'
        >
          {/* <FaAngular />
          <FaReact /> */}

          <Image alt='img-tech stack' src={typescript} width={100} />
          <p className='text-center my-10 border p-2 rounded '>Typescript</p>
        </motion.div>
        <motion.div className='bg-card p-20 rounded-xl md:h-72 h-72'>
          {/* <FaAngular />
          <FaReact /> */}

          <Image alt='img-tech stack' src={javascript} width={100} />
          <p className='text-center my-10 border p-2 rounded '>Javascript</p>
        </motion.div>
        <motion.div className='bg-card p-20 rounded-xl md:h-72 h-72'>
          {/* <FaAngular />
          <FaReact /> */}

          <Image alt='img-tech stack' src={tailwind} width={100} />
          <p className='text-center my-10 border p-2 rounded '>Tailwind</p>
        </motion.div>
        <motion.div className='bg-card p-20 rounded-xl md:h-72 h-72'>
          {/* <FaAngular />
          <FaReact /> */}

          <Image alt='img-tech stack' src={c} width={100} />
          <p className='text-center my-10 border p-2 rounded '>C</p>
        </motion.div>
        <motion.div className='bg-card p-20 rounded-xl md:h-72 h-72'>
          {/* <FaAngular />
          <FaReact /> */}

          <Image alt='img-tech stack' src={csharp} width={100} />
          <p className='text-center my-10 border p-2 rounded '>C#</p>
        </motion.div>
        <motion.div className='bg-card p-20 rounded-xl md:h-72 h-72'>
          {/* <FaAngular />
          <FaReact /> */}

          <Image alt='img-tech stack' src={django} width={100} />
          <p className='text-center my-10 border p-2 rounded '>Django</p>
        </motion.div>
        <motion.div className='bg-card p-20 rounded-xl md:h-72 h-72'>
          {/* <FaAngular />
          <FaReact /> */}

          <Image alt='img-tech stack' src={flask} width={100} />
          <p className='text-center my-8 border p-2 rounded '>Flask</p>
        </motion.div>
        <motion.div className='bg-card p-20 rounded-xl md:h-72 h-72'>
          {/* <FaAngular />
          <FaReact /> */}

          <Image alt='img-tech stack' src={reactnative} width={100} />
          <p className='text-center my-10 border p-2 rounded '>React Native</p>
        </motion.div>
        <motion.div className='bg-card p-20 rounded-xl md:h-72 h-72'>
          {/* <FaAngular />
          <FaReact /> */}

          <Image alt='img-tech stack' src={html} width={100} />
          <p className='text-center my-10 border p-2 rounded '>HTML</p>
        </motion.div>
        <motion.div className='bg-card p-20 rounded-xl md:h-72 h-72'>
          {/* <FaAngular />
          <FaReact /> */}

          <Image alt='img-tech stack' src={css} width={100} />
          <p className='text-center my-10 border p-2 rounded '>CSS</p>
        </motion.div>
        <motion.div className='bg-card p-20 rounded-xl md:h-72 h-72'>
          {/* <FaAngular />
          <FaReact /> */}

          <Image alt='img-tech stack' src={bootstrap} width={100} />
          <p className='text-center my-10 border p-2 rounded '>Bootstrap</p>
        </motion.div>
        <motion.div className='bg-card p-20 rounded-xl md:h-72 h-72'>
          {/* <FaAngular />
          <FaReact /> */}

          <Image alt='img-tech stack' src={svelte} width={100} />
          <p className='text-center my-10 border p-2 rounded '>Svelte</p>
        </motion.div>
      </div>

      <h1 className='text-xl sm:pl-0 pl-4 py-4 md:text-center my-10 font-semibold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
        Apps
      </h1>
      <p className='md:text-center md:-mt-10 pb-5 text-gray-400'>
        Software I use for productivity and building stuff
      </p>
      <div className='flex md:flex-col justify-center items-center gap-5 flex-wrap my-5'>
        <motion.div
          animate={winWidth > 768 ? { x: [-100, 0] } : { x: [-100, 0] }}
          transition={{ ease: 'easeIn', duration: 0.5 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className='bg-card p-20 rounded-xl md:h-72 h-72'
        >
          {/* <FaAngular />
          <FaReact /> */}

          <Image alt='img-tech stack' src={figma} width={100} />
          <p className='text-center my-10 border p-2 rounded '>Figma</p>
        </motion.div>
        <motion.div
          animate={winWidth > 768 ? { x: [-100, 0] } : { x: [-100, 0] }}
          transition={{ ease: 'easeIn', duration: 1 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className='bg-card p-20 rounded-xl md:h-72 h-72'
        >
          {/* <FaAngular />
          <FaReact /> */}

          <Image alt='img-tech stack' src={vscode} width={100} />
          <p className='text-center my-10 border p-2 rounded '>VS Code</p>
        </motion.div>
        <motion.div
          animate={winWidth > 768 ? { x: [-100, 0] } : { x: [-100, 0] }}
          transition={{ ease: 'easeIn', duration: 1.5 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className='bg-card p-20 rounded-xl md:h-72 h-72'
        >
          {/* <FaAngular />
          <FaReact /> */}

          <Image alt='img-tech stack' src={linux} width={100} />
          <p className='text-center my-10 border p-2 rounded '>Linux</p>
        </motion.div>
        <motion.div
          animate={winWidth > 768 ? { x: [-100, 0] } : { x: [-100, 0] }}
          transition={{ ease: 'easeIn', duration: 1 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className='bg-card p-20 rounded-xl md:h-72 h-72'
        >
          {/* <FaAngular />
          <FaReact /> */}

          <Image alt='img-tech stack' src={pycharm} width={100} />
          <p className='text-center my-10 border p-2 rounded '>PyCharm</p>
        </motion.div>
        <motion.div className='bg-card p-20 rounded-xl md:h-72 h-72'>
          {/* <FaAngular />
          <FaReact /> */}

          <Image alt='img-tech stack' src={emacs} width={100} />
          <p className='text-center my-10 border p-2 rounded '>Emacs</p>
        </motion.div>
        <motion.div className='bg-card p-20 rounded-xl md:h-72 h-72'>
          {/* <FaAngular />
          <FaReact /> */}

          <Image alt='img-tech stack' src={framer} width={100} />
          <p className='text-center my-10 border p-2 rounded '>Framer</p>
        </motion.div>
        <motion.div className='bg-card p-20 rounded-xl md:h-72 h-72'>
          {/* <FaAngular />
          <FaReact /> */}

          <Image alt='img-tech stack' src={vite} width={100} />
          <p className='text-center my-10 border p-2 rounded '>Vite</p>
        </motion.div>
        <motion.div
          animate={winWidth > 768 ? { x: [-100, 0] } : { x: [-100, 0] }}
          transition={{ ease: 'easeIn', duration: 1 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className='bg-card p-20 rounded-xl md:h-72 h-72'
        >
          {/* <FaAngular />
          <FaReact /> */}

          <Image alt='img-tech stack' src={github} width={100} />
          <p className='text-center my-10 border p-2 rounded '>Github</p>
        </motion.div>
        <motion.div className='bg-card p-20 rounded-xl md:h-72 h-72'>
          {/* <FaAngular />
          <FaReact /> */}

          <Image alt='img-tech stack' src={git} width={100} />
          <p className='text-center my-10 border p-2 rounded '>Git</p>
        </motion.div>
        <motion.div className='bg-card p-20 rounded-xl md:h-72 h-72'>
          {/* <FaAngular />
          <FaReact /> */}

          <Image alt='img-tech stack' src={chatgpt} width={100} />
          <p className='text-center my-10 border p-2 rounded '>Chat Gpt</p>
        </motion.div>
        <motion.div
          animate={winWidth > 768 ? { x: [-100, 0] } : { x: [-100, 0] }}
          transition={{ ease: 'easeIn', duration: 1 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className='bg-card p-20 rounded-xl md:h-72 h-72'
        >
          {/* <FaAngular />
          <FaReact /> */}

          <Image alt='img-tech stack' src={webflow} width={100} />
          <p className='text-center my-10 border p-2 rounded '>Webflow</p>
        </motion.div>
        <motion.div className='bg-card p-20 rounded-xl md:h-72 h-72'>
          {/* <FaAngular />
          <FaReact /> */}

          <Image alt='img-tech stack' src={wordpress} width={100} />
          <p className='text-center my-10 border p-2 rounded '>Wordpress</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Stack

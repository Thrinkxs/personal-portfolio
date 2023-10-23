'use client'
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList
} from '@chakra-ui/react'
import Image from 'next/image'
import React, { useEffect } from 'react'
import profile from '../../../public/profile.jpg'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button
} from '@nextui-org/react'
import { FaGithub, FaLink, FaRegHandshake } from 'react-icons/fa'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { TfiControlPlay, TfiLink } from 'react-icons/tfi'
import test from '../../../public/hi.png'
import Link from 'next/link'
import {
  VscActivateBreakpoints,
  VscLink,
  VscLinkExternal
} from 'react-icons/vsc'
//Material Tailwind
import { ThemeProvider } from '@material-tailwind/react'
import hr from '../../../public/hr.png'
import ww from '../../../public/wastywealth.png'
import ww2 from '../../public/wasty3.png'
import port from '../../../public/portfolio.png'
import astud from '../../../public/astudent.png'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import dynamic, { LoaderComponent } from 'next/dynamic'

import { ComponentType, lazy } from 'react'

const AboutDynamic = lazy<ComponentType<{}>>(() => import('./page'))
const About = () => {
  const [winWidth, setWinWidth] = useState(600)

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
  const data = [
    {
      label: 'Wasty Wealth',
      value: 'wasty wealth',
      desc: ''
    },
    {
      label: 'iSolvTech',
      value: 'isolvtech',
      desc: ''
    },
    {
      label: 'Upwork',
      value: 'upwork',
      desc: ''
    }
  ]
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
    <div className='text-white'>
      <div className='text-white mt-24 flex flex-row sm:flex-col justify-evenly items-center'>
        <motion.div
          animate={winWidth > 768 ? { x: [-100, 0] } : { y: [-100, 0] }}
          transition={{ ease: 'easeIn', duration: 1 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <Image
            src={profile}
            alt='profile'
            width={200}
            className='rounded-t-full sm:mx-auto -mb-36 sm:-mb-0'
          />
        </motion.div>
        <div className='sm:w-full w-1/3'>
          <motion.p
            ref={ref}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            className='sm:mx-auto sm:px-8 sm:text-center sm:tracking-wider sm:py-4'
          >
            I’m a very passionate and highly motivated individual with an eye
            for creative UI/UX design and high quality Software Development.
          </motion.p>

          <motion.p
            ref={ref}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeLeft}
            transition={{ duration: 0.5 }}
            className='sm:mx-auto sm:px-8 sm:text-center sm:tracking-wider sm:py-4'
          >
            My abundant energy fuels me in pursuit of many interest and hobbies.
          </motion.p>
          <motion.p
            ref={ref}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            className='sm:mx-auto sm:px-8 sm:text-center sm:tracking-wider sm:py-4'
          >
            I ’m a fast learner, and quite adept at quickly mastering frameworks
            or tools specific to user preference.{' '}
          </motion.p>

          <motion.p
            ref={ref}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            className='sm:mx-auto sm:px-8 sm:text-center sm:tracking-wider sm:py-4'
          >
            As a former medical scientist and startup founder, I have an
            excellent attention to details and able to work under tight
            deadlines.{' '}
          </motion.p>
          <motion.p
            ref={ref}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeLeft}
            transition={{ duration: 0.5 }}
            className='sm:mx-auto sm:px-8 sm:text-center sm:tracking-wider sm:py-4'
          >
            My personality type like Steve Jobs, is INTJ and it reflects my
            commitment to innovation and a strong drive for achieving excellence
            in every project I undertake
          </motion.p>
        </div>
      </div>
      {/* Experience */}
      <div className='mx-20 sm:mx-0 sm:w-full w-1/2 my-20'>
        <h2 className='text-glacous  ml-8 text-lg font-semibold sm:py-0 py-4'>
          Experience
        </h2>{' '}
        <Tabs
          orientation={winWidth < 640 ? 'horizontal' : 'vertical'}
          colorScheme='facebook'
          className='mx-8 '
          isManual
        >
          <TabList className=''>
            <Tab>Wasty Wealth</Tab>
            <Tab>iSolvTech</Tab>
            <Tab>Upwork</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <h2>
                {' '}
                <span className='pr-4'>|</span>Frontend Software Engineer
              </h2>
              <p className='sm:text-gray-500 italic'>November 2022 - Present</p>
              <List spacing={3} className='sm:text-gray-400  '>
                <ListItem>
                  <ListIcon as={VscActivateBreakpoints} color='green.200' />
                  Lead frontend engineer in the development of on-the-go waste
                  management and tracking platform
                </ListItem>
                <ListItem>
                  <ListIcon as={VscActivateBreakpoints} color='green.200' />
                  Ensured high quality and secured product was developed and
                  released
                </ListItem>
                <ListItem>
                  <ListIcon as={VscActivateBreakpoints} color='green.200' />
                  Proven leadership in training junior developers through
                  mentorship, collaboration and code review
                </ListItem>
                {/* You can also use custom icons from react-icons */}
              </List>{' '}
            </TabPanel>{' '}
            <TabPanel>
              <h2>
                <span className='pr-4'>|</span>Software Engineer
              </h2>
              <p className='sm:text-gray-500 italic'>
                October 2022 - August 2023
              </p>{' '}
              <List spacing={3} className='sm:text-gray-400  '>
                {' '}
                <ListItem>
                  <ListIcon as={VscActivateBreakpoints} color='green.200' />
                  Developed secured apps in Angular and learned the codebase in
                  just 3 days{' '}
                </ListItem>{' '}
                <ListItem>
                  <ListIcon as={VscActivateBreakpoints} color='green.200' />
                  Completely redesigned the mobile web experience, increasing
                  customer satisfaction{' '}
                </ListItem>{' '}
                <ListItem>
                  <ListIcon as={VscActivateBreakpoints} color='green.200' />
                  Built unit and E2E test for an already existing suite of
                  products using Protractor, Cypress and Playwright{' '}
                </ListItem>
                {/* You can also use custom icons from react-icons */}
              </List>
            </TabPanel>
            <TabPanel>
              <h2>
                {' '}
                <span className='pr-4'>|</span>Full-Stack Software Engineer
              </h2>
              <p className='sm:text-gray-500 italic'>August 2019 - Present</p>
              <List spacing={3} className='sm:text-gray-400  '>
                <ListItem>
                  <ListIcon as={VscActivateBreakpoints} color='green.200' />
                  Delivered high quality, robust production code for various
                  clients.
                </ListItem>
                <ListItem>
                  <ListIcon as={VscActivateBreakpoints} color='green.200' />
                  Developed interactive web apps for various small and medium
                  size business under budget and short timeframe
                </ListItem>
                <ListItem>
                  <ListIcon as={VscActivateBreakpoints} color='green.200' />
                  Collaborated with designers on delivering creative concepts of
                  clients to life.
                </ListItem>
                {/* You can also use custom icons from react-icons */}
              </List>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
      {/* gap-2 grid grid-cols-12 grid-rows-2 px-8 */}
      {/* Projects */}

      <div id='projects' className='mx-32 sm:mx-5'>
        <h2 className='text-glacous sm:ml-8  text-lg font-semibold my-5 '>
          Projects
        </h2>
        <motion.div
          animate={winWidth > 768 ? { x: [-100, 0] } : { y: [-100, 0] }}
          transition={{ ease: 'easeIn', duration: 1 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className='flex sm:flex-col sm:gap-5 gap-4 flex-wrap  sm:justify-stretch sm:items-stretch  justify-center md:items-center   '
        >
          <Card className='py-4  rounded-md mx-3'>
            <CardBody className='overflow-visible py-2'>
              <Image
                alt='Card background'
                className='object-contain rounded-xl'
                src={hr}
                width={270}
                height={270}
              />
            </CardBody>

            <CardHeader className='pb-0 pt-2 px-4 flex-col items-center'>
              <p className='text-tiny uppercase font-bold '>HR pro</p>
              <small className='text-default-500 w-52 text-center'>
                An HR management system, to organize and manage employees and
                departments
              </small>
              <div className='flex gap-2 text-sm py-2'>
                <button className='border rounded-md p-1'>React</button>
                <button className='border rounded-md p-1'>Node Js</button>
                <button className='border rounded-md p-1'>Typescript</button>
                <Link
                  href='https://github.com/Thrinkxs/HR_ADMIN_SYS'
                  target='_blank'
                  className='border rounded-md p-1'
                >
                  <FaGithub />
                </Link>
              </div>
            </CardHeader>
          </Card>
          <Card className='sm:py-4  rounded-md mx-3'>
            <CardBody className='overflow-visible py-2'>
              <Image
                alt='Card background'
                className='object-contain rounded-xl'
                src={ww}
                width={270}
                height={270}
              />
            </CardBody>

            <CardHeader className='pb-0 pt-2 px-4 flex-col items-center'>
              <p className='text-tiny uppercase font-bold '>Wasty Wealth</p>
              <small className='text-default-500'>
                On-the-go waste management platform
              </small>
              <div className='flex gap-2 py-2'>
                <button className='border rounded-md p-1'>React</button>
                <button className='border rounded-md p-1'>Express</button>
                <button className='border rounded-md p-1'>Typescript</button>
                <Link
                  href='https://github.com/Wasty-Wealth/WastyWealth'
                  target='_blank'
                  className='border rounded-md p-1'
                >
                  <FaGithub />
                </Link>
              </div>
            </CardHeader>
          </Card>
          <Card className='sm:py-4  rounded-md mx-3'>
            <CardBody className='overflow-visible py-2'>
              <Image
                alt='Card background'
                className='object-contain rounded-xl'
                src={port}
                width={270}
                height={270}
              />
            </CardBody>

            <CardHeader className='pb-0 pt-2 px-4 flex-col items-center'>
              <p className='text-tiny uppercase font-bold '>Portfolio</p>
              <small className='text-default-500'>My Personal Portfolio</small>
              <div className='flex gap-2 py-2'>
                <button className='border rounded-md p-1'>Next Js</button>
                <button className='border rounded-md p-1'>Typescript</button>
                <button className='border rounded-md p-1'>Tailwind</button>
                <Link
                  href='https://github.com/Thrinkxs/personal-portfolio'
                  target='_blank'
                  className='border rounded-md p-1'
                >
                  <FaGithub />
                </Link>
              </div>
            </CardHeader>
          </Card>
          {/* <Card className='sm:py-4  rounded-md mx-3'>
            <CardBody className='overflow-visible py-2'>
              <Image
                alt='Card background'
                className='object-contain rounded-xl'
                src={test}
                width={270}
              />
            </CardBody>

            <CardHeader className='pb-0 pt-2 px-4 flex-col items-center'>
              <p className='text-tiny uppercase font-bold '>Daily Mix</p>
              <small className='text-default-500'>12 Tracks</small>
              <div className='flex gap-2'>
                <button className='border rounded-md p-1'>React</button>
                <button className='border rounded-md p-1'>React</button>
              </div>
            </CardHeader>
          </Card>
          <Card className='sm:py-4  rounded-md mx-3'>
            <CardBody className='overflow-visible py-2'>
              <Image
                alt='Card background'
                className='object-contain rounded-xl'
                src={test}
                width={270}
              />
            </CardBody>

            <CardHeader className='pb-0 pt-2 px-4 flex-col items-center'>
              <p className='text-tiny uppercase font-bold '>Daily Mix</p>
              <small className='text-default-500'>12 Tracks</small>
              <div className='flex gap-2'>
                <button className='border rounded-md p-1'>React</button>
                <button className='border rounded-md p-1'>React</button>
              </div>
            </CardHeader>
          </Card>
          <Card className='sm:py-4  rounded-md mx-3'>
            <CardBody className='overflow-visible py-2'>
              <Image
                alt='Card background'
                className='object-contain rounded-xl'
                src={test}
                width={270}
              />
            </CardBody>

            <CardHeader className='pb-0 pt-2 px-4 flex-col items-center'>
              <p className='text-tiny uppercase font-bold '>Daily Mix</p>
              <small className='text-default-500'>12 Tracks</small>
              <div className='flex gap-2'>
                <button className='border rounded-md p-1'>React</button>
                <button className='border rounded-md p-1'>React</button>
              </div>
            </CardHeader>
          </Card> */}
        </motion.div>
      </div>
      {/* Startup Projects */}

      <div>
        <h3 className='text-center text-xl font-semibold text-glacous sm:py-3 py-8'>
          My Startup Projects
        </h3>
        <p className='px-3 pb-4 sm:w-full w-1/2 sm:mx-0 mx-auto'>
          I love building stuff, so I decided it would be fun and exciting to
          challenge myself to designing and building my own products to solve
          problems I come across
        </p>
        <motion.div
          animate={winWidth > 768 ? { x: [-100, 0] } : { y: [100, 0] }}
          transition={{ ease: 'easeIn', duration: 1 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className='flex sm:flex-col sm:gap-5 justify-center items-center '
        >
          <Card className='sm:py-4  rounded-md mx-3'>
            <CardBody className='overflow-visible py-2 bg-white rounded-xl'>
              <Image
                alt='Card background'
                className='object-contain rounded-xl'
                src={astud}
                width={270}
                height={270}
              />
            </CardBody>

            <CardHeader className='pb-0 pt-2 px-4 flex-col'>
              <motion.p
                animate={winWidth > 768 ? { x: [-100, 0] } : { y: [100, 0] }}
                transition={{ ease: 'easeIn', duration: 1 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className=' uppercase font-bold '
              >
                AI Career Planning Platform
              </motion.p>
              <Link href='https://astudentsdream.co.za/' target='_blank'>
                {' '}
                <motion.small
                  animate={winWidth > 768 ? { x: [-100, 0] } : { y: [100, 0] }}
                  transition={{ ease: 'easeIn', duration: 1 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className='text-default-500 flex items-center justify-center gap-2 p-1 rounded-md bg-blue-300'
                >
                  {' '}
                  astudentsdreadream
                  <VscLinkExternal />
                </motion.small>
              </Link>
            </CardHeader>
          </Card>
        </motion.div>
      </div>
      <div className='flex sm:justify-between justify-center items-center border mx-4 my-4 py-10 px-2 rounded-md'>
        <motion.div
          animate={winWidth > 768 ? { x: [-100, 0] } : { x: [-100, 0] }}
          transition={{ ease: 'easeIn', duration: 1 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h3 className='sm:mx-0 mx-10'>Ready to kickstart your project ?</h3>
        </motion.div>
        <motion.div
          animate={winWidth > 768 ? { x: [-100, 0] } : { x: [100, 0] }}
          transition={{ ease: 'easeIn', duration: 1 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className='flex justify-center items-center gap-2 border border-lcterine rounded-full px-2 py-1 hover:bg-lcterine hover:text-gray-500 font-semibold transition-all text-sm '
        >
          Lets go <FaRegHandshake />
        </motion.div>
      </div>
    </div>
  )
}

export default About

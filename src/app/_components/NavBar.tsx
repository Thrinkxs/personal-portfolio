'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import logo from '../../../public/me.png'
import { Toaster } from 'sonner'

const Header = () => {
  const [navBar, setNavBar] = useState(false)
  const [scrollHeight, setScrollHeight] = useState(0)

  const handleScroll = () => {
    setScrollHeight(window.scrollY)
    if (scrollHeight >= 80) {
      setNavBar(true)
    } else {
      setNavBar(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  return (
    <>
      <div>
        <div className='flex justify-evenly items-center gap-10 2xl:flex 2xl:justify-evenly '>
          <div>
            <Toaster position='top-right' richColors expand closeButton />
            <Link href='/'>
              <Image
                src={logo}
                alt='logo'
                width={80}
                className=' rounded-full bg-gray-500 mx-5 my-2 xl:mr-20 '
              />
              <h3 className='text-white pl-2 '>codeThrinkxs</h3>
            </Link>
          </div>
          <div>
            <button
              type='button'
              className='text-black mx-2 xl:px-1 hover:bg-lcterine   bg-white sm:p-2 rounded-full  active:bg-gray-500 active:text-white 2xl:p-3  my-4 xl:-mr-96  '
            >
              <Link href='/contact'>Get in touch</Link>
            </button>
          </div>
        </div>

        <nav
          className={` ${
            navBar
              ? ' text-gray-400 justify-center text-center bg-transparent w-80 items-center mx-auto rounded-full fixed sm:bottom-8   border border-gray-400 inset-x-0  '
              : 'text-gray-400 justify-center text-center bg-transparent w-80 sm:items-center mx-auto rounded-full fixed sm:bottom-8   border border-gray-400 inset-x-0 backdrop-blur-sm'
          }  `}
        >
          <ul className='flex-row inline-flex gap-5 p-4  '>
            <li className='focus-within:bg-gray-600 focus-within:rounded-full sm:px-1 sm:py-1'>
              <Link href='/' className='focus-within:text-white'>
                Home
              </Link>
            </li>
            <li className='focus-within:bg-gray-600 focus-within:rounded-full sm:px-2 sm:py-1'>
              <Link href='/about' className='focus-within:text-white '>
                About
              </Link>
            </li>
            <li className='focus-within:bg-gray-600 focus-within:rounded-full sm:px-1 sm:py-1'>
              <Link href='/stack' className='focus-within:text-white'>
                Stack
              </Link>
            </li>
            <li className='focus-within:bg-gray-600 focus-within:rounded-full  sm:py-1'>
              <Link href='/contact' className='focus-within:text-white'>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Header

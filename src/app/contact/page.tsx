'use client'
import React, { useState } from 'react'
import rename from '../../../public/rename.png'
import Image from 'next/image'
import sendEmail from '../email/sendEmail'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
const Page = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const router = useRouter()

  const handleInputChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await sendEmail(formData)
      setFormData({
        name: '',
        email: '',
        message: ''
      })
      toast.success('Email Sent Successfully!')
      router.push('/')
    } catch (error) {
      console.error(error)
      toast.error('Something went wrong!')
    }
  }

  return (
    <div className='text-white mx-5 mt-14'>
      <div className='flex sm:flex-col sm:gap-10 justify-between'>
        <div>
          <h1 className='text-4xl font-bold md:py-3'>Let's work together</h1>
          <p className='text-xs text-gray-200'>
            Please answer the following questions so I can get a better
            understanding of your requirements
          </p>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col gap-5 '>
              <div className='flex flex-col gap-2'>
                <label htmlFor='name'>Name</label>
                <input
                  className='bg-transparent border border-gray-400 rounded p-2'
                  type='text'
                  name='name'
                  id='name'
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor='email'>Email</label>
                <input
                  className='bg-transparent border border-gray-400 rounded p-2'
                  type='email'
                  name='email'
                  id='email'
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor='message'>
                  What project do you want to build ?
                </label>
                <textarea
                  className='bg-transparent border border-gray-400 rounded p-2'
                  name='message'
                  id='message'
                  required
                  cols={30}
                  rows={10}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <button
                type='submit'
                className='my-5 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white py-2 px-4 rounded'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className='animate-bounce'>
          <Image src={rename} alt='contact image' />
        </div>
      </div>
    </div>
  )
}

export default Page

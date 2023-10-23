'use server'
import React from 'react'
import { ContactEmail } from './ContactEmail'
import { Resend } from 'resend'
import { NextResponse } from 'next/server'
require('dotenv').config()

const resend = new Resend(process.env.RESEND_API_KEY)
type formData = { name: string; email: string; message: string }

const sendEmail = async (formData: formData) => {
  const { name, email, message } = formData
  const emailSubject = `New project from ${name}`
  resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'emmanuelozigue@gmail.com',
    reply_to: email,
    subject: emailSubject,
    react: React.createElement(ContactEmail, { name, message })
  })
}
export default sendEmail

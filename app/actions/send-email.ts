'use server'

import nodemailer from 'nodemailer'

export interface EmailData {
  fullName: string
  email: string
  phone: string
  message: string
  company: string
}

export async function sendEmail(data: EmailData) {
  try {
    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.mail.ru",
      port: 465,
      secure: true,
      auth: {
        // You should use environment variables for these values in production
        user: process.env.EMAIL_USER || 'your-email@gmail.com',
        pass: process.env.EMAIL_PASS || 'your-app-password'
      }
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: 'info@moliy.ai',
      subject: `Contact Form Submission from ${data.fullName}`,
      text: `
        Name: ${data.fullName}
        Email: ${data.email}
        Phone: ${data.phone || 'Not provided'}
        Company: ${data.company || 'Not provided'}
        
        Message:
        ${data.message}
      `,

      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
        <h3>Message:</h3>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `
    }

    // Send email
    await transporter.sendMail(mailOptions)
    return { success: true, message: 'Email sent successfully' }
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false, message: 'Failed to send email' }
  }
}

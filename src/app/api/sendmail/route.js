import { NextResponse } from 'next/server';
let nodemailer = require('nodemailer')


export async function POST(request) {
  const {name, email, subject, phone, company, message} = await request.json()
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.EMIAL_PASSWORD_TOKEN
    }
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_TO,
      subject: `Contact form submission from`,
      html: `<p>You have a contact form submission</p>
      <p>Full Name:  ${name}</p>
      <p>Email:  ${email}</p>
      <p>Subject:  ${subject}</p>
      <p>Phone:  ${phone}</p>
      <p>Company:  ${company}</p>
      <p>Message:  ${message}</p>
      `
    });
  } catch (error) {
    return NextResponse.json({ status: 500 });
  }
  return NextResponse.json({ status: 200, message: "email send successfully!" });
}
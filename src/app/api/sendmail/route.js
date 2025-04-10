import { NextResponse } from 'next/server';
let nodemailer = require('nodemailer')
export async function POST(request) {
  const {name, email, subject, phone, company, message} = await request.json()
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    tls: {
      ciphers: 'SSLv3'
    },
    auth: {
      user: "billing@igoodworks.com",
      pass: "mdzzcvzwnjwdjymp"
    }
  });

  try {
    await transporter.sendMail({
      from:"billing@igoodworks.com",
      to: `sales@igoodworks.com, dev.zunaair@gmail.com`,
      subject: `Contact form submission from`,
      replyTo: email,
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
    return NextResponse.json({ status: 500, error });
  }
  return NextResponse.json({ status: 200, message: "email send successfully!" });
}

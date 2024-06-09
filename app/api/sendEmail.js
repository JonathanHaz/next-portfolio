// pages/api/sendEmail.js

import nodemailer from 'nodemailer';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a transporter
    let transporter = nodemailer.createTransport({
      service: 'Gmail', // or any other email service
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password
      },
    });

    // Setup email data
    let mailOptions = {
      from: email,
      to: 'yonatanhazan1337@gmail.com', // Your email address to receive form data
      subject: `New message from ${name}`,
      text: message,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default handler;

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, message } = req.body;

    const transporter = nodemailer.createTransport({
      port: 465,
      host: 'smtp.gmail.com',
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
      },
      secure: true
    });
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USERNAME,
      subject: `Message From Portfolio Website`,
      text: req.body.message + ' | Sent from: ' + req.body.email,
      html: `<p>Name: ${name}</p><p>Email: ${req.body.email}</p><p>Phone: ${phone}</p><p>Message: ${message}</p>`
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ message: 'Only POST requests allowed' });
  }
}

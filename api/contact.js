import nodemailer from 'nodemailer';

// pages/api/contact.js

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, email, message } = req.body;

    // Configure your SMTP transport
    const transporter = nodemailer.createTransport({
        host: 'smtp.example.com', // e.g., smtp.gmail.com
        port: 587,
        auth: {
            user: 'your@email.com',
            pass: 'yourpassword',
        },
    });

    try {
        await transporter.sendMail({
            from: email,
            to: 'your@email.com',
            subject: `Contact Form: ${ name }`,
            text: message,
        });
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error sending email', error: error.message });
    }
}
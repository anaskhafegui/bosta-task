// email.service.ts
import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    // Initialize the Nodemailer transporter with your email service settings
    this.transporter = nodemailer.createTransport({
      service: 'your_email_service_provider',
      auth: {
        user: 'your_email@example.com',
        pass: 'your_email_password',
      },
    });
  }

  async sendVerificationEmail(SendVerifyEmailDto): Promise<void> {
    const { email, verificationToken } = SendVerifyEmailDto;
    const to = email;
    const mailOptions = {
      from: 'your_email@example.com',
      to,
      subject: 'Verify Your Email',
      text: `Please click the following link to verify your email: ${verificationToken}`,
    };

    try {
      await this.transporter.sendMail(mailOptions);
      console.log('Verification email sent successfully.');
    } catch (error) {
      console.error('Error sending verification email:', error);
      throw error;
    }
  }
}

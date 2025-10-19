import { Resend } from "resend";
import env from "dotenv";

env.config();

// Initialize Resend using your API key from .env
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendOtpEmail = async (email: string, otp: string) => {
  try {
    // Send the email via Resend API
    await resend.emails.send({
      from: "QubitX <no-reply@resend.dev>", // You can verify your domain later
      to: email,
      subject: "Your OTP Code",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>🔐 QubitX Verification Code</h2>
          <p>Your One-Time Password (OTP) is:</p>
          <h3 style="color:#2563eb; letter-spacing: 3px;">${otp}</h3>
          <p>This code will expire shortly. Please use it to complete your verification.</p>
          <hr/>
          <small>If you didn’t request this, you can safely ignore this email.</small>
        </div>
      `,
    });

    console.log(" OTP email sent successfully via Resend");
  } catch (error) {
    console.error(" Error sending OTP email:", error);
    throw new Error("Failed to send OTP Email");
  }
};

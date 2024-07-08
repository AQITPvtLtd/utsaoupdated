import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
export async function POST(request) {
  try {
    const { name, email, phone, password } = await request.json();
    const otp = Math.floor(100000 + Math.random() * 900000);
    //creating token
    const token = jwt.sign(
      {
        name: name,
        email: email,
        phone: phone,
        password: password,
        emailOtp: otp,
      },
      process.env.JWT_KEY
    );

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      secure: true,
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });
    var mailOptions = {
      from: process.env.MY_EMAIL,
      to: email,
      subject: "Verify OTP",
      html: `<html><body><div><h4>Your OTP for Email Verification of Utsao is</h4></div><div><p>Your Customer Id is: "${otp}".</body></html>`,
    };
    transporter.sendMail(mailOptions);
    return NextResponse.json({
      message: "OTP Sent",
      success: true,
      token: token,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      message: "Failed to send OTP!",
      success: false,
    });
  }
}

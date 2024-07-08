import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { v4 as uuid } from "uuid";
import jwt from "jsonwebtoken";
import pool from "../../../helper/db2";

export async function POST(request) {
  const db = await pool.getConnection();

  try {
    const { data, otp } = await request.json();

    const joinedOtp = otp.join("");
    const userOtp = jwt.verify(data, process.env.JWT_KEY);

    if (userOtp.emailOtp == joinedOtp) {
      const hashedPassword = await bcrypt.hash(
        userOtp.password,
        parseInt(process.env.BCRYPT_SALT)
      );
      const unique_id = uuid();
      const [rows] = await db.execute(
        "INSERT INTO user (id, name, email, phone, password) VALUES (?, ?, ?, ?, ?)",
        [unique_id, userOtp.name, userOtp.email, userOtp.phone, hashedPassword]
      );

      return NextResponse.json({
        message: "Email Verified",
        success: true,
      });
    } else {
      return NextResponse.json({
        message: "Invalid OTP",
        success: false,
      });
    }
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      message: "Failed to verify Email!",
      success: false,
    });
  }
}

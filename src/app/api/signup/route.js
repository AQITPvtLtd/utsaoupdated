import { NextResponse } from "next/server";
import pool from "../../../helper/db2";

export async function POST(request) {
  const db = await pool.getConnection();
  const { email, phone } = await request.json();

  try {
    //email authenticate
    const [rows] = await db.execute("SELECT * FROM user WHERE email = ?", [
      email,
    ]);
    if (rows.length !== 0) {
      return NextResponse.json({
        message: "Email Already Exists!",
        status: false,
      });
    }
    //phone authenticate
    const [row] = await db.execute("SELECT * FROM user WHERE phone = ?", [
      phone,
    ]);
    if (rows.length !== 0) {
      return NextResponse.json({
        message: "Phone Number Already Exists!",
        status: false,
      });
    }
    return NextResponse.json({
      message: "Proceed To Verify Email",
      status: true,
    });
  } catch (error) {
    return NextResponse.json({ message: "Unable to Sign up", status: false });
  }
}

import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import pool from "../../../helper/db2";

export async function POST(request) {
  const db = await pool.getConnection();
  // const { authToken } = await request.json();
  const authToken = request.cookies.get("authToken")?.value;
  const data = jwt.verify(authToken, process.env.JWT_KEY);
  const [rows] = await db.execute("SELECT * FROM user WHERE email = ?", [
    data.email,
  ]);

  return NextResponse.json(rows[0]);
}

import { NextResponse } from "next/server";
import pool from "../../../helper/db2";

export async function POST(request) {
  const db = await pool.getConnection();
  const { id } = await request.json();

  try {
    const [rows] = await db.execute("SELECT cart FROM user WHERE id = ?", [id]);

    return NextResponse.json({
      message: "successful",
      status: true,
      result: rows[0].cart,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ message: "error", status: false });
  }
}

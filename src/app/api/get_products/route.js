import { NextResponse } from "next/server";
import pool from "../../../helper/db2";
export async function GET() {
  try {
    const con = await pool.getConnection();
    const [rows] = await con.execute("SELECT * FROM product");
    return NextResponse.json({
      message: "success",
      success: true,
      result: rows,
    });
  } catch (error) {
    console.log(error.message);
    connection.end();
    return NextResponse.json({ message: "error", success: false });
  }
}

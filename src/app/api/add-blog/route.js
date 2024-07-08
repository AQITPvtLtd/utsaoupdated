import { NextResponse } from "next/server";
import { v4 as uuid } from "uuid";
import pool from "../../../helper/db2";

export async function POST(request) {
  const db = await pool.getConnection();
  const { formData, selectedFile, value, category, startDate } =
    await request.json();
  try {
    //create unique id
    const unique_id = uuid();
    const [rows] = await db.execute(
      "INSERT INTO blogs (id, title, description, category, image, date) VALUES (?, ?, ?, ?, ?, ?)",
      [
        unique_id,
        formData.title,
        value,
        category.value,
        selectedFile[0],
        startDate,
      ]
    );

    return NextResponse.json({
      message: "Blog Added",
      status: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Unable to Add Blog",
      status: false,
    });
  }
}

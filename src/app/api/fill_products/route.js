import { NextResponse } from "next/server";
import { v4 as uuid } from "uuid";
import pool from "../../../helper/db2";

export async function POST(request) {
  const db = await pool.getConnection();

  const { formData, selectedFile, value } = await request.json();

  while (selectedFile.length < 4) {
    selectedFile.push("");
  }

  try {
    //create unique id
    const unique_id = uuid();
    const [response] = await db.execute(
      "INSERT INTO product (id, name, catalog, description, price, image1, image2, image3, image4) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        unique_id,
        formData.name,
        value,
        formData.description,
        formData.price,
        selectedFile[0],
        selectedFile[1],
        selectedFile[2],
        selectedFile[3],
      ]
    );

    return NextResponse.json({
      message: "Product Added",
      status: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Unable to Add Product",
      status: false,
    });
  }
}

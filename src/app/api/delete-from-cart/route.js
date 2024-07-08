import { NextResponse } from "next/server";
import pool from "../../../helper/db2";

export async function PUT(request) {
  const db = await pool.getConnection();

  const { cart, id, prodId } = await request.json();
  const filteredCart = cart.filter((prod) => prod.id === prodId);
  const filteredCartJSON = JSON.stringify(filteredCart);
  try {
    const [rows] = await db.execute("UPDATE user SET cart = ? WHERE id = ?", [
      filteredCartJSON,
      id,
    ]);

    return NextResponse.json({
      message: "Product Removed",
      status: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Unable to Remove Product",
      status: false,
    });
  }
}

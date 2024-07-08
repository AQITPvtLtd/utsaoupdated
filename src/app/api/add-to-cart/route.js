import { NextResponse } from "next/server";
import pool from "../../../helper/db2";

export async function PUT(request) {
  const db = await pool.getConnection();
  const { id, productId, userCart, name, quantity, price, image1 } =
    await request.json();
  const newItem = {
    id: productId,
    name: name,
    quantity: quantity,
    price: price,
    image1: image1,
  };
  let cartArray = [];

  if (userCart) {
    cartArray = JSON.parse(userCart);
  }

  cartArray.push(newItem);
  const updatedCartString = JSON.stringify(cartArray);
  try {
    const [rows] = await db.execute("UPDATE user SET cart = ? WHERE id = ?", [
      updatedCartString,
      id,
    ]);

    return NextResponse.json({
      message: "Added To Cart",
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

import { NextResponse } from "next/server";
import crypto from "crypto";
import pool from "../../../../helper/db2";

export async function POST(req, res) {
  const db = await pool.getConnection();

  const { userId, razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    await req.json();
  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.KEY_SECRET)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    const [row] = await db.execute(
      "INSERT INTO payment (user_id, razorpay_order_id, razorpay_payment_id, razorpay_signature) VALUES (?, ?, ?, ?)",
      [userId, razorpay_order_id, razorpay_payment_id, razorpay_signature]
    );
    //  return NextResponse.redirect(new URL('/paymentsuccess', req.url));
  } else {
    return NextResponse.json({
      message: "Error ",
      success: false,
    });
  }

  return NextResponse.json({
    message: "Successful",
    success: true,
  });
}

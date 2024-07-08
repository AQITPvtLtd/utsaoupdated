import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import shortid from "shortid";

const instance = new Razorpay({
  key_id: process.env.KEY_ID,
  key_secret: process.env.KEY_SECRET,
});

export async function POST(request) {
  const { amount, userId } = await request.json();
  try {
    const payment_capture = 1;
    const totalAmount = amount * 100; // amount in paisa. In our case it's INR 1
    const currency = "INR";
    const options = {
      amount: totalAmount.toString(),
      currency,
      receipt: shortid.generate(),
      payment_capture,
      notes: {
        // These notes will be added to your transaction. So you can search it within their dashboard.
        // Also, it's included in webhooks as well. So you can automate it.
        paymentFor: "Utsao",
        userId: userId,
      },
    };

    const order = await instance.orders.create(options);
    return NextResponse.json({ msg: "success", order });
  } catch (error) {
    console.log(error);
  }
}

// export async function POST(req) {
//   const body = await req.json();

//   return NextResponse.json({ msg: body });
// }

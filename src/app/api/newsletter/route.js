import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { v4 as uuid } from "uuid";
import pool from "../../../helper/db2";

export async function POST(request) {
  const db = await pool.getConnection();

  try {
    const { email } = await request.json();
    const unique_id = uuid();
    const [rows] = await db.execute(
      "INSERT INTO news_letter (id, email) VALUES (?, ?)",
      [unique_id, email]
    );

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      secure: true,
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });
    var mailOptions = {
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
      subject: "Utsao Enquiry Form",
      html: `<html lang="en">
      <head>
        <meta charset="utf-8">

        <title>Utsao NewsLetter Subscription</title>
        <meta name="description" content="Utsao Enquiry Form">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

        <link rel="stylesheet" href="css/styles.css?v=1.0">

      </head>

      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';"></div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>You've got a new subscription from ${email}</h3>              
              </div>
      </body>
      </html>`,
    };
    transporter.sendMail(mailOptions);
    return NextResponse.json({
      message: "NewsLetter Subscribed!",
      success: true,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      message: "NewsLetter can't be Subscribed!.",
      success: false,
    });
  }
}

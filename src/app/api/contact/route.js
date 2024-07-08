import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { v4 as uuid } from "uuid";
import pool from "../../../helper/db2";

export async function POST(request) {
  const db = await pool.getConnection();

  try {
    const { userid, name, email, subject, message } = await request.json();
    const unique_id = uuid();
    const [rows] = await db.execute(
      "INSERT INTO contact (id, user_id, subject, message) VALUES (?, ?, ?, ?)",
      [unique_id, userid, subject, message]
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

        <title>Utsao Enquiry Form</title>
        <meta name="description" content="Utsao Enquiry Form">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

        <link rel="stylesheet" href="css/styles.css?v=1.0">

      </head>

      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';"></div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>You've got a new mail from ${name}, their email is: ✉️${email} </h3>
              <div style="font-size: 16px;">
              <p>Message:</p>
              <p>${message}</p>
              <br>
              </div>
              </div>
      </body>
      </html>`,
    };
    transporter.sendMail(mailOptions);
    return NextResponse.json({
      message: "Query Sent",
      success: true,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      message: "Failed to send Query.",
      success: false,
    });
  }
}

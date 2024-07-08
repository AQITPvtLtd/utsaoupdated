import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import pool from "../../../helper/db2";

export async function PUT(request) {
  const db = await pool.getConnection();

  const { userId, address, cart, name, email, phone } = await request.json();
  try {
    //send mail to self
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      secure: true,
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });
    const generateHtmlContent = (products) => {
      let productListItems = products
        .map(
          (product) => `
        <li class="product-item">
          <div>Name: ${product.name}</div>
          <div>Quantity: ${product.quantity}</div>
          <div>Price: ₹${product.price}</div>
        </li>
      `
        )
        .join("");

      return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Order Received!</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            padding: 20px;
          }
          .product-list {
            list-style-type: none;
            padding: 0;
          }
          .product-item {
            margin: 10px 0;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }
        </style>
      </head>
      <body>
      <h1>Name: </h1>
      <p>${name}</p>
      <h1>Phone: </h1>
      <p>${phone}</p>
      <h1>Email: </h1>
      <p>${email}</p>
        <h1>Product List</h1>
        <ul class="product-list">
          ${productListItems}
        </ul>
        <h1>Address</h1>
        <p>${address}</p>
      </body>
      </html>
      `;
    };

    // Generate HTML content
    const htmlContent = generateHtmlContent(cart);

    var mailOptions = {
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
      subject: "Utsao Order Received!!",
      html: htmlContent,
    };
    transporter.sendMail(mailOptions);

    //send confirmation mail to user
    const generateHtmlContent2 = (products) => {
      let productListItems = products
        .map(
          (product) => `
        <li class="product-item">
          <div>Name: ${product.name}</div>
          <div>Quantity: ${product.quantity}</div>
          <div>Price: ₹${product.price}</div>
        </li>
      `
        )
        .join("");

      return `<html lang="en">
      <head>
        <meta charset="utf-8">

        <title>Utsao Order Placed</title>
        <meta name="description" content="Utsao Enquiry Form">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

        <link rel="stylesheet" href="css/styles.css?v=1.0">

      </head>

      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';"></div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>You Placed an order on Utsao Global</h3>
              <h1>Product List</h1>
        <ul class="product-list">
          ${productListItems}
        </ul>
              <div style="font-size: 16px;">
              <p>Thank You for shopping with us!! Your order will reach you soon.</p>
              <br>
              </div>
              </div>
      </body>
      </html>`;
    };
    const htmlContent2 = generateHtmlContent2(cart);
    var mailOptions = {
      from: process.env.MY_EMAIL,
      to: email,
      subject: "Utsao Order Placed!!",
      html: htmlContent2,
    };
    transporter.sendMail(mailOptions);
    //empty the cart
    const [rows] = await db.execute("UPDATE user SET cart = ? WHERE id = ?", [
      "",
      userId,
    ]);

    return NextResponse.json({
      message: "Success",
      status: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Unable to Empty cart",
      status: false,
    });
  }
}

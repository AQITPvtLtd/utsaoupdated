import React from "react";

const page = () => {
  return (
    <div className="lg:pt-[150px] mx-10">
      <h1 className="font-bold text-2xl underline">Privacy Policy</h1>
      <p className="mb-5">
        <h2 className="text-lg font-semibold my-2">
          Collection of Information
        </h2>
        We collect personal information such as names, email addresses, phone
        numbers, and shipping addresses when provided voluntarily by users
        during the checkout process or through account registration.
        <h2 className="text-lg font-semibold my-2">Use of Information</h2>
        The collected information is used for order processing, shipping,
        customer support, and marketing purposes. We may also use cookies and
        similar technologies to enhance user experience and gather analytics
        data.
        <h2 className="text-lg font-semibold my-2">Data Security</h2>
        We implement industry-standard security measures to protect user
        information from unauthorized access, disclosure, alteration, or
        destruction.
        <h2 className="text-lg font-semibold my-2">Sharing of Information</h2>
        We do not sell, trade, or otherwise transfer user information to third
        parties without explicit consent, except for trusted third parties
        involved in order fulfillment, payment processing, or providing
        essential services to our business.
        <h2 className="text-lg font-semibold my-2">Opt-Out</h2>
        Users can opt-out of marketing communications and update their
        preferences regarding the use of their personal information.
        <h2 className="text-lg font-semibold my-2">Changes to Policy</h2>
        We reserve the right to update our privacy policy periodically. Users
        will be notified of any significant changes.
      </p>
    </div>
  );
};

export default page;

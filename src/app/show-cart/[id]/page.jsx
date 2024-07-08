import React from "react";
import ShowCart from "./ShowCart";

const page = ({ params }) => {
  const id = params.id;
  const keyId = process.env.KEY_ID;
  return (
    <div>
      <ShowCart id={id} keyId={keyId} />
    </div>
  );
};

export default page;

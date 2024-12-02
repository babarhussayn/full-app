import React from "react";

export default function ProductPage({ params }) {
  console.log(params.type);
  return <div>{params.type}</div>;
}

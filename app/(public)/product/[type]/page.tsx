import React from "react";

export function generateMetadata({ params }) {
  return {
    title: `Category - ${params.type}`,
  };
}
export default function ProductPage({ params }) {
  console.log(params.type);
  return <div>{params.type}</div>;
}

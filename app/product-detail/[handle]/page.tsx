"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ShoeItem from "../../../bestseller.json";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  src: string;
}
const products: Product[] = ShoeItem;
const Detail = () => {
  const params = useParams();

  const [productsItem, setProductItem] = useState<Product | null>(null);

  useEffect(() => {
    const p = products.find((product) => product.id === params.handle);
    if (p) {
      setProductItem(p);
    }
  }, [params.handle]);
  if (!productsItem) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h4>{productsItem.name} </h4>
      <Image src={productsItem.src} alt="image" width={250} height={150} />

      {params.handle}
    </div>
  );
};

export default Detail;

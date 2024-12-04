import { getData } from "@/constants/service";
import { TProduct } from "@/types";
import Image from "next/image";
import Link from "next/link";

import React from "react";

export function generateMetadata({ params }: { params: { type: string } }) {
  return {
    title: `Category - ${params.type}`,
  };
}

interface Cateogory {
  _id: string;
  name: string;
  products: TProduct[];
}

const category: Cateogory[] = (await getData("category/all-category")).data;

const CategoryPage = ({ params }: { params: { type: string } }) => {
  return (
    <section className="min-h-screen">
      <div className="flex justify-center items-center w-full p-8">
        {category
          .filter((c) => c.name === params.type)
          .map((item, index) => (
            <div key={index}>
              <div className="flex justify-center m-4">
                {item.name.toLocaleUpperCase()}
              </div>
              <div className="grid grid-cols-4 gap-4 w-[1200px]">
                {item.products.map((j, k) => (
                  <div key={k} className="border ">
                    <Link
                      href={`/product-detail/${j?.name.replaceAll(" ", "-")}`}
                    >
                      <Image
                        src={j.imageurl[0]}
                        alt="cato"
                        height={100}
                        width={300}
                        objectFit="cover"
                      />
                      <div className="p-4">
                        <h4 className="text-[#355f57]">
                          {j.name?.toLocaleUpperCase()}
                        </h4>
                        <span className="font-bold text-lg leading-8  text-center transition-all duration-300 text-[#88c8bc]">
                          ${j?.price}
                        </span>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};
export default CategoryPage;

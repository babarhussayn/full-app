import React from "react";
import ShoesItem from "../../../bestseller.json";
import Image from "next/image";
const BestSellerPage = () => {
  return (
    <section className="w-full min-h-screen">
      <div className="flex justify-center items-center">
        <div className=" flex justify-center items-center flex-col gap-12">
          <div className="flex justify-center m-8 gap-8">
            <h2 className="font-bold text-4xl">Best Sellers</h2>
          </div>
          <div className="flex justify-center items-center gap-4">
            <div className="grid grid-cols-4 gap-12">
              {ShoesItem.map((items, index) => (
                <div key={index}>
                  <div className="flex justify-center items-center flex-col gap-4 border ">
                    <div>
                      <Image
                        src={items.src}
                        alt="imahe"
                        width={250}
                        height={100}
                        objectFit="cover"
                      />
                    </div>
                    <div className="flex justify-center items-center flex-col gap-4 p-4">
                      <h4>{items.name.toLocaleUpperCase()}</h4>
                      <p>{items.title.toLocaleUpperCase()}</p>
                      <span>{items.Price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellerPage;

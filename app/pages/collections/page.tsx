import Image from "next/image";
import Link from "next/link";
import React from "react";

const CollectionPage = () => {
  return (
    <section className="min-h-screen w-full  overflow-hidden">
      <div className="w-full m-8">
        <div className="flex justify-center items-center ">
          <h3 className="font-bold text-[30px] text-center w-[800px]">
            It started with a simple idea: Create quality, well-designed
            products that I wanted myself.
          </h3>
        </div>
      </div>
      <div className="flex justify-between gap-6 items-center ">
        <div className="w-[48%] ml-8">
          <div className="w-full h-[500px] relative">
            <Link href="/">
              <Image
                src="/images/men.jpg"
                alt="men-shoes"
                fill
                objectFit="cover"
              />
            </Link>
          </div>
          <div className="flex justify-center items-center mt-8">
            <div>
              <Link href="/">
                <h2 className="font-bold text-[32px] ">
                  Shop Men&#39;s Collection
                </h2>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[49%] mr-8">
          <div className="w-full h-[500px] relative">
            <Link href="/">
              <Image
                src="/images/women.jpg"
                alt="men-shoes"
                fill
                objectFit="cover"
              />
            </Link>
          </div>
          <div className="flex justify-center items-center mt-8">
            <div>
              <Link href="/">
                <h2 className="font-bold text-[32px] ">
                  Shop Women&#39;s Collection
                </h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionPage;

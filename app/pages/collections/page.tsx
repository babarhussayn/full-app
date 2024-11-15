import Image from "next/image";
import Link from "next/link";
import React from "react";

const CollectionPage = () => {
  return (
    <section className="min-h-screen w-full mt-8">
      <div className="w-[1000px] m-8">
        <div className="flex justify-center items-center ">
          <h3 className="font-bold text-[30px] text-center w-[800px]">
            It started with a simple idea: Create quality, well-designed
            products that I wanted myself.
          </h3>
        </div>
      </div>
      <div className="flex justify-between gap-4 items-center ">
        <div className="w-[48%]">
          <div className="w-full h-[400px] relative">
            <Link href="/">
              <Image
                src="/images/men.jpg"
                alt="men-shoes"
                fill
                objectFit="cover"
              />
            </Link>
          </div>
          <div>content</div>
        </div>
        <div className="w-[49%]">
          <div className="w-full h-[400px] relative">
            <Link href="/">
              <Image
                src="/images/women.jpg"
                alt="men-shoes"
                fill
                objectFit="cover"
              />
            </Link>
          </div>
          <div>content</div>
        </div>
      </div>
    </section>
  );
};

export default CollectionPage;

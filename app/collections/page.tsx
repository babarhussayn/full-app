import Image from "next/image";
import Link from "next/link";
import React from "react";

const CollectionPage = () => {
  return (
    <section className="min-h-screen w-full  overflow-hidden">
      <div className="w-full md:m-8 p-4 md:p-0">
        <div className="flex justify-center items-center ">
          <h3 className="font-bold md:text-[30px] text-center md:w-[800px] ">
            It started with a simple idea: Create quality, well-designed
            products that I wanted myself.
          </h3>
        </div>
      </div>
      <div className="flex justify-between gap-6 items-center flex-col md:flex-row">
        <div className="md:w-[48%] md:ml-8">
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
        <div className="md:w-[49%] md:mr-8">
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

import Image from "next/image";
import React from "react";

interface LogoItem {
  name: string;
  src: string;
  alt: string;
}

const Logoitems: LogoItem[] = [
  {
    name: "addidas",
    src: "/images/brand-1.jpg",
    alt: "brand-1",
  },
  {
    name: "addidas",
    src: "/images/brand-2.jpg",
    alt: "brand-2",
  },
  {
    name: "addidas",
    src: "/images/brand-3.jpg",
    alt: "brand-3",
  },
  {
    name: "addidas",
    src: "/images/brand-4.jpg",
    alt: "brand-4",
  },
  {
    name: "addidas",
    src: "/images/brand-5.jpg",
    alt: "brand-4",
  },
];

const TrustedPartnerPage = () => {
  return (
    <section className="mt-28">
      <div className="w-full">
        <div className="flex justify-center items-center flex-col gap-16">
          <div>
            <div>
              <h2 className="font-bold text-[#b2b2be] text-4xl">
                Trusted Partners
              </h2>
            </div>
          </div>
          <div className="md:w-full md:h-[300px] ">
            <div className=" flex justify-center ">
              <div className="flex justify-center items-center flex-col md:flex-row gap-8 overflow-hidden">
                {Logoitems.map((item, index) => (
                  <div key={index} className="">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={200}
                      height={100}
                      objectFit="cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartnerPage;

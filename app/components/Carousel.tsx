"use client";

import React, { useState, useEffect } from "react";
import { Carousel } from "antd";
import Data from "../../shoesData.json";
import Image from "next/image";
import Link from "next/link";

const CarouBanner: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex(0);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleBeforeChange = (current: number, next: number) => {
    setActiveIndex(next);
  };

  return (
    <Carousel
      effect="fade"
      infinite
      autoplay
      dots={false}
      beforeChange={handleBeforeChange}
    >
      {Data.map((item, index) => (
        <div key={index} className="w-full h-[50vh] relative overflow-hidden">
          <div>
            <Image src={item.src} alt={item.alt} fill objectFit="cover" />
            <div
              className={`
                absolute bottom-0 left-0 right-0
                w-full flex justify-center items-center flex-col gap-4
                transition-all duration-1000 ease-in-out
                ${
                  activeIndex === index
                    ? "translate-y-0 opacity-100"
                    : "translate-y-full opacity-0"
                }
              `}
            >
              <div
                className="
                text-white p-6 rounded-t-lg shadow-lg
                transition-all duration-1000 ease-in-out
                bg-black bg-opacity-50
              "
              >
                <h3 className="font-bold text-[32px] text-[#fefefe]">
                  {item.title.toLocaleUpperCase()}
                </h3>
                <p className="font-bold text-[14px] text-[#fefefe]">
                  {item.description}
                </p>
                <span className="font-thin text-[28px] text-[#fefefe] block mb-4">
                  {item.para.toLocaleUpperCase()}
                </span>
                <Link
                  href={item.link}
                  className="font-thin text-[18px] text-[#fefefe] bg-[#616161] py-2 px-10 rounded-full inline-block"
                >
                  Collection
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouBanner;

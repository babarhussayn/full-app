"use client";
import React, { useState } from "react";
import Link from "next/link";
import { LuShoppingCart } from "react-icons/lu";
interface NavItem {
  name: string;
  link: string;
}

const navItem: NavItem[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Men",
    link: "/products",
  },
  {
    name: "Women",
    link: "/blog",
  },
  {
    name: "About",
    link: "/contact",
  },
  {
    name: "contact",
    link: "/contact",
  },
];
const SubHeader = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleAct = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="flex justify-between items-center ">
        <div className="flex flex-1">
          <div className="flex justify-center items-center gap-4">
            {navItem.map((item, index) => (
              <div
                key={index}
                className="flex justify-center items-center gap-4"
              >
                <Link href={item.link} onClick={() => handleAct(index)}>
                  <h4
                    className={`text-sm ${
                      activeIndex === index ? "text-[#88c8bc]" : "text-black"
                    }`}
                  >
                    {item.name.toLocaleUpperCase()}
                  </h4>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div>
            <LuShoppingCart size={25} />
          </div>
          <div>
            <p>CART </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubHeader;

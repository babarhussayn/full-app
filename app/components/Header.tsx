"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
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
    name: "products",
    link: "/products",
  },
  {
    name: "blogs",
    link: "/blog",
  },
  {
    name: "contact",
    link: "/contact",
  },
];

const Header = () => {
  const router = useRouter();
  return (
    <div className="bg-[#803b80c5] sticky p-4">
      <div className="flex justify-center items-center gap-12">
        <div className="flex flex-1">
          <div>
            <h4>Logo</h4>
          </div>
        </div>
        <div className="flex flex-1">
          <div className="flex justify-center items-center gap-4">
            {navItem.map((item, index) => (
              <div
                key={index}
                className="flex justify-center items-center gap-4"
              >
                <Link href={item.link}> {item.name.toLocaleUpperCase()}</Link>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center gap-6">
          <Button
            className="bg-[#9d689d]  ease-in transition-all duration-100 hover:bg-[#662f66]"
            onClick={() => router.push("/login")}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;

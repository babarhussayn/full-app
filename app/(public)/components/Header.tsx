"use client";

// import { Button } from "@/components/ui/button";

import React from "react";
// import { useRouter } from "next/navigation";
import Searchbar from "./Searchbar";
import { IoMdMenu } from "react-icons/io";

const Header = () => {
  // const router = useRouter();
  return (
    <div className="flex justify-center items-center   md:gap-12 relative">
      <div className="md:flex md:flex-1">
        <div>
          <h4 className="text-4xl font-bold text-[#595959]">Footwear</h4>
        </div>
      </div>

      <div className="flex justify-center items-center gap-6">
        <Searchbar />
        {/* <Button
            className="bg-[#9d689d]  ease-in transition-all duration-100 hover:bg-[#662f66]"
            onClick={() => router.push("/auth/login")}
          >
            Login
          </Button>
          <Button
            className="bg-[#9d689d]  ease-in transition-all duration-100 hover:bg-[#662f66]"
            onClick={() => router.push("/auth/signup")}
          >
            signup
          </Button> */}
      </div>
      <div className="md:hidden absolute flex justify-end ml-24 ">
        <div className="flex ">
          <IoMdMenu size={35} />
        </div>
      </div>
    </div>
  );
};

export default Header;

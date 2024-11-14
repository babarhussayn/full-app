import React from "react";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";

const Subwrapper = () => {
  return (
    <>
      <div className="w-full justify-center items-center flex flex-col ">
        <div className="w-[1200px] p-14 flex flex-col items-center gap-14">
          <div className="w-full">
            <Header />
          </div>

          <div className="w-full">
            <SubHeader />
          </div>
        </div>
      </div>
    </>
  );
};

export default Subwrapper;

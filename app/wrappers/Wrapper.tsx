import React, { ReactNode } from "react";

import Footer from "../components/Footer";

import Subwrapper from "./Subwrapper";
import Banner from "../components/Banner";

interface wrapperProps {
  children: ReactNode;
}

const Wrapper: React.FC<wrapperProps> = ({ children }) => {
  return (
    <>
      <Subwrapper />
      <Banner />
      {children}
      <Footer />
    </>
  );
};

export default Wrapper;

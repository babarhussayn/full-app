import React, { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface wrapperProps {
  children: ReactNode;
}

const Wrapper: React.FC<wrapperProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Wrapper;

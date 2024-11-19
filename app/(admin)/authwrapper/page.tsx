import React, { FC, ReactNode } from "react";

interface AuthWrapperProps {
  children: ReactNode;
}
const Authwrapper: FC<AuthWrapperProps> = ({ children }) => {
  return <div>{children} </div>;
};

export default Authwrapper;

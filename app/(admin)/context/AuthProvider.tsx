"use client";
import React from "react";
import { FC } from "react";
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

interface authProviderPorps {
  children: ReactNode;
}
const AuthProvider: FC<authProviderPorps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;

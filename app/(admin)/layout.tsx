import React from "react";
import Sidebar from "../components/admin/sidebar/Sidebar";
import AuthProvider from "./context/AuthProvider";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <section className="h-full flex gap-2 items-start">
        <header>
          <Sidebar />
        </header>
        <main className="my-4 flex-1 max-h-screen overflow-y-auto">
          {children}
        </main>
      </section>
    </AuthProvider>
  );
}

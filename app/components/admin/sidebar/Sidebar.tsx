"use client";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div>
      <aside
        className="
        
         fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0"
      >
        <div className="flex items-center justify-center h-16 bg-primary">
          <span className="text-2xl font-semibold text-white">Dashboard</span>
        </div>
        <nav className="mt-8">
          <Link
            href="/add-collections"
            className="flex items-center px-6 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            add collection
          </Link>
          <Link
            href="/add-products"
            className="flex items-center px-6 py-2 text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700"
          >
            add products
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center px-6 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Dashboard
          </Link>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;

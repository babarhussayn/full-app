"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const Login = () => {
  const [show, setShow] = useState(false);

  interface FormValues {
    name: string;
    lname: string;
    email: string;
    password: string;
    cPassword: string;
  }

  const handleShow = () => setShow((prev) => !prev);

  const initialFormValues: FormValues = {
    name: "",
    lname: "",
    email: "",
    password: "",
    cPassword: "",
  };
  const [values, setValues] = useState<FormValues>(initialFormValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values, "submitted values");
    // Optional: Add validation here
    setValues(initialFormValues);
  };

  const commonInputClasses =
    "bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center px-6 py-8">
        <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 sm:p-8">
            <h1 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl dark:text-white">
              {show ? "Log in to your account" : "Create a new account"}
            </h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {!show && (
                <div className="flex gap-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      First Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      required
                      className={commonInputClasses}
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lname"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Last Name
                    </label>
                    <input
                      id="lname"
                      type="text"
                      name="lname"
                      value={values.lname}
                      onChange={handleChange}
                      required
                      className={commonInputClasses}
                      placeholder="Last Name"
                    />
                  </div>
                </div>
              )}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  required
                  className={commonInputClasses}
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  required
                  className={commonInputClasses}
                  placeholder="••••••••"
                />
              </div>
              {!show && (
                <div>
                  <label
                    htmlFor="cPassword"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm Password
                  </label>
                  <input
                    id="cPassword"
                    type="password"
                    name="cPassword"
                    value={values.cPassword}
                    onChange={handleChange}
                    required
                    className={commonInputClasses}
                    placeholder="••••••••"
                  />
                </div>
              )}
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                {show ? "Log in" : "Sign up"}
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                {show ? "Don't have an account?" : "Already have an account?"}{" "}
                <Button
                  variant="link"
                  onClick={handleShow}
                  className="text-primary-600 hover:underline dark:text-primary-500"
                >
                  {show ? "Sign up" : "Log in"}
                </Button>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;

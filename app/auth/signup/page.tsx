"use client";
// import { Button } from "@/components/ui/button";
import { postData } from "@/constants/service";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

const Signup = () => {
  const { toast } = useToast();
  const router = useRouter();
  const tokenCreated = useSelector((state: any) => state.user.token); //+

  interface FormValues {
    name: string;
    lname: string;
    email: string;
    password: string;
    cPassword: string;
  }

  // const handleShow = () => setShow((prev) => !prev);

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

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    console.log(values, "submitted values");

    // setValues(initialFormValues);

    const response: { status: boolean; message: string } = await postData(
      "/user/signin",
      initialFormValues,
      tokenCreated
    );

    console.log(response);

    if (response.status) {
      toast({
        title: response.message,
      });
      router.push("/");
    } else {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    }
  };

  const commonInputClasses =
    "bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center px-6 py-8">
        <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 sm:p-8">
            <h1 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl dark:text-white">
              {/* {show ? "Log in to your account" : "Create a new account"} */}
            </h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
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
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  required
                  className={commonInputClasses}
                  placeholder="••••••••"
                />
              </div>

              <div>
                <label
                  htmlFor="cPassword"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="cPassword"
                  value={values.cPassword}
                  onChange={handleChange}
                  required
                  className={commonInputClasses}
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign up
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400"></p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;

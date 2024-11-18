import React from "react";

const Searchbar = () => {
  return (
    <div>
      <form className="md:max-w-md md:mx-auto">
        <div className="relative md:w-full">
          <input
            type="search"
            id="location-search"
            className="p-2 w-full border rounded-full outline-none"
            placeholder="Search "
            required
          />
          <button
            type="submit"
            className="absolute top-0 end-0  h-full p-4 rounded-full text-sm font-medium text-white bg-[#88c8bc]"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Searchbar;

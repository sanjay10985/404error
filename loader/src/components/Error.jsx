import React from "react";
import { FcOpenedFolder } from "react-icons/fc";
import { FcFile } from "react-icons/fc";

const Error = () => {
  return (
    <section className="flex bg-gray-800 relative">
      <div className="text-white">
        <h1 className="text-9xl font-raleway font-semibold ">404</h1>
        <p className="text-lg mt-8">
          Error: Page not found.The requested url was not found on this server
        </p>
        <div className="mt-8">
          <button className="px-12 py-3 bg-primary-300 text-black font-semibold mr-8 hover:bg-transparent hover:text-white border-2 border-primary-500 hover:border-primary-200 transition">
            Get back
          </button>
          <button className="px-12 py-3 border-2 border-primary-200 font-semibold">
            Reload
          </button>
        </div>
      </div>
      <FcOpenedFolder size={500} className="z-10" />
      {/* <FcFile className="absolute right-0 z-0" size={300} /> */}
      <div className="w-16 h-16 border-4 border-b-0  rounded-full  border-primary-500  animate-spin absolute right-10 top-10"></div>
    </section>
  );
};

export default Error;

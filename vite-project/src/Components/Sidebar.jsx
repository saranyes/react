import React from "react";
import { FaPlus } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="bg-[#121212] rounded-2xl h-220 w-100  text-amber-50 font-semibold gap-5 ">
      <div className="flex items-center justify-between p-4 pr-8 pl-8 text-2xl">
        <h1 className="">Your Library</h1>
        <label>
          <FaPlus />
        </label>
      </div>
      <div className="p-2  flex flex-col gap-5">
        <div className=" border-2 p-3 flex flex-col gap-2  ">
          <p className="">Create your first Playlist</p>
          <p>Its easy, we will help you </p>
          <button className="bg-amber-50 text-black p-3 font-bold ">
            Create Playlist
          </button>
        </div>
        <div className="relative border-2 p-3 flex flex-col gap-2 ">
          <p>Lets find some podcast to follow</p>
          <p>We will keep you updated on new episodes </p>
          <button className="bg-amber-50 text-black p-3 font-bold">
            Browse podcasts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

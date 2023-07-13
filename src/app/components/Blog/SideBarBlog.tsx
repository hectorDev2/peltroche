import { formatFakeBlog } from "@/store";
import React from "react";
import RecentBlog from "./Recent-blog";

export const SideBarBlog = () => {
  return (
    <div>
      {/* form */}
      <form className="flex">
        <input
          className="border-solid border-[1px] text-[#444] text-[16px] font-medium h-[60px] py-[5px] px-[20px] w-full rounded-tl-xl rounded-bl-xl outline-none"
          type="search"
          placeholder="Search..."
        ></input>
        <button type="submit">
          <i className="fa-solid fa-magnifying-glass bg-[#ff0336] text-white text-[23px] h-[60px] w-[60px] rounded-br-xl rounded-tr-xl pt-[18px]"></i>
        </button>
      </form>

      {/* categories */}
      <div className="flex flex-col bg-[#f8f8f8] my-[35px] p-[30px]">
        <p className="text-[18px] text-black font-bold mb-5">Categories</p>
        <span className="w-[40px] h-[3.5px] bg-[#ff0336]"></span>
        <ul className="text-[16px] text-[#7e7e7e] font-medium mt-10">
          <li className="cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#ff0336] ease-in duration-200">
            <p>
              <i className="text-[13px]  fa-solid fa-chevron-right"></i>
              &nbsp; Body Building
            </p>
            <span>(4)</span>
          </li>

          <li className="cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#ff0336] ease-in duration-200">
            <p>
              <i className="text-[13px]  fa-solid fa-chevron-right"></i>
              &nbsp; Boxing
            </p>
            <span>(4)</span>
          </li>

          <li className="cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#ff0336] ease-in duration-200">
            <p>
              <i className="text-[13px]  fa-solid fa-chevron-right"></i>
              &nbsp; Crossfit
            </p>
            <span>(4)</span>
          </li>

          <li className="cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#ff0336] ease-in duration-200">
            <p>
              <i className="text-[13px]  fa-solid fa-chevron-right"></i>
              &nbsp; Fitness
            </p>
            <span>(4)</span>
          </li>

          <li className="flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#ff0336] ease-in duration-200">
            <p>
              <i className="text-[13px] fa-solid fa-chevron-right"></i>
              &nbsp; Meditation
            </p>
            <span>(4)</span>
          </li>

          <li className="cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#ff0336] ease-in duration-200">
            <p>
              <i className="text-[13px]  fa-solid fa-chevron-right"></i>
              &nbsp; Yoga
            </p>
            <span>(4)</span>
          </li>
        </ul>
      </div>
      {/* recent posts */}
      <div className="flex flex-col bg-[#f8f8f8] my-[35px] p-[30px]">
        <p className="text-[18px] text-black font-bold mb-5">Recent Posts</p>
        <span className="w-[40px] h-[3.5px] bg-[#ff0336] mb-7"></span>
        <div className="flex flex-col gap-7">
          {/*  */}
          {formatFakeBlog.map((blog) => (
            <RecentBlog blog={blog} />
          ))}
        </div>
      </div>
      {/* popular tags */}
      <div className="flex flex-col bg-[#f8f8f8] my-[35px] p-[30px]">
        <p className="text-[18px] text-black font-bold mb-5">Popular Tags</p>
        <span className="w-[40px] h-[3.5px] bg-[#ff0336] mb-7"></span>
        <div className="flex gap-3 text-[16px] text-[#646464] font-medium flex-wrap">
          <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
            #Crossfit
          </p>
          <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
            #Fitness
          </p>
          <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
            #Gym
          </p>
          <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
            #Meditation
          </p>
          <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
            #Running
          </p>
          <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
            #Workout
          </p>
          <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
            #Yoga
          </p>
          <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
            #Boxing
          </p>
        </div>
      </div>
      {/* banner */}
      <div className="blog-banner w-full h-[56rem] relative">
        <p className="absolute text-[34px] font-bold uppercase top-16 left-10 z-[2]">
          gymat
        </p>
        <span className="banner-shape top-14 left-0 z-[1] bg-white absolute w-[18rem] h-[60px]"></span>
        <div className="text-white flex flex-col absolute top-[10rem] left-10">
          <p className="text-[64px] font-bold">34%</p>
          <p className="text-[20px] font-bold -mt-[10px]">Flat Discount</p>
        </div>
      </div>
    </div>
  );
};

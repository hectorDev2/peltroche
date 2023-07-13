import React from "react";
import Image from "next/image";
import { BlogBoxProps } from "../BlogBox/BlogBox";

const RecentBlog = ({ blog }: BlogBoxProps) => {
  const { image, title, date } = blog;
  return (
    <div className="flex gap-8">
      <Image src={image} alt="recent_img" className="w-[10rem]" />
      <div className="flex flex-col gap-4 justify-center">
        <p className="text-[14px] text-[#646464] font-medium">{date}</p>
        <p className="text-[16px] text-black hover:text-[#ff0336] ease-in duration-200 cursor-pointer font-bold">
          {title}
        </p>
      </div>
    </div>
  );
};

export default RecentBlog;

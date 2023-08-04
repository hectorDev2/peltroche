import React from "react";
import "./style.css";
import Image from "next/image";
import TitleRed from "../../public/images/who-we-are/title-bg.svg";

const TitlePeltroche = ({
  title = "nuestros trainners",
}: {
  title: string;
}) => {
  return (
    <>
      <p className="text-white relative z-10 text-[15px] uppercase font-bold mb-10">
        {title}
      </p>
      <Image
        src={TitleRed}
        alt="text_bg"
        className="w-[25rem] absolute left-[10px] -top-[10px]"
      />
    </>
  );
};

export default TitlePeltroche;

import Link from "next/link";
import React from "react";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";
import { BsTiktok } from "react-icons/bs";

export const NetWorks = () => {
  return (
    <div className="flex gap-7 text-[18px] text-[#646464] min540:justify-center">
      <Link
        target="_blank"
        href="https://www.instagram.com/peltroche_gym_lacultura/"
      >
        <AiOutlineInstagram />
      </Link>
      <Link
        target="_blank"
        href="https://www.facebook.com/Peltrochegymfitnes.lacultura"
      >
        <AiOutlineFacebook />
      </Link>
      <Link target="_blank" href="https://www.tiktok.com/tag/peltroche">
        <BsTiktok />
      </Link>
    </div>
  );
};

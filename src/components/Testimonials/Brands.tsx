import React from "react";

import Logo1 from "../../../public/images/testimonials/logo1.png";
import Logo2 from "../../../public/images/testimonials/logo2.png";
import Logo3 from "../../../public/images/testimonials/logo3.png";
import Logo4 from "../../../public/images/testimonials/logo4.png";
import Logo5 from "../../../public/images/testimonials/logo5.png";
import Image from "next/image";

export const Brands = () => {
  return (
    <div
      className="flex gap-5 justify-center mt-32 border-b border-solid border-[#64646438] pb-28 flex-wrap
        "
    >
      <Image
        src={Logo1}
        alt="logo"
        className="scale-[.8] hover:invert"
        style={{ transition: "all 0.3s" }}
      />
      <Image
        src={Logo2}
        alt="logo"
        className=" scale-[.8] hover:invert"
        style={{ transition: "all 0.3s" }}
      />
      <Image
        src={Logo3}
        alt="logo"
        className=" scale-[.8] hover:invert"
        style={{ transition: "all 0.3s" }}
      />
      <Image
        src={Logo4}
        alt="logo"
        className=" scale-[.8] hover:invert"
        style={{ transition: "all 0.3s" }}
      />
      <Image
        src={Logo5}
        alt="logo"
        className=" scale-[.8] hover:invert"
        style={{ transition: "all 0.3s" }}
      />
    </div>
  );
};

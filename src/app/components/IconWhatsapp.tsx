import Image from "next/image";
import Link from "next/link";
import React from "react";
import logoWhatsapp from "../../../public/whatsapp-icon.png";

const IconWhatsapp = () => {
  return (
    <Link href={"https://wa.me/943838346"} target="_blank">
      <Image
        className="icon-whatsapp"
        width={75}
        height={75}
        src={logoWhatsapp}
        alt={""}
      />
    </Link>
  );
};

export default IconWhatsapp;

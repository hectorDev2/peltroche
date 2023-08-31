import React from "react";

export const HeroCommon = ({ title }: { title: string }) => {
  return (
    <div className="login-banner relative justify-center flex">
      <h1 className="text-white text-center absolute bottom-[25px] text-[3rem] font-bold">
        {title}
      </h1>
    </div>
  );
};

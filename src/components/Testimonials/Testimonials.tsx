import TestimonialImg from "../../../public/images/testimonials/testimonial-new.jpg";
import TitleBg from "../../../public/images/pricing/titlebg.svg";
import Logo1 from "../../../public/images/testimonials/logo1.png";
import Logo2 from "../../../public/images/testimonials/logo2.png";
import Logo3 from "../../../public/images/testimonials/logo3.png";
import Logo4 from "../../../public/images/testimonials/logo4.png";
import Logo5 from "../../../public/images/testimonials/logo5.png";

import Image from "next/image";
import TestimonialBoxes from "./TestimonialBoxes";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

function Testimonials() {
  return (
    <>
      {/* testimonials div */}
      <section className="my-[10rem] mx-auto">
        <div className="container page-padding">
          {/* title */}
          <div className="text-center relative items-center w-full flex flex-col">
            <p className="text-white relative z-10 text-[16px] uppercase font-bold -mb-[10.5rem]">
              Testimonios
            </p>
            <Image
              alt="title_img"
              src={TitleBg}
              className="w-[21rem] absolute -top-[6px] "
            />
          </div>

          {/* testimonials wrapper */}
          <div className="border-[#efefef] h-[100%] md:mt-[17rem] mt-[9rem] bg-white border-solid border-[9px] p-[10px]  md:p-[30px]  sm:h-[440px]">
            <div className="bg-black overflow-x-clip w-full h-[33rem] relative">
              {/* img */}
              <Image
                alt="girl_img"
                src={TestimonialImg}
                className="absolute bottom-0 -left-10 z-20 h-[46rem] rounded-tr-[200px] md:block hidden"
              />

              {/* all text-boxes */}
              <div className="flex">
                {/* text box */}
                <TestimonialBoxes />
              </div>

              {/* buttons */}
              <div className="flex gap-3 absolute bottom-[25px] right-[35px] z-20 sm:-bottom-[52px] sm:right-[17px]">
                <button
                  title="left"
                  style={{ transition: "all 0.2s" }}
                  className="py-3 px-7 bg-white text-black text-2xl hover:bg-[#FF0336] hover:text-white"
                >
                  <AiOutlineArrowLeft size={10} />
                </button>
                <button
                  title="right"
                  style={{ transition: "all 0.2s" }}
                  className="py-3 px-7 bg-white text-black text-2xl hover:bg-[#FF0336] hover:text-white"
                >
                  <AiOutlineArrowRight size={10} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* brand logos */}
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
      </section>
    </>
  );
}

export default Testimonials;

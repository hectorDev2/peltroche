"use client";

import TestimonialImg from "../../../public/images/testimonials/testimonial-new.jpg";
import TitleBg from "../../../public/images/pricing/titlebg.svg";

import Image from "next/image";
import TestimonialBoxes from "./TestimonialBoxes";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import {
  StoreTestimonials,
  useStoreTestimonials,
} from "@/store/storeTestimonial";
import { Brands } from "./Brands";

function Testimonials() {
  const nextTestimonial = useStoreTestimonials(
    (state: StoreTestimonials) => state.nextTestimonial
  );
  const previewTestimonial = useStoreTestimonials(
    (state: StoreTestimonials) => state.previewTestimonial
  );
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
                className="absolute bottom-0 -left-10 z-2 h-[46rem] rounded-tr-[200px] md:block hidden"
              />

              {/* all text-boxes */}
              <div className="flex">
                {/* text box */}
                <TestimonialBoxes />
              </div>

              {/* buttons */}
              <div className="flex gap-3 absolute bottom-[25px] right-[35px] z-2 sm:-bottom-[52px] sm:right-[17px]">
                <button
                  title="left"
                  style={{ transition: "all 0.2s" }}
                  className="py-3 px-7 bg-white text-black text-2xl hover:bg-[#FF0336] hover:text-white z-2"
                  onClick={() => previewTestimonial()}
                >
                  <AiOutlineArrowLeft size={10} />
                </button>
                <button
                  title="right"
                  style={{ transition: "all 0.2s" }}
                  onClick={() => nextTestimonial()}
                  className="py-3 px-7 bg-white text-black text-2xl hover:bg-[#FF0336] hover:text-white z-2"
                >
                  <AiOutlineArrowRight size={10} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <Brands />
      </section>
    </>
  );
}

export default Testimonials;

import Image from "next/image";
import Quotes from "../../../public/images/testimonials/quotes.png";

import BoxShape from "../../../public/images/testimonials/testimonial-shape.svg";
interface TestimonialBoxProps {
  testimonial: {
    text: string;
    name: string;
    job: string;
  };
}

function TestimonialBox({ testimonial }: TestimonialBoxProps) {
  const { text, name, job } = testimonial;

  return (
    <div className="absolute text-sm z-3 leading-tight flex flex-col bg-black  top-0 right-0 md:w-[60%] w-full  h-[100%]  px-[10px] sm:py-[24px] sm:px-[30px] sm:h-[40rem] md:h-[100%]">
      <Image alt="quote_img" src={Quotes} className="w-[6rem] absolute top-0" />
      <p className=" text-[16px] italic text-[#dedede] py-5 z-10">{text}</p>
      <h3 className="text-white text-[21px] mb-1 font-bold">{name}</h3>
      <p className="text-[14px] font-medium text-[#dedede]">{job}</p>
      <Image
        alt="box_img"
        src={BoxShape}
        className="w-[17.5rem] absolute bottom-0 right-[13.5rem] invert opacity-40"
      />
    </div>
  );
}

export default TestimonialBox;

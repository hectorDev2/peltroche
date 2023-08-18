import Image from "next/image";
import Quotes from "../../../public/images/testimonials/quotes.png";

import BoxShape from "../../../public/images/testimonials/testimonial-shape.svg";

function TestimonialBox({
  text,
  name,
  job,
}: {
  text: string;
  job: string;
  name: string;
}) {
  return (
    <div className="absolute flex flex-col bg-black  top-0 right-0 md:w-[60%] w-full md:h-full py-[47px] px-[20px] sm:py-[24px] sm:px-[30px] sm:h-[40rem] h-[50rem]">
      <Image alt="quote_img" src={Quotes} className="w-[6rem]" />
      <p className=" text-[16px] italic text-[#dedede] my-6 z-10">{text}</p>
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

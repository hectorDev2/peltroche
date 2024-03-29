import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ButtonSubscribe } from "./ButtonSuscribe";

function PricingBox({
  img,
  price,
  title = "Beginners",
  urlToPay = "https://buy.stripe.com/test_8wM16uefW10b8MM8wx",
}: {
  img: StaticImageData;
  price: number | string;
  title: string;
  urlToPay: string;
}) {
  return (
    <>
      <div className="flex flex-col md:w-[30%]  bg-white shadow-xl relative w-[100%]">
        <div
          style={{ transition: "all 0.3s" }}
          className="relative grayscale hover:grayscale-0"
        >
          <Image src={img} alt="pricing_img" className="w-full h-full" />
          <div className="absolute bg-white text-[20px] font-bold w-[25rem] text-center py-6 text-[#ff0336] -bottom-[18px] left-0 right-0 mx-auto">
            {title}
          </div>
        </div>
        <div className="flex flex-col items-center pt-[20px] pb-[50px]">
          {/* price */}
          <p className="text-center text-[55px] font-bold relative py-[10px] ">
            <span className=" text-[30px] text-[#6d6d6d] absolute font-normal top-8 -left-[4rem]">
              S./
            </span>
            {price}
            <span className="text-[22px] text-[#6d6d6d] absolute font-normal bottom-[25px] -right-[6rem]"></span>
          </p>
          {/* text */}
          <div className="flex flex-col text-[16px] font-medium text-center gap-8 text-[#646464] ">
            <p>Free Hand</p>
            <p>Gym Fitness</p>
            <p>Weight Loss</p>
            <p>Personal Trainer</p>
            <p>Cycling</p>
          </div>
          <Link className="mt-5" target="_blank" href={urlToPay} passHref>
            <ButtonSubscribe />
          </Link>
        </div>
      </div>
    </>
  );
}

export default PricingBox;

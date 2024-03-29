import TitleRed from "../../../public/images/who-we-are/title-bg.svg";
import BgText from "../../../public/images/pricing/bg-text.png";
import BgDumbell from "../../../public/images/pricing/bg-dumbell.png";

import Img1 from "../../../public/images/pricing/img1.jpg";
import Img2 from "../../../public/images/pricing/img2.jpg";
import Img3 from "../../../public/images/pricing/img3.jpg";
import Image from "next/image";
import PricingBox from "./PricingBox";

function Pricing() {
  return (
    <>
      <section id="pricing" className="pricing-section relative">
        <div className="container page-padding py-[12rem] ">
          <Image src={BgText} className="left-0 absolute" alt="bg_img" />
          {/* title div -- */}
          <div className="flex flex-col text-center relative items-center">
            <p className="text-white relative z-10 text-[15px] uppercase font-bold mb-8">
              Precios
            </p>
            <Image
              src={TitleRed}
              alt="text_bg"
              className="w-[23rem] absolute -top-[10px] "
            />

            <h2 className="text-[3.4rem] font-bold mb-4">
              Plan de precios exclusivo
            </h2>
            <p className="text-[#646464] font-medium text-[15px] ">
              Planes para todos los gustos
            </p>
          </div>
          {/* pricing boxes */}
          <div className="flex  flex-wrap gap-10 mt-32 relative z-[2]  items-center ">
            <PricingBox
              urlToPay="https://buy.stripe.com/test_8wM16uefW10b8MM8wx"
              img={Img1}
              price="150"
              title="Plan mensual"
            />
            <PricingBox
              urlToPay="https://buy.stripe.com/test_3csbL80p6gZ99QQfZ0"
              img={Img2}
              price="500"
              title="Plan semestral"
            />
            <PricingBox
              urlToPay="https://buy.stripe.com/test_bIY4iG1ta24fgfe4gj"
              img={Img3}
              price="1000"
              title="Plan anual"
            />
          </div>
          <Image
            src={BgDumbell}
            alt="bg_icon"
            className="right-0 bottom-0 absolute z-[1]"
          />
        </div>
      </section>
    </>
  );
}

export default Pricing;

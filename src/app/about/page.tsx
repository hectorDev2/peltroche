import Image from "next/image";

import GirlRunning from "../../../public/images/who-we-are/girl-run.png";
import GirlRedBg from "../../../public/images/who-we-are/girl-redbg.svg";
import GirlText from "../../../public/images/who-we-are/girl-side-text.png";
import GirlWind from "../../../public/images/who-we-are/wind.png";
import TitleRed from "../../../public/images/who-we-are/title-bg.svg";
import Img3 from "../../../public/images/AboutPage/3.jpg";
import Img4 from "../../../public/images/AboutPage/4.jpg";
import Target from "../../../public/images/AboutPage/target.png";
import Mountain from "../../../public/images/AboutPage/mountain.png";
import { PageWrapper } from "../components/PageWrapper";

export default function About() {
  return (
    <>
      <div className="login-banner relative justify-center flex">
        <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
          Sobre Peltroche
        </h1>
      </div>
      <PageWrapper>
        <section className="login-section">
          <div className="container page-padding ">
            <div className="grid grid-cols-[1fr_1fr] h-[60rem] md1000:grid-cols-1">
              {/* title div -- */}
              <div className="flex flex-col !text-left relative items-right justify-center md1000:items-center md1000:!text-center">
                <p className="text-white relative z-10 text-[15px] uppercase font-bold mb-8 ml-20 md1000:ml-3 ">
                  quienes somos
                </p>
                <Image
                  src={TitleRed}
                  alt="text_bg"
                  className="w-[21rem] absolute top-[120px] min450:top-[84px] min375:top-[68px]"
                />

                <h2 className="text-[3.6rem] max-w-[53rem] font-bold mb-4">
                  Nosotros te brindaremos el mejor equipo
                </h2>
                <p className="text-[#646464] font-medium text-[15px] max-w-[50rem] ">
                  At Gymate, we are dedicated to helping you achieve the body of
                  your dreams. Our expert trainers and nutritionists will work
                  with you to create a personalized fitness and nutrition plan
                  that helps you reach your specific goals.
                </p>
                {/* <MainButton
                color={`!text-white`}
                bg={`bg-[#ff0336]`}
                goTo="/contact"
                text="contact us"
                arrowColor={`!text-white`}
                cN="pricing-cta blog-cta"
              /> */}
              </div>
              {/*  */}
              <div className="relative w-[80%] -top-[90px] left-[40px] md1000:hidden">
                <Image
                  src={GirlRunning}
                  alt="girl_running"
                  className="girl-running"
                />
                <Image src={GirlRedBg} alt="bg-red" className="girl-bg" />
                <Image src={GirlText} alt="bg-text" className="girl-text" />
                <Image src={GirlWind} alt="bg-wind" className="girl-wind" />
              </div>
            </div>
            {/*  */}
            <div className="mt-[10rem]">
              <div className="grid grid-cols-2 grid-rows-2 w-full min620:grid-cols-1">
                <div className="w-full bg-white h-[43rem] flex flex-col justify-center items-center text-center px-[100px] min800:px-[10px]">
                  <Image src={Target} alt="target_img" className="w-[9rem]" />
                  <h2 className="text-[36px] font-bold mt-3">Our History</h2>
                  <p className="text-[16px] font-medium text-[#646464] mt-5">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit mollit
                    Exercitation veniam consequat.
                  </p>
                </div>
                {/*  */}
                <div className="w-full bg-white h-[43rem]">
                  <Image
                    src={Img3}
                    alt="about_img"
                    className="w-full h-full object-cover bg-center"
                  />
                </div>
                {/*  */}
                <div className="w-full bg-white h-[43rem]">
                  <Image
                    src={Img4}
                    alt="about_img"
                    className="w-full h-full object-cover bg-center"
                  />
                </div>
                {/*  */}
                <div className="w-full bg-white h-[43rem] flex flex-col justify-center items-center text-center px-[100px] min800:px-[10px]">
                  <Image src={Mountain} alt="target_img" className="w-[9rem]" />
                  <h2 className="text-[36px] font-bold mt-3">Nuestras metas</h2>
                  <p className="text-[16px] font-medium text-[#646464] mt-5">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit mollit
                    Exercitation veniam consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageWrapper>
    </>
  );
}

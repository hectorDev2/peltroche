"use client";
import TitleRed from "../../../public/images/who-we-are/title-bg.svg";
import GirlRunning from "../../../public/images/who-we-are/girl-run.png";
import GirlRedBg from "../../../public/images/who-we-are/girl-redbg.svg";
import GirlText from "../../../public/images/who-we-are/girl-side-text.png";
import GirlWind from "../../../public/images/who-we-are/wind.png";

// import MainButton from "../MainButton";
import Image from "next/image";

function About() {
  return (
    <>
      <section className="flex flex-col justify-between gap-2 about-section pb-[20rem]">
        <div className="container page-padding">
          {/* text-img div */}
          <div className="grid grid-cols-[1fr_1fr] h-[60rem] md1000:grid-cols-1">
            {/* title div -- */}
            <div className="flex flex-col !text-left relative items-right justify-center md1000:items-center md1000:!text-center">
              <h2 className="text-[#ff0366] relative z-10 text-[15px] uppercase font-bold mb-8 ml-20 md1000:ml-3 ">
                quienes somos
              </h2>

              <h2 className="text-[3.6rem] max-w-[53rem] font-bold mb-4">
                Nosotros te brindaremos el mejor equipo
              </h2>
              <p className="text-[#646464] font-medium text-[15px] max-w-[50rem] ">
                At Gymate, we are dedicated to helping you achieve the body of
                your dreams. Our expert trainers and nutritionists will work
                with you to create a personalized fitness and nutrition plan
                that helps you reach your specific goals.
              </p>
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
        </div>
      </section>
    </>
  );
}

export default About;

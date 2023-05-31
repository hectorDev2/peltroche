// import AboutCarts from "./AboutCarts";
import TitleRed from "../../../../public/images/who-we-are/title-bg.svg";
import TrainersIcon from "../../../../public/images/who-we-are/weightlifter.png";
import ModernIcon from "../../../../public/images/who-we-are/equpments.png";
import LiftIcon from "../../../../public/images/who-we-are/gym.png";
import GirlRunning from "../../../../public/images/who-we-are/girl-run.png";
import GirlRedBg from "../../../../public/images/who-we-are/girl-redbg.svg";
import GirlText from "../../../../public/images/who-we-are/girl-side-text.png";
import GirlWind from "../../../../public/images/who-we-are/wind.png";

// import MainButton from "../MainButton";
import Image from "next/image";

function About() {
  return (
    <>
      <section className="flex flex-col justify-between gap-2 about-section pb-[20rem]">
        <div className="container page-padding">
          {/* about cards */}
          <div className="about-cards flex gap-10 -mt-[8.5rem] md1000:flex-col">
            {/* <AboutCarts /> */}
          </div>

          {/* text-img div */}
          <div
            id="about"
            className=" grid grid-cols-[50fr,50fr] gap-[3rem] md1000:grid-cols-1"
          >
            {/* about text */}
            <div className="mt-[10.5rem] relative md1000:items-center md1000:flex md1000:flex-col md1000:text-center md1000:w-[full]">
              <p className="text-white font-semibold text-[15px] relative uppercase z-10 pl-16 md1000:pl-0 mb-12">
                tu poder
              </p>
              <Image
                src={TitleRed}
                alt="text_bg"
                className="w-[31%] absolute -top-[6px] md1000:w-[22rem]"
              />
              <h2 className="text-[35px] font-bold leading-tight mb-6 w-[60rem] min800:w-[100%]">
                Llevar tu salud y su cuerpo al siguiente nivel
              </h2>
              <p className="text-[16px] text-[#646464] font-medium ">
                Lleve tu salud y su cuerpo al siguiente nivel con nuestro
                programa integral diseñado para ayudarlo a alcanzar sus
                objetivos de acondicionamiento físico.
              </p>
              {/* about text icons */}
              <div className="flex mt-12 mb-[7rem] gap-[2px] min620:flex-col ">
                <div className="flex flex-col  items-center text-center py-10 px-14 pl-7 min620:px-0">
                  <Image
                    src={TrainersIcon}
                    alt="icon_img"
                    className={`w-[5.4rem] mb-6 h-auto`}
                  />
                  <h3 className="uppercase font-bold text-[20px] leading-snug">
                    professional <br /> trainers
                  </h3>
                </div>

                <div className="flex flex-col items-center text-center border-solid border-l border-[rgb(0,0,0,0.2)] border-r py-10 px-14 min620:px-0 min620:border-none">
                  <Image
                    src={ModernIcon}
                    alt="icon_img"
                    className={`w-[5.4rem] mb-6 h-auto`}
                  />
                  <h3 className="uppercase font-bold text-[20px] leading-snug">
                    modernas <br /> maquinas
                  </h3>
                </div>

                <div className="flex flex-col items-center text-center py-10 px-14 pr-2 min620:px-0">
                  <Image
                    src={LiftIcon}
                    alt="icon_img"
                    className={`w-[5.4rem] mb-6 h-auto`}
                  />
                  <h3 className="uppercase font-bold text-[20px] leading-snug">
                    mantenimiento <br /> de equipos
                  </h3>
                </div>
              </div>
              {/* cta button */}
              {/* <MainButton
                color={`!text-white`}
                bg={`bg-[#3f3f3f]`}
                cN="about-cta"
                arrowColor={`!text-white`}
                hover={`hover:bg-[#FF0336]`}
                text="take a tour"
                goTo="/classes"
              /> */}
            </div>
            {/* img side */}
            <div className="relative md1000:hidden">
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

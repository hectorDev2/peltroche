"use client";
import TitleRed from "../../../public/images/who-we-are/title-bg.svg";
import TrainersIcon from "../../../public/images/who-we-are/weightlifter.png";
import ModernIcon from "../../../public/images/who-we-are/equpments.png";
import LiftIcon from "../../../public/images/who-we-are/gym.png";
import GirlRunning from "../../../public/images/who-we-are/girl-run.png";
import GirlRedBg from "../../../public/images/who-we-are/girl-redbg.svg";
import GirlText from "../../../public/images/who-we-are/girl-side-text.png";
import GirlWind from "../../../public/images/who-we-are/wind.png";

// import MainButton from "../MainButton";
import Image from "next/image";
import { motion } from "framer-motion";
import TitlePeltroche from "@/shared/TitlePeltroche";

function About() {
  return (
    <>
      <section className="flex flex-col justify-between gap-2 about-section pb-[20rem]">
        <div className="container page-padding">
          {/* text-img div */}
          <div
            id="about"
            className=" grid grid-cols-[50fr,50fr] gap-[3rem] md1000:grid-cols-1"
          >
            <TitlePeltroche title={"Sobre nosotros"} />
            <div className="mt-[10.5rem] relative md1000:items-center md1000:flex md1000:flex-col md1000:text-center md1000:w-[full]">
              <h2 className="text-[35px] font-bold leading-tight mb-6 w-[60rem] min800:w-[100%]">
                Llevar tu salud y tu cuerpo al siguiente nivel
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

                <div className="w-[280px] flex flex-col items-center text-center py-10 px-14 pr-2 min620:px-0">
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
            </div>
            {/* img side */}
            <motion.div className="grid mx-auto relative mt-[10em] w-[300px]  md:mt-[20em]  lg:mt-0">
              <Image
                src={GirlRunning}
                alt="girl_running"
                className="girl-running  object-cover "
              />
              <Image src={GirlRedBg} alt="bg-red" className="girl-bg" />
              <Image src={GirlText} alt="bg-text" className="girl-text" />
              <Image src={GirlWind} alt="bg-wind" className="girl-wind" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

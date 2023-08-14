"use client";
import GirlRunning from "../../../public/images/who-we-are/girl-run.png";
import GirlRedBg from "../../../public/images/who-we-are/girl-redbg.svg";
import GirlText from "../../../public/images/who-we-are/girl-side-text.png";
import GirlWind from "../../../public/images/who-we-are/wind.png";
import GiftCalendar from "../../../public/gifts/calendary.gif";

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
              <h2 className="text-[#FF1803] relative z-10 text-[15px] uppercase font-bold mt-10 ml-20 md1000:ml-3 ">
                quienes somos
              </h2>

              <h2 className="text-[3.6rem] max-w-[53rem] font-bold mb-4">
                Nosotros te brindaremos el mejor equipo
              </h2>
              <p className="text-[#646464] font-medium text-[15px] max-w-[50rem] ">
                En Peltroche gym te ayudamos a cumplir tus metas, con un
                asesoramiento,disciplina y el ambiente optimo para desarrollar
                tu mejor version!
              </p>
              <Image src={GiftCalendar} alt={"calendare gym"} />
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

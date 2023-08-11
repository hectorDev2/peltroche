import { PageWrapper } from "../../components/PageWrapper";
import { NetWorks } from "@/shared/NetWorks";
import { HeroCommon } from "@/components/HeroCommon";
import { FormWork } from "@/components/work/Form";
import "../globals.css";
export default function WorkWithUs() {
  return (
    <>
      <HeroCommon title="Trabaja con nosotros" />
      <PageWrapper>
        {/* contact */}
        <div className="relative bg-white py-[12rem] page-padding grid grid-cols-2  container gap-10 items-center md1000:grid-cols-1 ">
          {/* first col */}

          <FormWork />
          {/* second col ---*/}

          <div className="md1000:w-[60%] md1000:flex md1000:flex-col md1000:mx-auto min800:w-[90%] min620:w-full">
            <h2 className="text-black text-[36px] font-bold leading-[1.2]">
              Unete al equipo Peltroche
            </h2>
            <p className="text-[16px] w-[95%] text-[#646464] font-medium my-[40px]">
              ¡Trabaja con nosotros! Tenemos una puerta abierta para los nuevos
              talentos, ¡únete y haz que las cosas buenas sigan sucediendo! Nos
              encontramos en una búsqueda constante de personas talentosas. con
              un ambiente de trabajo agradable y cooperativo así que si quieres
              mantenerte enterado de nuestras convocatorias, síguenos en
              Facebook, y recuerda que nuestro proceso de reclutamiento es
              formal, gratuito y se realiza a través de nuestros canales
              oficiales en facebook, instagram y Linkedin.
            </p>
            <div className="grid grid-cols-2 grid-rows-2 gap-y-20 min620:grid-cols-1 min620:mx-auto">
              <div className="flex flex-col relative">
                <h3 className="text-[2rem] font-bold mb-10">
                  Peltroche Gym & Fitness, La cultura
                </h3>
                <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[25px]"></span>
                <p className="text-[15px] font-medium text-[#646464]">
                  85 Briston Mint Street,
                  <br /> London, E1 8LG, USA
                </p>
              </div>
              <div className="flex flex-col relative">
                <h3 className="text-[2rem] font-bold mb-10">
                  Peltroche Gym & Fitness Larapa
                </h3>
                <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[25px]"></span>
                <p className="text-[15px] font-medium text-[#646464]">
                  85 Briston Mint Street,
                  <br /> London, E1 8LG, USA
                </p>
              </div>

              {/*  */}
              <div className="flex flex-col relative">
                <h3 className="text-[2rem] font-bold mb-10">Horario</h3>
                <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[33px]"></span>
                <div className="text-[15px] font-medium text-[#646464]">
                  <p>lunes a viernes: 7:30 am — 9:00 pm</p>
                  <p>sabados: 7:30 am — 1:00 pm</p>
                </div>
              </div>
              {/*  */}
              <div className="flex flex-col relative">
                <h3 className="text-[2rem] font-bold mb-10">Information</h3>
                <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[33px]"></span>
                <div className="text-[15px] font-medium text-[#646464]">
                  <p>+800-123-4567</p>
                  <p>&nbsp; admin@peltroche.com</p>
                </div>
              </div>
              {/*  */}
              <div className="flex flex-col relative">
                <h3 className="text-[2rem] font-bold mb-10">Siguenos</h3>
                <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[33px]"></span>
                <NetWorks />
              </div>
            </div>
          </div>
        </div>

        {/* map */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.1524330251705!2d-71.95301812491377!3d-13.526235286842518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916e7fd93e374537%3A0xd5c6d64b25419a7f!2sPeltroche%20Gym%20%26%20Fitness!5e0!3m2!1ses-419!2spe!4v1685567571498!5m2!1ses-419!2spe"
          allowFullScreen={true}
          loading="lazy"
          title="map"
          style={{ width: "100%", height: "45rem", border: "0px" }}
        ></iframe>
      </PageWrapper>
    </>
  );
}

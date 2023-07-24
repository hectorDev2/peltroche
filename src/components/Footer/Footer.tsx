import Image from "next/image";
import FooterLogo from "../../../public/logo-w.png";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { BsTiktok } from "react-icons/bs";
import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className="bg-white">
        <div className="container page-padding py-[10rem]">
          {/* footer div all */}
          <div className="flex justify-between  min620:flex-col min620:items-center min620:text-center min620:gap-[5rem] !text-left">
            {/* logo side */}
            <div className="flex flex-col min620:w-[280px] w-[500px] gap-8">
              <Image src={FooterLogo} alt="footer_logo" className="w-[18rem]" />
              <p className="text-[15px] font-medium text-[#646464]">
                Lleve su salud y su cuerpo al siguiente nivel con nuestro
                programa integral diseñado para ayudarlo a alcanzar sus
                objetivos de acondicionamiento físico.
              </p>
              {/* socials */}
              <div className="flex gap-7 text-[18px] text-[#646464] min540:justify-center">
                <Link
                  target="_blank"
                  href="https://www.instagram.com/peltroche_gym_lacultura/"
                >
                  <AiOutlineInstagram />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.facebook.com/Peltrochegymfitnes.lacultura"
                >
                  <AiOutlineFacebook />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.tiktok.com/tag/peltroche"
                >
                  <BsTiktok />
                </Link>
              </div>
              <p className="text-[16px] font-medium text-[#646464]">
                Politica de privacidad | © {new Date().getFullYear()} Peltroche{" "}
                <br /> Programado por{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://hector-dev-phi.vercel.app/"
                >
                  HectorDev
                </a>
              </p>
            </div>

            {/* middle div */}
            <div className="flex flex-col min620:w-[300px] gap-8 relative">
              <p className="text-[22px] font-bold footer-main">
                Nuestras clases
              </p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>

              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                FullBody
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Aerobics Classes
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Power Yoga
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Learn Machines
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Full-body Strength
              </p>
            </div>

            {/* right div */}
            <div className="flex flex-col min620:w-[300px] gap-8 relative">
              <p className="text-[22px] font-bold footer-main">
                Horas de atencion
              </p>
              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>
              <p className="text-[16px]  text-[#646464] font-bold">
                Lunes - Viernes:
              </p>
              <p className="text-[16px] text-[#646464] font-medium">
                6:00am - 21:00pm
              </p>
              <p className="text-[16px] text-[#646464] font-bold">Sabado:</p>
              <p className="text-[16px] text-[#646464] font-medium">
                7:00am - 19:00pm
              </p>
              <p className="text-[16px] text-[#646464] font-bold ">
                Sunday - Closed
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

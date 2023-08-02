"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";
import { BsTiktok } from "react-icons/bs";
import { PageWrapper } from "../../components/PageWrapper";
import emailjs from "@emailjs/browser";
import useField from "@/hooks/useField";
import Image from "next/image";
import successImg from "../../../public/images/success.png";
import { Modal } from "@/shared/Modal";
import { NetWorks } from "@/shared/NetWorks";
import { HeroCommon } from "@/components/HeroCommon";

export default function WorkWithUs() {
  const [showModal, setShowModal] = useState(false);
  const name = useField({ type: "text" });
  const email = useField({ type: "email" });
  const message = useField({ type: "email" });
  const cv = useField({ type: "file" });

  const clearForm = () => {
    name.clear();
    email.clear();
    message.clear();
    cv.clear();
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    const templateParams = {
      name: name.value,
      email: email.value,
      message: message.value,
      cv: cv.value,
    };
    e.preventDefault();
    emailjs
      .send(
        "service_e2uuxpm",
        "template_dp1s9cv",
        templateParams,
        "QjQDYIYsMKrQD4d-E"
      )
      .then(
        (response) => {
          console.log(
            "correo enviado con exito!",
            response.status,
            response.text
          );
          setShowModal(true);
          clearForm();
        },
        (err) => {
          console.log("fallado...", err);
        }
      );
  };
  console.log(showModal, "show");

  return (
    <>
      <HeroCommon title="Trabaja con nosotros" />
      <PageWrapper>
        {/* contact */}
        <div className="relative bg-white py-[12rem] page-padding grid grid-cols-2  container gap-10 items-center md1000:grid-cols-1 ">
          {/* first col */}
          {/* second col ---*/}
          <form
            className="flex flex-col pt-[30px] pr-[50px] pb-[50px] pl-[45px] bg-[#f8f8f8] relative md1000:w-[65%] md1000:flex md1000:flex-col md1000:mx-auto md1000:mt-14 min800:w-[90%] min620:w-full"
            onSubmit={handleSubmit}
          >
            <h3 className="text-[28px] font-bold mb-14">
              Dejanos tu informacion
            </h3>
            <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[77px]"></span>
            <input
              name="name"
              className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
              placeholder="nombre completo *"
              {...name}
            ></input>

            <input
              className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
              placeholder="Direccion de correo *"
              name="email"
              {...email}
            ></input>

            <label htmlFor="">sube tu cv</label>
            <input
              name="cv"
              {...cv}
              className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
            ></input>

            <textarea
              name="message"
              {...message}
              placeholder="Mensaje"
              className="w-full py-[12px] px-[20px] h-[140px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
            ></textarea>
            <button
              type="submit"
              className="text-white bg-[#ff0336] w-fit py-[15px] px-[30px] font-bold text-[14px] uppercase self-center mt-6"
            >
              Enviar
            </button>
          </form>
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
        <div
          id="modal"
          className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-red-500 bg-opacity-50 transform ${
            showModal ? "scale-100" : "scale-0"
          } transition-transform duration-300`}
        >
          <div className="bg-white w-1/2 h-1/2 p-12 grid place-content-center relative z-20">
            <button
              id="closebutton"
              onClick={() => setShowModal(false)}
              className="absolute top-5 right-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
            <h2 className="text-black text-[36px] font-bold leading-[1.2] mb-8">
              Postulacion enviada con exito!
            </h2>
            <p>
              gracias por tu postulacion nos estaremos poniendo en contacto con
              usted
            </p>
            <Image src={successImg} alt={"enviado con exito a peltroche"} />
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

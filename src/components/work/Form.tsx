"use client";
import useField from "@/hooks/useField";
import React, { useState } from "react";
import Image from "next/image";
import successImg from "../../../public/images/success.png";

import emailjs from "@emailjs/browser";

export const FormWork = () => {
  const [showModal, setShowModal] = useState(false);

  const name = useField({ type: "text" });
  const email = useField({ type: "email" });
  const message = useField({ type: "email" });
  const cv = useField({ type: "file" });

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
      .then((response) => {
        console.log(response.status, response.text);
        if (response.status === 200) {
          setShowModal(!showModal);
          clearForm();
        }
        throw new Error("Error al enviar el correo");
      })
      .finally(() => {
        setShowModal(!showModal);
      });
  };

  const clearForm = () => {
    name.clear();
    email.clear();
    message.clear();
    cv.clear();
  };

  return (
    <>
      <form
        className="flex flex-col pt-[30px] pr-[50px] pb-[50px] pl-[45px] bg-[#f8f8f8] relative w-[65%]  mx-auto mt-14 md:w-[90%] sm:w-full"
        onSubmit={handleSubmit}
      >
        <h3 className="text-[28px] font-bold mb-14">Dejanos tu informacion</h3>
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
      <div
        id="modal"
        className={` z-1 fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-red-500 bg-opacity-50 transform ${
          showModal ? "scale-100" : "scale-0"
        } transition-transform duration-300`}
      >
        <div className="bg-white w-1/2 h-1/2 p-12 grid place-content-center relative -z-1">
          <button
            id="closebutton"
            onClick={() => setShowModal(false)}
            className="absolute top-5 right-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[50px] w-[50px]"
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
          <p className="text-center">
            gracias por tu postulacion nos estaremos poniendo en contacto con
            usted
          </p>
          <Image
            className="m-auto"
            src={successImg}
            alt={"enviado con exito a peltroche"}
          />
        </div>
      </div>
    </>
  );
};

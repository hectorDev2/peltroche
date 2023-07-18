"use client";
import React, { useState } from "react";
import Image from "next/image";
import successImg from "../../public/images/success.png";

export const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
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
  );
};

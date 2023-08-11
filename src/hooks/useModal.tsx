"use client";
import { useState } from "react";

export const useModal = () => {
  const [showModal, setShowModal] = useState<Boolean>(false);

  const Modal = ({ children }: { children: any }) => {
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
          {children}
        </div>
      </div>
    );
  };

  return [Modal, showModal, setShowModal];
};

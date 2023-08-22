"use client";
import VideoImg from "../../../public/images/choose-us/main-img.png";
import TitleRed from "../../../public/images/who-we-are/title-bg.svg";
import TrainingIcon from "../../../public/images/choose-us/training.png";
import EquipmentsIcon from "../../../public/images/choose-us/bench-press.png";
import BagIcon from "../../../public/images/choose-us/gym-bag.png";
import BottleIcon from "../../../public/images/choose-us/bottle-of-water.png";
import "./style.css";

import Image from "next/image";
import useModal from "@/hooks/useModal";
import Modal from "@/shared/Modal";

function ChooseUs() {
  const { isShowing, toggle } = useModal();
  return (
    <>
      <section className="choose-section py-[12rem] ">
        <div className="container page-padding flex md:flex-row flex-col items-center gap-[7rem]">
          <div className="video-div relative md:w-[50%] w-[85%] flex justify-center">
            <Image
              src={VideoImg}
              alt="video_img"
              className="relative w-[94%] h-auto"
            />
            <button
              className="playBtn absolute  md:top-[40%] md:right-[40%] top-[40%] right-[25%]"
              onClick={() => toggle()}
            >
              <span className="IconContainer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-play-circle-fill"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />{" "}
                </svg>
              </span>
              <p className="text pl-2">Play</p>
            </button>
          </div>
          <Modal isShowing={isShowing} hide={() => toggle()}>
            <iframe
              width="1424"
              height="599"
              src="https://www.youtube.com/embed/jvgoV9hXAjU"
              title="Peltroche Gym &amp; Fitness - Sede La Cultura"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </Modal>

          <div className="relative md:w-[50%] flex flex-col items-center text-center w-[85%]">
            <p className="text-white relative z-10 text-[16px] uppercase font-bold mb-14">
              porque elegirnos?
            </p>
            <Image
              src={TitleRed}
              alt="text_bg"
              className="w-[22rem] absolute -top-[6px]  md:block hidden "
            />
            <h2 className=" text-[3.6rem] text-white font-bold leading-[1.2] md:max-w-3xl max-w-[80%]">
              ¡Podemos alcanzar tu objetivo fisico aquí!
            </h2>
            <p className="text-[16.5px] text-[#b4b4b4] mt-7 md:max-w-3xl max-w-[80%]">
              En Peltroche Gym, estamos dedicados a ayudarte a lograr el cuerpo
              de tus sueños. Nuestros entrenadores y nutricionistas expertos
              trabajarán con usted para crear un plan personalizado de
              acondicionamiento físico y nutrición que lo ayude a alcanzar sus
              objetivos específicos.
            </p>

            <div className="grid md:grid-cols-2 grid-rows-2 gap-14 max-w-[44rem] mt-14 min450:flex min450:flex-col">
              <div className="flex items-center gap-6">
                <Image
                  className="bg-[#2b2b2b] hover:bg-[#ff0336] ease-in duration-200 w-[6.5rem] rounded-full p-4"
                  src={TrainingIcon}
                  alt="icon"
                />
                <p className="text-white font-bold text-[18px] max-w-[150px]">
                  Free Fitness Training
                </p>
              </div>

              <div className="flex items-center gap-6">
                <Image
                  className="bg-[#2b2b2b] hover:bg-[#ff0336] ease-in duration-200 w-[6.5rem] rounded-full p-4"
                  src={EquipmentsIcon}
                  alt="icon"
                />
                <p className="text-white font-bold text-[18px] max-w-[150px]">
                  Modern Gym Equipments
                </p>
              </div>

              <div className="flex items-center gap-6">
                <Image
                  className="bg-[#2b2b2b] hover:bg-[#ff0336] ease-in duration-200 w-[6.5rem] rounded-full p-4"
                  src={BagIcon}
                  alt="icon"
                />
                <p className="text-white font-bold text-[18px] max-w-[150px]">
                  Gym Bag Equipments
                </p>
              </div>

              <div className="flex items-center gap-6">
                <Image
                  className="bg-[#2b2b2b] hover:bg-[#ff0336] ease-in duration-200 w-[6.5rem] rounded-full p-4"
                  src={BottleIcon}
                  alt="icon"
                />
                <p className="text-white font-bold text-[18px] max-w-[150px]">
                  ducha
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;

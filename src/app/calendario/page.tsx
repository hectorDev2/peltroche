"use client";

import { PageWrapper } from "@/app/components/PageWrapper";
import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";

const days = [
  {
    slug: "lunes",
    key: "monday",
  },
  {
    slug: "martes",
    key: "tuesday",
  },
  {
    slug: "miercoles",
    key: "wednesday",
  },
  {
    slug: "jueves",
    key: "thursday",
  },
  {
    slug: "viernes",
    key: "friday",
  },
  {
    slug: "sabado",
    key: "saturday",
  },
];
export default function DetailsSchedule({ params }: any) {
  const dayMoment = moment().format("dddd").toLowerCase();
  const [daySelect, setDaySelect] = useState(dayMoment);

  useEffect(() => {
    console.log(daySelect);
  }, [daySelect]);

  return (
    <>
      <div className="login-banner relative justify-center flex">
        <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
          Calendario para el {params.slug}
        </h1>
      </div>
      <div className="flex flex-wrap gap-4 my-8 justify-center">
        {days.map((day: { slug: string; key: string }) => (
          <p
            key={day.slug}
            onClick={() => setDaySelect(day.key)}
            className={`text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px]  ease-in duration-200 hover:shadow-2xl text-gray 
            ${daySelect == day.key && "bg-[#ff0336] text-white"}`}
          >
            {day.slug}
          </p>
        ))}
      </div>
      <PageWrapper>
        <div className="flex flex-col items-center justify-center ">
          <div className="flex flex-col gap-3">
            {/* row */}
            <ul className="flex justify-between w-full min800:flex-col min800:text-center">
              {/* class name */}
              <li className="flex flex-col py-[25px] px-[55px] bg-[#f2f2f2] w-full">
                <p className="text-[14px] font-medium text-[#a0a0a0]">
                  Class Name
                </p>
                <p className="text-[18px] text-black font-bold mt-3">Fitness</p>
              </li>
              {/* time */}
              <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
                <p className="text-[14px] font-medium text-[#a0a0a0]">Time</p>
                <p className="text-[18px] text-black font-bold mt-3">
                  9:00am - 10:00am
                </p>
              </li>
              {/* trainer */}
              <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
                <p className="text-[14px] font-medium text-[#a0a0a0]">
                  Trainer
                </p>
                <p className="text-[18px] text-black font-bold mt-3">
                  David Vila
                </p>
              </li>
              <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full  min800:justify-center items-center flex justify-end">
                <Link
                  href="/contact"
                  className="text-white text-[15px] font-medium bg-[#555] py-[10px] px-[20px] rounded-[30px] hover:bg-[#ff0336] ease-in duration-200  "
                >
                  Unirse
                </Link>
              </li>
            </ul>
            {/* row */}
            <ul className="flex justify-between w-full min800:flex-col min800:text-center">
              {/* class name */}
              <li className="flex flex-col py-[25px] px-[55px] bg-[#f2f2f2] w-full">
                <p className="text-[14px] font-medium text-[#a0a0a0]">
                  Class Name
                </p>
                <p className="text-[18px] text-black font-bold mt-3">
                  Body Building
                </p>
              </li>
              {/* time */}
              <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
                <p className="text-[14px] font-medium text-[#a0a0a0]">Time</p>
                <p className="text-[18px] text-black font-bold mt-3">
                  10:00pm - 11:00pm
                </p>
              </li>
              {/* trainer */}
              <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
                <p className="text-[14px] font-medium text-[#a0a0a0]">
                  Trainer
                </p>
                <p className="text-[18px] text-black font-bold mt-3">
                  John Weights
                </p>
              </li>
              <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full min800:justify-center items-center flex justify-end">
                <Link
                  href="/contact"
                  className="text-white text-[15px] font-medium bg-[#555] py-[10px] px-[20px] rounded-[30px] mt-3 hover:bg-[#ff0336] ease-in duration-200 "
                >
                  Unirse
                </Link>
              </li>
            </ul>
            {/* row */}
            <ul className="flex justify-between w-full min800:flex-col min800:text-center">
              {/* class name */}
              <li className="flex flex-col py-[25px] px-[55px] bg-[#f2f2f2] w-full">
                <p className="text-[14px] font-medium text-[#a0a0a0]">
                  Class Name
                </p>
                <p className="text-[18px] text-black font-bold mt-3">Running</p>
              </li>
              {/* time */}
              <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
                <p className="text-[14px] font-medium text-[#a0a0a0]">Time</p>
                <p className="text-[18px] text-black font-bold mt-3">
                  4:00pm - 5:00pm
                </p>
              </li>
              {/* trainer */}
              <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
                <p className="text-[14px] font-medium text-[#a0a0a0]">
                  Trainer
                </p>
                <p className="text-[18px] text-black font-bold mt-3">
                  Junior Jonas
                </p>
              </li>
              <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full items-center flex justify-end min800:justify-center">
                <Link
                  href="/contact"
                  className="text-white text-[15px] font-medium bg-[#555] py-[10px] px-[20px] rounded-[30px] mt-3 hover:bg-[#ff0336] ease-in duration-200 "
                >
                  Unirse
                </Link>
              </li>
            </ul>
            {/* row */}
            <ul className="flex justify-between w-full min800:flex-col min800:text-center">
              {/* class name */}
              <li className="flex flex-col py-[25px] px-[55px] bg-[#f2f2f2] w-full">
                <p className="text-[14px] font-medium text-[#a0a0a0]">
                  Class Name
                </p>
                <p className="text-[18px] text-black font-bold mt-3">Cycling</p>
              </li>
              {/* time */}
              <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
                <p className="text-[14px] font-medium text-[#a0a0a0]">Time</p>
                <p className="text-[18px] text-black font-bold mt-3">
                  6:00pm - 7:00pm
                </p>
              </li>
              {/* trainer */}
              <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
                <p className="text-[14px] font-medium text-[#a0a0a0]">
                  Trainer
                </p>
                <p className="text-[18px] text-black font-bold mt-3">
                  Robert Louis
                </p>
              </li>
              <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full items-center flex justify-end min800:justify-center">
                <Link
                  href="/contact"
                  className="text-white text-[15px] font-medium bg-[#555] py-[10px] px-[20px] rounded-[30px] mt-3 hover:bg-[#ff0336] ease-in duration-200 "
                >
                  Unirse
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </PageWrapper>
    </>
  );
}

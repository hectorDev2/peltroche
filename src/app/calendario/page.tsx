"use client";

import { PageWrapper } from "@/components/PageWrapper";
import { days } from "@/store";
import moment from "moment";
import { useState } from "react";
import "./style/index.css";
interface Classes {
  name: string;
  horario: string;
  instructor: string;
}

interface DaySelect {
  key: string;
  slug: string;
  classes: Classes[];
}

export default function DetailsSchedule() {
  const dayMoment = moment().format("dddd").toLowerCase();
  const [daySelect, setDaySelect] = useState(
    days.find((item: DaySelect) => item.key == dayMoment)
  );

  return (
    <>
      <div className="login-banner relative justify-center flex">
        <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
          Calendario para los {daySelect?.slug}
        </h1>
      </div>
      <div className="flex flex-wrap gap-4 my-8 justify-center">
        {days.map((day, index) => (
          <p
            key={index}
            onClick={() => setDaySelect(day)}
            className={`cursor-pointer text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px]  ease-in duration-200 hover:shadow-2xl text-gray 
            ${daySelect?.key == day.key && "bg-[#ff0336] text-white"}`}
          >
            {day.slug}
          </p>
        ))}
      </div>
      <PageWrapper>
        <div className="flex flex-col items-center justify-center ">
          <div className="flex flex-col gap-3">
            {/* row */}

            {daySelect?.classes?.map((item: any, index: number) => (
              <ul
                key={index}
                className="flex justify-between w-full  min800:flex-col min800:text-center"
              >
                {/* class name */}
                <li className="flex flex-col py-[25px] px-[55px] bg-[#f2f2f2] w-full">
                  <p className="text-[14px] font-medium text-[#a0a0a0]">
                    Nombre:
                  </p>
                  <p className="text-[18px] text-black font-bold mt-3">
                    {item.name}
                  </p>
                </li>
                {/* time */}
                <li className=" flex flex-col  p-[25px] bg-[#f2f2f2] w-full text-center">
                  <p className="text-[14px] font-medium text-[#a0a0a0]">
                    Horario
                  </p>
                  <p className="text-[15px] w-[200px] text-black font-bold mt-3">
                    {item.horario}
                  </p>
                </li>
                {/* trainer */}
                <li className=" flex flex-col    p-[25px] bg-[#f2f2f2] w-full text-center">
                  <p className="text-[14px] font-medium text-[#a0a0a0]">
                    Trainer
                  </p>
                  <p className="text-[18px] w-[200px] text-black font-bold mt-3">
                    {item.teacher}
                  </p>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </PageWrapper>
    </>
  );
}

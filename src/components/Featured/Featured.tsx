function Featured() {
  return (
    <>
      <section id="featured" className="page-padding py-[12.5rem] bg-white">
        <div className="container">
          {/* title */}

          {/* grid */}
          <div className="lg:grid grid-cols-4 grid-rows-2 gap-7 h-full mt-7 flex flex-col">
            <div className="item-0-div relative">
              <div className="item-0 ease-in duration-[0.4s] p-6"></div>
              <div className="absolute z-10 bottom-10 left-10">
                <p className="text-white text-[3rem] font-bold">Cycling</p>
                <p className="text-white bg-[#FF0336] text-[14px] lg:text-[16px] mt-3 py-1 px-5">
                  miercoles: 9:00pm-10:00pm
                </p>
              </div>
            </div>
            <div className="item-1-div relative">
              <div className="item-1 ease-in duration-[0.4s] p-6"></div>
              <div className="absolute z-10 bottom-10 left-10">
                <p className="text-white text-[3rem] font-bold">Karate</p>
                <p className="text-white bg-[#FF0336] text-[14px] lg:text-[16px] mt-3 py-1 px-5">
                  viernes: 9:00pm-10:00pm
                </p>
              </div>
            </div>
            <div className="item-2-div relative">
              <div className="item-2 ease-in duration-[0.4s] p-6"></div>
              <div className="absolute z-10 bottom-10 left-10">
                <p className="text-white text-[3rem] font-bold">Power</p>
                <p className="text-white bg-[#FF0336] text-[14px] lg:text-[16px] mt-3 py-1 px-5">
                  sabado: 9:00am-10:00am
                </p>
              </div>
            </div>
            <div className="item-3-div relative">
              <div className="item-3 ease-in duration-[0.4s] p-6"></div>
              <div className="absolute z-10 bottom-10 left-10">
                <p className="text-white text-[3rem] font-bold">Meditation</p>
                <p className="text-white bg-[#FF0336] text-[12px]  lg:text-[16px] mt-3 py-1 px-5">
                  Friday: 1:00pm-2:00pm
                </p>
              </div>
            </div>
            <div className="item-4-div relative">
              <div className="item-4 ease-in duration-[0.4s] p-6"></div>
              <div className="absolute z-10 bottom-10 left-10">
                <p className="text-white text-[3rem] font-bold">Martial Arts</p>
                <p className="text-white bg-[#FF0336] text-[14px] lg:text-[16px] mt-3 py-1 px-5">
                  Sunday: 6:00pm-7:00pm
                </p>
              </div>
            </div>
            <div className="item-5-div relative">
              <div className="item-5 ease-in duration-[0.4s] p-6"></div>
              <div className="absolute z-10 bottom-10 left-10">
                <p className="text-white text-[3rem] font-bold">Workout</p>
                <p className="text-white bg-[#FF0336] text-[16px] mt-3 py-1 px-5">
                  Monday: 4:00pm-5:00pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* featured cta */}
      <div className="featured-cta flex justify-center text-left items-center bg-none bg-[#ff0336] ">
        <div className="container page-padding ">
          <div className="flex items-center flex-col gap-12  text-center">
            <h2 className="text-white font-bold md:text-[2rem] max-w-6xl leading-[1.2] text-[2.4rem] ">
              Siempre estamos brindando el mejor servicio para usted.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Featured;

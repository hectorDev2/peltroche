import TitlePeltroche from "@/shared/TitlePeltroche";

function Hero() {
  return (
    <>
      <section
        id="home"
        className="hero-section w-full h-screen flex justify-center text-center"
      >
        <div className="container-hero">
          {/* hero section */}
          <div
            className="flex flex-col text-white
           absolute hero-text min800:items-center lg:-right-[22rem]  lg:w-[80%] md:-right-[17rem] sm:-right-[14rem] -right-[11rem]"
          >
            <TitlePeltroche title="entrena con nosotros" />
            <h1 className="font-bold text-[48px] uppercase mb-[4rem] min450:text-[40px]">
              Construye tu cuerpo <br />
              <span className="font-thin">fit & perfecto</span>
            </h1>
          </div>
        </div>
        {/* socials */}
        <div
          className="flex flex-row-reverse -rotate-90 text-white
          absolute top-2/4 right-0 items-center min800:hidden"
        >
          <p className="uppercase  text-3xl font-bold tracking-widest">share</p>
          <span className="w-[35px] bg-[#FF0336] h-[2.5px] mr-6"></span>
          <div className="text-white gap-7 flex mr-7 ">
            <i className="fa-brands rotate-90 hover:text-[#FF0336] fa-facebook text-3xl cursor-pointer ease-in duration-200 "></i>
            <i className="fa-brands rotate-90 hover:text-[#FF0336] fa-twitter text-3xl cursor-pointer ease-in duration-200"></i>
            <i className="fa-brands rotate-90 hover:text-[#FF0336]  fa-linkedin-in text-3xl cursor-pointer ease-in duration-200 "></i>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;

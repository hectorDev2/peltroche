import Pricing from "../components/Pricing/Pricing";

export default function PricingPage() {
  return (
    <section>
      <div className="login-banner relative justify-center flex">
        <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
          Contact Us
        </h1>
      </div>
      {/* contact */}
      <div className="bg-white py-[12rem] page-padding grid grid-cols-2 container gap-10 items-center md1000:grid-cols-1 ">
        {/* first col */}
        <div className="md1000:w-[60%] md1000:flex md1000:flex-col md1000:mx-auto min800:w-[90%] min620:w-full">
          <h2 className="text-black text-[36px] font-bold leading-[1.2]">
            ¡Estamos aquí para ayudarte! Para moldear tu cuerpo.
          </h2>
          <p className="text-[16px] w-[95%] text-[#646464] font-medium my-[40px]">
            En Peltroche gym dedicados a ayudarte a lograr el cuerpo de tus
            sueños. Nuestros entrenadores y nutricionistas expertos trabajarán
            con usted para crear un plan personalizado de acondicionamiento
            físico y nutrición que lo ayude a alcanzar sus objetivos
            específicos.
          </p>
          <div className="grid grid-cols-2 grid-rows-2 gap-y-20 min620:grid-cols-1 min620:mx-auto">
            <div className="flex flex-col relative">
              <h3 className="text-[2rem] font-bold mb-10">
                Peltroche Gym & Fitness, La cultura
              </h3>
              <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[33px]"></span>
              <p className="text-[15px] font-medium text-[#646464]">
                85 Briston Mint Street,
                <br /> London, E1 8LG, USA
              </p>
            </div>
            <div className="flex flex-col relative">
              <h3 className="text-[2rem] font-bold mb-10">
                Peltroche Gym & Fitness Larapa
              </h3>
              <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[33px]"></span>
              <p className="text-[15px] font-medium text-[#646464]">
                85 Briston Mint Street,
                <br /> London, E1 8LG, USA
              </p>
            </div>

            {/*  */}
            <div className="flex flex-col relative">
              <h3 className="text-[2rem] font-bold mb-10">Opening Hours</h3>
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
                <p>&nbsp; peltroche@xxx.com</p>
              </div>
            </div>
            {/*  */}
            <div className="flex flex-col relative">
              <h3 className="text-[2rem] font-bold mb-10">Follow Us On</h3>
              <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[33px]"></span>
              <div className="text-[18px] font-medium text-black flex gap-5">
                <i className="fa-brands fa-facebook-f px-[16px] py-[13px] bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-[#ff0336] ease-in duration-200 hover:text-white"></i>
                <i className="fa-brands fa-twitter p-[13.5px] bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-[#ff0336] ease-in duration-200 hover:text-white"></i>
                <i className="fa-brands fa-instagram p-[13.5px] bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-[#ff0336] ease-in duration-200 hover:text-white"></i>
                <i className="fa-brands fa-pinterest-p p-[13.5px] bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-[#ff0336] ease-in duration-200 hover:text-white"></i>
              </div>
            </div>
          </div>
        </div>

        {/* second col ---*/}
        <form className="flex flex-col pt-[30px] pr-[50px] pb-[50px] pl-[45px] bg-[#f8f8f8] relative md1000:w-[65%] md1000:flex md1000:flex-col md1000:mx-auto md1000:mt-14 min800:w-[90%] min620:w-full">
          <h3 className="text-[28px] font-bold mb-14">
            Dejanos tu informacion
          </h3>
          <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[77px]"></span>
          <input
            className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
            placeholder="nombre completo *"
            type="text"
          ></input>
          <input
            className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
            placeholder="Direccion de correo *"
            type="email"
          ></input>
          <select className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8">
            <option>Select Class</option>
            <option>Body Building</option>
            <option>Boxing</option>
            <option>Running</option>
            <option>Fitness</option>
            <option>Yoga</option>
            <option>Workout</option>
            <option>Katate</option>
            <option>Meditation</option>
            <option>Cycling</option>
          </select>
          <textarea
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
      </div>

      {/* map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.1524330251705!2d-71.95301812491377!3d-13.526235286842518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916e7fd93e374537%3A0xd5c6d64b25419a7f!2sPeltroche%20Gym%20%26%20Fitness!5e0!3m2!1ses-419!2spe!4v1685567571498!5m2!1ses-419!2spe"
        allowFullScreen={true}
        loading="lazy"
        title="map"
        style={{ width: "100%", height: "45rem", border: "0px" }}
      ></iframe>
    </section>
  );
}

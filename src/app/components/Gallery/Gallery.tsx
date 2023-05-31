import TitleRed from "../../../../public/images/who-we-are/title-bg.svg";
import BgIcon from "../../../../public/images/gallery/bg-icon.png";

import Image from "next/image";

function Gallery() {
  return (
    <>
      <section id="gallery" className="relative min450:hidden">
        <Image
          src={BgIcon}
          alt="bg_img"
          className="absolute top-[30px] right-0"
        />

        <div className="container page-padding py-[4rem]">
          {/* title div -- */}
          <div className="flex flex-col text-center relative items-center ">
            <p className="text-white relative z-10 text-[15px] uppercase font-bold mb-10">
              Peltroche Galeria
            </p>
            <Image
              src={TitleRed}
              alt="text_bg"
              className="w-[23rem] absolute -top-[10px]  "
            />

            <h2 className="text-[3.4rem] font-bold mb-4">
              Galería de nuestro lugar de trabajo
            </h2>
            <p className="text-[#646464] font-medium text-[15px] ">
              Esta seccion presenta una oficina moderna, colaboración en equipo
              <br /> y una cultura divertida. Atrae talentos y muestra el
              ambiente de trabajo de la empresa
            </p>
          </div>

          {/* gallery */}
          <div className="gallery-grid py-24 w-full h-auto relative ">
            <div id="item-0"></div>
            <div id="item-1"></div>
            <div id="item-2"></div>
            <div id="item-3"></div>
            <div id="item-4"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;

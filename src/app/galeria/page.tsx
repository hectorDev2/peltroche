import Image from "next/image";
import Link from "next/link";
import { galleryImg } from "./GalleryFiles";

export default function Gallery() {
  const firstPageImgs = galleryImg.filter((item) => item.id <= 8);

  return (
    <>
      <section className="">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Gallery
          </h1>
        </div>
        <div className="container page-padding py-[10rem]">
          <div className="grid grid-cols-3 gap-7 md1000:grid-cols-2 min540:grid-cols-1">
            {firstPageImgs.map((image) => (
              <div key={image.id}>
                <Image
                  alt="gallery_img"
                  className="w-full h-auto"
                  src={image.img}
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-32">
            <Link
              href="/gallery/page-1"
              className="text-white inline-flex items-center justify-center text-center text-[18px] border border-solid border-[#dee2e6] w-[48px] h-[45px] font-medium rounded-md bg-[#ff0336] "
            >
              1
            </Link>
            <Link
              href="/gallery/page-2"
              className="text-black inline-flex items-center justify-center text-center text-[18px] border border-solid border-[#dee2e6] w-[48px] h-[45px] font-medium rounded-md bg-white "
            >
              2
            </Link>
            <Link
              href="/gallery/page-2"
              className="text-black inline-flex items-center justify-center text-center text-[18px] border border-solid border-[#dee2e6] w-[48px] h-[45px] font-medium rounded-md bg-white "
            >
              <i className="fa-solid fa-angles-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

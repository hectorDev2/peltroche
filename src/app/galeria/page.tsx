"use client";
import Image from "next/image";
import Link from "next/link";
import { PageWrapper } from "../../components/PageWrapper";
import { galleryImg } from "./GalleryFiles";
import { motion } from "framer-motion";
import { images, variants } from "@/animations";
import { HeroCommon } from "@/components/HeroCommon";
export default function Gallery() {
  return (
    <>
      <HeroCommon title="nuestras fotos" />
      <PageWrapper>
        <section className="">
          <div className="container page-padding py-[10rem]">
            <motion.div
              variants={variants}
              initial="hidden"
              animate="show"
              className="grid md:grid-cols-3 gap-7 grid-cols-2 ms:grid-cols-1"
            >
              {galleryImg.map((image) => (
                <motion.div variants={images} key={image.id}>
                  <Image
                    alt="gallery_img"
                    className="w-full h-auto hover:scale-110 transition-all ease-out cursor-pointer"
                    src={image.img}
                  />
                </motion.div>
              ))}
            </motion.div>

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
            </div>
          </div>
        </section>
      </PageWrapper>
    </>
  );
}

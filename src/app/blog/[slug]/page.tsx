"use client";
import Img1 from "../../../../public/images/blogpage/1.jpg";

import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useStoreBlog } from "@/store/storeBlog";

export default function DetailsSchedule({ params }: any) {
  const { slug } = useParams();
  const { getBlogById } = useStoreBlog();
  const post = getBlogById(slug);
  return (
    <>
      <section>
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Blog
          </h1>
        </div>
      </section>
      <div className="p-14 grid items-center justify-center">
        <Image
          className="m-auto"
          src={post.image}
          width={500}
          height={300}
          alt="blog_img"
        />
        <p className="font-medium text-[14px] text-[#646464] pt-8 pb-4">
          <i className="fa-solid fa-layer-group text-[#ff0336] text-[16px]"></i>
          &nbsp; By <b>Admin</b> |{post.date} | Yoga
        </p>
        <Link href={`/blog/${slug}`}>
          <h2 className="text-[3rem] font-bold mb-6">{slug}</h2>
        </Link>
        <p className="font-medium text-[16px] text-[#646464] mb-24">
          {post.content}
        </p>
      </div>
    </>
  );
}

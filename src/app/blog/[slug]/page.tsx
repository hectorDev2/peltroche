"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useStoreBlog } from "@/store/storeBlog";
import { PageWrapper } from "@/components/PageWrapper";

export default function DetailsSchedule() {
  const { slug } = useParams();
  const { getBlogById } = useStoreBlog();
  const post = getBlogById(slug);
  console.log(post, "post");

  return (
    <PageWrapper>
      <section>
        <div className="page-padding login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Blog
          </h1>
        </div>
      </section>
      {post && (
        <div className="container grid items-center justify-center ">
          <Image
            className="m-auto mt-[50px]"
            src={
              post?.image ??
              "https://cdn5.vectorstock.com/i/1000x1000/73/49/404-error-page-not-found-miss-paper-with-white-vector-20577349.jpg"
            }
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
      )}
    </PageWrapper>
  );
}

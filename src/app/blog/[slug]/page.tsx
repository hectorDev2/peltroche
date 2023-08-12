"use client";
import Image from "next/image";
import Link from "next/link";
import { PageWrapper } from "@/components/PageWrapper";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { usePost } from "../hooks/usePost";

export default function DetailsBlog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const { slug } = params;
  const { post } = usePost(slug);

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
            src={`${
              post?.cover ??
              "https://blog.eduonix.com/wp-content/uploads/2015/02/404-Error.jpg"
            }`}
            width={500}
            height={300}
            alt="blog_imgs"
          />
          <p className="font-medium text-[14px] text-[#646464] pt-8 pb-4">
            <i className="fa-solid fa-layer-group text-[#ff0336] text-[16px]"></i>
            &nbsp; By <b>{post.author}</b> |{post.category} | {post.updatedAt}
          </p>
          <Link href={`/blog/${slug}`}>
            <h2 className="text-[3rem] font-bold mb-6">{slug}</h2>
          </Link>
          <p className="font-medium text-[16px] text-[#646464] mb-24">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </p>
        </div>
      )}
    </PageWrapper>
  );
}

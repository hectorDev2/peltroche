"use client";
import { useStoreBlog } from "@/store/storeBlog";
import { SideBarBlog } from "../../components/Blog/SideBarBlog";
import { PageWrapper } from "../../components/PageWrapper";

import dynamic from "next/dynamic";
import { useStore } from "zustand";
import { StaticImageData } from "next/image";
import { useEffect } from "react";
import { BlogI } from "@/types/Blog.interface";

const BlogBox = dynamic(() => import("../../components/BlogBox/BlogBox"), {
  ssr: false,
});

export default function BlogPage() {
  const allBlogs: BlogI[] = useStore(
    useStoreBlog,
    (state: any) => state?.blogs
  );

  const filteredBlogs: BlogI[] = useStore(
    useStoreBlog,
    (state: any) => state?.filteredBlogs
  );

  const fetchPosts = useStore(useStoreBlog, (state: any) => state?.fetchPosts);
  const blogs = filteredBlogs.length == 0 ? allBlogs : filteredBlogs;

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <section>
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Blog
          </h1>
        </div>
      </section>
      <PageWrapper>
        {/* blog */}
        <div className="py-[10rem] container gap-16 page-padding grid grid-cols-[64fr_35fr] md1000:grid-cols-1 md1000:gap-32">
          {/* blog */}
          <div className="flex flex-col gap-28">
            {blogs?.map((blog: BlogI) => (
              <BlogBox key={blog.title} blog={blog} />
            ))}
          </div>
          <SideBarBlog />
        </div>
      </PageWrapper>
    </>
  );
}

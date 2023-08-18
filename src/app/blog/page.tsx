"use client";
import { useStoreBlog } from "@/store/storeBlog";
import { SideBarBlog } from "../../components/Blog/SideBarBlog";
import { PageWrapper } from "../../components/PageWrapper";

import dynamic from "next/dynamic";
import { useStore } from "zustand";
import { useEffect } from "react";
import { BlogI } from "@/types/Blog.interface";
import { HeroCommon } from "@/components/HeroCommon";

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
    if (blogs?.length == 0) fetchPosts();
  }, [blogs]);

  return (
    <>
      <HeroCommon title="Blog Peltroche" />
      <PageWrapper>
        {/* blog */}
        <div className="py-[10rem] container  page-padding grid md:grid-cols-[64fr_35fr] grid-cols-1 gap-32 md:gap-16">
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

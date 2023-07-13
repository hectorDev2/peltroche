"use client";
import { useStoreBlog } from "@/store/storeBlog";
import { SideBarBlog } from "../components/Blog/SideBarBlog";
import BlogBox from "../components/BlogBox/BlogBox";
import { PageWrapper } from "../components/PageWrapper";

export default function BlogPage() {
  const blogs = useStoreBlog((state: any) => state.blogs);

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
            {blogs.map((blog: any) => (
              <BlogBox key={blog.title} blog={blog} />
            ))}
          </div>
          <SideBarBlog />
        </div>
      </PageWrapper>
    </>
  );
}

"use client";
import { fakeVideosFit } from "@/store";
import { useStoreBlog } from "@/store/storeBlog";
import { SideBarBlog } from "../../components/Blog/SideBarBlog";
import { PageWrapper } from "../../components/PageWrapper";
import VideoBox from "./VideoBox";
interface Video {
  id: number;
  title: string;
  urlCode: string;
}

export default function BlogPage() {
  return (
    <>
      <section>
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Clases en video
          </h1>
        </div>
      </section>
      <PageWrapper>
        {/* blog */}
        <div className="py-[10rem] container gap-16 page-padding grid grid-cols-[64fr_35fr] md1000:grid-cols-1 md1000:gap-32">
          {/* blog */}
          <div className="flex flex-col gap-28">
            {fakeVideosFit.map((video: Video) => (
              <VideoBox key={video.id} video={video} />
            ))}
          </div>
          <SideBarBlog />
        </div>
      </PageWrapper>
    </>
  );
}

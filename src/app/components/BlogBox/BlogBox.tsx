import YoutubeEmbed from "@/app/clases/EmbedYoutube";
import { toSlug } from "@/utils";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export interface BlogBoxProps {
  blog: {
    id: number;
    title: string;
    date: string;
    content: string;
    description: string;
    image: StaticImageData;
    category?: string;
    author?: string;
  };
}

function BlogBox({ blog }: BlogBoxProps) {
  const {
    title,
    date,
    description,
    image,
    category = "Yoga",
    author = "Hector Barazorda",
  } = blog;
  return (
    <>
      <div>
        <Image src={image} alt="blog_img" />
        <p className="font-medium text-[14px] text-[#646464] pt-8 pb-4">
          <i className="fa-solid fa-layer-group text-[#ff0336] text-[16px]"></i>
          &nbsp; By <b>{author}</b> | {date} | {category}
        </p>
        <Link href={`/blog/${toSlug(title)}`}>
          <h2 className="text-[3rem] font-bold mb-6">{title}</h2>
        </Link>
        <p className="font-medium text-[16px] text-[#646464] mb-24">
          {description}
        </p>
      </div>
    </>
  );
}

export default BlogBox;

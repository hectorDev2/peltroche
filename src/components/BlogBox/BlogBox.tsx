import { BlogI } from "@/types";
import { toSlug } from "@/utils";
import Image from "next/image";
import Link from "next/link";

function BlogBox({ blog }: { blog: BlogI }) {
  const {
    title,
    createdAt,
    cover,
    resumen = "lorem ipsum dolor sit amet",
    category = "Yoga",
    author = "Hector Barazorda",
  } = blog;
  return (
    <>
      <div>
        <Image src={`${cover}`} alt="blog_img" width={500} height={300} />
        <p className="font-medium text-[14px] text-[#646464] pt-8 pb-4">
          <i className="fa-solid fa-layer-group text-[#ff0336] text-[16px]"></i>
          &nbsp; By <b>{author}</b> | {createdAt} | {category}
        </p>
        <Link href={`/blog/${toSlug(title)}`}>
          <h2 className="text-[3rem] font-bold mb-6">{title}</h2>
        </Link>
        <p className="font-medium text-[16px] text-[#646464] mb-24">
          {resumen}#
        </p>
      </div>
    </>
  );
}

export default BlogBox;

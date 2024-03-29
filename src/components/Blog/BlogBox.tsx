import Link from "next/link";

function BlogBox({
  date,
  title,
  description,
}: {
  date: string;
  title: string;
  description: string;
  bgClass?: string;
  img?: string;
}) {
  return (
    <>
      <div className="w-[37rem] sm:w-[100%] shadow-xl flex flex-col px-[3rem] py-[5rem]">
        {/* date */}
        <p className="text-[15px] font-bold text-[#323232] border-[#323232] border-solid rounded-full border-[1px] w-fit px-5 py-2 mb-6">
          {date}
        </p>
        {/* title */}
        <h3 className="text-[22px] font-bold py-5">{title}</h3>
        {/* desc */}
        <p className="text-[15px] text-[#646464] font-medium">{description}</p>
        {/* blog cta */}
        <Link
          href="/blog"
          className="text-[15px] uppercase font-bold mt-10 w-[16rem] h-[5rem] bg-[#FF0336] text-white text-center pt-[14px]"
        >
          Leer mas &nbsp; <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
    </>
  );
}

export default BlogBox;

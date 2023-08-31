import Image from "next/image";
import Link from "next/link";
import { formatDataWithImagesApi } from "@/utils/helpers";
import { ProductFormatted } from "@/types/product-format.interface";
import { HeroCommon } from "@/components/HeroCommon";

export default async function Page() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products?populate=*`,
    {
      cache: "no-cache",
    }
  );
  const resJson = await res.json();

  const products = formatDataWithImagesApi(resJson.data);

  return (
    <>
      <HeroCommon title="Tienda" />
      <section className="  mx-[5%] md:my-[50px] place-content-center md:flex gap-5">
        {products?.map(({ images, id, price, name }: ProductFormatted) => (
          <Link
            href={`/tienda/productos/${id}`}
            className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
            key={id}
          >
            <Image width={300} height={300} src={images[0]} alt={name} />
            <div className="p-4 text-black/[0.9]">
              <h2 className="text-lg font-medium">{name}</h2>
              <div className="flex items-center text-black/[0.5]">
                <p className="mr-2 text-lg font-semibold">&#8377;{price}</p>

                {price && (
                  <>
                    <p className="text-base  font-medium line-through">
                      &#8377;{price}
                    </p>
                    <p className="ml-auto text-base font-medium text-green-500">
                      20 % off
                    </p>
                  </>
                )}
              </div>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}

import { PageWrapper } from "../../components/PageWrapper";

import { API_URL, API_URL_LOCAL } from "../../config";
import { ProductInterface } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { toSlug } from "@/utils";

export default async function Page() {
  const res = await fetch(`${API_URL_LOCAL}/products?populate=*`);
  if (!res.ok) {
    console.log("error");
  }
  const { data: products } = await res.json();
  console.log(products);

  return (
    <>
      <div className="login-banner relative justify-center flex mb-5">
        <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
          Tienda
        </h1>
      </div>
      <PageWrapper>
        <section className="login-section  place-content-center flex gap-5">
          {products.map(({ attributes }: ProductInterface) => (
            <Link
              href={`/tienda/productos/${toSlug(attributes.name)}`}
              className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
            >
              <Image
                width={300}
                height={300}
                src={attributes.images.data[0].formats.thumbnail.url}
                alt={attributes.name}
              />
              <div className="p-4 text-black/[0.9]">
                <h2 className="text-lg font-medium">{attributes.name}</h2>
                <div className="flex items-center text-black/[0.5]">
                  <p className="mr-2 text-lg font-semibold">
                    &#8377;{attributes.price}
                  </p>

                  {attributes.price && (
                    <>
                      <p className="text-base  font-medium line-through">
                        &#8377;{attributes.price}
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
      </PageWrapper>
    </>
  );
}

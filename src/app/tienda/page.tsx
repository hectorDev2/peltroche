import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { formatAllProducts } from "@/utils/helpers";
import { ProductFormatted } from "@/types/product-format.interface";

export default async function Page() {
  console.log(process.env.NEXT_LOCAL_API_URL);

  const res = axios
    .get(`${process.env.NEXT_LOCAL_API_URL}/products?populate=*`)
    .then(({ data }) => data.data)
    .catch(function (error) {
      throw error;
    });

  const products = formatAllProducts(await res);
  console.log(products);

  return (
    <>
      <div className="login-banner relative justify-center flex mb-5">
        <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
          Tienda
        </h1>
      </div>
      <section className="login-section  place-content-center flex gap-5">
        {products.map(({ attributes, id }: ProductFormatted) => (
          <Link
            href={`/tienda/productos/${id}`}
            className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
            key={id}
          >
            <Image
              width={300}
              height={300}
              src={attributes.images[0]}
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
    </>
  );
}

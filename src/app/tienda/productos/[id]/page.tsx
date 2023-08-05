"use client";
import React, { useEffect, useState } from "react";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { formatDataWithImagesApi } from "@/utils/helpers";
import { ProductFormatted } from "@/types/product-format.interface";
import { HeroCommon } from "@/components/HeroCommon";

const fetchProduct = async (id: string) => {
  const productJson = await fetch(
    `${process.env.NEXT_LOCAL_API_URL}/products/${id}?populate=*`
  );

  const arrayWithProduct = await productJson.json();

  console.log(arrayWithProduct.data);

  const product = formatDataWithImagesApi([arrayWithProduct.data]);

  return product[0];
};

const ProductDetails = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const { id } = params;

  const [product, setProduct] = useState<any>();
  useEffect(() => {
    if (!product) {
      fetchProduct(id).then((res) => setProduct(res));
      return;
    }
  }, [product]);
  return (
    <>
      <HeroCommon title={product?.name} />
      {product && (
        <div className="flex gap-5 container items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
          <div className="left">
            <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
              <img
                className="w-full"
                alt="image of a girl posing"
                src={product.images[0]}
              />
            </div>
            <div className="md:hidden">
              <img
                className="w-full"
                alt="image of a girl posing"
                src={product.images[0]}
              />
              <div className="flex items-center justify-between mt-3 space-x-4 md:space-x-0">
                <img
                  alt="image-tag-one"
                  className="md:w-48 md:h-48 w-full"
                  src="https://i.ibb.co/f17NXrW/Rectangle-244.png"
                />
                <img
                  alt="image-tag-one"
                  className="md:w-48 md:h-48 w-full"
                  src="https://i.ibb.co/cYDrVGh/Rectangle-245.png"
                />
                <img
                  alt="image-tag-one"
                  className="md:w-48 md:h-48 w-full"
                  src="https://i.ibb.co/f17NXrW/Rectangle-244.png"
                />
              </div>
            </div>
          </div>
          <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
            <div className="border-b border-gray-200 pb-6">
              <p className="text-sm leading-none text-gray-600 dark:text-gray-300 ">
                {product.description}
              </p>
              <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">
                {product.name}
              </h1>
            </div>

            <div>
              <p className="md:w-96 text-base leading-normal text-gray-600 dark:text-gray-300 mt-4">
                Composition: 100% calf leather, inside: 100% lamb leather
              </p>
            </div>
            <button className="dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100  focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-full py-4 hover:bg-gray-700 focus:outline-none mb-5">
              comprar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;

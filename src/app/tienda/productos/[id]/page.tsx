"use client";
import React, { useEffect, useState } from "react";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { formatProduct } from "@/utils/helpers";
import { ProductFormatted } from "@/types/product-format.interface";

const ProductDetails = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const [product, setProduct] = useState<ProductFormatted>();

  console.log(process.env.NEXT_LOCAL_API_URL);

  const getProduct = async () => {
    let product;
    await axios
      .get(`${process.env.NEXT_LOCAL_API_URL}/products/${params.id}?populate=*`)
      .then((data) => {
        product = formatProduct(data.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    return product;
  };

  useEffect(() => {
    if (!product) {
      getProduct().then((data) => {
        setProduct(data);
      });
      return;
    }
  }, [product]);

  return (
    <>
      <div className="login-banner relative justify-center flex">
        <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
          {product?.attributes?.name}
        </h1>
      </div>
      {product && (
        <div className="flex gap-5 container items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
          <div className="left">
            <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
              <img
                className="w-full"
                alt="image of a girl posing"
                src="https://i.ibb.co/QMdWfzX/component-image-one.png"
              />
            </div>
            <div className="md:hidden">
              <img
                className="w-full"
                alt="image of a girl posing"
                src="https://i.ibb.co/QMdWfzX/component-image-one.png"
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
                Balenciaga Fall Collection
              </p>
              <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">
                Balenciaga Signature Sweatshirt
              </h1>
            </div>

            <div>
              <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-7">
                It is a long established fact that a reader will be distracted
                by thereadable content of a page when looking at its layout. The
                point of usingLorem Ipsum is that it has a more-or-less normal
                distribution of letters.
              </p>
              <p className="text-base leading-4 mt-7 text-gray-600 dark:text-gray-300">
                Product Code: 8BN321AF2IF0NYA
              </p>
              <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">
                Length: 13.2 inches
              </p>
              <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">
                Height: 10 inches
              </p>
              <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">
                Depth: 5.1 inches
              </p>
              <p className="md:w-96 text-base leading-normal text-gray-600 dark:text-gray-300 mt-4">
                Composition: 100% calf leather, inside: 100% lamb leather
              </p>
            </div>
            <button className="dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100  focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-full py-4 hover:bg-gray-700 focus:outline-none mb-5">
              comprar
            </button>
            <div className="join join-vertical w-full">
              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" checked={true} />
                <div className="collapse-title text-xl font-medium">
                  Click to open this one and close others
                </div>
                <div className="collapse-content">
                  <p>hello</p>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  Click to open this one and close others
                </div>
                <div className="collapse-content">
                  <p>hello</p>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  Click to open this one and close others
                </div>
                <div className="collapse-content">
                  <p>hello</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;

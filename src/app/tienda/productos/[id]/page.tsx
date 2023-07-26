"use client";
import React, { useEffect, useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_URL_LOCAL } from "@/config";
import axios from "axios";
import { getDiscountedPricePercentage } from "@/utils/helpers";
import Image from "next/image";

const ProductDetails = async ({ params }: any) => {
  const [product, setProduct] = useState<any>([]);
  const notify = () => {
    toast.success("Success. Check your cart!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const getProduct = async () => {
    let product: any;
    await axios
      .get(`http://127.0.0.1:1337/api/products/${params.id}?populate=*`)
      .then((data) => {
        product = data.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return product;
  };

  useEffect(() => {
    if (product.length === 0) {
      getProduct().then((data) => {
        console.log(data);

        setProduct(data.data);
      });
      return;
    }
  }, []);
  console.log(product, "producdt");

  return (
    <>
      <div className="login-banner relative justify-center flex">
        <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
          {product.attributes?.name}
        </h1>
      </div>
      {product && (
        <div className="w-full md:py-20">
          <div className="w-full md:py-20">
            <ToastContainer />
            <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
              {/* left column start */}
              <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                {/* <ProductDetailsCarousel images={p.image.data} /> */}
                <Image
                  width={300}
                  height={300}
                  src={product?.attributes?.images.data[0].attributes.url}
                  alt=""
                />
              </div>

              <div className="flex-[1] py-3">
                {/* PRODUCT TITLE */}
                <div className="text-[34px] font-semibold mb-2 leading-tight"></div>

                {/* PRODUCT SUBTITLE */}
                <div className="text-lg font-semibold mb-5">
                  {product?.attributes?.description}
                </div>

                {/* PRODUCT PRICE */}
                <div className="flex items-center">
                  <p className="mr-2 text-lg font-semibold">
                    MRP : &#8377;{product?.attributes?.price}
                  </p>
                  {product?.attributes?.price && (
                    <>
                      <p className="text-base  font-medium line-through">
                        &#8377;{product?.attributes?.price}
                      </p>
                      <p className="ml-auto text-base font-medium text-green-500">
                        {getDiscountedPricePercentage(
                          product?.attributes?.price,
                          product?.attributes?.price
                        )}
                        % off
                      </p>
                    </>
                  )}
                </div>

                <div className="text-md font-medium text-black/[0.5]">
                  incl. of taxes
                </div>
                <div className="text-md font-medium text-black/[0.5] mb-20">
                  {`(Also includes all applicable duties)`}
                </div>

                {/* PRODUCT SIZE RANGE START */}
                <div className="mb-10">
                  {/* HEADING START */}
                  <div className="flex justify-between mb-2">
                    <div className="text-md font-semibold">Select Size</div>
                    <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                      Select Guide
                    </div>
                  </div>
                  {/* HEADING END */}

                  {/* SHOW ERROR START */}

                  {/* SHOW ERROR END */}
                </div>
                {/* PRODUCT SIZE RANGE END */}

                {/* ADD TO CART BUTTON START */}
                <button
                  onClick={() => notify()}
                  className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                >
                  Add to Cart
                </button>
                {/* ADD TO CART BUTTON END */}

                {/* WHISHLIST BUTTON START */}
                <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                  Whishlist
                  <IoMdHeartEmpty size={20} />
                </button>
                {/* WHISHLIST BUTTON END */}

                <div>
                  <div className="text-lg font-bold mb-5">Product Details</div>
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

"use client";
import React, { useEffect, useState } from "react";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { formatDataWithImagesApi } from "@/utils/helpers";
import { HeroCommon } from "@/components/HeroCommon";
import ProductPage from "@/components/product/ProductPage";

const fetchProduct = async (id: string) => {
  const productJson = await fetch(
    `${process.env.NEXT_LOCAL_API_URL}/products/${id}?populate=*`
  );

  const arrayWithProduct = await productJson.json();

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
      {product && <ProductPage product={product} />}
    </>
  );
};

export default ProductDetails;

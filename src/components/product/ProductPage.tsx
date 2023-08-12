import { useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const ProductPage = ({ product }: any) => {
  const { images, description, name, features, price } = product;

  const [activeImg, setActiveImage] = useState(images[0]);
  const [amount, setAmount] = useState(1);

  return (
    <div className="flex  pt-[100px] justify-between lg:flex-row gap-16 lg:items-center container">
      <div className="flex flex-col gap-4 w-2/5">
        <img
          src={activeImg}
          alt=""
          className=" aspect-square object-cover rounded-xl"
        />
        <div className="flex flex-row justify-between h-24">
          <img
            src={images[0]}
            alt=""
            width={200}
            height={200}
            className="w-24 h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images[0])}
          />
          <img
            src={images[1]}
            width={200}
            height={200}
            alt=""
            className="w-24 h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images[1])}
          />
          {images[2] && (
            <img
              width={200}
              src={images[2]}
              height={200}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImage(images[2])}
            />
          )}
          {images[3] && (
            <img
              height={200}
              src={images[3]}
              width={200}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImage(images[3])}
            />
          )}
        </div>
      </div>
      {/* ABOUT */}
      <div className="flex flex-col gap-4 w-4/5">
        <div>
          <span className=" text-[#ff0336] font-semibold">{description}</span>
          <h1 className="text-3xl font-bold">{name}</h1>
        </div>
        <p className="text-gray-700">
          <ReactMarkdown>{features}</ReactMarkdown>
        </p>
        <h6 className="text-2xl font-semibold">$ {price}</h6>
        <div className="flex flex-row items-center gap-12">
          <div className="flex flex-row items-center">
            <button
              className="bg-gray-200 py-2 px-5 rounded-lg text-[#ff0336] text-3xl"
              onClick={() => setAmount((prev) => prev - 1)}
            >
              -
            </button>
            <span className="py-4 px-6 rounded-lg">{amount}</span>
            <button
              className="bg-gray-200 py-2 px-4 rounded-lg text-[#ff0336] text-3xl"
              onClick={() => setAmount((prev) => prev + 1)}
            >
              +
            </button>
          </div>
          <button className="bg-[#ff0336] text-white  font-semibold py-3 px-16 rounded-xl h-full">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

import Image from "next/image";
import React from "react";

export default function Product(props: any) {
  return (
    <div className="card">
      <Image className="product--image" src={props.url} alt="product image" />
      <h2>{props.name}</h2>
      <p className="price">{props.price}</p>
      <p>{props.description}</p>
      <p>
        <button>comprar ahora</button>
      </p>
    </div>
  );
}

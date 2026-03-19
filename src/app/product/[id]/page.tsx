"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ProductT } from "@/app/types";
import { getProductById } from "@/app/api/products";
import { SectionContainer } from "@/app/components/SectionContainer";

export default function ProductDetail() {
  const { id } = useParams();
  const router = useRouter();

  const [product, setProduct] = useState<ProductT | null>(null);

  useEffect(() => {
    if (!id) return;

    getProductById(id as string).then(setProduct);
  }, [id]);

  if (!product) return <p>Loading...</p>;

return (
  <div className="app">
    <button
      className="backButton"
      onClick={() => router.push("../")}
    >HOME</button>

    <SectionContainer>
      <div className="productDetailContainer">

        <div className="productImages">
          <img
            src={product.images[0]}
            className="mainImage"
          />

          <div className="imageGallery">
            {product.images.map((img) => (
              <img key={img} src={img} />
            ))}
          </div>
        </div>

        <div className="productInfo">
          <h2>{product.title}</h2>

          <p><strong>Descripción: </strong> {product.description}</p>
          <p><strong>Marca: </strong> {product.brand}</p>
          <p><strong>Rating: </strong> {product.rating}</p>
          <p><strong>Precio: </strong> {product.price}€</p>

          <p>
            <strong>Stock:</strong>{" "}
            {product.stock < 10 ? "¡Pocas unidades!" : product.stock}
          </p>

          {product.weight && (
            <p><strong>Peso:</strong> {product.weight}g</p>
          )}
        </div>

      </div>
    </SectionContainer>
  </div>
);
}
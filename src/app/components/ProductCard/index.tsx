"use client";

import { ProductT } from "@/app/types";
import Link from "next/link";
import { SectionContainer } from "../SectionContainer";

export const ProductCard = ({ product }: { product: ProductT }) => {
  return (
    <SectionContainer>
      <img src={product.thumbnail} alt={product.title} />

      <h3>{product.title}</h3>

      <p><strong>Categoria:</strong> {product.category}</p>
       
      <p><strong>Precio:</strong> {product.price}€</p>


      <Link href={`/product/${product.id}`}>
        <button>Ver detalles</button>
      </Link>
    </SectionContainer>
  );
};
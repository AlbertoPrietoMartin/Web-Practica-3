"use client";

import { ProductT } from "@/app/types";
import { ProductCard } from "../ProductCard";

export const ProductGrid = ({ products }: { products: ProductT[] }) => {
  return (
    <div className="productsGrid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};
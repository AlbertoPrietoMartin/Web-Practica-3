"use client";

import { useEffect, useState } from "react";
import { ProductT } from "./types";
import { getAllProducts } from "./api/products";
import { SearchBar } from "./components/SearchBar";
import { ProductCard } from "./components/ProductCard";
import { SectionContainer } from "./components/SectionContainer";
import { ProductGrid } from "./components/ProductGrid";

const Home=()=> {
  const [products, setProducts] = useState<ProductT[]>([]);
  const [filtered, setFiltered] = useState<ProductT[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  // cargar productos
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await getAllProducts();
      setProducts(res);
      setFiltered(res);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  // filtrado dinámico toLowerCase para que pille si tambien lo metes en minusculas
  useEffect(() => {
    const result = products.filter((p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFiltered(result);
  }, [searchQuery, products]);

  if (loading) return <p>Loading products...</p>;

  return (
    <div className="app">
      <h1>Catalogo de Productos</h1>

      <SectionContainer>
        <SearchBar setSearchQuery={setSearchQuery} />
        <p>{filtered.length} resultados</p>
      </SectionContainer>

      <ProductGrid products={filtered} />
    </div>
  );
}

export default Home;
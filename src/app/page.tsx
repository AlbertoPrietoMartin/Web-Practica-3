"use client";

import { useEffect, useState } from "react";
import { ProductT } from "./types";
import { getAllProducts } from "./api/products";
import { SearchBar } from "./components/SearchBar";
import { SectionContainer } from "./components/SectionContainer";
import { ProductGrid } from "./components/ProductGrid";

const Home = () => {
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

  // filtrado dinámico
  useEffect(() => {
    const result = products.filter((p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFiltered(result);
  }, [searchQuery, products]);

  if (loading) return <p className="loading">Loading products...</p>;

  return (
    <div className="app">
      <h1 className="pageTitle">Catálogo de Productos</h1>

      <SectionContainer>
        <div className="searchSection">
          <SearchBar setSearchQuery={setSearchQuery} />

          <p className="resultsCount">
            {filtered.length} resultados
          </p>
        </div>
      </SectionContainer>

      <div className="productsGrid">
        <ProductGrid products={filtered} />
      </div>
    </div>
  );
};

export default Home;
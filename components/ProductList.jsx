"use client";

import ProductCard from "./ProductCard";
import { useEffect } from "react";
import { useStore } from "zustand";
import productStore from "@/store/ProductStore";

const ProductList = () => {
  const { products, getAllProducts, loading, error } = useStore(productStore);

  useEffect(() => {
    getAllProducts();
    if (products) console.log(products);
  }, []);

  useEffect(() => {});
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4">
      {products?.map((product, i) => (
        <ProductCard key={i} product={product} />
      ))}
    </div>
  );
};

export default ProductList;

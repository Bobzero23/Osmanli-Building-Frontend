import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className="flex gap-5 flex-wrap justify-center w-auto p-2 shrink-1">
      {[
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      ].map((card) => (
        <ProductCard />
      ))}
    </div>
  );
};

export default ProductList;

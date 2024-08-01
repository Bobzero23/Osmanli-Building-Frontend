import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className=" w-full flex gap-6 flex-wrap flex-center overflow-y-auto h-[calc(100vh-100px)]">
      {[
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      ].map((card) => (
        <ProductCard />
      ))}
    </div>
  );
};

export default ProductList;

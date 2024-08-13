import Image from "next/image";

const ProductCard = ({ product }) => {
  return (
    <div className="card_box card_hover p-1 sm:w-full md:w-auto sm:shrink md:flex">
      <div className="flex flex-col w-full">
        <div className="flex flex-col overflow-hidden">
          <Image
            className="object-fit w-full max-h-[150px]"
            alt="Product image"
            width={300}
            height={300}
            src={product.imageUrl || "/assets/images/test_image.jpg"}
          />
          <div>
            <p className="font-thin pt-1">{product.name}</p>
          </div>
        </div>
        <div className="card_box flex items-center justify-between p-2">
          <div className="shrink price_glassmorphism text-green-600 font-bold">
            ${product.price}
          </div>
          <button className="orange_btn">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

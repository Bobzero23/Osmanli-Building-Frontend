import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="card_box card_hover p-1 sm:w-full md:w-auto sm:shrink md:flex">
      <div className="flex flex-col">
        <div className="flex flex-col">
          <Image
            className="object-cover"
            alt="Product image"
            width={300}
            height={300}
            src="/assets/images/test_image.jpg"
          />
          <div>
            <p className="font-thin pt-1">Product name</p>
          </div>
        </div>
        <div className="card_box flex items-center justify-between p-2">
          <div className="shrink price_glassmorphism text-green-600 font-bold">
            $ 12,000
          </div>
          <button className="orange_btn">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

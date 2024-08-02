import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="card_box card_hover p-1">
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
        <div className="flex items-center justify-between p-2 border border-green-500">
          <div>12,000</div>
          <button className="orange_btn">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

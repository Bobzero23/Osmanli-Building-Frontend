import Image from "next/image";

const Cart = () => {
  return (
    <div className="w-full my-1">
      <div className="p-2 border border-black-800">
        <div className="w-full flex justify-between">
          <div>
            {" "}
            <Image
              className="object-cover"
              alt="Product image"
              width={300}
              height={300}
              src="/assets/images/test_image.jpg"
            />
            <div className="flex justify-between my-2">
              <p className="text-center">Product Name</p>
              <p>12,000</p>
            </div>
          </div>

          <div className="flex-center gap-4">
            <button className="orange_btn_rounded">+</button>
            <span>2</span>
            <button className="orange_btn_rounded">-</button>
          </div>
          <div className="flex justify-between flex-col gap-2">
            <span></span>
            <span>Price: 35,000</span>
            <button className="red_btn">Remove</button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

const CartList = () => {
  return (
    <div className="w-full flex py-2 gap-6 flex-wrap flex-center">
      {[1, 1].map((cart) => (
        <Cart />
      ))}

      <div className="w-[80%] flex justify-between">
        <div>Total: 234,500</div>
        <div>
          <button className="orange_btn">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default CartList;

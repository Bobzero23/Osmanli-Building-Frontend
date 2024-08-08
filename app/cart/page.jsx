import Image from "next/image";
import Link from "next/link";

const Cart = () => {
  return (
    <div className="w-full my-1 flex card_box card_hover">
      <div className="card_box p-2 border border-black-800 w-full ">
        <div className="w-full sm:w-auto flex sm:flex-row flex-col justify-between">
          <div>
            <Image
              className="object-cover"
              alt="Product image"
              width={300}
              height={300}
              src="/assets/images/test_image.jpg"
            />
            <div className="flex justify-between my-2 price_glassmorphism">
              <p className="text-center">Product Name</p>
              <p className="font-bold">$ 12,000</p>
            </div>
          </div>

          <div className="flex-center gap-4 ">
            <button className="orange_btn_rounded">+</button>
            <span>2</span>
            <button className="orange_btn_rounded">-</button>
          </div>
          <div className="flex justify-between flex-col gap-2">
            <span></span>
            <span className="text-green-700">Price: 35,000</span>
            <button className="red_btn">Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CartList = () => {
  return (
    <div className="md:flex-nowrap flex flex-wrap gap-3">
      <div className="glassmorphism w-full py-2 gap-6 flex-wrap flex-center md:w-[70%]">
        {[1, 1].map((cart, i) => (
          <Cart key={i} />
        ))}
      </div>
      <div className="flex flex-col h-[12rem] md:w-[30%] glassmorphism gap-7">
        <div className="font-bold text-xl orange_gradient">Cart Summary</div>
        <div className="flex justify-between">
          <div>
            <span className="text-orange-950 font-bold">3 Items</span>
          </div>
          <div>
            <h1 className="text-orange-950 font-bold">
              Total Price:<span className="text-green-700"> $ 450,000</span>
            </h1>
          </div>
        </div>
        <Link href="/" className="orange_btn">
          ORDER NOW
        </Link>
      </div>
    </div>
  );
};

export default CartList;

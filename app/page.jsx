import ProductList from "@/components/ProductList";
import Link from "next/link";

const page = () => {
  return (
    <div className="p-0 flex gap-2 borderp-2 mb-3">
      <div className="p-1 md:flex hidden flex-col gap-2 w-[25%]">
        <Link className="glassmorphism orange_hover w-full" href="/">
          <p className="font-extrabold orange_gradient w-full h-full">PVC</p>
        </Link>
        <Link className="glassmorphism orange_hover w-full" href="/">
          <p className="font-extrabold orange_gradient w-full h-full">
            ACCESSORIES
          </p>
        </Link>
        <Link className="glassmorphism orange_hover w-full" href="/">
          <p className="font-extrabold orange_gradient w-full h-full">
            HARDWARES
          </p>
        </Link>
        <Link className="glassmorphism orange_hover w-full " href="/">
          <p className="font-extrabold orange_gradient w-full h-full">
            GLASSWARE
          </p>
        </Link>
        <Link className="glassmorphism orange_hover w-ful" href="/">
          <p className="font-extrabold orange_gradient w-full h-full">
            SOMETHING
          </p>
        </Link>
      </div>
      <div className="text-center flex-center mx-auto glassmorphism my-1 p-1 md:w-[75%] sm:w-full">
        <ProductList />
      </div>
    </div>
  );
};

export default page;

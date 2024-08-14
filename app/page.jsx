import ProductList from "@/components/ProductList";
import Link from "next/link";

const sideBar = [
  { name: "PVC", category: "" },
  { name: "ACCESSORIES", category: "pvc" },
  { name: "HARDWARES", category: "hardware" },
  { name: "GLASSWARES", category: "glassware" },
  { name: "ALL PRODUCTS", category: "" },
];

const page = () => {
  return (
    <div className="p-0 flex gap-2 borderp-2">
      <div className="p-1 md:flex hidden flex-col gap-2 w-[25%]">
        {sideBar.map((sideItem, i) => (
          <Link key={i} className="glassmorphism orange_hover w-full" href="/">
            <p className="font-extrabold orange_gradient w-full h-full">
              {sideItem.name}
            </p>
          </Link>
        ))}
      </div>

      <div className="text-center flex-center w-full glassmorphism my-1 p-1 md:w-[75%] sm:w-full">
        {/* TODO - add a prop here to display categor in the product list page */}
        <ProductList />
      </div>
    </div>
  );
};

export default page;

import React from "react";
import Image from "next/image";
import Link from "next/link";

const CellectionCard = () => {
  return (
    <div className="card_box card_hover">
      <div className="da relative flex flex-col justify-center overflow-hidden bg-gray-50">
        <div className="absolute inset-0 bg-center h-[300px] dark:bg-black"></div>
        <div className="group relative m-0 flex h-72 w-96  shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
          <div className="z-10 h-full w-full overflow-hidden  border border-gray-200 opacity-80 transition duration-400 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
            <Image
              width={300}
              height={300}
              src="/assets/images/test_image.jpg"
              className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
              alt=""
            />
          </div>
          <div className="w-full absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 gap-2 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
            <h1 className="font-serif text-2xl font-bold text-white shadow-xl">
              Azores
            </h1>
            <p className="text-white w-[80%]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae error non facilis harum debitis officia,
            </p>
            <div className="flex-center w-full">
              <Link href="/" className="black_btn w-[50%]">
                See Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Collection = () => {
  return (
    <div className="flex-center w-full gap-3 flex-wrap p-2 border border-b-slate-700">
      {[1, 1, 1, 1].map((card, i) => (
        <CellectionCard key={i} />
      ))}
    </div>
  );
};

export default Collection;

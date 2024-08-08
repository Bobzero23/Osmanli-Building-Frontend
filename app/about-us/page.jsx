import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="md:flex xl:flex-row w-full flex-col gap-2 m-auto glassmorphism">
      <div className="xl:w-[50%] w-full glassmorphism">
        <div className="flex flex-col">
          <h4 className="font-semibold text-orange-900">How it started</h4>
          <div className="border-t border-t-red-600 w-[5rem] h-1 mb-4"></div>
          <h1 className="head_text orange_gradient tracking-wide">
            Our Dreams is <br />
            Global marketing <br />
            <span className="mt-4">Transportation</span>
          </h1>
          <p className="mt-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo atque
            culpa impedit perferendis quidem. Autem rem soluta architecto
            officia nesciunt neque asperiores facilis eius rerum voluptatem,
            placeat, sit quis aperiam. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Placeat, laudantium praesentium repudiandae
            pariatur assumenda reprehenderit cupiditate deserunt quae eum, sunt
            illum necessitatibus? Ipsum autem eaque blanditiis repudiandae sint
            earum quis!Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quo atque culpa impedit perferendis quidem. Autem rem soluta
            architecto officia nesciunt neque asperiores facilis eius rerum
            voluptatem, placeat, sit quis aperiam. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Placeat, laudantium praesentium
            repudiandae pariatur assumenda reprehenderit cupiditate deserunt
            quae eum, sunt illum necessitatibus?
          </p>
        </div>
      </div>
      <div className="xl:w-[50%] w-full flex flex-col gap-3 glassmorphism">
        <div>
          <Image
            className="object-cover"
            alt="Product image"
            width={800}
            height={300}
            src="/assets/images/test_image.jpg"
          />
        </div>
        <div className="flex justify-between gap-1 glassmorphism">
          <div className="flex w-[50%] flex-col glassmorphism">
            <span className="font-extrabold">15</span>
            <span>Years of Experience</span>
          </div>
          <div className="flex w-[50%] flex-col glassmorphism">
            <div>
              <span className="font-extrabold">23</span>
            </div>
            <div>
              <span>Projects</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-1 glassmorphism">
          <div className="flex w-[50%] gap-1 flex-col glassmorphism">
            <div>
              <span className="font-extrabold">120K</span>
            </div>
            <div>
              <span>Products Delivered</span>
            </div>
          </div>
          <div className="glassmorphism w-[50%]  gap-1 flex flex-col">
            <div>
              <span className="font-extrabold">57K</span>
            </div>
            <div>
              <span>Customers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

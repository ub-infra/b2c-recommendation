import Image from "next/image";
import React from "react";
import EditPen from "../svgs/EditPen.svg";
import PointingFinger from "../svgs/PointingFinger.svg";
import OptionSelected from "./core/OptionSelected";
import ProductCard from "./core/ProductCard";
const ProductList = () => {
  return (
    <div>
    <div className="md:flex flex-row-reverse">
      <div className="border sm:p-2.5 md:p-1.5 border-gray-300 rounded-md w-full md:w-1/2 md:ml-4">
        <div className="flex justify-between pb-1.5 border-b border-gray-300">
          <p className="text-base font-semibold text-gray-950">About</p>
          <Image src={EditPen} width={20} height={20} alt="Edit" />
        </div>
        <div className="flex flex-wrap mt-2.5">
          <OptionSelected noEdit />
          <OptionSelected noEdit />
          <OptionSelected noEdit />
        </div>
      </div>
      <div className="md:border sm:p-2.5 md:p-1.5 border-gray-300 rounded-md w-full md:w-1/2">
        <p className="text-xl font-semibold text-gray-800 mt-2">
          Yay! We’ve found your matches
        </p>
        <div className="flex justify-center mt-2">
          <p className="text-sm font-light text-gray-500 self-center">
            Check out your matched products
          </p>
          <Image src={PointingFinger} height={30} width={30} alt="products" />
        </div>
      </div>
      </div>
      <div className="flex overflow-x-scroll space-x-4 mt-4 pb-2.5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductList;

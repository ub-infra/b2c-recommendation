import React from "react";
import ProductInfo from "./core/ProductInfo";
import Star from "../svgs/Star.svg";
import StarHalf from "../svgs/StarHalf.svg";
import ProductPlaceholder from "../svgs/ProductPlaceholder.svg";
import Rupee from "../svgs/Rupee.svg";
import Pills from "../svgs/Pills.svg";
import Image from "next/image";

const ProductDetails = () => {
  return (
    <div>
      <div className="border p-2.5 border-gray-300 rounded-md flex relative">
        <img
          src={"https://picsum.photos/200"}
          width={104}
          height={104}
          alt="product image"
          className="rounded"
        />
        <div className="ml-2.5">
          <ProductInfo />
        </div>
        <div className="rounded-full border border-gray-300 absolute left-3 top-3 bg-white flex px-1">
          <Image src={Star} height={14} width={14} alt="rating" />
          <p className="text-xs text-gray-950 font-medium text-left ml-1">
            98%
            <span style={{ fontSize: 10 }} className="text-gray-400 font-light">
              {""} Matched
            </span>
          </p>
        </div>
      </div>
      <div className="border p-2.5 border-gray-300 rounded-md mt-2.5">
        <p
          className="text-gray-400 font-light text-left"
          style={{ fontSize: 10 }}
        >
          <span className="text-gray-950 font-medium">2.2M+ Users </span>like
          you recommended this or similar products
        </p>
        <p
          className="text-gray-400 font-light text-left"
          style={{ fontSize: 10 }}
        >
          <span className="text-gray-950 font-medium">2.2M+ Users </span>like
          you recommended this or similar products
        </p>
      </div>

      <div className="border p-2.5 border-gray-300 rounded-md mt-2.5">
        <div className="flex justify-between">
          <p className="text-base text-gray-950 font-semibold self-center">
            Personalized rating
          </p>
          <div className="rounded-full border border-orange-300 left-3 top-3 bg-white flex px-2 py-1">
            <Image src={Star} height={24} width={24} alt="rating" />
            <p className="text-xl self-center text-gray-950 font-medium text-left ml-1">
              4.8
            </p>
          </div>
        </div>

        <div className="flex">
          <Image src={StarHalf} width={18} alt="Rating" />
          <p className="text-sm text-gray-800 font-light ml-1 self-center">
            4.8/5 for pregnancy
          </p>
        </div>
      </div>

      <div className="border p-2.5 border-gray-300 rounded-md mt-2.5">
        <p className="text-base text-gray-950 font-semibold text-left">
          Personalised for you
        </p>
        <div className="border p-2.5 border-gray-100 rounded-md mt-2.5">
          <p className="text-base text-gray-950 font-Medium text-left">
            1.Similar products you love
          </p>
          <div className="flex border px-2.5 py-1.5 border-gray-300 rounded-md mt-2.5">
            <Image src={ProductPlaceholder} width={18} alt="Rating" />
            <p className="text-sm text-gray-800 font-light ml-1 self-center">
              Cetaphil gentle cleanser
            </p>
          </div>
        </div>

        <div className="border p-2.5 border-gray-100 rounded-md mt-2.5">
          <p className="text-base text-gray-950 font-Medium text-left">
            2. Made with ingredients from your favourite products:
          </p>
        </div>

        <div className="border p-2.5 border-gray-100 rounded-md mt-2.5">
          <p className="text-base text-gray-950 font-Medium text-left">
            3. Suits your preferences
          </p>
          <div className="flex border px-2.5 py-1.5 border-gray-300 rounded-md mt-2.5">
            <Image src={Pills} width={18} alt="Preferences" />
            <p className="text-sm text-gray-800 font-light ml-1 self-center">
              Vegan
            </p>
          </div>
        </div>

        <div className="border p-2.5 border-gray-100 rounded-md mt-2.5">
          <p className="text-base text-gray-950 font-Medium text-left">
            4. Within your budget
          </p>

          <div className="flex border px-2.5 py-1.5 border-gray-300 rounded-md mt-2.5">
            <Image src={Rupee} width={18} alt="budget" />
            <p className="text-sm text-gray-800 font-light ml-1 self-center">
              500-1500
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

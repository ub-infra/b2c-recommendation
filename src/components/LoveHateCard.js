import React from "react";

function LoveHateCard() {
  return (
    <div className="rounded-md border border-gray-300 px-2 py-2.5">
      <div className="flex justify-between">
        <div className="flex">
        <img src={"https://picsum.photos/200"} width={68} height={68} />
          <p className="self-center text-base font-normal text-slate-700">
            Plum Green tea gel
          </p>
        </div>
        <button
          className="text-gray-500 hover:text-gray-700"
          // onClick={onClose}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
      <div className="border-t border-gray-300 mt-2.5 pt-2.5">
        <p className="text-sm	font-normal text-zinc-800 mb-2.5">Tell us your experience with this product</p>
        <div className="flex justify-between">
          <button className="w-1/2 mx-1.5 rounded-md bg-red-200 px-3 py-2 text-sm font-semibold text-red-600 shadow-sm border-2	border-red-600">
            😕 Hate this
          </button>
          <button className="w-1/2 mx-1.5 rounded-md bg-green-200 px-3 py-2 text-sm font-semibold text-green-600 shadow-sm border-2	border-green-600">
            💖 Love this
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoveHateCard;

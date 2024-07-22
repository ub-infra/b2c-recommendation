import Image from "next/image";
import React from "react";
import Searching from "../images/searching.gif";
import MobileNumberInput from "./core/MobileNumberInput";

const FindingMatches = () => {
  return (
    <div className="flex flex-col">
      <p className="text-base	font-medium">We’re finding you best matches</p>
      <p className="text-xs font-light text-zinc-400">Just a lil bit</p>

      <Image
        src={Searching}
        height={240}
        width={320}
        alt="searching..."
        className="self-center"
      />

      <MobileNumberInput />

      <button className="text-white font-medium py-2 px-4 rounded mt-3 w-full bg-stone-900">
        Let’s get started!
      </button>

      <p className="text-sm font-normal text-zinc-800 mt-6 cursor-pointer">
        I’ll do it later
      </p>
    </div>
  );
};

export default FindingMatches;

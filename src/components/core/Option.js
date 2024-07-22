import React from "react";
import Image from "next/image";
import Checked from "../../svgs/OptionChecked.svg";

function Option() {
  const isSelected = true;

  return (
    <div className="flex justify-end">
      <div
        className={`rounded-md border ${isSelected ? 'border-black' : 'border-gray-300'} px-2 py-2.5 flex self-end`}
        style={{ borderBottomRightRadius: 0 }}
      >
        <p>Skincare</p>
        {isSelected ? (
          <Image src={Checked} width={20} className="ml-2"/>
        ) : (
          <div className="radio-unchecked ml-2" />
        )}
      </div>
    </div>
  );
}

export default Option;
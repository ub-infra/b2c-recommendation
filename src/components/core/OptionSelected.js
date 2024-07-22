import React from "react";
import Image from "next/image";
import EditPen from "../../svgs/EditPen.svg";

const OptionSelected = ({ noEdit }) => {
  const isSelected = true;

  return (
    <div className="flex justify-end p-0.5">
      <div
        className={`rounded-md border ${
          isSelected ? "border-black" : "border-gray-300"
        } py-1 px-2.5 flex self-end`}
      >
        <p>Skinc</p>
        {noEdit ? (
          <></>
        ) : (
          <Image src={EditPen} width={20} className="ml-2" alt="edit" />
        )}
      </div>
    </div>
  );
};

export default OptionSelected;

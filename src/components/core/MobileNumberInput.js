'use client'
import React from 'react';

const MobileNumberInput = () => {
  return (
    <div className="flex items-center mt-10 mb-2">
      <div className="flex border rounded-lg overflow-hidden w-full">
        <select
          className="bg-white border-r p-2 focus:outline-none text-zinc-800"
          defaultValue="+91"
        >
          <option value="+91">+91</option>
        </select>
        <div>
        <input
          type="tel"
          className="p-2 focus:outline-none text-gray-950"
          placeholder="Enter mobile number"
          onChange={(e) => console.log(e.target.value)}
          maxLength={10}
        />
        </div>
      </div>
    </div>
  );
};

export default MobileNumberInput;
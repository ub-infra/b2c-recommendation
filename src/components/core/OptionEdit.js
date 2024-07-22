import Image from 'next/image';
import React from 'react'
import EditPen from '../../svgs/EditPen.svg'

function OptionEdit() {
    const isSelected = true;

    return (
      <div className="flex justify-end">
        <div
          className={`rounded-md border ${isSelected ? 'border-black' : 'border-gray-300'} py-1.5 px-2.5 flex self-end`}
          style={{ borderBottomRightRadius: 0 }}
        >
          <p>Skincare</p>
          <Image src={EditPen} width={20} className="ml-2"/>
        </div>
      </div>
      )
}

export default OptionEdit
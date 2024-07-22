import React from 'react'

const ProductInfo = () => {
  return (
    <>
        <p className="text-xs text-gray-950 font-medium text-left mt-1.5">
            Mylo care
          </p>
          <p
            className="text-gray-400 font-light text-left mt-0.5"
            style={{ fontSize: 10 }}
          >
            Mylo care
          </p>
          <p className="text-xs text-gray-950 font-medium text-left mt-1">
            ₹199{" "}
            <span
              style={{ fontSize: 10 }}
              className="text-gray-400 font-light line-through"
            >
              ₹169
            </span>
          </p>
          <button className="text-white font-medium py-1.5 px-4 rounded mt-3 w-full bg-stone-900">
            Buy Now
          </button>
    </>
  )
}

export default ProductInfo
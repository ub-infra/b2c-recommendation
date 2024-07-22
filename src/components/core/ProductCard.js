import React from 'react'
import ProductInfo from './ProductInfo'

const ProductCard = () => {
  return (
    <div className="p-2.5 border border-gray-300 rounded-md flex-none">
          <img
            src={"https://picsum.photos/200"}
            width={160}
            height={145}
            alt="product image"
            className="rounded"
          />
          <ProductInfo />

          <div className="mt-1.5 border-t border-gray-300">
            <p style={{ fontSize: 10 }}
              className="text-gray-950 font-medium text-start">2.2M+</p>
            <p style={{ fontSize: 10 }}
              className="text-gray-950 font-light text-start">Users recommended</p>
          </div>
        </div>
  )
}

export default ProductCard
// file ini berisikan style card pada masing masing produk

import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = (props) => {
  return (
    <div className='border border-solid border-slate-400 p-4 rounded-md text-center'>
        <img src={props.product.image} className='aspect-square w-full object-cover mb-4' alt="" />
        {/* mengambil props title dari product.js */}
        <h5 className='text-2xl font-bold mb-8'>{props.product.title}</h5>
        <div className='text-xl font-bold text-red-700'>${props.product.price}</div>
        <Link to={`/products/${props.product.id}`} className='px-6 py-3 bg-green-500 border-0 mt-8 text-white block'>Go To Product</Link>
    </div>
  )
}

export default ProductCard
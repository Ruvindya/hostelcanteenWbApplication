import React from 'react'
import "./Style.css";

const SingleProduct = ({prod}) => {
  return (
    <div className='products'>
        <img src={prod.image} alt={prod.name} />
        <div className='productDesc'>
            <span style={{fontWeight:700}}>{prod.name}</span>
            <span> Rs. {prod.price.substring(0,3)}</span>
        </div>
        <button className='add'>Add to Cart</button>
    </div>
  )
}

export default SingleProduct
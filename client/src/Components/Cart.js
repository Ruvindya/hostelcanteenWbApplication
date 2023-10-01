import React , {useEffect, useState, useContext} from 'react'
import SingleProduct from './SingleProduct'
import { Cart } from '../Context';
 
const CartPage = () => {
  const [total, setTotal] = useState();
  const {cart} = useContext(Cart);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0))
  }, [cart]);

  return (
    <div className=''>
      <div className='cartContainer'>
      <span style={{fontSize: 30}}>My Cart</span>
      <br />
      <span style= {{fontSize: 30}}>Total: Rs.{total}</span>

      </div>
      
      <div className='productContainer'>
        
        {cart.map((prod) => (
          <SingleProduct
            prod={prod}
            key={prod.id} 
            />
        ))}</div>
    </div>
  )
}

export default CartPage
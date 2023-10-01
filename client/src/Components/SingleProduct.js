import React , {useContext} from 'react'
import "./Style.css";
import { Cart } from '../Context';

const SingleProduct = ({prod}) => {

    const {cart,setCart} = useContext(Cart);



  return (
    <div className='products'>
        <img src={prod.image} alt={prod.name} />
        <div className='productDesc'>
            <span className='productName' style={{fontWeight:700}}>{prod.name}</span>
           
        </div>

        <div className='ButtonContainer'>
            <div className='productPrice'>
            <span >Rs.{prod.price.substring(0,3)}</span>

            </div>
        {cart.includes(prod) ? (
             <button 
             className='remove' 
             onClick={() => {
                 setCart(cart.filter((c) => c.id !== prod.id));
                 
             }}
             >
                 Remove From Cart
             </button>
        ): (
            <button 
                    className='add' 
                    onClick={() => {
                        setCart([...cart, prod]);
                    }}
                    >
                        Add to Cart
                    </button>
        )}

        </div>
       
        
       
    </div>
  )
}

export default SingleProduct
import React ,{ useState }  from 'react';
import { faker } from '@faker-js/faker';
import SingleProduct from './SingleProduct';

faker.seed(100);

const Breakfast = ( cart,setCart) => {
  const productArray = [...Array(4)].map(()=>({
    id:faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price:faker.commerce.price(),
    image: faker.image.food(),

  }));


  const [products] = useState(productArray);

  return (
    <div className='productContainer'>
      {products.map((prod => ( 
        <SingleProduct prod={prod} cart={cart} setCart={setCart} key={prod.id}/>
        
      )))}
      
    </div>
  )
}

export default Breakfast
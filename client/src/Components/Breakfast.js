import React from 'react';
import { faker } from '@faker-js/faker';


const Breakfast = () => {
  const productArray = [...Array(4)].map(()=>({
    id:faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image()

  }));
  console.log(productArray);
  return (
    <div>Breakfast</div>
  )
}

export default Breakfast
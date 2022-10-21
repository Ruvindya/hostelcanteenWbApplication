import React from 'react';
import axios from "axios";
import {useState } from "react";
import "../App.css";


function AddMenuItem() {
    
    const [BLD, setBLD] = useState('');
    const [itemName, setItemName] = useState('');
    const [price, setPrice] = useState('');
    const [isAvailabe, setAvailability] = useState('');

  const AddItem = async (e) => {
    e.preventDefault();
  

    try {
        await axios.post('http://localhost:3001/InfoMenu', {  
            BLD:BLD,
            itemName: itemName,
            price:price,
            isAvailabe: isAvailabe,
        })
        
    } catch (error) {
   console.log(error);
    }   
}
  return (
   
  <form  onSubmit={AddItem} >
    <div className="App">
      <div className="AddFoodItem" >

        <h1>Add Food Item to the Menu</h1>

        <label>BLD</label>
          <input type="BLD" placeholder="Ex:B" name="BLD" required  
          value={BLD}  onChange={(e) => setBLD(e.target.value)} 
          />

        <label>Item Name</label>
          <input type="itemName" placeholder="Ex:FoodName" name="itemName" required
          value={itemName} onChange={(e) => setItemName(e.target.value)}
          />

        <label>Price</label>
          <input type="price" placeholder="Ex:price" name="price" required
          value={price} onChange={(e) => setPrice(e.target.value)}
          />

        <label>Availability</label>
          <input type="isAvailabe" placeholder="false" name="isAvailabe" required
          value={isAvailabe} onChange={(e) => setAvailability(e.target.value)}
          />

        <button   type="AddItem" >AddItem</button>
      </div>

    </div> 
    </form>
  
  );
}

export default AddMenuItem;
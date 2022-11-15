import React from 'react';
import axios from "axios";
import {useState } from "react";
import "../App.css";


function AddMenuItem() {
    //
    const [BLD, setBLD] = useState('');
    const [itemName, setItemName] = useState('');
    const [price, setPrice] = useState('');
    const [isAvailabe, setAvailability] = useState('');
    const [select, setSelect] = useState('select');

  const AddItem = async (e) => {
    e.preventDefault();
  

    try {
        await axios.post('http://localhost:3001/InfoMenu/postItem', {  
            BLD:BLD,
            itemName: itemName,
            price:price,
            isAvailabe: isAvailabe,
        })

        setBLD(' ');
        setItemName('');
        setPrice('');
        setAvailability(' ');
        setSelect('select');

      
        
    } catch (error) {
   console.log(error);
    }   
}
  return (
   
  <form  className="form" onSubmit={AddItem} >
    <div className="App">
      <div className="AddFoodItem" >

        <h1>Add Food Item to the Menu</h1>

        {/* <label>BLD</label>
          <input type="BLD" placeholder="Ex:B" name="BLD" required  
          value={BLD}  onChange={(e) => setBLD(e.target.value)} 
          /> */}
          <label> BLD </label>
                  <select name="BLD" id="BLD" onChange={(e) => setBLD(e.target.value)}>
                    <option value=' ' >Select Item</option>
                    <option value='B' >Breakfast</option>
                    <option value='L' >Lunch</option>
                    <option value='D' >Dinner</option>
                               
                  </select>


        <label>Item Name</label>
          <input type="itemName" placeholder="Ex:FoodName" name="itemName" required
          value={itemName} onChange={(e) => setItemName(e.target.value)}
          />

        <label>Price</label>
          <input type="price" placeholder="Ex:price" name="price" required
          value={price} onChange={(e) => setPrice(e.target.value)}
          />

        {/* <label>Availability</label>
          <input type="isAvailabe" placeholder="false" name="isAvailabe" required
          value={isAvailabe} onChange={(e) => setAvailability(e.target.value)}
          /> */}
          <label> Availability </label>
                  <select name="Availability" id="Availability" defaultValue={select} onChange={(e) => setAvailability(e.target.value)}>
                    <option value=' ' >Select Item</option>
                    <option value='true' >True</option>
                    <option value='false' >False</option>
                    
                               
                  </select>

        <button   type="AddItem" >AddItem</button>
      </div>

    </div> 
    </form>
  
  );
}

export default AddMenuItem;
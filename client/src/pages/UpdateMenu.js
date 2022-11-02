import React from 'react';
import axios from "axios";
import {useState } from "react";
import "../App.css";

function UpdateMenu() {
    const [menuID, setMenuID] = useState('');
    const [BLD, setBLD] = useState('B');
    const [itemName, setItemName] = useState('');
    const [price, setPrice] = useState('');
    const [isAvailabe, setAvailability] = useState('');

   


  const UpdateItem = async (e) => {
    e.preventDefault();
    try {
        await axios.put(`http://localhost:3001/InfoMenu/UpdateItem/${menuID}`, {  
          
          menuID:menuID,
          BLD: BLD,
          itemName:itemName,
          price: price,
          isAvailabe:isAvailabe
        })

        
        
    } catch (error) {
   console.log(error);
    }
     
}

  return (
   

  <form  className="form" onSubmit={UpdateItem} >
    <div className="App">
      <div className="Update" >

        <h1>Update Menu Item</h1>

        {/* <label>Menu ID</label>
          <input type="menuID" placeholder=" " name="menuID" required  
          value={menuID}  onChange={(e) => setMenuID(e.target.value)} 
          /> */}

        <label>BLD</label>
          <input type="BLD" placeholder={BLD} name="BLD" required
          value={BLD} onChange={(e) => setBLD(e.target.value)}
          />

        <label>Item Name</label>
          <input type="itemName" placeholder={itemName} name="itemName" required
          value={itemName} onChange={(e) => setItemName(e.target.value)}
          />

        <label>Price</label>
          <input type="price" placeholder={price} name="price" required
          value={price} onChange={(e) => setPrice(e.target.value)}
          />

        <label>Availability</label>
          <input type="isAvailabe" placeholder={isAvailabe} name="isAvailabe" required
          value={isAvailabe} onChange={(e) => setAvailability(e.target.value)}
          />

        <button   type="submit" >UpdateItem</button>
      </div>

    </div> 
    </form>
  
  );
}

export default UpdateMenu;
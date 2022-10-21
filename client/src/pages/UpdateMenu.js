import React from 'react';
import axios from "axios";
import {useState } from "react";
import "../App.css";


function AddMenuItem() {
    
    const [BLD, setBLD] = useState('');
    const [itemName, setItemName] = useState('');
    const [price, setPrice] = useState('');
    const [isAvailabe, setAvailability] = useState('');

  const UpdateItem = async (e) => {
    e.preventDefault();
  

    try {
        await axios.put('http://localhost:3001/InfoMenu', {  
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
   
  <form  onSubmit={UpdateItem} >
    <div className="App">
            <div className='getGetails '>
                            <select name="platform" class="custom-select">

                            <option value="">Select Subject</option>
                            <option  value="001">Mathematics</option>
                            <option value="002">Science</option>
                            <option value="003">English</option>
                            <option value="004">Sinhala</option>
                            <option value="005">Tamil</option>  
                            
                            </select>

            </div>

            <div className="SearchItemName" >

                <h1>Search by meal</h1>
                <h3>B-Breakfast L-Lunch D-Dinner</h3>

                <label>Meal Name</label>
                <input type="BLD" placeholder=" " name="BLD" required  
                value={BLD}  onChange={(e) => setBLD(e.target.value)} 
                />
                <button   type="search" >Search</button>
            </div>

            <div className='getGetails '>
                    <select name="platform" class="custom-select">
            
                    </select>

            </div>

    </div> 
    </form>
  
  );
}

export default AddMenuItem;
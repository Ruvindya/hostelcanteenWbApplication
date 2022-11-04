import React from 'react';
import axios from "axios";
import {useState ,useEffect } from "react";
import "../App.css";
import { useLocation , useNavigate} from "react-router-dom";

function UpdateMenu() {

  const navigate = useNavigate();
  const location = useLocation();
  const menuID = location.state.menuID;

  console.log(menuID);



    const [BLD, setBLD] = useState('');
    const [itemName, setItemName] = useState('');
    const [price, setPrice] = useState('');
    const [isAvailabe, setAvailability] = useState('');

    useEffect(()=>{
      axios.get( `http://localhost:3001/InfoMenu/byid/${menuID}`).then((response) => {
        setBLD(response.data[0].BLD);
        setItemName(response.data[0].itemName);
        setPrice(response.data[0].price);
        setAvailability(response.data[0].isAvailabe);
          

      })
  },[]);


  const UpdateItem = async (e) => {
    e.preventDefault();
    
    try {

            await axios.put(`http://localhost:3001/InfoMenu/UpdateItem/${menuID}`, {  
              
              BLD: BLD,
              itemName:itemName,
              price: price,
              isAvailabe:isAvailabe

            })


            navigate("/GetMenuItem");

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
          <input type="text" placeholder={BLD} name="BLD" required
          value={BLD} onChange={(e) => setBLD(e.target.value)}
          />

        <label>Item Name</label>
          <input type="text" placeholder={itemName} name="itemName" required
          value={itemName} onChange={(e) => setItemName(e.target.value)}
          />

        <label>Price</label>
          <input type="text" placeholder={price} name="price" required
          value={price} onChange={(e) => setPrice(e.target.value)}
          />

        <label>Availability</label>
          <input type="text" placeholder={isAvailabe} name="isAvailabe"  required
          value={isAvailabe} onChange={(e) => setAvailability(e.target.value)}
          />

        <button  type="submit" >UpdateItem</button>
      </div>

    </div> 
    </form>
  
  );
}

export default UpdateMenu;
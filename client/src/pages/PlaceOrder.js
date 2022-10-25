import React from 'react';
import axios from "axios";
import {useState } from "react";
import "../App.css";

function PlaceOrder() {
    //customer table attributes
   // const [cusId, setCusID] = useState(); //order
    const [name, setName] = useState("");//order
    const [block, setBlock] = useState("");
    const [roomNo, setRoomNo] = useState("");
    const [phoneNo, setPhoneNo] = useState();

    //orderDetails table attributes
    const [oderNo, setOderNo] = useState(); //order
    const [itemNo, setItemNo] = useState();
    const [menuID, setMenuID] = useState();
    const [qty, setQty] = useState();
    const [totPrice, setTotPrice] = useState();

   //BLD for order table
   //totAmount have to calculate


  const ConfirmOrder = async (e) => {
    e.preventDefault();
  

    try {
        await axios.post('http://localhost:3001/InfoCustomer', {  
            name:name,
            block: block,
            roomNo:roomNo,
            phoneNo: phoneNo,
            

        })
        
    } catch (error) {
   console.log(error);
    }
     
}
  
const addItem = async (e) => {
    e.preventDefault();
  

    try {
        await axios.post('http://localhost:3001/InfoOrderDetail', {  
            
            oderNo:oderNo,
            itemNo: itemNo,
            menuID:menuID,
            qty: qty,
            totPrice:totPrice,

        })
        
    } catch (error) {
   console.log(error);
    }
     
}

  return (
   

  <form  className="form" >
    <div className="App">
    <h1>Place Order</h1>

      <div className="customerDetails" >

        <h5>Fill customer details</h5>

        <label>Customer Name</label>
          <input type="name" placeholder="Ex:Name" name="name" required  
          value={name}  onChange={(e) => setName(e.target.value)} 
          />

        <label>block</label>
          <input type="block" placeholder="Ex:A" name="block" required
          value={block} onChange={(e) => setBlock(e.target.value)}
          />

        <label>roomNo</label>
          <input type="roomNo" placeholder="Ex:username" name="roomNo" required
          value={roomNo} onChange={(e) => setRoomNo(e.target.value)}
          />

        <label>phoneNo</label>
          <input type="phoneNo" placeholder="EX:0771234567" name="phoneNo" required
          value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)}
          />

        
      </div>

            <div className="orderDetails" >

                <h5>Fill order details</h5>

                            <label>oderNo</label>
                            <input type="oderNo" placeholder="Ex:1" name="oderNo" required  
                            value={oderNo}  onChange={(e) => setOderNo(e.target.value)} 
                            />

                            <label>itemNo</label>
                            <input type="itemNo" placeholder="Ex:001" name="itemNo" required
                            value={itemNo} onChange={(e) => setItemNo(e.target.value)}
                            />

                            <label>qty</label>
                            <input type="qty" placeholder="Ex:1" name="qty" required
                            value={qty} onChange={(e) => setQty(e.target.value)}
                            />

                            <label>totPrice</label>
                            <input type="totPrice" placeholder="EX:0" name="totPrice" required
                            value={totPrice} onChange={(e) => setTotPrice(e.target.value)}
                            />

                        <button   type="submit" onSubmit={addItem} >AddItem</button>

             </div>

      <button   type="submit" onSubmit={ConfirmOrder} >ConfirmOrder</button>
    </div> 
    </form>
  
  );
}

export default PlaceOrder;
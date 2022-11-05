import React from 'react';
import axios from "axios";
import {useEffect, useState} from "react";
import "../../PlaceOrder.css";
import {useNavigate} from 'react-router-dom';

const CustomorRegister = () => {

    const [cusId, setCusId] = useState();
    const [cusName, setCusName] = useState('');
    const [block, setBlock] = useState('');
    const [roomNo, setRoomNo] = useState();
    const [phoneNo, setPhoneNo] = useState();


    const navigate = useNavigate();

    

const addCustomor = async (e) => {
    
    e.preventDefault();
  
    try {

      await axios.post("http://localhost:3001/InfoCustomer/postcustomer", {  
        
            cusName:cusName,
            block: block,
            roomNo:roomNo,
            phoneNo:phoneNo,

        })

        navigate("/PlaceOrder", { state: { cusId: cusId } });
        
        
    } catch (error) {
   console.log(error);
    }
     
}


  return (

    <form  className="PlaceOrderForm" >

      <h1>Place Breakfast Order</h1>

    <div className="CustomerDetails">

              <h5>Fill customer details</h5>

              <label className='name'>Customer Name</label>
                <input type="text" placeholder="Ex:Name" name="cusName" required  
                value={cusName}  onChange={(e) => setCusName(e.target.value)} 
                />

              <label>block</label>
                <input type="text" placeholder="Ex:A" name="block" required
                value={block} onChange={(e) => setBlock(e.target.value)}
                />

              <label>roomNo</label>
                <input type="text" placeholder="Ex:012" name="roomNo" required
                value={roomNo} onChange={(e) => setRoomNo(e.target.value)}
                />

              <label>phoneNo</label>
                <input type="text" placeholder="EX:0771234567" name="phoneNo" required
                value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)}
                />

            <button   type="submit" onSubmit={addCustomor} >Register</button>

    </div> 

    </form>
  
  )
}

export default CustomorRegister
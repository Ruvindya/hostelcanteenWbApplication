import React from 'react';
import logo from "../../logo2.png"

// import axios from "axios";
// import {useEffect, useState} from "react";
import { useNavigate} from "react-router-dom";
import "../../App.css";

function CustomerMain(){
    const navigate = useNavigate();

    const PlaceOrder = async (e) => {
        e.preventDefault();
        try {
          navigate("/CustomorRegister");    
        
                      
        } catch (error) {
       console.log(error);
        }
    }
 

  return (
    <form >
    <div id="home">
        
        <h1 className='hungry'>HUNGRY!?</h1>
        <h4 className='Lets Dine In..'>Place Your Order</h4>
        <button   type="submit"  onClick={PlaceOrder} >Place Order</button>
        <button   type="submit"  onClick={PlaceOrder} >My Order</button>
        <button   type="submit"  onClick={PlaceOrder} >Updade My Details</button>
            
         <img className="logoHome" src={logo} alt="logo..." ></img> 
           <div className='user' >

          
</div> 
    </div>
    </form>
  )
}

export default CustomerMain
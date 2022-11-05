import React from 'react';
import axios from "axios";
import {useEffect, useState} from "react";
import "../App.css";

function AfterLoginUser() {

    const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/InfoUser/getUser").then((response) => {
      console.log(response.data);
      setListOfUsers(response.data);

    });
  }, []);


    return (
        <form  className="User" onSubmit={addItem} >     
      
          <div className="Login User Details" >
      
                        <label>User Id</label>
                        <input type="text" placeholder="" name="userId" required
                        value={userId} onChange={(e) => setuserId(e.target.value)}
                        />
      
                        <label>User Name</label>
                        <input type="text" placeholder="" name="name" required
                        value={name} onChange={(e) => setname(e.target.value)}
                        />
      
                        <label>User E-mail</label>
                        <input type="text" placeholder="" name="email" required
                        value={email} onChange={(e) => setemail(e.target.value)}
                        />
      
                        {/* <button   type="submit"  >addItem</button> */}
                        {/* <button   type="submit" onSubmit={ConfirmOrder} >ConfirmOrder</button> */}
      
          </div>
      
         
          
      
      
          </form>
      
          
        
        );
}

export default AfterLoginUser;
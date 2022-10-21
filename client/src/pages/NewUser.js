import React from 'react';
import axios from "axios";
import {useState } from "react";
import "../App.css";

function NewUser() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

   


  const Register = async (e) => {
    e.preventDefault();
  

    try {
        await axios.post('http://localhost:3001/InfoUser', {  
            name:name,
          email: email,
          userName:userName,
          password: password,
        })
        
    } catch (error) {
   console.log(error);
    }
     
}
  

  return (
   

  <form className="form" onSubmit={Register} >
    <h2>Registration</h2>
    <div className="App">
      <div className="registration" >

        

        <label>Name</label>
          <input type="name" placeholder="Ex:Name" name="name" required  
          value={name}  onChange={(e) => setName(e.target.value)} 
          />

        <label>E-mail</label>
          <input type="email" placeholder="Ex:name@abc.x" name="email" required
          value={email} onChange={(e) => setEmail(e.target.value)}
          />

        <label>UserName</label>
          <input type="userName" placeholder="Ex:username" name="userName" required
          value={userName} onChange={(e) => setUserName(e.target.value)}
          />

        <label>Password</label>
          <input type="Password" placeholder="Ex:abc123" name="password" required
          value={password} onChange={(e) => setPassword(e.target.value)}
          />

        <button   type="submit" >Register</button>
      </div>

    </div> 
    </form>
  
  );
}

export default NewUser;
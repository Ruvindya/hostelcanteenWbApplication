import React from 'react';
import axios from "axios";
import {useState } from "react";
import "../App.css";

function NewUser() {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

//
  const Register = async (e) => {
    e.preventDefault();
  

    try {
        await axios.post('http://localhost:3001/InfoUser/postUser', {  
            name:name,
          email: email,
          userName:userName,
          password: password,
        })
      
        
    } catch (error) {
   console.log(error);
    }
   setName('');
    setEmail('');
    setUserName('');
    setPassword('');

}
  

  return (
   

  <form className="form" onSubmit={Register} >
    <h2>Registration</h2>
    <div className="App">
      <div className="registration" >

        

        <label>Name</label>
          <input type="text" placeholder="Ex:Name" name="name" required  
          value={name}  onChange={(e) => setName(e.target.value)} 
          />

        <label>E-mail</label>
          <input type="text" placeholder="Ex:name@abc.x" name="email" required
          value={email} onChange={(e) => setEmail(e.target.value)}
          />

        <label>UserName</label>
          <input type="text" placeholder="Ex:username" name="userName" required
          value={userName} onChange={(e) => setUserName(e.target.value)}
          />

        <label>Password</label>
          <input type="password" placeholder="Ex:abc123" name="password" required
          value={password} onChange={(e) => setPassword(e.target.value)}
          />

        <button   type="submit" onSubmit={Register}>Register</button>
      </div>

    </div> 
    </form>
  
  );
}

export default NewUser;
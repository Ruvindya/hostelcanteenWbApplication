import React from "react"
import '../App.css';
import logo from "../logo2.png"
import {useEffect, useState} from "react";

const Navbar = () => {

  const [status, setstatus] = useState();
  

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className='container'>
        <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..."></img></a>
        <h4>HostelCanteen</h4>
    

    <button 
    className="navbar-toggler " 
    type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarNavDropdown" 
    aria-controls="navbarNavDropdown" 
    aria-expanded="false" 
    aria-label="Toggle navigation">

      <span className="navbar-toggler-icon"></span>
    </button>



    <div className="collapse navbar-collapse " id="navbarNavDropdown">
      <ul className="navbar-nav ml-auto">


        <li className="nav-item active">
          <a className="nav-link" href="/" >Home </a>
        </li>


        
{/* 
        <li className="nav-item">
          <a className="nav-link" href="/CustomorRegister">Place Order</a>
        </li> */}


        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            User
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

            <a className="dropdown-item" href="/NewUser">New User</a>
            <a className="dropdown-item" href="/DeleteUser">Delete User</a>
            

          </div>
        </li>

        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Menu
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

            <a className="dropdown-item" href="/GetMenuBreakFastItem">Get Breakfast Menu</a>
            <a className="dropdown-item" href="/GetMenuLunchItem">Get Lunch Menu</a>
            <a className="dropdown-item" href="/GetMenuDinnerItem">Get Dinner Menu</a>
            {/* <a className="dropdown-item" href="/UpdateMenu">Update Menu</a> */}
            <a className="dropdown-item" href="/AddMenuItem">Add Menu Item</a>
            <a className="dropdown-item" href="/GetOrderReport">Get Order Report</a>
            
          </div>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/LoginUser">Login</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" ><h3>status</h3></a>
        </li>


      </ul>
    </div>

    </div>
  </nav>
  

  <nav className="navbar navbar-expand-lg navbar-dark ">
      <div className='container'>
        <a className="navbar-brand" href="#"></a>
        
    

    <button 
    className="navbar-toggler " 
    type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarNavDropdown" 
    aria-controls="navbarNavDropdown" 
    aria-expanded="false" 
    aria-label="Toggle navigation">

      <span className="navbar-toggler-icon"></span>
    </button>



    <div className="collapse navbar-collapse " id="navbarNavDropdown">
      <ul className="navbar-nav ml-auto">


        <li className="nav-item active">
          <a className="nav-link" href="/Breakfast" >Breakfast </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/Lunch">Lunch</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/Dinner">Dinner</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/Cart ">Cart</a>
        </li>

      </ul>
    </div>

    </div>
  </nav>
  </div>
  )
}

export default Navbar
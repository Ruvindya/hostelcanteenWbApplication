import React from 'react';
import axios from "axios";
import {useEffect, useState} from "react";
//import { useNavigate} from "react-router-dom";
import '../App.css';

function Home(){

  //   const [listOfUsers, setListOfUsers] = useState([]);
  //   //let nevigate = useNavigate()
  // useEffect(() => {
  //   axios.get("http://localhost:3001/InfoUser").then((response) => {
  //     console.log(response.data);
  //     setListOfUsers(response.data);

  //   });
  // }, []);

  return (
    <div>
        <h1>User list</h1>
           <div className='user' >

            {/* <table>
                    <tr>
                        <td className='columnName'><h3>User ID</h3></td>
                        <td className='columnName'><h3>Name</h3></td>
                        <td className='columnName'><h3>El</h3></td>
                        <td className='columnName'> <h3>UserName</h3></td>
                    </tr>

                    {listOfUsers.map((value,key)=>(
                    <tr key={key}>
                        <td className='columnData'>{value.userId} </td> 
                        <td className='columnData'>{value.name}</td>
                        <td className='columnData'>{value.email}</td>
                        <td className='columnData'>{value.userName}</td>
                    </tr>

                    ))}
            </table> */}
</div> 
    </div>

  )
}

export default Home
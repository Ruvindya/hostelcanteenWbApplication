import React from 'react';
import axios from "axios";
import { confirmAlert } from 'react-confirm-alert';
import {useEffect, useState} from "react";
import "../App.css";

function DeleteUser() {

  const refreshPage = ()=>{
    window.location.reload();
 }

    const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/InfoUser/getUser").then((response) => {
      console.log(response.data);
      setListOfUsers(response.data);

    });
  }, []);


  const DeleteProcess = (userId) => {

    axios.delete(`http://localhost:3001/InfoUser/delete/${userId}`,userId).then((response) => {
      
      alert("User Deleted successfull");
      window.location.reload(false);  
      console.log(userId.response.data);
      
     
    }
    ).catch((err) => {
      console.log(err);
      alert("User Not Deleted");
    })
    ;
  };

  const confirmDelete = (userId) => {
    confirmAlert({
      title: 'Confirm to Delete',
      message: 'Are you sure to delete this user?',
      buttons : [
        {
          className: 'confirmAlert',
          label: 'Yes',
          style: {backgroundColor: 'red'},
          onClick: () => DeleteProcess(userId)
        },
        {
          label: 'No',
        }
      ]
    });
  };
  
  return (
    <div>
    <h1>User list</h1>
    <button onClick={refreshPage}>Refresh</button>


    {/* <div className={comboboxStyles} {...getComboboxProps()}>
    <input
      type="text"
      value={query}
      onChange={(event) => setQuery(event.target.value)}
      {...getInputProps()}
    />
    <button
      type="button"
      {...getToggleButtonProps()}
      aria-label="toggle menu"
    >
      &#8595;
    </button>
    <button type="submit">Search</button>
  </div> */}

       <div className='user'>

        <table>
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
                    <td><button onClick={() => confirmDelete(value.userId)}>Delete</button></td>
                </tr>

                ))}
        </table>
        
</div> 
</div>


  );
}

export default DeleteUser;
import React from 'react';
import axios from "axios";
import {useState, useEffect} from "react";
import "../App.css";
import {useNavigate} from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import 
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

function GetMenuDinnerItem() {


    const BLD ='D';
    const [listOfItems, setListOfItems] = useState([]);

    useEffect(() => {
      axios.get(`http://localhost:3001/InfoMenu/bybld/${BLD}`).then((response) => {
        
        setListOfItems(response.data)
        console.log(response)
  
      });
    }, []);

const navigate = useNavigate();

const toUpdateItem = (menuID) => {
  navigate("/UpdateMenu", { state: { menuID: menuID } });
};



const handleDelete = (menuID) => {

  axios.delete(`http://localhost:3001/InfoMenu/delete/${menuID}`).then((response) => {
    
    alert("Deleted Successfully");
    window.location.reload(false);     //refresh the page
    console.log(response.data);
  }
  ).catch((err) => {
    console.log(err);
    alert("Menu Item Not Deleted");
  })
  ;
};

// //DELERE CONFIRMATION ALERT BOX 
// const confirmDelete = (menuID) => {
//   confirmAlert({
//     title: 'Confirm to Delete',
//     message: 'Are you sure to do this.',
//     buttons : [
//       {
//         className: 'confirmAlert',
//         label: 'Yes',
//         style: {backgroundColor: 'red'},
//         onClick: () => handleDelete(menuID)
//       },
//       {
//         label: 'No',
//       }
//     ]
//   });
// };




  return (
   
  <form   >
    <div className="App">
<h2>Dinner Menue Item</h2>
            {/* <div className="SearchItemName" >

                <h1>Search by meal</h1>
                <h5>B-Breakfast L-Lunch D-Dinner</h5>

                <select name="BLD" className="custom-select" required value={BLD}  onChange={(e) => setBLD(e.target.value)}>

                            <option value="">Select Subject</option>
                            <option  value="B">B</option>
                            <option value="L">L</option>
                            <option value="D">D</option>

                            </select>

                <button type="submit" onSubmit={()=>GetItemDet}> Search </button>
            </div> */}
 
           

                        <table>
                                <tr>
                                    <td className='columnName'><h3>Menu Id   |   </h3></td>
                                    {/* <td className='columnName'><h3>BLD   |  </h3></td> */}
                                    <td className='columnName'><h3>item Name   |   </h3></td>
                                    <td className='columnName'><h3>Price   |   </h3></td>
                                    <td className='columnName'> <h3>isAvailable   |  </h3></td>.
                                    <td className='columnName'> <h3>Update   |   </h3></td>
                                    <td className='columnName'> <h3>Delete   |   </h3></td>
                                </tr>

                                {listOfItems.map((value,key)=>(
                                <tr key={key}>
                                    <td className='columnData'>{value.menuID} </td> 
                                    {/* <td className='columnData'>{value.BLD} </td>  */}
                                    <td className='columnData'>{value.itemName}</td>
                                    <td className='columnData'>{value.price}</td>
                                    <td className='columnData'>{value.isAvailabe}</td>
                                    <td><button onClick={() => toUpdateItem(value.menuID)}>Edit</button></td>
                                    <td><button onClick={() => handleDelete(value.menuID)}>Delete</button></td>
                                </tr>


                                ))}
                      </table>
              

    </div> 
    </form>
  
  );
}

export default GetMenuDinnerItem;
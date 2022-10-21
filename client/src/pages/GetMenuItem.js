import React from 'react';
import axios from "axios";
import {useState, useEffect} from "react";
import "../App.css";
import {useNavigate} from 'react-router-dom';


function GetMenuItem() {
    
    // const [BLD, setBLD] = useState('B');
    // const [itemName, setItemName] = useState('');
    // const [price, setPrice] = useState('');
    // const [isAvailabe, setAvailability] = useState('');
    const [listOfItems, setListOfItems] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:3001/InfoMenu/getItem").then((response) => {
        
        setListOfItems(response.data)
        console.log(response)
  
      });
    }, []);

//   const GetItemDet = async (e) => {
//     e.preventDefault();


//     try {

//       useEffect(() => {
//         axios.get("http://localhost:3001/InfoMenu/getItem").then((response) => {
          
//           setListOfItems(response.data)
//           console.log(response)
    
//         });
//       }, []);


//         // await axios.put('http://localhost:3001/InfoMenu', {  
//         //     BLD:BLD,
//         //     itemName: itemName,
//         //     price:price,
//         //     isAvailabe: isAvailabe,
//         // })
        
//     } catch (error) {
//    console.log(error);
//     }   
// }

const navigate = useNavigate();

const toUpdateItem = (menuID) => {
  navigate("/UpdateMenu", { state: { menuID: menuID } });
};


  return (
   
  <form className="form"  >
    <div className="App">

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

            <div className='user' >

                        <table>
                                <tr>
                                    <td className='columnName'><h3>Menu Id</h3></td>
                                    <td className='columnName'><h3>BLD</h3></td>
                                    <td className='columnName'><h3>item Name</h3></td>
                                    <td className='columnName'><h3>Price</h3></td>
                                    <td className='columnName'> <h3>isAvailable</h3></td>.
                                    <td className='columnName'> <h3>Update</h3></td>
                                </tr>

                                {listOfItems.map((value,key)=>(
                                <tr key={key}>
                                    <td className='columnData'>{value.menuID} </td> 
                                    <td className='columnData'>{value.BLD} </td> 
                                    <td className='columnData'>{value.itemName}</td>
                                    <td className='columnData'>{value.price}</td>
                                    <td className='columnData'>{value.isAvailabe}</td>
                                    <td><button onClick={() => toUpdateItem(value.menuID)}>Edit</button></td>
                                </tr>


                                ))}
                      </table>
              </div> 

    </div> 
    </form>
  
  );
}

export default GetMenuItem;
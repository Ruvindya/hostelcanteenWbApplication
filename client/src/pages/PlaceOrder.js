import React from 'react';
import axios from "axios";
import {useState } from "react";
import "../PlaceOrder.css";

function PlaceOrder() {

  const [listOfItems, setListOfTtems] = useState([]);

    //customer table attributess
   
    const [cusName, setCusName] = useState("");//order
    const [block, setBlock] = useState("");
    const [roomNo, setRoomNo] = useState();
    const [phoneNo, setPhoneNo] = useState();

    //orderDetails table attributes
    const [menuID, setMenuID] = useState(); //order
    const [qty, setQty] = useState();
    const [totPrice, setTotPrice] = useState();
 
    

    const [BLD, setBLD] = useState("B");
    const [itemName, setitemName] = useState();
    const [price, setprice] = useState();
    const [isAvailabe, setisAvailabe] = useState(); 
  
    

   //BLD for order table
   //totAmount have to calculate


//   const ConfirmOrder = async (e) => {
//     e.preventDefault();
  

//     try {
//         await axios.post('http://localhost:3001/InfoCustomer/postcustomer', {  
//           cusName:cusName,
//             block: block,
//             roomNo:roomNo,
//             phoneNo: phoneNo,
//         })
        
//     } catch (error) {
//    console.log(error);
//     }
// }



// const showMenu = async (e) => {
//   e.preventDefault();


//   try {
//       await axios.post('http://localhost:3001/InfoMenu/${B}', {  
//         cusName:cusName,
//           block: block,
//           roomNo:roomNo,
//           phoneNo: phoneNo,
          

//       })
      
//   } catch (error) {
//  console.log(error);
//   }  
// }
  

const addItem = async (e) => {
    e.preventDefault();
  

    try {
      await axios.post('http://localhost:3001/InfoCustomer/postcustomer', {  

        cusName:cusName,
            block: block,
            roomNo:roomNo,
            phoneNo:phoneNo,

        })
        await axios.post('http://localhost:3001/InfoOrderDetail/postOderDetails', {  
            //orderId:itemId,
            menuID: menuID,
            qty:qty,
            totPrice:totPrice,
        })


        
    } catch (error) {
   console.log(error);
    }
     
}

  return (
   

  <form  className="PlaceOrderForm" >
      <h1>Place Order</h1>
    <div className="CustomerDetails">

              <h5>Fill customer details</h5>

              <label className='name'>Customer Name</label>
                <input type="cusName" placeholder="Ex:Name" name="cusName" required  
                value={cusName}  onChange={(e) => setCusName(e.target.value)} 
                />

              <label>block</label>
                <input type="block" placeholder="Ex:A" name="block" required
                value={block} onChange={(e) => setBlock(e.target.value)}
                />

              <label>roomNo</label>
                <input type="roomNo" placeholder="Ex:012" name="roomNo" required
                value={roomNo} onChange={(e) => setRoomNo(e.target.value)}
                />

              <label>phoneNo</label>
                <input type="phoneNo" placeholder="EX:0771234567" name="phoneNo" required
                value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)}
                />

    </div> 


    <div className="orderDetails" >

                  <h5>Fill order details</h5>

                  <label>menuID</label>
                  <input type="menuID" placeholder="Ex:001" name="menuID" required
                  value={menuID} onChange={(e) => setMenuID(e.target.value)}
                  />

                  <label>qty</label>
                  <input type="qty" placeholder="Ex:1" name="qty" required
                  value={qty} onChange={(e) => setQty(e.target.value)}
                  />

                  <label>totPrice</label>
                  <input type="totPrice" placeholder="EX:0" name="totPrice" required
                  value={totPrice} onChange={(e) => setTotPrice(e.target.value)}
                  />

                  <button   type="submit" onSubmit={addItem} >AddItem</button>
                  {/* <button   type="submit" onSubmit={ConfirmOrder} >ConfirmOrder</button> */}

    </div>

    <div className='seeMenu'>
            <button   type="submit"  >showMenu</button>
    </div>

    <div className='MenuItems'>

        <table>
                <tr>
                    <td className='columnName'><h3>menuID</h3></td>
                    <td className='columnName'><h3>BLD</h3></td>
                    <td className='columnName'><h3>ItemName</h3></td>
                    <td className='columnName'> <h3>Price</h3></td>
                    <td className='columnName'> <h3>isAvailabe</h3></td>
                </tr>

                {listOfItems.map((value,key)=>(
                <tr key={key}>
                    <td className='columnData'>{value.menuID} </td> 
                    <td className='columnData'>{value.BLD}</td>
                    <td className='columnData'>{value.itemName}</td>
                    <td className='columnData'>{value.price}</td>
                    <td className='columnData'>{value.isAvailabe}</td>
                    
                </tr>

                ))}
        </table>
</div> 


    </form>

    
  
  );
}

export default PlaceOrder;
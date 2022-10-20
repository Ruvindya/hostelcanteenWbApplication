import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";

function App() {

  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/InfoUser").then((response) => {
      //console.log(response.data);
      setListOfUsers(response.data);

    });
  }, []);
   
//   return (
//     <div className="App">
//       <h1>Welcome</h1>
//       {listOfUsers.map((value, key) => {
//         return (
//          <div className='user'> 
//           <div className='name'> {value.name} </div>
//           <div className='email'> {value.email} </div>
//         </div>);
//       })};
//     </div>
//   );
// }

return (
  <div >
              <div className='user'>

                  <table>
                          <tr>
                              <td className='columnName'><h3>User ID</h3></td>
                              <td className='columnName'><h3>Name</h3></td>
                              <td className='columnName'><h3>E-mail</h3></td>
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
                  </table>
                  
              </div>
     

  </div>
)
{/* <td><button onClick={() => toUpdateStudent(value.Student_ID)}>Edit</button></td>
<td><button onClick={() => handleDelete(value.Student_ID)}>Remove</button></td>  */}

}

export default App;

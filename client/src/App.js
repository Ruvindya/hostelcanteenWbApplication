import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from "./pages/Home";
import NewUser from "./pages/NewUser";



import DeleteUser from "./pages/DeleteUser";
import AddMenuItem from "./pages/AddMenuItem";
import UpdateMenu from "./pages/UpdateMenu";
import GetMenuBreakFastItem from "./pages/GetMenuBreakFastItem";
import GetMenuLunchItem from "./pages/GetMenuLunchItem";
import GetMenuDinnerItem from "./pages/GetMenuDinnerItem";
import PlaceOrder from "./pages/Customor/PlaceOrder";
// import PlaceOrderUsingHome from "./pages/Customor/PlaceOrderUsingHome";
import Navbar from './pages/Navbar';
import LoginSelect from './pages/LoginSelect'; 

import LoginUser from './pages/LoginUser';


import CustomorRegister from './pages/Customor/CustomorRegister';
// import SelectMeal from './pages/Customor/SelectMeal';
import GetOrderReport from "./pages/GetOrderReport";
//import MyOrder from './pages/Customor/MyOrder';

function App() {
 
return (  
 
 <div className='App' > 
                  
  <Router>
    <Navbar/>
   
    
    <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/NewUser" exact element={<NewUser/>} />


      <Route path="/DeleteUser" exact element={<DeleteUser/>} />
      <Route path="/AddMenuItem" exact element={<AddMenuItem/>} />
      <Route path="/UpdateMenu" exact element={<UpdateMenu/>} />
      <Route path="/GetMenuBreakFastItem" exact element={<GetMenuBreakFastItem/>} />
      <Route path="/GetMenuLunchItem" exact element={<GetMenuLunchItem/>} />
      <Route path="/GetMenuDinnerItem" exact element={<GetMenuDinnerItem/>} />
      <Route path="/PlaceOrder" exact element={<PlaceOrder/>} />
      {/* <Route path='PlaceOrderUsingHome' exact element={<PlaceOrderUsingHome/>} /> */}
      <Route path="/LoginSelect" exact element={<LoginSelect/>} />


    <Route path="/LoginUser" exact element={<LoginUser/>} /> 

      <Route path="/CustomorRegister" exact element={<CustomorRegister/>} />
      {/* <Route path="/SelectMeal" exact element={<SelectMeal/>} /> */}
      <Route path="/GetOrderReport" exact element={<GetOrderReport/>} />
      {/* <Route path="/MyOrder" exact element={<MyOrder/>} /> */}
      

    </Routes>
  </Router>
 </div> 
//
 );

}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from "./pages/Home";
import NewUser from "./pages/NewUser";
import Login from "./pages/Login";
import DeleteUser from "./pages/DeleteUser";
import AddMenuItem from "./pages/AddMenuItem";
import UpdateMenu from "./pages/UpdateMenu";
import GetMenuBreakFastItem from "./pages/GetMenuBreakFastItem";
import GetMenuLunchItem from "./pages/GetMenuLunchItem";
import GetMenuDinnerItem from "./pages/GetMenuDinnerItem";
import PlaceOrder from "./pages/Customor/PlaceOrder";
import CustomorRegister from "./pages/Customor/CustomorRegister";
import Navbar from './pages/Navbar';

function App() {
 
return (

  //
 <div className='App' > 


                <Navbar/>

  <Router>
    {/* <Link to = "/HomePage"> Go to home  | </Link>
    <Link to = "/NewUser"> New User   | </Link>
    <Link to = "/Loggin"> login   |</Link>
    <Link to = "/DeleteUser"> Delete User   | </Link>
    <Link to = "/AddMenuItem"> Add Menu Item  |</Link>
    <Link to = "/UpdateMenu"> Update Menue    |</Link>
    <Link to = "/GetMenuItem"> Get Manu Item    |</Link>
    <Link to = "/PlaceOrder"> Place a Order</Link> */}
    
    <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/NewUser" exact element={<NewUser/>} />
      <Route path="/Loggin" exact element={<Login/>} />
      <Route path="/DeleteUser" exact element={<DeleteUser/>} />
      <Route path="/AddMenuItem" exact element={<AddMenuItem/>} />
      <Route path="/UpdateMenu" exact element={<UpdateMenu/>} />
      <Route path="/GetMenuBreakFastItem" exact element={<GetMenuBreakFastItem/>} />
      <Route path="/GetMenuLunchItem" exact element={<GetMenuLunchItem/>} />
      <Route path="/GetMenuDinnerItem" exact element={<GetMenuDinnerItem/>} />
      <Route path="/PlaceOrder" exact element={<PlaceOrder/>} />
      <Route path="/CustomorRegister" exact element={<CustomorRegister/>} />
    </Routes>
  </Router>
 </div> 
 );


}

export default App;

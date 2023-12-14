import {Route,Routes} from "react-router-dom";
import Home from "./home/Home";
import SignUp from "./signup/SignUp";
import Login from "./login/Login";

const AllRoutes = () => {
 return (
   <Routes>
    <Route path="/" element={<Home/>}/>
     <Route path="/signup" element={<SignUp/>}/>
     <Route path="/login" element={<Login/>}/>
   </Routes>
 )
}
export default AllRoutes
import {Route,Routes} from "react-router-dom";
import Home from "./home/Home";
import SignUp from "./signup/SignUp";

const AllRoutes = () => {
 return (
   <Routes>
    <Route path="/" element={<Home/>}/>
     <Route path="/signup" element={<SignUp/>}/>
   </Routes>
 )
}
export default AllRoutes
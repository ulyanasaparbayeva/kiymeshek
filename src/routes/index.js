import {Route,Routes} from "react-router-dom";
import Home from "./home/Home";
import SignUp from "./signup/SignUp";
import Login from "./login/Login";
import Categories from "./categories/Categories";
import Team from "./team/Team";


const AllRoutes = () => {
 return (
   <Routes>
    <Route path="/" element={<Home/>}/>
     <Route path="/signup" element={<SignUp/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/categories" element={<Categories/>}/>
     <Route path="/team" element={<Team/>}/>
   </Routes>
 )
}
export default AllRoutes
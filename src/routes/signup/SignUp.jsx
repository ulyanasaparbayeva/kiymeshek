import React from "react";
import sms from "../../images/sms.svg";
import lock from "../../images/lock.svg";
import { FiEyeOff } from "react-icons/fi";
import { TbUserSquareRounded } from "react-icons/tb";
import { FiEye  } from "react-icons/fi";
import {useState} from "react";
import {instance} from "../../api/axios";
import {useNavigate} from "react-router-dom";

import {Link,} from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isRoleVisible, setIsRoleVisible] = useState(false);
  const [userName, setUserName] = useState("");
  const [emails, setEmails] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");



  const HandleSignUp = (event) => {
   event.preventDefault();
    instance.post('/register', {
      userName,
      email: emails,
      password,
      role}
    ).then((response) => {
      console.log('Navigation to categories', response);
      navigate('/categories');
    }).catch((error) => {
      console.error('Error making POST request:', error);
    });
  }

return (
  <div className="bg-[url('./images/signup.png')] bg-cover relative bg-cover font-abc bg-signup">
   <div className="container">
     <div className="pt-custom-top pb-customs-bottom">
       <div className="bg-white text-center m-auto w-custom-width-2  rounded-custom-radius-4">
         <div className='font-semibold text-bold text-custom-size-3 pt-7'>Sing up</div>
         <div className='text-custom-size-4 text-secondary-4'>Sign up your new account</div>
         <form onSubmit={HandleSignUp} className="pt-custom-top-3 block px-customs-padding">
           <div className="flex items-center">
             <TbUserSquareRounded className="absolute ml-4" size='29'/>
             <input
               autoComplete="username"
               value={userName}
               onChange={(e) => setUserName(e.target.value)}
               placeholder="Username" className="block bg-secondary-7
              w-full p-4 indent-8 focus:outline-0 border-0 roboto
          rounded-custom-radius-5"/>
           </div>
           <div className="flex items-center mt-custom-margin-top-3">
             <img src={sms} className="absolute ml-4" />
             <input
               autoComplete="email"
               value={emails}
               onChange={(e) => setEmails(e.target.value)}
               className="block bg-secondary-7 indent-8 roboto
              w-full p-4 indent-4 focus:outline-0 border-0
          rounded-custom-radius-5" placeholder="Emails" />
           </div>
           <div className="flex items-center mt-custom-margin-top-3 relative">
             <img src={lock} className="absolute ml-4" alt="Lock Icon" />
             <input
               autoComplete="current-password"
               type={isPasswordVisible ? "text" : "password"}
               placeholder="Password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               className="block bg-secondary-7 indent-8 roboto w-full p-4 indent-4 focus:outline-0 border-0 rounded-custom-radius-5"
             />
             <div className="absolute right-0 pr-4 cursor-pointer" onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
               {isPasswordVisible ? <FiEye size="20px" /> : <FiEyeOff size="20px"/> }
             </div>
           </div>
           <div className="flex items-center mt-custom-margin-top-3 relative">
             <img src={lock} className="absolute ml-4" alt="Lock Icon" />
             <input
               autoComplete="off"
               type={isRoleVisible ? "text" : "password"}
               placeholder="Your password"
               value={role}
               onChange={(e) => setRole(e.target.value)}
               className="block bg-secondary-7 indent-8 roboto w-full p-4 indent-4 focus:outline-0 border-0 rounded-custom-radius-5"
             />
             <div className="absolute right-0 pr-4 cursor-pointer" onClick={() => setIsRoleVisible(!isRoleVisible)}>
               {isRoleVisible ? <FiEye size="20px" /> : <FiEyeOff size="20px"/> }
             </div>
           </div>
           <button className="text-white font-medium h-custom-height-1
            block w-full signup-btn mt-custom-margin-top-34" type="submit">Sing up</button>
           <div className="flex justify-center items-center pt-6 pb-custom-top-3 ">
             <div className="text-xl font-light roboto">Already have an account?</div>
             <Link to="/login" className="text-xl font-medium font-abc text-sm text-secondary-5">Login</Link>
           </div>
         </form>
       </div>
     </div>
   </div>
  </div>
)
}

export default SignUp
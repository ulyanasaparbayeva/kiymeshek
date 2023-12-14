import sms from "../../images/sms.svg";
import React from "react";
import {Link} from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-[url('./images/signup.png')] bg-cover relative bg-cover font-abc bg-signup">
      <div className="container">
        <div className="pt-custom-top pb-customs-bottom">
          <div className="bg-white px-custom-top-3  w-custom-width-2 m-auto rounded-custom-radius-4">
            <div className="pt-11 text-center font-abc text-black font-bold text-custom-top-5">Log in</div>
            <div className="text-center text-secondary-4 font-abc">Log in to your account</div>
            <div className="flex items-center mt-custom-margin-top-3">
              <img src={sms} className="absolute ml-4" />
              <input className="block bg-secondary-7 indent-8 roboto
              w-full p-4 indent-4 focus:outline-0 border-0
              rounded-custom-radius-5" placeholder="Emails" />
            </div>
            <div className="flex items-center mt-custom-margin-top-3">
              <img src={sms} className="absolute ml-4" />
              <input className="block bg-secondary-7 indent-8 roboto
              w-full p-4 indent-4 focus:outline-0 border-0
              rounded-custom-radius-5" placeholder="Emails" />
            </div>
            <div className="text-end pt-9 font-light  text-lg text-primary-2 pb-custom-bottom-4">
              Forgot your password?</div>
            <div className="text-center">
                <button className="w-full py-custom-padding bg-secondary-3 rounded-custom-radius-6
               text-black font-medium text-2xl font-abc">Log in</button>
              <div className="flex justify-center items-center pt-custom-top-7 gap-5 pb-custom-top-3 ">
                <div className="text-2xl font-light font-abc text-primary-2">You don't have an account?</div>
                <Link to="/signup" className="text-custom-size-45 font-light font-abc  text-secondary-8">Sing up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login
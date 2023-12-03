import '../../App.css';
const SignUp = () => {
return (
  <div className="bg-[url('./images/signup.png')] bg-cover relative bg-cover font-abc bg-signup">
   <div className="container">
     <div className="pt-custom-top pb-custom-bottom-2">
       <div className="bg-white text-center m-auto w-custom-width-2  rounded-custom-radius-4">
         <div className='font-semibold text-bold text-custom-size-3 pt-7'>Sing up</div>
         <div className='text-custom-size-4 text-secondary-4'>Sign up your new account</div>
         <form className="pt-custom-tops-3 block">
         <input className="" placeholder="Username" className="block"/>
           <input className="" placeholder="Username"  className="block"/>
           <input className="" placeholder="Username"  className="block"/>
           <input className="" placeholder="Username"  className="block"/>
         </form>
       </div>
     </div>
   </div>
  </div>
)
}

export default SignUp
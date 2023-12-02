import Header from "./Header";
import pattern from "../images/pattern.svg";


const Banner = () => {
 return (
   <div className="font-abc bg-[url('./images/banner.png')] bg-cover relative bg-cover relative">
       <Header/>
     <div className="pt-20 text-center text-white text-custom-size font-semibold leading-custom banner-text">WELCOME TO</div>
     <div className="text-center text-custom-size-2 font-semibold
      leading-custom banner-text-secondary pt-custom-top-2">KARAKALPAKSTAN</div>
     <div className="text-center mt-custom-margin-top-1 ">
       <button className="flex rounded-custom-radius-2 p-1.5 gap-6 items-center justify-center m-auto
        bg-white  justify-center text-black font-semibold  text-2xl">
         <img src={pattern}/>
         Go
         <img src={pattern}/>
       </button>
     </div>
     <div className="bg-white custom-padding-2 w-custom-radius-3 m-auto text-center">
       <div className="flex justify-center">
       </div>
     </div>
   </div>
 )
}
export default Banner
import Header from "./Header";
import pattern from "../images/pattern.svg";
import img1 from "../images/services_1.svg";
import img2 from '../images/services_2.png';
import img3 from '../images/services_3.svg';
import img4 from '../images/services_4.png';
import img5 from '../images/services_5.png';

const Banner = () => {
  const ourServices = [
    {
      img: img1,
      title:'food'
    },
    {
      img: img2,
      title:'Dress'
    },
    {
      img:img3,
      title:'Traditions'
    },
    {
      img:img4,
      title:'History'
    },
    {
      img:img5,
      title:'Music'
    },
  ];
 return (
   <div>
     <div className="font-abc bg-[url('./images/banner.png')] bg-cover relative bg-cover">
       <Header/>
       <div className="pt-20 text-center text-white text-custom-size font-semibold leading-custom banner-text">WELCOME TO</div>
       <div className="text-center text-custom-size-2 font-semibold
      leading-custom banner-text-secondary pt-custom-top-2">KARAKALPAKSTAN</div>
       <div className="text-center mt-custom-margin-top-1 pb-custom-bottom-1">
         <button className="flex rounded-custom-radius-2 p-1.5 gap-6 items-center justify-center m-auto
        bg-white  justify-center text-black font-semibold  text-2xl">
           <img src={pattern}/>
           Go
           <img src={pattern}/>
         </button>
       </div>
       <div className="bg-white categories mb-20 w-custom-width-3 text-center m-auto pt-custom-top-5 pb-custom-top-5">
         <div className="grid grid-cols-5">
           {
             ourServices.map((service, index) =>
               <div key={service.title + index} className="company cursor-pointer">
                 <img src={service.img}  className="text-center m-auto h-[90px] object-contain h-custom-height"
                      loading="lazy"/>
                 <div  className="text-black pt-custom-top-6  text-center font-semibold text-custom-size-45">
                   {service.title}</div>
               </div>
             )
           }
         </div>
       </div>
     </div>
   </div>
 )
}
export default Banner
import img1 from "../../images/services_1.svg";
import img2 from "../../images/services_2.png";
import img3 from "../../images/services_3.svg";
import img4 from "../../images/services_4.png";
import img5 from "../../images/services_5.png";


const Categories = () => {
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
    <div className="bg-prim">
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
  )
}
export  default Categories
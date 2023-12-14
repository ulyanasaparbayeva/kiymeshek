import symbol from "../images/symbol.svg";
import symbol_2 from "../images/symbol_2.svg";
import country from "../images/country.jpg";
import {v4 as uuidv4} from "uuid";
import pattern from "../images/pattern.svg";


const Country = () => {
  const ourCulture = [
    {
      img: pattern,
      description:'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu '
    },
    {
      img: pattern,
      description:'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu '
    },
    {
      img: pattern,
      description:'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu '
    }
  ];

  return (
    <div className="font-abc">
      <div className="flex">
        <img src={symbol}/>
        <div className="text-black font-semibold text-custom-size-6">Welcome to Karakalpakstan</div>
        <img src={symbol_2}/>
      </div>
      <div className="container">
        <div className="grid grid-cols-2 pt-20 gap-custom-top-8">
           <div className="text-black font-light text-custom-size-45">
             <div>
               Karakalpakstan is famous for its ancient architectural monuments and, of course, the Aral Sea.
             </div>
             <div>
               The culture and history of the Karakalpak people is extremely rich, because people on this territory lived in the Neolithic era
             </div>
             <div>
               Karakalpakstan is located in the north-west of Uzbekistan and is its largest region. Most of this region is occupied by the Kyzylkum desert, the Aral sea and the Ustyurt plateau.
             </div>
           </div>
          <div>
            <img src={country} className="rounded-custom-radius-2 w-custom-width-1 h-custom-height-2"/>
          </div>
        </div>
        <div className="grid grid-cols-3 pt-20 gap-10">
          {
            ourCulture.map((culture, index) =>
              <div key={uuidv4()} className="company cursor-pointer">
                <img src={culture.img}  className="text-center m-auto w-custom-width-6"
                     loading="lazy"/>
                <div  className="text-black text-center font-light text-custom-size-45 pt-custom-top-9">
                  {culture.description}</div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}
export default Country
import pattern from "../../images/pattern.svg";
import {v4 as uuidv4} from "uuid";

const  Team = () => {
  const ourTeam = [
    {
      name:'Shariyar Nazarbaev',
      title:'UX/UI designer'
    },
    {
      name:'Dauranbek Khojaniyazov',
      title:'Backend developer'
    },
    {
      name:'Faxriddin Ibraimov',
      title:'Frontend developer'
    },
    {
      name:'Adelya Sarsenbaeva',
      title:'Face of the project'
    },
    {
      name:'Nazokat Kalnazarova',
      title:'SMM manager'
    },
    {
      name:'Ramazan Janizakov',
      title:'Copywriter'
    },
    {
      name:'Berdakh Aytekov',
      title:'Copywriter'
    },
    {
      name:'Perizat Kojambergenova',
      title:'Translator'
    },
    {
      name:'Begzad Bazarbaev',
      title:'Mobilographer'
    },
    {
      name:'Yusup Dauletmuratov',
      title:'Translator'
    },
  ];
  return (
    <div className="font-abc">
      <div className="container">
        <div className="flex items-center pt-custom-top-11 justify-center gap-custom-gap-2
         pt-custom-top-11 pb-custom-bottom-5">
          <div className="border-[1px]  border-secondary-9 w-custom-width-4"></div>
          <img src={pattern}/>
          <div className="text-center  text-black text-3xl font-semibold">
            Our Team
          </div>
          <img src={pattern}/>
          <div className="border-[1px] border-secondary-9 w-custom-width-4"></div>
        </div>
        <div className="grid grid-cols-3 gap-10 pb-20">
          {
            ourTeam.map((team, index) =>
              <div key={uuidv4()} className="border-[1px] border-black">
                <div className="h-custom-height-3"></div>
                <div className="border-[1px] border-black"></div>
                <div className="px-5">
                  <div className="text-black text-custom-size-45 font-semibold pt-custom-top-14">{team.name}</div>
                  <div  className="text-black font-light text-xl  pt-3 pb-custom-bottom-6">
                    {team.title}</div>
                </div>
              </div>
            )
          }
        </div>
      </div>
     </div>
  )
}
export default Team
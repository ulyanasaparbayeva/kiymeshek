import logo from "../images/logo.svg";
import arrow from "../images/arrow.svg";
import search from "../images/search.svg";
import {Link, useLocation} from "react-router-dom";
const exceptionalRoutes = ['/signup','/login']
const Header = () => {
  const location = useLocation();

  return  !exceptionalRoutes.includes(location.pathname) ? (
    <div className="font-abc">
      <div className="container">
        <div className="flex items-center pt-custom-top-1 justify-between">
          <div className='flex items-center gap-custom-gap'>
            <Link to="/">
              <img src={logo}/>
            </Link>
            <div className="relative">
              <input  placeholder="Search..."
                      className="w-custom-width-1 custom-padding border-none rokkitt
                    focus:outline-0  rounded-custom-radius bg-primary font-dfg font-light text-xl "/>
              <img src={search} className="left-custom-left absolute right-6 top-custom-top bottom-[15px] cursor-pointer"/>
            </div>
          </div>
          <div className="flex items-center gap-10">
            <div className="flex gap-1 items-center text-black font-medium rokkitt text-xl">En
              <img src={arrow}/>
            </div>
            <Link to="/signup">
              <button className="rounded-custom-radius  rokkitt text-black font-medium font-dfg cursor-pointer text-xl h-11 justify-center
             bg-primary w-custom-width flex items-center">
                Sing up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : <></>
}
export default  Header
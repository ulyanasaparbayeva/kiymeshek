import logo_footer from "../images/logo_footer.svg";
import copyright from "../images/copyright.svg";
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";
const Footer = () => {
  const location = useLocation();
  return (
    location.pathname !== "/signup" && location.pathname !== "/login") ?(
    <div className="font-abc bg-[url('./images/footer.png')] bg-cover relative bg-cover">
      <div className="container">
        <img src={logo_footer} className="text-center  m-auto pt-custom-top-4"/>
        <div className="flex items-center justify-center text-white text-xl font-medium pt-custom-top-4 gap-8 pb-12">
          <Link to="/categories">Categories</Link>
          <Link to="/">Post</Link>
          <Link to="team">About our team</Link>
          <Link to="">Support</Link>
        </div>
        <div className="text-white text-xl font-light text-center pb-custom-bottom-3 flex items-center justify-center gap-1.5">
          <img src={copyright}/>
          2023 All Rights Reserved </div>
      </div>
    </div>
  ):<></>

}
export default Footer
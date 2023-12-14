
import Banner from "../../components/Banner";
import {Slider} from '../../components/Slider'
import Country from "../../components/Country";
import CountryInfo from "../../components/CountryInfo";
import Post from "../../components/Post";
const Home = () => {
return (
  <div>
   <Banner/>
    <Country/>
    <CountryInfo/>
    <Post/>
    <Slider/>
  </div>
)
}
export default Home
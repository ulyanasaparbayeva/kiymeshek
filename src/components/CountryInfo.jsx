import countryinfo  from "../images/countryinfo.jpg";
import countryinfo_2  from "../images/countryinfo_2.jpg";
import countryinfo_3  from "../images/countryinfo_3.jpg";

const CountryInfo = () => {
  return (
    <div className="font-abc">
      <div className="container">
        <div className="pt-custom-top-10 text-center text-black font-semibold text-3xl">Welcome to Karakalpakstan</div>
        <div className="text-center pt-custom-top-11 text-black font-light text-custom-size-45">
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu </div>
        <div className="grid grid-cols-3 pt-custom-top-8 gap-10">
          <div>
            <img src={countryinfo} className="rounded-custom-radius-2"/>
          </div>
          <div>
            <img src={countryinfo_2} className="rounded-custom-radius-2"/>
          </div>
          <div>
            <img src={countryinfo_3} className="rounded-custom-radius-2"/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CountryInfo
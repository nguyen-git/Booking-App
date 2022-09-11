import "./hotel.scss";
import NavBar from "../../component/navbar/NavBar.jsx";
import Header from "../../component/header/Header.jsx";
import MailList from "../../component/mailList/MailList.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useLocation,useNavigate } from "react-router-dom";
import useFetch from "../../hook/useFetch.js";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/searchContext";
import { AuthContext } from "../../context/authContext";
import Reserve from "../../component/reserve/Reserve.jsx";

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { date, options } = useContext(SearchContext);
  const {user} = useContext(AuthContext)
  const [openModel, setOpenModel] = useState(false);

  const { data, loading } = useFetch(
    `http://localhost:6102/api/hotel/find/${id}`
  );

  
  // calculate the days stay in hotels
  
  const MILlISECONDS_PER_DATE = 1000 * 60 * 24 * 60;

  const dayDifference = (startDate, endDate) => {
    const timeDiff = Math.abs(endDate?.getTime() - startDate?.getTime());
    const diffDays = Math.ceil(timeDiff / MILlISECONDS_PER_DATE);
    return diffDays;
  };
  const days = dayDifference(date[0]?.endDate, date[0]?.startDate);


  const navigate = useNavigate();
  const handleReservation = () => {
    if(user) {
      setOpenModel(true)
    } else {
      navigate("/");
    }

  };

  return (
    <div className="hotel">
      <NavBar />
      <Header type="hotels" />
      {loading ? (
        "loading..."
      ) : (
        <>
          <div className="hotelContainer">
            <div className="hotelWrapper">
              <button className="bookNow">Reserve or book now!</button>
              <h1 className="hotelTitle">{data.name}</h1>
              <div className="hotelAddress">
                <FontAwesomeIcon icon={faLocationDot} />
                <span>Elton St 125 New York</span>
              </div>
              <span className="hotelDistance">
                Excellent location - {data.distance} for center
              </span>
              <span className="hotelPriceHighLight">
                Book a stay over ${data.cheapestPrice} at this property and get
                free airport taxi
              </span>
              <div className="hotelDetails">
                <div className="hotelDetailText">
                  <h1 className="hotelTitle">{data.title}</h1>
                  <p className="hotelDesc">{data.desc}</p>
                </div>
                <div className="hotelPrice">
                  <h2>Perfect for a {days} days stay</h2>
                  <span>
                    located in the real heart of Krakow, this property has an
                    excellent location score of 9.8
                  </span>
                  <h3>
                    <b>
                      $
                      {days === 0 ? data.cheapestPrice : days * data.cheapestPrice * options.room}
                    </b>{" "}
                    ({days} days)
                  </h3>
                  <button onClick={handleReservation}>Reserve or book now!</button>
                </div>
              </div>
            </div>
            <MailList />
          </div>
        </>
      )}
      {openModel && <Reserve setOpen={setOpenModel} hotelId={id}/>}
    </div>
  );
};

export default Hotel;

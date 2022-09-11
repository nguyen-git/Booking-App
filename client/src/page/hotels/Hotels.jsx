import "./hotels.scss";
import NavBar from "../../component/navbar/NavBar.jsx";
import Header from "../../component/header/Header.jsx";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../component/searchItem/SearchItem";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import useFetch from "../../hook/useFetch.js";

const Hotels = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, loading, reFetch } = useFetch(
    `http://localhost:6102/api/hotel?city=${destination}&min=${min || 0}&max=${
      max || 999
    }`
  );

  const handleSearch = () => {
    reFetch();
  };
  return (
    <div>
      <NavBar />
      <Header type="hotels" />
      <div className="hotelsContainer">
        <div className="hotelsWrapper">
          <div className="hotelsSearch">
            <h2 className="hotelsTitle">Search</h2>
            <div className="hotelsItem">
              <label htmlFor="">Destination</label>
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <div className="hotelsItem">
              <label htmlFor="">Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
            </div>
            <div className="hotelsItem">
              <label htmlFor="">Options</label>
              <div className="hotelsOptionsItem">
                <label className="hotelsItemText">
                  Min Price <small>per night</small>
                </label>
                <input
                  type="text"
                  className="hotelsItemInput"
                  onChange={(e) => setMin(e.target.value)}
                />
              </div>
            </div>
            <div className="hotelsItem">
              <div className="hotelsOptionsItem">
                <label className="hotelsItemText">
                  Max Price <small>per night</small>
                </label>
                <input
                  type="text"
                  className="hotelsItemInput"
                  onChange={(e) => setMax(e.target.value)}
                />
              </div>
            </div>
            <div className="hotelsItem">
              <div className="hotelsOptionsItem">
                <label className="hotelsItemText">Adult</label>
                <input
                  type="number"
                  min={1}
                  className="hotelsItemInput"
                  placeholder={options.adult}
                  onChange={(e) => setOptions(e.target.value)}
                />
              </div>
            </div>
            <div className="hotelsItem">
              <div className="hotelsOptionsItem">
                <label className="hotelsItemText">Children</label>
                <input
                  type="number"
                  min={0}
                  className="hotelsItemInput"
                  placeholder={options.children}
                  onChange={(e) => setOptions(e.target.value)}
                />
              </div>
            </div>
            <div className="hotelsItem">
              <div className="hotelsOptionsItem">
                <label className="hotelsItemText">Room</label>
                <input
                  type="number"
                  min={1}
                  className="hotelsItemInput"
                  placeholder={options.room}
                  onChange={(e) => setOptions(e.target.value)}
                />
              </div>
            </div>
            <button onClick={handleSearch}>Search</button>
          </div>
          {openDate && (
            <DateRange
              onChange={(item) => setDate([item.selection])}
              ranges={date}
              minDate={new Date()}
              className="dateSearch"
            />
          )}

          <div className="hotelsResult">
            {loading ? (
              "loading..."
            ) : (
              <>
                {data.map((hotel) => (
                  <SearchItem hotel={hotel} key={hotel._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotels;

import "./searchItem.scss";
import image from "../../asset/image/featured/helmet.jpg";
import { Link } from "react-router-dom";

const SearchItem = ({ hotel }) => {
  return (
    <div className="searchItem">
      <img src={image} alt="" className="searchImage" />
      <div className="searchContent">
        <h2 className="searchTitle">{hotel.name}</h2>
        <span className="searchDistance">{hotel.distance} from center</span>
        <span className="searchTaxi">Free taxi</span>
        <span className="searchSubTitle">500m from center</span>
        <span className="searchFeature">{hotel.featured}</span>
        <span className="searchCancel">Free Cancel</span>
        <span className="searchCancelSub">{hotel.desc}</span>
      </div>
      <div className="searchDetail">
        {hotel.rating && (
          <div className="searchRating">
            <span>Excellent</span>
            <button>{hotel.rating}</button>
          </div>
        )}
        <div className="searchDetailText">
          <span className="searchPrice">{hotel.cheapestPrice}$</span>
          <span className="searchTax">Include tax and fees</span>
          <Link to={`/hotel/${hotel._id}`}>
            <button className="searchCheckBtn">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;

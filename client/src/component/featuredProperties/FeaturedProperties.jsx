import "./featuredProperties.scss";
import image from "../../asset/image/featured/helmet.jpg";
import useFetch from "../../hook/useFetch.js";

const FeaturedProperties = () => {
  const { data, loading } = useFetch(
    "http://localhost:6102/api/hotel/?featured=true&limit=4"
  );
  return (
    <div className="fp">
      {loading ? (
        "loading..."
      ) : (
        <>
          {data.map((hotel) => (
            <div className="fpItem" key={hotel._id}>
              <img src={image} alt="" className="fpImage" />
              <span className="fpName">{hotel.name}</span>
              <span className="fpCity">{hotel.city}</span>
              <span className="fpPrice">Starting from ${hotel.cheapestPrice}</span>
              {hotel.rating && <div className="fpRating">
                <button>{hotel.rating}</button>
                <span>Excellent</span>
              </div>}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;

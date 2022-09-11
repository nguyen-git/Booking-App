import "./propertyList.scss";
import image from "../../asset/image/featured/helmet.jpg";
import useFetch from "../../hook/useFetch.js";

const PropertyList = () => {
  const { data, loading } = useFetch(
    "http://localhost:6102/api/hotel/countByType"
  );
  return (
    <div className="proList">
      {loading ? (
        "loading..."
      ) : (
        <>
          <div className="proListItem">
            <img src={image} alt="" className="proListImage" />
            <div className="proListTitle">
              <h2>Hotels</h2>
              <h3>
                {data[0]?.count} {data[0]?.type}
              </h3>
            </div>
          </div>
          <div className="proListItem">
            <img src={image} alt="" className="proListImage" />
            <div className="proListTitle">
              <h2>Apartment</h2>
              <h3>
                {data[1]?.count} {data[1]?.type}
              </h3>
            </div>
          </div>
          <div className="proListItem">
            <img src={image} alt="" className="proListImage" />
            <div className="proListTitle">
              <h2>Resort</h2>
              <h3>
                {data[2]?.count} {data[2]?.type}
              </h3>
            </div>
          </div>
          <div className="proListItem">
            <img src={image} alt="" className="proListImage" />
            <div className="proListTitle">
              <h2>Villas</h2>
              <h3>
                {data[3]?.count} {data[3]?.type}
              </h3>
            </div>
          </div>
          <div className="proListItem">
            <img src={image} alt="" className="proListImage" />
            <div className="proListTitle">
              <h2>Cabins</h2>
              <h3>
                {data[4]?.count} {data[4]?.type}
              </h3>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PropertyList;

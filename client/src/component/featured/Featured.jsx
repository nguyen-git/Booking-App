import React from 'react';
import "./featured.scss";
import image from "../../asset/image/featured/helmet.jpg";
import useFetch from '../../hook/useFetch.js';

const Featured = () => {
  const {data, loading} = useFetch("http://localhost:6102/api/hotel/countByCity?cities=marid,london");
  return (
    <div className='featured'>
      {loading ? "loading" :<>
        <div className="featuredItem">
          <img src={image} alt="featuredImage" className="featuredImage"/>
          <div className="featuredTitle">
              <h2>title</h2>
              <h3>{data[0]} properties</h3>
          </div>
        </div><div className="featuredItem">
          <img src={image} alt="featuredImage" className="featuredImage"/>
          <div className="featuredTitle">
              <h2>title</h2>
              <h3>{data[1]} properties</h3>
          </div>
        </div>
        <div className="featuredItem">
          <img src={image} alt="featuredImage" className="featuredImage"/>
          <div className="featuredTitle">
              <h2>title</h2>
              <h3>{data[2]} properties</h3>
          </div>
        </div>
      </>}
    </div>
  )
}

export default Featured

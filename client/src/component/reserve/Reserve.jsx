import React, { useState } from "react";
import "./reserve.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../hook/useFetch.js";

const Reserve = ({ setOpen, hotelId }) => {
    const [selectedRoom, setSelectedRoom] = useState([]);
  const { data } = useFetch(`http://localhost:6102/api/hotel/room/${hotelId}`);
  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRoom(checked ? [...selectedRoom, value] : selectedRoom.filter((room) => room !== value));
  };
  return (
    <div className="reserve">
      <div className="reserveContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="reserveIcon"
          onClick={() => setOpen(false)}
        />
        <span>select your room</span>
        {data.map((room) => (
          <div className="roomItem" key={room.id}>
            <div className="roomInfo">
              <div className="roomTitle">{room.name}</div>
              <div className="roomDesc">{room.desc}</div>
              <div className="roomMax">
                Max people: <b>{room.maxPeople}</b>
              </div>
            </div>
            {room.roomNumber.map((roomNumber) => (
              <div className="room">
                <label>{roomNumber.number}</label>
                <input type="checkbox" value={roomNumber._id} onChange={handleSelect} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reserve;

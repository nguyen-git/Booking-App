import { useContext } from "react";
import "./navBar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
const NavBar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="navBar">
      <div className="navContainer">
        <Link
          to="/"
          style={{ textDecoration: "none", color: "white", cursor: "pointer" }}
        >
          <span className="logo">PN Booking</span>
        </Link>
        {user ? 
          user.username
         : 
          (<div className="navItem">
            <Link to="/register">
              <button className="navBtn">Register</button>
            </Link>
            <Link to="/login">
              <button className="navBtn">Login</button>
            </Link>
          </div>)
        }
      </div>
    </div>
  );
};

export default NavBar;

import { useState } from "react";
import { NavLink } from "react-router-dom";
// import { PiArrowDown } from "react-icons/pi";
import { FaArrowAltCircleDown } from "react-icons/fa";
import "../css/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="navbar-hamburgher">
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className={
            isOpen ? "hamburgher-wrapper" : "hamburgher-wrapper-closed"
          }
        >
          <div
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className="nav-icon"
          >
            {/* <PiArrowDown></PiArrowDown> */}
            <FaArrowAltCircleDown
              id={isOpen ? "arrow-icon-open" : "arrow-icon-closed"}
            />
          </div>
        </div>
      </div>
      <div
        className="navbar"
        style={{
          visibility: isOpen ? "visible" : "hidden",
          opacity: isOpen ? "1" : "0",
        }}
      >
        <div className="nav-wrapper">
          <div
            onMouseEnter={() => {
              setIsOpen(true);
            }}
            onMouseLeave={() => {
              setIsOpen(false);
            }}
            className="nav-links"
          >
            <ul>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/our-mission"}>Our Mission</NavLink>
              </li>
              <li>
                <NavLink to={"/productions"}>Productions</NavLink>
              </li>
              {/* <li>
                <NavLink to={"/contact-us"}>Contact Us</NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

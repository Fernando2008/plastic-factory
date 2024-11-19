import { NavLink } from "react-router-dom";
// import { FaInstagram, FaEnvelope } from "react-icons/fa";
import "../css/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <p
          id="footer-get"
          style={{ cursor: "pointer" }}
          onClick={() => {
            window.open("https://mattmantou.com/", "_blank");
          }}
        >
          Back to Matt Mantou
        </p>
        {/* <div className="footer-icons">
          <a href="#">
            <FaInstagram className="footer-react-icons"></FaInstagram>
          </a>
          <a href="#">
            <FaEnvelope className="footer-react-icons"></FaEnvelope>
          </a>
        </div> */}
        <div className="footer-links">
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
              <NavLink to={"/contact-us"}>Contact us</NavLink>
            </li> */}
          </ul>
        </div>
        <div className="footer-credits">
          <div className="footer-rights">
            &copy; 2024 Plastic Factory Films. All rights are reserved.
          </div>
          <div className="footer-c">
            Website created by: Fabio De Masa, Fernando Togna, Gian Piero
            Raffio, Donatella Meoli, Domenico Pisani, Antonio Malfi, Alessandro.
            Pispisa, Omar Jamili
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

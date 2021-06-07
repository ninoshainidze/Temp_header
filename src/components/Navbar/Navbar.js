import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AiFillHome } from "react-icons/ai";
import { MdEventAvailable } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { CgPhone } from "react-icons/cg";
import "./Navbar.css";

const Navbar = ({ show }) => {
  return (
    <div className={show ? "sidenav active" : "sidenav"}>
      <img src={logo} alt="logo" className="logo" />
      <h3>მთავარი მენიუ</h3>
      <ul>
        <li>
          <NavLink exact to="/">
            <AiFillHome />
            <span>მთავარი</span>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/event">
            <MdEventAvailable />
            <span>ღონისძიებები</span>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/userhistory">
            <FaShoppingCart />
            <span> ჩემი ისტორია</span>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/about">
            <BsFillInfoCircleFill />
            <span> ჩვენს შესახებ</span>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/contact">
            <CgPhone />
            <span>კონტაქტი</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

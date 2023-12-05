import { Link } from "react-router-dom";
import "../styles/_navbar.scss";
import logo from "../images/car-rental-icon.png";
import { IconMenu2, IconX } from "@tabler/icons-react";

import { useEffect, useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  function openNav() {
    setNav(!nav);
  }

  return (
    <>
      <nav>
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <IconX width={30} height={30} />
          </div>
          <ul className="mobile-navbar__links">
            <li>
              <Link onClick={openNav} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/models">
                Models
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/testimonials">
                Testimonials
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/team">
                Our Team
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className={`navbar`}>
          <div className="navbar-img">
            <Link to="/">
              <img src={logo} />
            </Link>
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/models">Vehicle Models</Link>
            </li>
            <li>
              <Link to="/testimonials">Testimonials</Link>
            </li>
            <li>
              <Link to="/team">Our Team</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="navbar-buttons">
            <Link to="/" className="navbar-buttons__sign-in">
              Sign In
            </Link>
            <Link to="/" className="navbar-buttons__registration">
              Register
            </Link>
          </div>

          <div className="mobile-hamb" onClick={openNav}>
            <IconMenu2 width={30} height={30} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

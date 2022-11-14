import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <nav className="navbar" id="navbar">
      <div className="container navbar-content flex">
        <div className="brand-and-toggler flex flex-sb">
          <Link to="/" className="navbar-brand flex">
            <img
              className="logo"
              src="https://www.freepnglogos.com/uploads/book-png/colorful-books-transparent-background-12.png"
              alt="logo"
            ></img>
            <span className="text">Reader APP</span>
          </Link>
          <button
            type="button"
            className="navbar-toggler-btn"
            onClick={handleNavbar}
          >
            <HiOutlineMenuAlt3
              size={35}
              style={{
                color: `${toggleMenu ? "#fff" : "#010101"}`,
              }}
            />
          </button>
        </div>

        <div
          className={
            toggleMenu
              ? "navbar-collapse show-navbar-collapse"
              : "navbar-collapse"
          }
        >
          <ul className="navbar-nav">
            <li>
              <Link to="/mylist" className="mylist-link">
                MyList
              </Link>
            </li>
            <li>
              <Link to="/completed" className="read-link">
                Completed
              </Link>
            </li>
            <div className="list-icon-text"></div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

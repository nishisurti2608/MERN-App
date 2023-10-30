import React from "react";
import { NavLink, Link } from "react-router-dom";
import { HiShoppingBag } from "react-icons/hi";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand" href="#">
          <HiShoppingBag />
          E-Commerce
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <NavLink to="/" className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/register" className="nav-link" href="#">
                Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/login" className="nav-link" href="#">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cart" className="nav-link" href="#">
                Cart(0)
              </NavLink>
            </li>

            <li className="nav-item"></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;

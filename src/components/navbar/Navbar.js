import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Wrapper } from "./Navbar.Style";

const Navbar = () => {
  const authentication = useSelector((state) => state.authentication.login);
  return (
    <Wrapper>
      <li>
        <Link to="/userdata" className="active" href="#">
          Contacts
        </Link>
      </li>
      <li>
        <Link to="/add" href="#">
          Create Contact
        </Link>
      </li>
      <div className="auth">
        {authentication ? (
          <li>
            <Link to="/" href="#">
              Log Out
            </Link>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login" className="active" href="#">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" href="#">
                Sign Up
              </Link>
            </li>
          </>
        )}
      </div>
    </Wrapper>
  );
};

export default Navbar;

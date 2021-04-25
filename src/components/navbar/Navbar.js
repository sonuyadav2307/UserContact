import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {authenticateUsers} from '../../redux/actions/authentication'
import { Link } from "react-router-dom";
import {Button, message} from "antd"
import { Wrapper } from "./Navbar.Style";

const Navbar = () => {
  const dispatch = useDispatch()
  const authentication = useSelector((state) => state.authentication.login);
  const logout = () => {
    dispatch(authenticateUsers())
    localStorage.removeItem('state')
    message.success("Logout")
  }
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
            <Link to="/login" href="#">
              <Button onClick={logout} ghost>Log Out</Button>
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

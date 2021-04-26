import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Button, message } from "antd";
import { isBirthday } from "../../helpers/dateHelpers";
import { logout } from "../../redux/actions/authentication";
import BirthdayNotification from "../BirthdayNotification";
import { Wrapper } from "./Navbar.Style";

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const authentication = useSelector((state) => state.authentication.login);
  const user = useSelector((state) => state.authentication.user);
  const logoutHandler = () => {
    dispatch(logout());
    localStorage.removeItem("state");
    history.push("/login");
    message.success("Logout");
  };

  return (
    <Wrapper>
      {isBirthday(user.nextWishDate) && BirthdayNotification(user)}
      <ul className="menu">
        <li>
          <Link to={`${process.env.PUBLIC_URL}/userdata`} className="active">
            Contacts
          </Link>
        </li>
        <li>
          <Link to={`${process.env.PUBLIC_URL}/add`}>Create Contact</Link>
        </li>
      </ul>
      <ul className="auth">
        {authentication ? (
          <li>
            <Button onClick={logoutHandler} ghost>
              Log Out
            </Button>
          </li>
        ) : (
          <>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/login`} className="active">
                Login
              </Link>
            </li>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/signup`}>Sign Up</Link>
            </li>
          </>
        )}
      </ul>
    </Wrapper>
  );
};

export default Navbar;

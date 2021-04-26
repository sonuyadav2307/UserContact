import React from "react";
import Navbar from "./components/navbar/Navbar";
import UserData from "./containers/userData/UserData";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddContact from "./containers/addContact/AddContact";
import ErrorPage from "./containers/errorPage/ErrorPage";
import EditContact from "./containers/editContact/EditContact";
import SignUp from "./containers/SignUp";
import Login from "./containers/Login";
import ProtectedRoute from "./ProtectedRoutes";
const Routes = () => {
  return (
    <div>
      {/* To deploy React app in sub directory you need to give your subdirectory path below */}
      <Router basename={"/directory-name"}>
        <Navbar />
        {/* <SignUp /> */}
        {/* <Login /> */}

        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/login`}
            component={Login}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/signup`}
            component={SignUp}
          />
          <ProtectedRoute
            exact
            path={`${process.env.PUBLIC_URL}/`}
            component={UserData}
          />

          {/* <Route exact path="/userdata" component={UserData} /> */}
          <ProtectedRoute
            exact
            path={`${process.env.PUBLIC_URL}/userdata`}
            component={UserData}
          />

          {/* <Route exact path="/Add" component={AddContact} /> */}
          <ProtectedRoute
            exact
            path={`${process.env.PUBLIC_URL}/add`}
            component={AddContact}
          />

          {/* <Route exact path="/editContact/:id" component={EditContact} /> */}
          <ProtectedRoute
            exact
            path={`${process.env.PUBLIC_URL}/editContact/:id`}
            component={EditContact}
          />

          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;

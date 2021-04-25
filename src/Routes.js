import React from "react";
import Navbar from "./components/navbar/Navbar";
import UserData from "./containers/userData/UserData";
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import AddContact from "./containers/addContact/AddContact";
import ErrorPage from './containers/errorPage/ErrorPage'
import EditContact from "./containers/editContact/EditContact";
import SignUp from "./containers/SignUp";
import Login from "./containers/Login";
import HomePage from './containers/homePage/HomePage'
import ProtectedRoute from './ProtectedRoutes'
const Routes = () => {

  return (
    <div>
      <Router>
        <Navbar />
        {/* <SignUp /> */}
        {/* <Login /> */}
  
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/" component={HomePage} />
          
          
          {/* <Route exact path="/userdata" component={UserData} /> */}
          <ProtectedRoute exact path="/userdata" component={UserData}/>

          {/* <Route exact path="/Add" component={AddContact} /> */}
          <ProtectedRoute exact path="/add" component={AddContact}/>
          
          
          {/* <Route exact path="/editContact/:id" component={EditContact} /> */}
          <ProtectedRoute exact path="/editContact/:id" component={EditContact}/>

          <Route component={ErrorPage} />
          
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;

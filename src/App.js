import Navbar from "./components/navbar/Navbar";
import UserData from "./containers/userData/UserData";
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import AddContact from "./containers/addContact/AddContact";
import ErrorPage from './containers/errorPage/ErrorPage'
function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <Switch>

      <Route exact path="/" component={UserData} />
      <Route exact path="/Add" component={AddContact} />
      <Route component={ErrorPage} />
      </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;

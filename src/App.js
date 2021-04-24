import Navbar from "./components/navbar/Navbar";
import UserData from "./containers/userData/UserData";
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import AddContact from "./containers/addContact/AddContact";

function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <Switch>

      <Route exact path="/" component={UserData} />
      <Route exact path="/Add" component={AddContact} />
    
      </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;

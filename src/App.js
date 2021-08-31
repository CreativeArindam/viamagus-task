//imports
import { BrowserRouter, Route, Switch, Link} from "react-router-dom";
import LoginPage from './components/LoginPage/Login'

//Assets
import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Link to="/login">Login</Link>
          </Route>
          <Route path="/login">
            <LoginPage/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

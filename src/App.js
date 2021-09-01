//imports
import { BrowserRouter, Route, Switch, Link} from "react-router-dom";
import LoginPage from './components/LoginPage/Login'
import VideoPage from './components/VideoPage/Player'
import DatePage from './components/DatePage/Date'

//Assets
import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <h1 className="home__page__title">Chose the path</h1>
            <div className="routes">
              <Link to="/login">Login</Link>
              <Link to="/video">Video</Link>
              <Link to="/date">Date</Link>
            </div>
          </Route>
          <Route path="/login">
            <LoginPage/>
          </Route>
          <Route path="/video">
            <VideoPage/>
          </Route>
          <Route path="/date">
            <DatePage/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

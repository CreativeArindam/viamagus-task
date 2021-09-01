//imports
import { BrowserRouter, Route, Switch, Link} from "react-router-dom";
import LoginPage from './components/LoginPage/Login'
import VideoPage from './components/VideoPage/Player'

//Assets
import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Link to="/login">Login</Link>
            <Link to="/video">Video</Link>
          </Route>
          <Route path="/login">
            <LoginPage/>
          </Route>
          <Route path="/video">
            <VideoPage/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import HomePage from "./pages/HomePage";
import Location from "./pages/Location";
import GeoPage from "./pages/GeoPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/locations/longitude/:longitude/latitude/:latitude" component={GeoPage} exact/>
          <Route path="/" component={HomePage} exact/>
          <Route path="/locations/:woeid" component={Location} exact/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

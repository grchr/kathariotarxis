import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './features/NavigationFeatures';
import { Sidebar } from './features/MainSideBar';
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Airman from './components/Airman';

/* TODO: 1 - Initialize state store with redux and display names in the Airman and Chores page
         2 - Convert the Airman page to an editable table, to edit airmen
         3 - Create the Services page where Airmen are assigned to chored for the day
         4 - Create the Announcements page with images and texts
         5 - Make the side bar visible on mouseOver (for practice only) 
*/

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Sidebar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/airmen" component={Airman} />
          </Switch>
        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;

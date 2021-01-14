import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar, TestBar, Sidebar } from './features/NavigationFeatures';
import React from 'react';
import Home from './components/Home';
import About from './components/About';

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
          </Switch>
        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;

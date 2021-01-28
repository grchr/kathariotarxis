import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Row, Col, Card, Timeline, message, Table } from "antd";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SideNavigationBar } from "./components/SideNavigationBar";
import { TopNavigationBar } from "./components/TopNavigationBar";
import { Airman } from "./models/Airman";
import { Home } from "./models/Home";
import { Chore } from "./models/Chore";


function App() {

  return (
    <div className="App">
      <React.Fragment>
        <Router>
          <TopNavigationBar />
          <SideNavigationBar/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/airmen" component={Airman} />
            <Route path="/chore" component={Chore} />
          </Switch>
        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;

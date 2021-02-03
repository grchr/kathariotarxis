import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Row, Col, Card, Timeline, message, Table, Layout } from 'antd';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SideNavigationBar from "./components/SideNavigationBar";
import TopNavigationBar from "./components/TopNavigationBar";
import AirmanPage from "./pages/AirmanPage";
import { Home } from "./pages/HomePage";
import { Chore } from "./pages/ChorePage";
import { News } from "./pages/NewsPage";


const { Header, Footer, Sider, Content } = Layout;

function App() {

  return (
    <div className="App">
      <React.Fragment>
        <Router>
        <Layout>
          <TopNavigationBar />
          <Layout style={{minHeight: '100vh'}}>
            <SideNavigationBar/>
            <Content>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/airmen" component={AirmanPage} />
                <Route path="/chore" component={Chore} />
                <Route path="/news" component={News} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;

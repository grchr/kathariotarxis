import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Row, Col, Card, Timeline, message, Table, Layout } from 'antd';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import SideNavigationBar from "./components/SideNavigationBar";
import TopNavigationBar from "./components/TopNavigationBar";
import AirmanPage from "./pages/AirmanPage";
import { Home } from "./pages/HomePage";
import { ChorePage } from "./pages/ChorePage";
import { NewsPage } from "./pages/NewsPage";


const { Header, Footer, Sider, Content } = Layout;

function App(props: any) {

  console.log('App');
  console.log(props);

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
                <Route path="/chore" component={ChorePage} />
                <Route path="/news" component={NewsPage} />
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

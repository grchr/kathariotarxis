import React, { useState, useEffect } from "react";
import { Menu, Layout } from "antd";
import {
  HomeOutlined,
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { NewsIcon } from "./MyIcons";
import { Link } from "react-router-dom";
import { store, ReduxSelectors } from "../store";
import { connect } from 'react-redux';

const { Header, Footer, Sider, Content } = Layout;

function SideNavigationBar(props: any) {
  //   const [active, setActive] = useState(store.getState().status.activePage);

  const unsubscribe = store.subscribe(() => {
    console.log("State after dispatch: ", store.getState());
    setActive(store.getState().status.activePage);
  });

  const onClickHandler = (e: any) => {
    props.dispatch({ type: "page/changed", payload: e.key });
    setActive(e.key);
  };

  const [active, setActive] = useState("");

  // ReduxSelectors.activeNavigationItem$.subscribe((s) => {
  //     console.log("Inside selector subscription");
  //     console.log(s);
  //     setActive(s);
  // });

  useEffect(() => {
    setActive(store.getState().status.activePage);
    console.log(store.getState());
  }, [store.getState().status.activePage]);
  return (
    <Sider collapsible collapsed={false} theme={"light"}>
      <Menu selectedKeys={[active]} onClick={onClickHandler} mode="inline">
        <Menu.Item key="airman" icon={<HomeOutlined />}>
          Airmen
          <Link to="/airmen"></Link>
        </Menu.Item>
        <Menu.Item key="chore" icon={<MailOutlined />}>
          Chores
          <Link to="/chore"></Link>
        </Menu.Item>
        <Menu.Item key="dummy1" icon={<MailOutlined />}>
          Dummy 1
        </Menu.Item>
        <Menu.Item key="dummy2" icon={<MailOutlined />}>
          Dummy 2
        </Menu.Item>
        <Menu.Item key="dummy3" icon={<MailOutlined />}>
          Dummy 3{active}
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

const mapStateToProps = (state : any) => {
    console.log('mapStateToProps');
    console.log(state);
    return {
      activePage: state.status.activePage
    };
  };

export default connect(mapStateToProps)(SideNavigationBar);
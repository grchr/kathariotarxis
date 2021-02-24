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
import { setCurrentActivePage } from './StoreActions';

const { Header, Footer, Sider, Content } = Layout;

function SideNavigationBar(props: any) {

  console.log('SideNavigationBar');
  console.log(props);

  const onClickHandler = (e: any) => {
    props.setActivePage(e.key);
    setActive(e.key);
  };

  const [active, setActive] = useState("");

  useEffect(() => {
    setActive(props.activePage);
    //console.log(store.getState());

    return function cleanup() {
      console.log('sidenavbar cleanup called');
      console.log(props);
    }
  }, [props]);

  return (
    <Sider collapsible collapsed={false} theme={"light"}>
      <Menu selectedKeys={[active]} onClick={onClickHandler} mode="inline">
        <Menu.Item key="/airmen" icon={<HomeOutlined />}>
          Airmen
          <Link to="/airmen"></Link>
        </Menu.Item>
        <Menu.Item key="/chore" icon={<MailOutlined />}>
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
    // console.log('mapStateToPropsXXX');
    // console.log(state);
    return {
      activePage: state.status.activePage
    };
  };

const mapDispatchToProps = (dispatch : any) => {
  // console.log('mapDispatchToPropsXXX');
  // console.log(dispatch);
  return {
      setActivePage: (key : string) => {
        dispatch(setCurrentActivePage(key));
      }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SideNavigationBar);
import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { NewsIcon } from "./MyIcons";
import { Link } from "react-router-dom";
import { store } from "../store";
import { connect } from 'react-redux';
import { setCurrentActivePage } from './StoreActions';

function TopNavigationBar(props: any) {
    console.log('TopNavigationBar');
    console.log(props);
    const [active, setActive] = useState("");

    useEffect(() => {
        setActive(props.activePage);

        return function cleanup() {
            console.log('topnavbar cleanup called');
            console.log(props);
        }
    }, [props]);

    const onClickHandler = (e: any) => {
        props.setActivePage(e.key);
    };

    return (
        <Menu selectedKeys={[active]} onClick={onClickHandler} mode="horizontal">
        <Menu.Item key="/" icon={<HomeOutlined />}>
            Home
            <Link to="/"></Link>
        </Menu.Item>
        <Menu.Item key="/news" icon={<MailOutlined />}>
            News
            <Link to="/news"></Link>
        </Menu.Item>
        </Menu>
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

export default connect(mapStateToProps, mapDispatchToProps)(TopNavigationBar);
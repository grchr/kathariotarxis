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
import { store, ReduxSelectors } from "../store";
import { connect } from 'react-redux';

function TopNavigationBar(props: any) {
    console.log('top nav bar props');
    console.log(props);
    const [active, setActive] = useState("");

    //   ReduxSelectors.activeNavigationItem$.subscribe((s) => {
    //     console.log("Inside selector subscription");
    //     console.log(s);
    //     setActive(s);
    //   });

    // const unsubscribe = store.subscribe(() => {
    //     console.log("State after dispatch: ", store.getState());
    //     setActive(store.getState().status.activePage);
    // });

    useEffect(() => {
        setActive(props.activePage);
    }, [store.getState().status.activePage]);

    const onClickHandler = (e: any) => {
        props.dispatch({ type: "page/changed", payload: e.key });
    };

    return (
        <Menu selectedKeys={[active]} onClick={onClickHandler} mode="horizontal">
        <Menu.Item key="home" icon={<HomeOutlined />}>
            Home
            <Link to="/"></Link>
        </Menu.Item>
        <Menu.Item key="news" icon={<MailOutlined />}>
            News
            <Link to="/news"></Link>
        </Menu.Item>
        </Menu>
    );
}


const mapStateToProps = (state : any) => {
    console.log('mapStateToProps');
    console.log(state);
    return {
      activePage: state.status.activePage
    };
  };

export default connect(mapStateToProps)(TopNavigationBar);
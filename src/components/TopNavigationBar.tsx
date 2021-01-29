import React, { useState } from 'react';
import { Menu } from 'antd';
import { HomeOutlined, MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { NewsIcon } from './MyIcons';
import { Link } from 'react-router-dom';
import store from '../store';

export function TopNavigationBar(props : any) {

    const[active, setActive] = useState("home");

    const onClickHandler = (e : any) => {
        console.log(e);
        setActive(e.key);
    }

    return (
        <Menu selectedKeys={[active]} onClick={onClickHandler} mode="horizontal">
            <Menu.Item key="home" icon={<HomeOutlined/>}>
                Home
                <Link to="/"></Link>
            </Menu.Item>
            <Menu.Item key="news" icon={<MailOutlined/>}>
                News
                <Link to="/news"></Link>
            </Menu.Item>
        </Menu>
    );
}
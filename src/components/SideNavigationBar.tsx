import React, { useState } from 'react';
import { Menu, Layout } from 'antd';
import { HomeOutlined, MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { NewsIcon } from './MyIcons';
import { Link } from 'react-router-dom';
import store from '../store';

const { Header, Footer, Sider, Content } = Layout;

export function SideNavigationBar(props : any) {

    const[active, setActive] = useState("");

    const onClickHandler = (e : any) => {
        console.log(e);
        setActive(e.key);
    }

    return (
        <Sider collapsible collapsed={false}  theme={"light"}>
            <Menu selectedKeys={[active]} onClick={onClickHandler} mode="inline">
                <Menu.Item key="airman" icon={<HomeOutlined/>}>
                    Airmen
                    <Link to="/airmen"></Link>
                </Menu.Item>
                <Menu.Item key="chore" icon={<MailOutlined/>}>
                    Chores
                    <Link to="/chore"></Link>
                </Menu.Item>
                <Menu.Item key="dummy1" icon={<MailOutlined/>}>
                    Dummy 1
                </Menu.Item>
                <Menu.Item key="dummy2" icon={<MailOutlined/>}>
                    Dummy 2
                </Menu.Item>
                <Menu.Item key="dummy3" icon={<MailOutlined/>}>
                    Dummy 3
                </Menu.Item>
            </Menu>
        </Sider>
        
    );
}
import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from 'styled-components';
const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
export const NavigationBar = () => {
  return (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Tutorial</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>);
}

export const TestBar = () => {
  return (
  <div>
    <h1>This is a Test</h1>
  </div>);
}

/* This defines the actual bar going down the screen */
const StyledSideNav = styled.div`
  position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  height: 100%;
  width: 75px;     /* Set the width of the sidebar */
  z-index: 1;      /* Stay on top of everything */
  top: 3.4em;      /* Stay at the top */
  background-color: #222; /* Black */
  overflow-x: hidden;     /* Disable horizontal scroll */
  padding-top: 10px;
`;

class SideNav extends React.Component {
  render() {
    return (
    <div>
      <StyledSideNav></StyledSideNav>
    </div>
    );
  }
}

const NavIcon = styled.div`
`;

class NavItem extends React.Component {
  render() {
    const { active } = this.props;

    return (
      <div>
        <StyledNavItem StyledNavItem active={active}>
          <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>
            <NavIcon></NavIcon>
          </Link>
        </StyledNavItem>
      </div>
    );
  }
}

export class Sidebar extends React.Component {
  render() {
    return (
    <div>
      <SideNav></SideNav>
    </div>
    );
  }
}
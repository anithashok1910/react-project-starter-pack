import React, { Component } from 'react';
import { Menu, Layout } from 'antd';

const { Header } = Layout;

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }
  render() {
    return (
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ lineHeight: '64px', float: 'right' }}
          defaultSelectedKeys={[]}
          selectable={false}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3" onClick={() => console.log('Called')}>
            Login & Signup
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default NavBar;

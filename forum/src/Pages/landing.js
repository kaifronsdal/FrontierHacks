import React from 'react';
import 'antd/dist/antd.css';
import './landing.css';
import SearchBar from '../Components/searchbar'
import { Layout, Menu, Icon, } from 'antd';

const { Header, Content, Footer, } = Layout;
const {SubMenu, } = Menu;

export default class Landing extends React.Component {
    state = {
        current: 'mail',
        isSignedUp: true,
        isLoggedIn: false,
    };
    
    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };
    
    signUpState(){
        if (this.state.isSignedUp){
            // return(<Menu.Item key="user"><Icon type = "user"/>Login</Menu.Item>)
            this.logInState();
        } else {
            return(<Menu.Item key="user">
                    <Icon type="user" />
                        Sign Up
                </Menu.Item>);
        }
    }
 
    logInState(){
        if (this.state.isLoggedIn){
            return(<Menu.Item key="user"><Icon type = "user"/>Profile</Menu.Item>)
        } else {
            return(<Menu.Item key="user">
                    <Icon type="user" />
                        Login
                </Menu.Item>);
        }
    }

  render() {
    return (
      <Layout className="layout">
          <Header>
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                     {this.signUpState()}
                <Menu.Item key="post">
                    <Icon type="edit" />
                   Create Post
                </Menu.Item>
                    <SubMenu
                        title={
                            <span className="submenu-title-wrapper">
                            <Icon type="setting" />
                            Navigation Three - Submenu
                            </span>
                        }
                    >
                        <Menu.ItemGroup title="Item 1">
                            <Menu.Item key="setting:1">Option 1</Menu.Item>
                            <Menu.Item key="setting:2">Option 2</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup title="Item 2">
                            <Menu.Item key="setting:3">Option 3</Menu.Item>
                            <Menu.Item key="setting:4">Option 4</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                <Menu.Item key="alipay">
                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                        Navigation Four - Link
                    </a>
                </Menu.Item>
            </Menu> 
          </Header>

          <Content>

          </Content>

          <Footer>

          </Footer>
      </Layout>
    );
  }
}
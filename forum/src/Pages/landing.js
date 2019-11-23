import React from 'react';
import 'antd/dist/antd.css';
import './landing.css';
import SearchBar from '../Components/searchbar'
import { Layout, Menu, Icon, } from 'antd';

const { Header, Content, Footer, } = Layout;
const {SubMenu, } = Menu;



export default class Landing extends React.Component {
    state = {
        current: 'landing',
        isLoggedIn: false,
    };
    
    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };
 
    menu(){
        if(!this.state.isLoggedIn){
            return(
                <Menu style={{float: 'right'}} onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                    <Menu.Item>
                        <SearchBar>
                        
                        </SearchBar>
                    </Menu.Item>
                    <Menu.Item key="login">
                        <div>
                        <Icon type="user" />
                            <a href="/auth/login" target="_blank" rel="noopener noreferrer">Login</a>
                        </div>
                    </Menu.Item>
                    <Menu.Item>
                        <div>
                        <Icon type="user" />
                        <a href="/auth/signup" target="_blank" rel="noopener noreferrer">Sign Up</a>
                        </div>
                    </Menu.Item>
                    <Menu.Item key="post">
                        <Icon type="edit" />
                            Create Post
                    </Menu.Item>
                </Menu> 
            );
        } else {
            return(
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                    <Menu.Item key="user"><Icon type = "user"/>
                        Profile
                    </Menu.Item>
                        <Menu.Item key="post">
                            <Icon type="edit" />
                            Create Post
                        </Menu.Item>
                </Menu>
            );
        }
    }

  render() {
    return (
      <Layout className="layout">
            <Header>
                {this.menu()}
            </Header>

            <Content>

            </Content>

            <Footer>

            </Footer>
      </Layout>
    );
  }
}
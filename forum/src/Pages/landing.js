import React from 'react';
import 'antd/dist/antd.css';
import './landing.css';
import SearchBar from '../Components/searchbar'
import Posts from "../Views/posts"
import Subforum from "../Views/subforum"
import {Layout, Menu, Icon, Row, Col} from 'antd';

const {Header, Content, Footer} = Layout;
const {SubMenu,} = Menu;


export default class Landing extends React.Component {
    state = {
        current: 'mail',
        isLoggedIn: false,
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    signUpState() {
        if (this.state.isSignedUp) {
            // return(<Menu.Item key="user"><Icon type = "user"/>Login</Menu.Item>)
            this.logInState();
        } else {
            return (<Menu.Item key="user">
                <Icon type="user"/>
                Sign Up
            </Menu.Item>);
        }
    }

    logInState() {
        if (this.state.isLoggedIn) {
            return (<Menu.Item key="user"><Icon type="user"/>Profile</Menu.Item>)
        } else {
            return (<Menu.Item key="user">
                <Icon type="user"/>
                Login
            </Menu.Item>);
        }
    }

    menu() {
        if (!this.state.isLoggedIn) {
            return (
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                    <Menu.Item key="login">
                        <div>
                            <Icon type="user"/>
                            <a href="/auth/login" target="_blank" rel="noopener noreferrer">Login</a>
                        </div>
                    </Menu.Item>
                    <Menu.Item>
                        <div>
                            <Icon type="user"/>
                            <a href="/auth/signup" target="_blank" rel="noopener noreferrer">Sign Up</a>
                        </div>
                    </Menu.Item>
                    <Menu.Item key="post">
                        <Icon type="edit"/>
                        Create Post
                    </Menu.Item>
                </Menu>
            );
        } else {
            return (
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                    <Menu.Item key="user"><Icon type="user"/>
                        Profile
                    </Menu.Item>
                    <Menu.Item key="post">
                        <Icon type="edit"/>
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
                    <div>
                        <Row>
                            <Col span={18}>
                                <Posts/>
                            </Col>
                            <Col span={6}>
                                <Subforum/>
                            </Col>
                        </Row>
                    </div>
                </Content>

                <Footer>

                </Footer>
            </Layout>
        );
    }
}

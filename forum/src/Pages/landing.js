import React from 'react';
import 'antd/dist/antd.css';
import './landing.css';
import Home from "./home"
import Login from "./login"
import SignUp from "./signup"
import Post from "./post"
import {Layout, Icon, Button, Input} from 'antd';
import {
    Route,
    Link,
    BrowserRouter,
    Switch
} from "react-router-dom";

const {Search} = Input;
const {Content, Footer} = Layout;

export default class Landing extends React.Component {
    state = {
        isLoggedIn: false,
    };

    menu() {
        if (!this.state.isLoggedIn) {
            return (<div id="buttons" style={{
                display: 'flex',
                flexWrap: 'nowrap'
            }}>
                <Link to="/Login"><Button key="login"><Icon type="user"/>Login</Button></Link>
                <Link to="/CreateAccount"><Button key="signup"><Icon type="user"/> Sign Up</Button></Link>
                <Link to="/Post"><Button key="post" type="primary">Post</Button></Link>
            </div>);
        } else {
            return (<div id="buttons">
                <Link to="Profile"><Button key="profile">Profile</Button></Link>
                <Link to="/Post"><Button key="post" type="primary">Post</Button></Link>
            </div>);
        }
    }

    render() {
        return (
            <BrowserRouter>
                <Layout className="layout">
                    <div style={{
                        border: '1px solid #e8e8e8',
                        backgroundColor: '#FFF',
                        width: '100%',
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'flex-start',
                        paddingTop: '5px'
                    }}>
                        <div
                            style={{
                                flex: 4,
                                marginRight: '5%',
                                marginBottom: '-25px',
                                minWidth: '300px',
                                display: 'flex'
                            }}>

                            <Link to="/">
                                <p style={{
                                    fontSize: '25px',
                                    marginLeft: '15px',
                                    marginRight: '20px',
                                }}>Forum</p>
                            </Link>
                            <div style={{width: '100%', paddingTop: '5px'}}>
                                <Search
                                    placeholder="input search text"
                                    onSearch={value => console.log(value)}
                                />
                            </div>
                        </div>
                        <div style={{flex: 2, paddingTop: '2px', marginBottom: '8px'}}>
                            {this.menu()}
                        </div>
                    </div>

                    <Content>
                        <div>
                            <Switch>
                                <Route path="/">
                                    <Home/>
                                </Route>
                                <Route path="/Login">
                                    <Login/>
                                </Route>
                                <Route path="/CreateAccount">
                                    <SignUp/>
                                </Route>
                                <Route path="/Post">
                                    <Post/>
                                </Route>
                            </Switch>
                        </div>
                    </Content>

                    <Footer>

                    </Footer>
                </Layout>
            </BrowserRouter>
        );
    }
}

import React from 'react';
import 'antd/dist/antd.css';
import './landing.css';
import Home from "./home"
import Login from "./login"
import SignUp from "./signup"
import Community from "./community"
import Post from "./post"

import {Redirect} from 'react-router-dom';
import {Layout, Icon, Button, Input, Modal, Form} from 'antd';
import {
    Route,
    Link,
    BrowserRouter,
    Switch
} from "react-router-dom";

const {Search} = Input;
const {Content, Footer} = Layout;

export default class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subforums: props.subforums,
            isLoggedIn: props.user.loggedIn,
            state: '',
            visible: false,
            confirmLoading: false,
            disabledtrue: true,
            reroute: ""
        };
    }

    handleOk = () => {
        this.setState({
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        }, 2000);
    };

    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    };

    showModalLogin = () => {
        this.setState({
            state: 'Login',
            visible: true,
        });
    };

    showModalSignup = () => {
        this.setState({
            state: 'Signup',
            visible: true,
        });
    };

    showModalPost = () => {
        this.setState({
            state: 'Post',
            visible: true,
        });
    };

    showProfile = () => {

    };
    menu() {
        if (!this.state.isLoggedIn) {
            return (<div id="buttons" style={{
                display: 'flex',
                flexWrap: 'nowrap'
            }}>
                <a onClick={this.showModalLogin}><Button key="login"><Icon type="user"/>Login</Button></a>
                <a onClick={this.showModalSignup}><Button key="signup"><Icon type="user"/> Sign Up</Button></a>
                <a onClick={this.showModalPost}><Button key="post" type="primary">Post</Button></a>
            </div>);
        } else {
            return (<div id="buttons">
                <a onClick={this.showProfile}><Button key="profile">Profile</Button></a>
                <a onClick={this.showModalPost}><Button key="post" type="primary">Post</Button></a>
            </div>);
        }
    }

    getFooter() {
        if (this.state.state === "Login") {
            return (<div style={{width: '100%', textAlign: 'left'}}>Or <a onClick={this.showModalSignup}>register
                now!</a></div>);
        } else if (this.state.state === "Signup") {
            return (<div style={{width: '100%', textAlign: 'left'}}>Or <a onClick={this.showModalLogin}>log in
                now!</a></div>);
        }
    }

    getModalContent() {
        switch (this.state.state) {
            case 'Login':
                return (<Login/>);
            case 'Signup':
                return (<SignUp/>);
            case 'Post':
                return (<Post/>);
            default:
                return null;
        }
    }

    getModal() {
        switch (this.state.state) {
            case 'Login':
                return (
                    <Modal
                        title={this.state.state}
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        confirmLoading={this.state.confirmLoading}
                        okButtonProps={{disabled: this.state.disabled}}
                        footer={[this.getFooter()]}
                        onCancel={this.handleCancel}
                        onSuccess={this.handleOk}
                        style={{width: '100%', maxWidth: '300px', height: '100%'}}
                    >
                        <div>
                            {this.getModalContent()}

                        </div>
                    </Modal>);
            case 'Signup':
                return (
                    <Modal
                        title={this.state.state}
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        confirmLoading={this.state.confirmLoading}
                        okButtonProps={{disabled: this.state.disabled}}
                        footer={[this.getFooter()]}
                        onCancel={this.handleCancel}
                        onSuccess={this.handleOk}
                        style={{width: '100%', maxWidth: '500px', height: '100%'}}
                    >
                        <div>
                            {this.getModalContent()}

                        </div>
                    </Modal>);
            case 'Post':
                return (
                    <Modal
                        title={this.state.state}
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        confirmLoading={this.state.confirmLoading}
                        okButtonProps={{disabled: this.state.disabled}}
                        footer={[this.getFooter()]}
                        onCancel={this.handleCancel}
                        onSuccess={this.handleOk}
                        style={{width: '100%', maxWidth: '650px', height: '100%'}}
                    >
                        <div>
                            {this.getModalContent()}
                        </div>
                    </Modal>);
        }
        return null;
    }

    reroute(value) {
        this.setState({reroute: value});
    }

    getReroute() {
        //console.log(this.props.history);
        if (this.state.reroute === "") {
            return null;
        } else {
            const reroute = this.state.reroute;
            this.setState({reroute: ""});
            return <Redirect push to={`/${reroute}`}/>;
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
                                    onSearch={value => this.reroute(value)}
                                />
                            </div>
                        </div>
                        <div style={{flex: 2, paddingTop: '2px', marginBottom: '8px'}}>
                            {this.menu()}
                        </div>
                    </div>

                    <Content>
                        <Switch>
                            {this.getReroute()}
                            <Route exact path="/">
                                <Home/>
                            </Route>
                            <Route path={`/:name`}
                                   render={({match}) => (
                                       <div><Community redirect={this.reroute} subforums={this.state.subforums}
                                                       name={match.params.name}/>
                                       </div>)}/>
                        </Switch>
                    </Content>

                    <Footer>

                    </Footer>
                </Layout>
                {this.getModal()}
            </BrowserRouter>
        );
    }
}
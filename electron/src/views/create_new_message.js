import React, {Component} from "react";
import {Form, Input, Modal} from "antd";

class CreateNewMessage extends Component {
    constructor(props) {
        super(props)
        this.username = ""
        this.message = ""
    }
    state = { visible: this.props.show , username: "",
        message: ""};
    showModal = () => {
        this.setState({
            visible: true,
            username: "",
            message: ""
        });
    };

    handleOk = e => {
        // this.props.visible = false
        console.log("YOOOOOO")
        this.props.create_new(this.state.username, this.state.message)
        this.forceUpdate()
        this.props.close()
        // this.forceUpdate()
        // console.log(e);
        // this.setState({
        //     visible: false,
        // });
    };

    handleCancel = e => {
        this.props.close()
        // this.props.visible = false
        // this.forceUpdate()
        // console.log(e);
        // this.setState({
        //     visible: false,
        // });
    };
    handleUsernameChange(e) {
        this.setState({
            username: e.target.value
        })
        // console.log(this.state.username)
    }

    handleMessageChange(e) {
        // console.log("message " + e)
        this.setState({
                message: e.target.value
            })
        // console.log(this.state.message)
    }


    render() {
        return (
            <Modal visible={this.props.visible}
                   onOk={this.handleOk}
                   onCancel={this.handleCancel}
                   title="Create New Message"
            >
                <Input onChange={this.handleUsernameChange.bind(this)} value={this.state.username} style={{marginBottom:"1%"}} placeholder="Recipient Username"/>
                <Input onChange={this.handleMessageChange.bind(this)} value={this.state.message} placeholder="First Message"/>
            </Modal>
        )
    }
}
export default CreateNewMessage
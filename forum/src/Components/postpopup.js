import React from 'react';
import 'antd/dist/antd.css';
import Post from "./post"
import {Modal} from "antd";

export default class Community extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            numMembers: props.numMembers,
            description: props.numMembers,
            joined: props.joined,
            redirect: props.redirect
        }
    }

    render() {
        return (
            <Modal
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
                    <Post subforum={this.state.posts[i].subforum}
                          author={this.state.posts[i].author}
                          tags={this.state.posts[i].tags}
                          votes={this.state.posts[i].votes}
                          content={this.state.posts[i].content}
                          numComments={this.state.posts[i].numComments}
                          redirect={this.state.redirect}/>
                </div>
            </Modal>
        );
    }
}

import React from 'react';
import 'antd/dist/antd.css';
import './post.css';

import {Form, Input, Button} from 'antd';

class NormalLoginForm extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);//form values
                //this.props.onSuccess();
                this.props.addPost(values);
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form" style={{width: '450px'}}>
                <Form.Item label="Title" style={{width: '450px'}}>
                    {getFieldDecorator('title', {
                        rules: [{required: true, message: 'Please input your title!'}],
                    })(
                        <Input
                            style={{width: '450px'}}
                            placeholder="title"
                        />,
                    )}
                </Form.Item>
                <Form.Item label="Description" style={{width: '450px'}}>
                    {getFieldDecorator('description', {
                        rules: [{required: true, message: 'Please input your description!'}],
                    })(
                        <Input.TextArea
                            style={{width: '450px'}}
                            placeholder="description"
                        />,
                    )}
                </Form.Item>
                <Form.Item label="Tags" style={{width: '450px'}}>
                    <Input.TextArea
                        style={{width: '450px'}}
                        placeholder="tag1, tag2, ..."
                    />
                </Form.Item>
                <Form.Item label="Community" style={{width: '450px'}}>
                    {getFieldDecorator('community', {
                        rules: [{required: true, message: 'Please choose a community!'}],
                    })(
                        <Input
                            style={{width: '450px'}}
                            placeholder="all"
                        />,
                    )}
                    <Button style={{width: '450px'}} type="primary" htmlType="submit" className="login-form-button">
                        Post
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

const Post = Form.create({name: 'normal_login'})(NormalLoginForm);

export default Post;

import React from 'react';
import 'antd/dist/antd.css';
import './post.css';

import {Form, Icon, Input, Button, Checkbox} from 'antd';

class NormalLoginForm extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                //this.props.onSuccess();
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form" style={{width:'100%'}}>
                <Form.Item label="Title" style={{width: '100%'}}>
                    {getFieldDecorator('title', {
                        rules: [{required: true, message: 'Please input your title!'}],
                    })(
                        <Input
                            style={{width:'100%'}}
                            placeholder="title"
                        />,
                    )}
                </Form.Item>
                <Form.Item label="Description" style={{width: '100%'}}>
                    {getFieldDecorator('description', {
                        rules: [{required: true, message: 'Please input your description!'}],
                    })(
                        <Input.TextArea
                            style={{width:'100%'}}
                            placeholder="description"
                        />,
                    )}
                </Form.Item>
                <Form.Item label="Community" style={{width: '100%'}}>
                    {getFieldDecorator('community', {
                        rules: [{required: true, message: 'Please choose a community!'}],
                    })(
                        <Input
                            style={{width:'100%'}}
                            placeholder="all"
                        />,
                    )}
                    <Button style={{width: '100%'}} type="primary" htmlType="submit" className="login-form-button">
                        Post
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

const Post = Form.create({name: 'normal_login'})(NormalLoginForm);

export default Post;

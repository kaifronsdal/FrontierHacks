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
                let tags = values.tags;
                tags = tags.split(",");
                for (var i in tags) {
                    i = i.trim();
                }
                values.tags = tags;
                this.props.addPost(values);
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form" style={{width: '450px'}}>
                <Form.Item label="Title" style={{width: '450px'}}>
                    {getFieldDecorator('description', {
                        rules: [{required: true, message: 'Please input your description!'}],
                    })(
                        <Input
                            style={{width: '450px'}}
                            placeholder="description"
                        />,
                    )}
                </Form.Item>
                <Form.Item label="Tags" style={{width: '450px'}}>
                    {getFieldDecorator('tags', {
                        rules: [{required: false, message: 'Please input your description!'}],
                    })(
                        <Input.TextArea
                            style={{width: '450px'}}
                            placeholder="tags"
                        />,
                    )}
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

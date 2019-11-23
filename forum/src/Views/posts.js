import React from 'react';
import 'antd/dist/antd.css';
import './posts.css';
import { Layout, Menu, Icon, } from 'antd';
import Post from '../Components/post'

export default class Posts extends React.Component {
    render() {
        return (
            <Post/>
        );
    }
}

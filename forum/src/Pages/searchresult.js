import React from 'react';
import 'antd/dist/antd.css';
import './landing.css';
import SearchBar from '../Components/searchbar'
import { Layout, Menu, Icon, } from 'antd';

const { Header, Content, Footer, } = Layout;
const {SubMenu, } = Menu;

export default class Landing extends React.Component {
    state = {
        current: 'result',
        infoEntered: false,
    };
    
    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };
}
import React from 'react';
import 'antd/dist/antd.css';
import './community.css';
import {Col, Row} from "antd";
import Posts from "../Views/posts"
import Subforum from "../Views/subforum"

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
            <Row>
                <Col
                    span={18}>
                    <Posts redirect={this.state.redirect} subforum={this.state.name}/>
                </Col>
                <Col span={6}>
                    <Subforum name={this.state.name} numMembers={this.state.numMembers}
                              description={this.state.description}
                              joined={this.state.joined}/>
                </Col>
            </Row>
        );
    }
}

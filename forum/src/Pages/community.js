import React from 'react';
import 'antd/dist/antd.css';
import './community.css';
import {Col, Row} from "antd";
import Posts from "../Views/posts"
import Subforum from "../Views/subforum"

export default class Community extends React.Component {
    constructor(props) {
        super(props);
        var subforums = props.subforums;
        console.log(subforums)
        var subforum = null;
        for (let i = 0; i < subforums.length; i++) {
            if (subforums[i].subforum === props.name) {
                subforum = subforums[i];
                break;
            }
        }
        console.log(props.subforum)
        if (subforum === null) {
            this.state = {
                name: "",
                numMembers: 0,
                description: "",
                joined: false,
                subforums: null
            };
            return;
        }
        this.state = {
            name: props.name,
            numMembers: subforum.numMembers,
            description: subforum.description,
            joined: subforum.joined,
            subforums: subforums
        }
    }

    render() {
        return (
            <Row>
                <Col
                    span={18}>
                    <Posts subforums={this.state.subforums} subforum={this.state.name}/>
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

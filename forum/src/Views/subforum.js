import React from 'react';
import 'antd/dist/antd.css';
import './subforum.css';

import {Card, Row, Col} from 'antd';

export default class Subforum extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            numMembers: props.numMembers,
            joined: props.joined,
        }
    }

    handleJoin() {
        console.log("joined");
    }

    getJoin() {
        if (this.state.joined) {
            return (<Button onClick={this.handleJoin}>Leave</Button>)
        } else {
            return (<Button onClick={this.handleJoin}>Join</Button>)
        }
    }

    handlePost() {
        console.log("post");
    }

    render() {
        return (
            <Card title={this.state.name}>
                <Col>
                    {this.state.numMembers} Members
                </Col>
                <Col>
                    {this.state.description}
                </Col>
                <Col>
                    {this.getJoin()}
                </Col>
                <Col>
                    <Button onClick={this.handlePost}>Post</Button>
                </Col>
            </Card>
        );
    }
}

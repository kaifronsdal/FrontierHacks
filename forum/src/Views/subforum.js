import React from 'react';
import 'antd/dist/antd.css';
import './subforum.css';

import {Card, Row, Col, Button} from 'antd';

export default class Subforum extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            numMembers: props.numMembers,
            description: props.description,
            joined: props.joined,
        }
    }

    handleJoin() {
        console.log("joined");
    }

    getJoin() {
        if (this.state.joined) {
            return (<Button style={{width: '100%'}} onClick={this.handleJoin}>Leave</Button>)
        } else {
            return (<Button style={{width: '100%'}} onClick={this.handleJoin}>Join</Button>)
        }
    }

    handlePost() {
        console.log("post");
    }

    render() {
        return (
            <Card style={{margin: '20px'}} title={this.state.name}>
                <Col style={{fontSize: '20px', paddingBottom: '10px'}}>
                    {this.state.numMembers} Members
                </Col>
                <Col style={{fontSize: '15px', paddingBottom: '10px'}}>
                    {this.state.description}
                </Col>
                <Col style={{paddingBottom: '10px'}}>
                    {this.getJoin()}
                </Col>
                <Col>
                    <Button style={{width: '100%'}} onClick={this.handlePost}>Post</Button>
                </Col>
            </Card>
        );
    }
}

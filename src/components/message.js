import React, {Component} from "react";
import {Card, Col, Row} from "antd";
import "./message.css"

class Message extends Component {
    constructor(props) {
        super(props)
        this.text = props.text
        this.mine = props.mine
    }
    render() {
        const text = this.text
        if (this.mine) {
            return (
                <Row>
                <Col span={8} offset={16}>
                    <p className="messageMineText">{text}</p>
                </Col>
                </Row>
            )
        }
        else {
            return (
                <Row>
                <Col span={8}>
                    <p className="messageNotMineText">{text}</p>
                </Col>
                </Row>
            )
        }

    }
}

export default Message
import React, {Component} from "react";
import Message from "../components/message";
import ReactQueryParams from 'react-query-params';
import BackBar from "../components/back_bar";
import {Col, Icon, Row} from "antd";
import {Link} from 'react-router-dom';
class DisplayMessages extends Component {
    constructor(props) {
        super(props)
        // this.messages = props.messages
        // this.getMessages = props.getMessages
        // this.messageHTML = this.renderMessages()
    }

    renderMessages() {
        let messageHTML = (
            <div style={{}}>
                <Row style={{backgroundColor:"white"}}>
                    <Col span={8}>
                        <Link to="/home"><Icon style={{fontSize:"20px", marginTop:"11%", marginLeft:"0%"}} type="left-circle" /></Link>
                    </Col>
                    <Col style={{fontSize:"18px", marginTop:"3%"}} span={8}>
                        <p>A Krantz</p>
                    </Col>
                    <Col span={8}>
                    </Col>
                </Row>
                {this.props.getMessages().map(function (message, index) {
                    console.log(message)
                    return (
                        <Message text={message["text"]} mine={message["mine"]}/>
                    )
                })}
            </div>
        )
        return messageHTML
    }


    render() {
        // console.log("SKJDKJHFKJHDFKLJHFD " + this.queryParams.user)
        const messageHTML = this.renderMessages()
        console.log("rendering " + messageHTML)
        return (
            <div>
                {/*<p>{params.username}</p>*/}
            {messageHTML}
            </div>
        )
    }
}

export default DisplayMessages
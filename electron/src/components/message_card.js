import React, {Component} from 'react';
import {Card, Tag, Row, Avatar, Col} from "antd";
import "./message_card.css"
const colorList = ["#f56a00", "#7265e6", "#ffbf00", "#00a2ae"];
class MessageCard extends Component {
    constructor(props) {
        super(props)
        this.name = props.name
        this.timestamp = props.timestamp
        this.preview = props.preview
        this.state = {
            color : colorList[Math.floor(Math.random() * colorList.length)]
        }
        // console.log()
        // this.setState({color : "#f56a00"})
    }

    render() {
        return (
            <Card size="small" loading={false}>
                <Row style={{marginTop:"0%", marginBottom:"0%", left:"-10%"}} type="flex" justify="space-around" align="middle">
                    <Col span={16} push={2}>
                        <Row style={{display:"flex"}}>
                        {/*<div>*/}
                        <Col span={8}>
                            <p style={{textAlign:"left", fontWeight:"bold"}} className="text">{this.name}</p>
                        </Col>
                        <Col push={16}>
                            <Tag style={{right:"0px", align:"right"}} color="#2db7f5">{this.timestamp}</Tag>
                        </Col>
                        </Row>
                        <Row>
                            <p className="text">{this.preview}</p>
                        </Row>
                        {/*</div>*/}

                    </Col>
                    <Col span={3} pull={20}>
                    <Avatar size="large" style={{backgroundColor:this.state.color}}>{this.name[0]}</Avatar>
                    </Col>
                </Row>
            </Card>
        )
    }
}

export default MessageCard
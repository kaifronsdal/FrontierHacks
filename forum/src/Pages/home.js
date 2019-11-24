import React from 'react';
import 'antd/dist/antd.css';
import './home.css';
import {Col, Row} from "antd";
import Posts from "../Views/posts"
import Subforum from "../Views/subforum"

export default class Home extends React.Component {
    render() {
        return (
            <Row>
                <Col
                    span={18}>
                    <Posts/>
                </Col>
                <Col span={6}>
                    <Subforum name="Forums" numMembers={100}
                              description={"This is the best forum ever."}
                              joined={false}/>
                </Col>
            </Row>
        );
    }
}

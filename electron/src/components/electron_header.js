import React, {Component} from 'react';
import {Avatar, Row} from "antd";

class ElectronHeader extends Component {
    render() {
        return (
            <Row style={{display:"flex"}}>
                <div style={{backgroundColor:"white"}}>
                <img style={{maxWidth:"47%"}} src="logo.png"/>
                </div>
                <Avatar size="large" icon="user" className="vertical-center" style={{right:"2.5%", marginTop:"2.5%", position:"absolute"}}/>
            </Row>
            // <p style={{fontSize:30}}> Electron Chat</p>
        )
    }
}

export default ElectronHeader
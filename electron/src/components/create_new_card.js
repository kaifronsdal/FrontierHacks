import React, {Component} from "react"
import {Card, Icon, Row} from "antd";
import CreateNewMessage from "../views/create_new_message";

class CreateNewCard extends Component {
    constructor(props) {
        super(props)
        this.showModal = false
        console.log("HERERERRE", this.showModal)
    }


    onClick = () => {
        console.log("state modal", this.showModal)
        if (this.showModal) {
            this.showModal = false
        }
        else if (!this.showModal) {
            this.showModal = true
        }
        this.forceUpdate()
    }

    closeModal = () => {
        this.showModal = false
        this.forceUpdate()
    }

    render() {
        return (
            <div>
            <CreateNewMessage visible={this.showModal} close={this.closeModal} create_new={this.props.create_new}/>
            <a onClick={this.onClick}> <Card size="small" style={{marginTop:".5%"}}>
                <Row>
                <Icon style={{ fontSize: "25px"}} type="plus-circle" />
                <p>Create New Message</p>
                </Row>
            </Card>
            </a>
            </div>
        )
    }
}

export default CreateNewCard
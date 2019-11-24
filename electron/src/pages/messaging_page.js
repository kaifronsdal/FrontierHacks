import React, {Component} from 'react'
import ChatInput from "../components/chat_input";
import {Input, Icon} from "antd";
import DisplayMessages from "../views/display_messages";

class MessagingPage extends Component {
    constructor(props) {
        super(props)
        this.messages = [
            {"text":"hello you. why do you like to eat steak when chicken is tastier?", "mine":false},
            {"text":"hello now", "mine":false},
            {"text":"goodbye", "mine":true},
            {"text":"Good Morning. What's up", "mine": false},
            {"text":"The cow just went for a walk. All is well", "mine": true},
            {"text":"Cool", "mine": false},
            {"text":"Let's meet today", "mine": false},
            {"text":"sure", "mine": true},
        ]
    }

    // send_message(text) {
    //     this.messages.push(text)
    // }
    onSend = (e) => {
        this.messages.push({"text":e, "mine":true})
        console.log("sent " + e)
        this.forceUpdate()
    }

    getMessages = () => {
        // console.log("this messages ",)
        return this.messages
    }
    render() {
        return (
            <div style={{backgroundColor:'#e8e8e8'}}>
                <DisplayMessages messages={this.messages} getMessages={this.getMessages}/>
                <ChatInput onSend={this.onSend}/>
            </div>
        )
    }
}

export default MessagingPage
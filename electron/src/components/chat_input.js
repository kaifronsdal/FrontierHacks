import React, {Component} from 'react'
import {Icon, Button} from 'antd'
import { Input } from 'antd';

const { Search } = Input;

class ChatInput extends Component {
    constructor(props) {
        super(props)
        this.onSend = props.onSend
        this.text = ""
        // this.send_message = props.send_message()
    }
    state = {
        message : ""
    }
    handleChange(e) {
        console.log(e.target.value)
        this.text = e.target.value
        this.forceUpdate()
        // this.setState({
        //     message: e.target.value
        // })
        // console.log(this.state.message)
    }

    clear () {
        this.text = ""
        this.forceUpdate()
    }



    // onSearch(value, event) {
    //     console.log(value)
    //
    //     // console.log(e.target.text)
    // }
    // onSend(e) {
    //     // props.
    //     console.log(e)onChange={this.handleUsernameChange.bind(this)} value={this.state.username}
    // {/*<Search onSearch={this.props.onSend} onSearch={this.clear} placeholder="Type Message..." enterButton="Send" onChange={this.handleChange.bind(this)} value={this.text}/>*/}

    // }
    render() {
        return (

        <Search onSearch={this.props.onSend} placeholder="Type Message..." enterButton="Send"/>
        )
    }
}

export default ChatInput
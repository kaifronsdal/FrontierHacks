import React, {Component} from 'react'
import MessageCard from "../components/message_card";
import {Col} from "antd";
import {Link} from 'react-router-dom';

class DisplayMessageCards extends Component {
    constructor(props) {
        super(props)
        this.cards_list = props.cards_list
        console.log("cards", this.cards_list)
        this.message_cards = this.generateCards()
    }

    generateCards() {
        const message_cards = (
            <div>
                {this.cards_list.map(function(message_card, index) {
                    let cur_name = message_card["name"]
                    let cur_timestamp = message_card["timestamp"]
                    let cur_preview = message_card["preview"]
                    return (
                        <div style={{marginTop:".1%", marginLeft:"0%", marginRight:"0%"}}>
                            <MessageCard key={index} name={cur_name} timestamp={cur_timestamp} preview={cur_preview}/>
                        </div>
                    )
                    // return <p key={index}>you</p>;
                })}
            </div>
        )
        return message_cards
    }

    render() {
        const message_cards =  this.generateCards()// this.message_cards
        // console.log(message_cards)
        return (
            // {message_cards}
            <div>
                <Link to="/messages">
            {message_cards}
                </Link>
            </div>
        )
    }
}

export default DisplayMessageCards
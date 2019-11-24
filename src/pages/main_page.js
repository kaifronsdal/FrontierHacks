import React, {Component} from 'react'
import DisplayMessageCards from "../views/display_message_cards";
import ElectronHeader from "../components/electron_header";
import ElectronFooter from "../components/electron_footer";
import CreateNewCard from "../components/create_new_card";

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.message_list = [
                {"name":"Beave", "timestamp":"11:02 pm", "preview":"Help me please. Laura is still here"},
                {"name":"Longo", "timestamp": "8:00 pm", "preview": "I'm out"},
                {"name":"Kai", "timestamp": "7:30 am", "preview": "I wish I were out"},
                {"name":"Ori", "timestamp": "2:59 am", "preview": "Nerds"}
        ]
    }

    createNewMessage = (username, initial_text) => {
        const date = new Date()
        const timestamp = date.getHours() + ":" + date.getMinutes() + " "
        this.message_list.push({"name": username, "timestamp":timestamp, "preview" : initial_text})
        this.forceUpdate()
        console.log(this.message_list)
        console.log("new")
    }

    render() {
        console.log("rendering main")
        console.log(this.message_list)
        return (
            <div style={{backgroundColor:'#e8e8e8'}}>
                <ElectronHeader/>
                <CreateNewCard create_new={this.createNewMessage}/>
                <DisplayMessageCards cards_list={this.message_list}/>
                <ElectronFooter/>
            </div>
        )
    }
}
export default MainPage
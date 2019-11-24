import React from 'react';
import 'antd/dist/antd.css';
import './vote.css';
import {Icon, Row} from "antd";

export default class Vote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            voteState: 0,
            votes: props.votes
        }
    }

    handleUpVote = () => {
        if (this.state.voteState === 1) {
            this.setState({voteState: 0});
        } else {
            this.setState({voteState: 1});
        }
    };

    handleDownVote = () => {
        if (this.state.voteState === -1) {
            this.setState({voteState: 0});
        } else {
            this.setState({voteState: -1});
        }
    };

    getUpIcon() {
        if (this.state.voteState === 1) {
            return (<Icon style={{color: 'red'}} type="caret-up"/>)
        } else {
            return (<Icon type="caret-up"/>)
        }
    }

    getDownIcon() {
        if (this.state.voteState === -1) {
            return (<Icon style={{color: 'blue'}} type="caret-down"/>)
        } else {
            return (<Icon type="caret-down"/>)
        }
    }

    onSave() {
        console.log("saved");
    }

    render() {
        return (
            <Row className="contentLink" type="flex">
                <a id="vote" onClick={this.handleUpVote}>
                    {this.getUpIcon()}
                </a>

                <p
                    style={{
                        fontSize: '15px',
                        paddingRight: '5px',
                        paddingLeft: '5px'
                    }}
                >
                    {this.state.votes + this.state.voteState}
                </p>
                <a id="vote" onClick={this.handleDownVote}>
                    {this.getDownIcon()}
                </a>
                <a style={{paddingLeft: '20px'}} onClick={this.onSave}>
                    <Icon style={{paddingRight: '5px'}} type="save"/>
                    Save
                </a>
            </Row>
        );
    }
}

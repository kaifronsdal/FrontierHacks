import React from 'react';
import 'antd/dist/antd.css';
import './vote.css';
import {Icon, Row} from "antd";

export default class Vote extends React.Component {
    state = {
        voteState: 0,
        votes: 10
    };

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
            </Row>
        );
    }
}

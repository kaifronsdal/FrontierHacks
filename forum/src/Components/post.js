import React from 'react';
import 'antd/dist/antd.css';
import './post.css';
import Vote from './vote'
import {PageHeader, Button, Tag, Row, Typography, Icon, Card, Modal} from 'antd';

import {Link} from 'react-router-dom';

const {Paragraph} = Typography;

export default class Post extends React.Component {
    constructor(props) {
        super(props);
        let pop = true;
        if (props.pop) {
            pop = false;
        }
        this.state = {
            subforum: props.subforum,
            author: props.author,
            tags: props.tags,
            votes: props.votes,
            content: props.content,
            numComments: props.numComments,
            comments: props.comments,
            time: props.time,
            pop: pop
        };
    }

    getTags() {
        let tags = [];

        for (let i = 0; i < this.state.tags.length; i++) {

            tags.push(<Tag color="blue">{this.state.tags[i]}</Tag>)
        }
        return (<div>{tags}</div>)
    }

    getContent() {
        let cont = [];
        let content = this.state.content.split("\n");
        for (let i = 0; i < content.length; i++) {
            cont.push(<div>{content[i]}<br/></div>)
        }
        return (
            <div className="content">
                <Paragraph>
                    {cont}
                </Paragraph>
            </div>
        )
    }

    test(e) {
        let target = e.target;
        if (target.onclick != null) {
            return;
        }
        while (target.parentElement !== document.getElementById("post")) {
            target = target.parentElement;
            if (target.onclick != null) {
                return;
            }
        }
        console.log("test")
        this.showModal();
    }

    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    getPop() {
        if (this.state.pop) {
            let comments = [];
            for (let i = 0; i < this.state.comments.length; i++) {
                comments.push(
                    <PageHeader
                        style={{padding: '0px'}}
                        subTitle={<div style={{fontSize:'16px'}}>{this.state.comments[i].name}</div>}
                        extra={
                            <Paragraph style={{fontSize:'12px', paddingTop:'5px'}}>{this.state.comments[i].time}</Paragraph>}
                    >
                        <div style={{fontSize:'14px'}}>{this.state.comments[i].comment}</div>
                    </PageHeader>);
            }
            return (<Modal
                visible={this.state.visible}
                footer={[]}
                onCancel={this.handleCancel}
                style={{width: '100%', maxWidth: '80%', height: '100%'}}
            >
                <div>
                    <Post subforum={this.state.subforum}
                          author={this.state.author}
                          tags={this.state.tags}
                          votes={this.state.votes}
                          content={this.state.content}
                          numComments={this.state.numComments}
                          pop={true}/>
                    <div className="content">
                        <Paragraph>
                            {comments}
                        </Paragraph>
                    </div>
                </div>
            </Modal>);
        }
        return null;
    }

    render() {
        return (
            <div>
                <a onClick={(e) => {
                    this.test(e);
                }} id="post">
                    <Card>
                        <PageHeader
                            title={<Link id="header-title"
                                         path={`/${this.state.subforum}`}>{this.state.subforum}</Link>}
                            style={{padding: '0px'}}
                            subTitle={this.state.author}
                            tags={this.getTags()}
                            extra={
                                <Paragraph>{this.state.time}</Paragraph>}
                            avatar={{src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4'}}
                        >
                            {this.getContent()}
                            <Vote votes={this.state.votes} numComments={this.state.numComments}/>
                        </PageHeader>
                    </Card>
                </a>
                {this.getPop()}
            </div>
        );

    }

}

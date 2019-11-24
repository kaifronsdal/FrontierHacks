import React from 'react';
import 'antd/dist/antd.css';
import './post.css';
import Vote from './vote'
import {PageHeader, Button, Tag, Row, Typography, Icon, Card} from 'antd';

import {Link} from 'react-router-dom';

const {Paragraph} = Typography;

export default class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subforum: props.subforum,
            author: props.author,
            tags: props.tags,
            votes: props.votes,
            content: props.content,
            numComments: props.numComments,
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
    }

    render() {
        return (
            <Link onClick={this.test} id="post">
                <Card>
                    <PageHeader
                        title={<a id="header-title" path="/test">{this.state.subforum}</a>}
                        style={{padding: '0px'}}
                        subTitle={this.state.author}
                        tags={this.getTags()}
                        // extra={[
                        //     <Button key="3">Operation</Button>,
                        //     <Button key="2">Operation</Button>,
                        //     <Button key="1" type="primary">
                        //         Primary
                        //     </Button>,
                        // ]}
                        avatar={{src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4'}}
                    >
                        {this.getContent()}
                        <Vote votes={this.state.votes} numComments={this.state.numComments}/>
                    </PageHeader>
                </Card>
            </Link>
        );

    }

}

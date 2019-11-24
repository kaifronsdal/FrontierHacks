import React from 'react';
import 'antd/dist/antd.css';
import './post.css';
import Vote from './vote'
import {PageHeader, Button, Tag, Row, Typography, Icon, Card} from 'antd';

const {Paragraph} = Typography;

export default class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subforum: props.subforum,//"news",
            author: props.author,//"Kai Fronsdal",
            tags: props.tags,//["Tag A", "Tag B"],
            votes: props.votes,//10,
            content: props.content,//"Ant Design interprets the color system into two levels: a" +
                // "system-level color system and a product-level color system.\n\n" +
                // "Ant Design's design team preferred to design with the HSB color " +
                // "model, which makes it easier for designers to have a clear psychological " +
                // "expectation of color when adjusting colors, as well as facilitate " +
                // "communication in teams.",
        };
        // {
        //     subforum: "news",
        //     author: "Kai Fronsdal",
        //     tags: ["Tag A", "Tag B"],
        //     votes: 10,
        //     content: "Ant Design interprets the color system into two levels: a" +
        //         "system-level color system and a product-level color system.\n\n" +
        //         "Ant Design's design team preferred to design with the HSB color " +
        //         "model, which makes it easier for designers to have a clear psychological " +
        //         "expectation of color when adjusting colors, as well as facilitate " +
        //         "communication in teams.",
        // };
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

    render() {
        return (
            <Card>
                <PageHeader
                    title={<a id="header-title" path="/test">{this.state.subforum}</a>}
                    style={{border: '1px solid rgb(235, 237, 240)'}}
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
                    <Vote votes={this.state.votes}/>
                </PageHeader>
            </Card>
        );
    }
}

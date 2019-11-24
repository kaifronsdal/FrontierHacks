import React from 'react';
import 'antd/dist/antd.css';
import './post.css';
import Vote from './vote'
import {PageHeader, Button, Tag, Row, Typography, Icon, Card} from 'antd';
import {Link} from 'react-router-dom';

const {Paragraph} = Typography;

const content = (
    <div className="content">
        <Paragraph>
            Ant Design interprets the color system into two levels: a system-level color system and a
            product-level color system.
            <br/>
            <br/>
            Ant Design's design team preferred to design with the HSB color model, which makes it
            easier for designers to have a clear psychological expectation of color when adjusting colors,
            as well as facilitate communication in teams.
        </Paragraph>
    </div>
);

const Footer = ({votes}) => (
    <Row className="contentLink" type="flex">
        <a
            style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '-14px',
                fontSize: '20px',
            }}
        >
            <Icon id="vote up" type="caret-up"/>
        </a>

        <p
            style={{
                fontSize: '15px',
                paddingRight: '5px',
                paddingLeft: '5px'
            }}
        >
            {votes}
        </p>
        <a
            style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '-14px',
                fontSize: '20px',
            }}
        >
            <Icon id="vote down" type="caret-down"/>
        </a>
    </Row>
);

export default class Post extends React.Component {
    
    state = {
        subforum: "news",
        author: "Kai Fronsdal",
        tags: ["Tag A", "Tag B"],
        votes: 10,
    };

    getTags() {
        let tags = [];

        for (let i = 0; i < this.state.tags.length; i++) {

            tags.push(<Tag color="blue">{this.state.tags[i]}</Tag>)
        }
        return (<div>{tags}</div>)
    }

    render() {
        
        return (
            <Card>
            <PageHeader
                title={this.state.subforum}
                style={{border: '1px solid rgb(235, 237, 240)'}}
                subTitle={this.state.author}
                tags={this.getTags()}
                extra={[
                    <Button key="3">Operation</Button>,
                    <Button key="2">Operation</Button>,
                    <Button key="1" type="primary">
                        Primary
                    </Button>,
                ]}
                avatar={{src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4'}}
            ><Link to="/post.js">Post</Link>
                {content}
                <Vote />
            </PageHeader>
            </Card>
        );
        
    }
    
}

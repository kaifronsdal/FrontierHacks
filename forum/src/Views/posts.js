import React from 'react';
import 'antd/dist/antd.css';
import './posts.css';
import Post from '../Components/post'

var subforums = [{
    subforum: "news",
    posts: [{
        author: "Kai Fronsdal", tags: ["Tag A", "Tag B"], votes: 30,
        content: "Ant Design interprets the color system into two levels: a" +
            "system-level color system and a product-level color system.\n\n" +
            "Ant Design's design team preferred to design with the HSB color " +
            "model, which makes it easier for designers to have a clear psychological " +
            "expectation of color when adjusting colors, as well as facilitate " +
            "communication in teams.", numComments: 3, time: "20/25/2019",
        comments: [
            {
                name: "Alex",
                comment: "Wow!",
                time: "20/25/2019"
            },
            {
                name: "Daniel",
                comment: "Much Cool",
                time: "20/25/2019"
            }
        ]
    }]
}, {
    subforum: "meme",
    posts: [{
        author: "Uri Dickman", tags: ["Tagz"], votes: 107,
        content: "The quick brown fox jumped over the lazy dog.", numComments: 56, time: "4/1/2019",
        comments: [
            {
                name: "Daniel",
                comment: "So Cool!",
                time: "20/25/2019"
            },
            {
                name: "Alex",
                comment: "Sweet",
                time: "20/25/2019"
            }
        ]
    }]
}];

export default class Posts extends React.Component {
    constructor(props) {
        super(props);
        var posts = null;
        for (let i = 0; i < subforums.length; i++) {
            if (subforums[i].subforum === props.subforum) {
                posts = subforums[i].posts;
                break;
            }
        }
        this.state = {
            posts: posts,
            subforum: props.subforum,
            redirect: props.redirect
        }
    }

    render() {

        let posts = [];
        if (this.state.posts === null) {
            return null;
        }
        for (let i = 0; i < this.state.posts.length; i++) {

            posts.push(<Post subforum={this.state.posts[i].subforum}
                             author={this.state.posts[i].author}
                             tags={this.state.posts[i].tags}
                             votes={this.state.posts[i].votes}
                             content={this.state.posts[i].content}
                             numComments={this.state.posts[i].numComments}
                             redirect={this.state.redirect}
                             comments={this.state.posts[i].comments}
                             time={this.state.posts[i].time}/>)
        }
        return (<div style={{margin: '20px', marginRight: '0px'}}>{posts}</div>);
    }
}

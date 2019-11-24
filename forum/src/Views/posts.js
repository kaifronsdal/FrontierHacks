import React from 'react';
import 'antd/dist/antd.css';
import './posts.css';
import Post from '../Components/post'

export default class Posts extends React.Component {
    state = {
        posts: [{
            subforum: "news", author: "Kai Fronsdal", tags: ["Tag A", "Tag B"], votes: 30,
            content: "Ant Design interprets the color system into two levels: a" +
                "system-level color system and a product-level color system.\n\n" +
                "Ant Design's design team preferred to design with the HSB color " +
                "model, which makes it easier for designers to have a clear psychological " +
                "expectation of color when adjusting colors, as well as facilitate " +
                "communication in teams."
        }, {
            subforum: "meme", author: "Uri Dickman", tags: ["Tagz"], votes: 107,
            content: "The quick brown fox jumped over the lazy dog."
        }]
    };

    render() {

        let posts = [];

        for (let i = 0; i < this.state.posts.length; i++) {

            posts.push(<Post subforum={this.state.posts[i].subforum}
                             author={this.state.posts[i].author}
                             tags={this.state.posts[i].tags}
                             votes={this.state.posts[i].votes}
                             content={this.state.posts[i].content}/>)
        }
        return (<div>{posts}</div>);
    }
}

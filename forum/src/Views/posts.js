import React from 'react';
import 'antd/dist/antd.css';
import './posts.css';
import Post from '../Components/post'

export default class Posts extends React.Component {
    constructor(props) {
        super(props);
        var posts = null;
        var subforums = props.subforums;
        if (subforums === null || subforums === undefined) {
            this.state = {
                posts: [],
                subforum: ""
            };
            return;
        }
        for (let i = 0; i < subforums.length; i++) {
            if (subforums[i].subforum === props.subforum) {
                posts = subforums[i].posts;
                break;
            }
        }
        this.state = {
            posts: posts,
            subforum: props.subforum,
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
                             comments={this.state.posts[i].comments}
                             time={this.state.posts[i].time}/>)
        }
        return (<div style={{margin: '20px', marginRight: '0px'}}>{posts}</div>);
    }
}

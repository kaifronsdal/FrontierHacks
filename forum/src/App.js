import ReactDOM from 'react-dom';
import React from 'react';
import logo from './logo.svg';
import Landing from './Pages/landing';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

var user = {
    name: "Kai Fronsdal",
    loggedIn: true
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subforums: [{
                subforum: "news",
                numMembers: 100,
                description: "The best description",
                joined: true,
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
                numMembers: 420,
                description: "asjdflkasjdfhlkjdshf",
                joined: false,
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
            }]
        };
    }

    addPost(values) {
        var stateTemp = this.state.subforums;
        for (let i = 0; i < stateTemp.length; i++) {
            if (values.community === stateTemp[i].subforum) {
                stateTemp[i].posts.push({
                    author: user.name,
                    content: values.description,
                    tags: [],
                    votes: 0,
                    numComments: 0,
                    time: "11/24/19",
                    comments: []
                });
                this.setState({subforums: stateTemp});
                console.log(this.state.subforums);
                return;
            }
        }
        stateTemp.push({
            subforum: values.community,
            numMembers: 10,
            description: "An awesome subform",
            joined: true,
            posts: [{
                author: user.name,
                content: values.description,
                tags: [],
                votes: 0,
                numComments: 0,
                time: "11/24/19",
                comments: []
            }]
        });
        this.setState({subforums: stateTemp});
        console.log(this.state.subforums);
    }

    render() {
        return (<Landing subforums={this.state.subforums} addPost={this.addPost.bind(this)} user={user}/>);
    }
}

export default App;

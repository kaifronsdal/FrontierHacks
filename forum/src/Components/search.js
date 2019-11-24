import React from "react";
import 'antd/dist/antd.css';
import {Input} from "antd"
import {
    withRouter
} from 'react-router-dom'

const {Search} = Input;

class SearchBar extends React.Component {
    state = {
        value: ""
    };

    reroute(value) {
        this.props.history.push(`/${value}`);
        //this.setState({value: value});
    }

    render() {
        // if (this.state.value !== "") {
        //     let ret = (<div>
        //         <Redirect push to={`/${this.state.value}`}/>
        //         <Search
        //             placeholder="input search text"
        //             onSearch={value => this.reroute(value)}
        //         /></div>);
        //     return ret;
        // }
        return (
            <Search
                placeholder="input search text"
                onSearch={value => this.reroute(value)}
            />
        );
    }
}

export default withRouter(SearchBar)

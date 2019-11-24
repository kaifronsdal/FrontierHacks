import React from 'react';
import 'antd/dist/antd.css';
import {Icon, Button, Input, AutoComplete} from 'antd';
import './searchbar.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const {Option} = AutoComplete;

function onSelect(value) {
    console.log('onSelect', value);
}

function getRandomInt(max, min = 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}

function searchResult(query) {
    return new Array(getRandomInt(5))
        .join('.')
        .split('.')
        .map((item, idx) => ({
            query,
            category: `${query}${idx}`,
            count: getRandomInt(200, 100),
        }));
}

function renderOption(item) {
    return (
        <Option key={item.category} text={item.category}>
            <div className="global-search-item">
          <span className="global-search-item-desc">
            Found {item.query} on
            <Link
                path="/Components/post.js"
            >
              {item.category}
            </Link>
          </span>
                <span className="global-search-item-count">{item.count} results</span>
            </div>
        </Option>
    );
}

export default class SearchBar extends React.Component {
    state = {
        dataSource: [],
    };

    handleSearch = value => {
        this.setState({
            dataSource: value ? searchResult(value) : [],
        });
    };

    render() {
        const {dataSource} = this.state;
        return (
            <div className="global-search-wrapper"
                 style={{width: '200%', paddingLeft: '30px', marginTop: '-5px', marginBottom: '-5px'}}>
                <AutoComplete
                    className="global-search"
                    size="large"
                    style={{width: '100%'}}
                    dataSource={dataSource.map(renderOption)}
                    onSelect={onSelect}
                    onSearch={this.handleSearch}
                    placeholder="Search"
                    optionLabelProp="text"
                >
                    <Input suffix={<Icon type="search" className="certain-category-icon" />} />
                </AutoComplete>
            </div>
        );
    }
}

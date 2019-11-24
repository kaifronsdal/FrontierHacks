import React, {Component} from 'react'
import { Menu, Icon } from 'antd';

class BackBar extends Component {
    render() {
        return (
            <Menu>
                <Menu.item>
                    Back <Icon type="left-circle" />
                </Menu.item>
            </Menu>
        )
    }
}

export default BackBar
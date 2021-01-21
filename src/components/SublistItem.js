import React, { Component } from 'react'
import { Flex } from 'antd-mobile';
import Img from '../components/Img';

export default class SublistItem extends Component {
    render() {
        return (
            <div>
                <a href="#/detail">
                    <Flex className="sub-list-item">
                        <Flex.Item className="sub-list-item-left">
                            <Img src={this.props.obj.img} height={80} />
                        </Flex.Item>
                        <Flex.Item>
                            <h3>{this.props.obj.title}</h3>
                            <p>{this.props.obj.des}</p>
                        </Flex.Item>
                    </Flex>
                </a>
            </div>
        )
    }
}

import React, { Component } from 'react'
import { NavBar, SearchBar,Icon } from 'antd-mobile';
import Img from '../components/Img'
import '../assets/styles/header.less'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <NavBar
                    leftContent={this.props.isDetail ? "" : [
                        this.props.isFooter ? "" : <a href="#/home" key="0"><Img src="logo.png" height={30} /></a>
                    ]}
                    icon={this.props.isDetail ? <Icon type="left" /> : ""}
                    onLeftClick={()=>window.history.go(-1)}
                >{this.props.isDetail ? 
                <a href="#/home"><Img src="logo.png" height={30} /></a> : 
                this.props.isFooter ? 
                <div style={{width:"100%",textAlign:"right"}}>
                    <a href="#/home"><Img src="logo.png" height={30} /></a>
                </div> : 
                <SearchBar placeholder="搜你想搜的" maxLength={8} />}</NavBar>
            </div>
        )
    }
}

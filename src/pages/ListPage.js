import React, { Component } from 'react'
import Header from '../components/Header'
import MyListView from '../components/MyListView'

import '../assets/styles/listPage.less'

export default class ListPage extends Component {
    componentDidMount(){
        // 根据 url 传过来的 id　值(infoname 参数)
        console.log(this.props.routeParams.subjectId )
    }
    
    render() {
        return (
            <div className="list-page">
                {/* 头部组件 */}
                <Header />

                {/* 长列表 */}
                <div className="sub-list">
                    <div className="sub-list-header">相关资讯</div>
                    <MyListView />
                </div>
            </div>
        )
    }
}

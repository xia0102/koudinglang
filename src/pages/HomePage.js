import React, { Component } from 'react'
import '../assets/styles/homePage.less'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Subject from '../components/Subject'
import Sublist from '../components/Sublist'
import { Flex, Tabs, List  } from 'antd-mobile';
import Img from '../components/Img';
import '../assets/fonts/iconfont.css';

const Item = List.Item;


const tabs = [
    { title: '产品' },
    { title: '出行' },
    { title: '深度' },
];

export default class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabs
        }
    }
    render() {
        return (
            <div className="home-page">
                {/* 头部组件 */}
                <Header />

                {/* 轮播图组件 */}
                <Banner />

                {/* 项目组件 */}
                <Subject />

                {/* 小列表 */}
                <Sublist />

                {/* tab栏 */}
                <div className="tab">
                    <Tabs tabs={tabs} initialPage={0} animated={false} useOnPan={false}>
                        <div>
                            <Flex className="tab-flex">
                                <Flex.Item className="tab-left">
                                    <Img src="20191025091907842.gif" height={79} />
                                </Flex.Item>
                                <Flex.Item className="tab-right">
                                    <h3>1111111111111计划为Galaxy S11配置可卷曲显示屏和可旋转摄像头</h3>
                                    <p>
                                        <span>
                                            <i className="iconfont icon-shijian"></i>
                                            2小时前
                                        </span>
                                        <span style={{float:"right"}}>
                                            <i className="iconfont icon-liulan"></i>
                                            63
                                        </span>
                                    </p>
                                </Flex.Item>
                            </Flex>
                            <Item arrow="horizontal" onClick={() => {}}>小米有品推出小寻定位书包 拥有8重定位系统</Item>
                            <Item arrow="horizontal" onClick={() => {}}>小米有品推出小寻定位书包 拥有8重定位系统</Item>
                            <Item arrow="horizontal" onClick={() => {}}>小米有品推出小寻定位书包 拥有8重定位系统</Item>
                            <Item arrow="horizontal" onClick={() => {}}>小米有品推出小寻定位书包 拥有8重定位系统</Item>
                            <Item arrow="horizontal" onClick={() => {}}>小米有品推出小寻定位书包 拥有8重定位系统</Item>
                            <Item arrow="horizontal" onClick={() => {}}>小米有品推出小寻定位书包 拥有8重定位系统</Item>
                        </div>
                        <div>
                            <Flex className="tab-flex">
                                <Flex.Item className="tab-left">
                                    <Img src="20191025091907842.gif" height={79} />
                                </Flex.Item>
                                <Flex.Item className="tab-right">
                                    <h3>22222222222222计划为Galaxy S11配置可卷曲显示屏和可旋转摄像头</h3>
                                    <p>
                                        <span>
                                            <i className="iconfont icon-shijian"></i>
                                            2小时前
                                        </span>
                                        <span style={{float:"right"}}>
                                            <i className="iconfont icon-liulan"></i>
                                            63
                                        </span>
                                    </p>
                                </Flex.Item>
                            </Flex>
                            <Item arrow="horizontal" onClick={() => {}}>小米有品推出小寻定位书包 拥有8重定位系统</Item>
                            <Item arrow="horizontal" onClick={() => {}}>小米有品推出小寻定位书包 拥有8重定位系统</Item>
                            <Item arrow="horizontal" onClick={() => {}}>小米有品推出小寻定位书包 拥有8重定位系统</Item>
                            <Item arrow="horizontal" onClick={() => {}}>小米有品推出小寻定位书包 拥有8重定位系统</Item>
                            <Item arrow="horizontal" onClick={() => {}}>小米有品推出小寻定位书包 拥有8重定位系统</Item>
                            <Item arrow="horizontal" onClick={() => {}}>小米有品推出小寻定位书包 拥有8重定位系统</Item>
                        </div>
                        <div>
                            <Flex className="tab-flex">
                                <Flex.Item className="tab-left">
                                    <Img src="20191025091907842.gif" height={79} />
                                </Flex.Item>
                                <Flex.Item className="tab-right">
                                    <h3>3333333333333计划为Galaxy S11配置可卷曲显示屏和可旋转摄像头</h3>
                                    <p>
                                        <span>
                                            <i className="iconfont icon-shijian"></i>
                                            2小时前
                                        </span>
                                        <span style={{float:"right"}}>
                                            <i className="iconfont icon-liulan"></i>
                                            63
                                        </span>
                                    </p>
                                </Flex.Item>
                            </Flex>
                            <Item arrow="horizontal" onClick={() => {}}>小米有品推出小寻定位书包 拥有8重定位系统</Item>
                            <Item arrow="horizontal" onClick={() => {}}>小米有品推出小寻定位书包 拥有8重定位系统</Item>
                            <Item arrow="horizontal" onClick={() => {}}>小米有品推出小寻定位书包 拥有8重定位系统</Item>
                            <Item arrow="horizontal" onClick={() => {}}>小米有品推出小寻定位书包 拥有8重定位系统</Item>
                            <Item arrow="horizontal" onClick={() => {}}>小米有品推出小寻定位书包 拥有8重定位系统</Item>
                            <Item arrow="horizontal" onClick={() => {}}>小米有品推出小寻定位书包 拥有8重定位系统</Item>
                        </div>
                    </Tabs>
                </div>

                {/* 页面尾部 */}
                <Header isFooter />
                <div className="footer">
                    <p>© 2018-2019 ICP备案：粤ICP备17147191号</p>
                    <p>广州狼码教育科技有限公司</p>
                    <p>办公电话：020-85628002</p>
                    <p>地址：广州市天河区棠下大地商务港D栋603</p>
                </div>
            </div>
        )
    }
}

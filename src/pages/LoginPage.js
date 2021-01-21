// 登录页面
import React, { Component } from 'react'

import "../assets/styles/loginPage.less"
import Img from "../components/Img"
import FormInput from "../components/FormInput"
import FormBtn from "../components/FormBtn"
import axios from 'axios'
import { Toast } from 'antd-mobile';


export default class LoginPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: ""
        }
    }

    handleChangeUname(e) {
        this.setState({
            username: e.target.value
        })
    }

    handleChangeUpwd(e) {
        this.setState({
            password: e.target.value
        })
    }

    handleClick(e) {
        e.preventDefault();
        if (this.state.username === 'admin' && this.state.password === '123456') {
            let params = {
                username: this.state.username,
                password: this.state.password
            }
            // 发起登录请求   publish文件下
            axios.get("/server/data.json", params)
                .then(resp => {
                    if (resp.data.success) {
                        Toast.success(resp.data.errmsg, 1.5)
                        // console.log(resp.data.errmsg)
                        // 跳转到首页
                        this.props.router.push('/home')
                    }
                })
        } else {
            Toast.fail('登录失败！', 1.5)
        }
    }

    render() {
        return (
            <div className="login-page">
                <Img src="logo.png" />
                <form className="login-form">
                    <FormInput type="text" iconclass="shouji" placeholder="用户名" value={this.state.username} onChange={this.handleChangeUname.bind(this)} />
                    <FormInput type="password" iconclass="mima" placeholder="密码" value={this.state.password} onChange={this.handleChangeUpwd.bind(this)} />
                    <FormBtn isFull={true} onClick={this.handleClick.bind(this)}>登录</FormBtn>
                    <FormBtn type="ordinary">忘记密码</FormBtn>
                    <FormBtn>免费注册</FormBtn>&emsp;
                    <FormBtn>游客登录</FormBtn>
                </form>
            </div>
        )
    }
}

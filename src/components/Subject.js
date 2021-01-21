import React, { Component } from 'react'
import { Flex } from 'antd-mobile';
import axios from 'axios'

import "../assets/styles/subject.less"

import { connect } from 'react-redux'

class Subject extends Component {
    // constructor(props){
    //     super(props)

    //     this.state = {
    //         subject_data:[]
    //     }
    // }

    componentDidMount(){
        axios.get('/server/subject.json')
        .then(res=>{
            // console.log(res)
            this.props.init_subject_data(res.data)
            // this.setState({
            //     subject_data:res.data
            // })
        })
    }

    render() {
        return (
            <div className="subject">
                <Flex>
                    {
                        this.props.subject_data.map((v,k)=>{
                            if(k<4){
                                return (
                                    <Flex.Item key={v.id}>
                                        <a href={"#/list/"+v.id}>
                                            <i style={{backgroundPositionX:-50*k}}></i>
                                            <p>{v.subjectName}</p>
                                        </a>
                                    </Flex.Item>
                                )
                            }
                            return ""
                        })
                    }
                </Flex>
                <Flex>
                {
                        this.props.subject_data.map((v,k)=>{
                            if(k>=4){
                                return (
                                    <Flex.Item key={v.id}>
                                        <a href={"#/list/"+v.id}>
                                            <i style={{backgroundPositionX:-50*k}}></i>
                                            <p>{v.subjectName}</p>
                                        </a>
                                    </Flex.Item>
                                )
                            }
                            return ""
                        })
                    }
                    <Flex.Item></Flex.Item>
                </Flex>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        subject_data: state.subject_data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        init_subject_data(res_data){
            //3、 调用dispatch(action)，将管理状态的方案传当做参数
            let action = {
                type:'init_subject_data',
                //这里其实修改的是props中的subject_data
                value:res_data
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Subject)
import React, { Component } from "react"
import ReactDOM from "react-dom"
import { Router, Route, hashHistory } from 'react-router'

import LoginPage from "./LoginPage"
import HomePage from "./HomePage"
import ListPage from "./ListPage"
import DetailPage from "./DetailPage"

import {createStore} from 'redux'
import { Provider } from 'react-redux'

// export default class App extends Component {
//     render() {
//         return (
//             // <LoginPage />
//             // <HomePage />
//             // <ListPage />
//             // <DetailPage />
//             appRouter
//         )
//     }
// }

const defaultState = {
    subject_data:[]
}

// 请一个仓库管理员，必须是一个函数
const reducer = (state = defaultState, action) => {
    if(action.type === "init_subject_data"){
        let newState = JSON.parse(JSON.stringify(state))
        newState.subject_data = action.value
        return newState
    }
    return state
}

//创建一个仓库， 把仓库管理员请来管理这个仓库
const store = createStore(reducer)


const appRouter = <Provider store={store}>
    <Router history={hashHistory}>
        <Route path="/" component={LoginPage}></Route>
        <Route path="/home" component={HomePage}></Route>
        <Route path="/list/:subjectId" component={ListPage}></Route>
        <Route path="/detail" component={DetailPage}></Route>
    </Router>
</Provider>

ReactDOM.render(
    appRouter,
    document.getElementById('root')
)
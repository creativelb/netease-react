import React, { Component } from 'react'
import { connect } from 'react-redux';
import './Home.scss'

import {IS_PLAYING, UN_IS_PLAYING, TOGGLE_PLAYING} from '@/store/player/action-type.js'

import { Input } from 'antd';

class Home extends Component {
    
    state = {
        searchInput: ''
    }

    searchInput = (e) => {
        this.setState({searchInput: e.target.value})
    }

    render() {
        return (
            <div className="home">
                <div className="header">
                    <div className="left">
                        <ul className="bottons">
                            <li className="mac-button"><i className="iconfont icon-home"></i></li>
                            <li className="mac-button"><i className="iconfont icon-zuixiaohua"></i></li>
                            <li className="mac-button"><i className="iconfont icon-maximize"></i></li>
                        </ul>
                        <div className="history">
                            <span><i className="iconfont icon-left"></i></span>
                            <span><i className="iconfont icon-right"></i></span>
                        </div>
                    </div>
                    <div className="right">
                        <Input 
                            prefix={<i className="iconfont icon-search"></i>} 
                            placeholder="搜索"
                            className="search"
                            onChange={this.searchInput}>
                        </Input>
                        <span className="cloth"><i className="iconfont icon-clothes"></i></span>
                    </div>
                </div>
                <div className="center">
                    <div className="sidebar">

                    </div>
                </div>
                <div className="bottom">

                </div>
            </div>
        )
    }
}

export default connect(state => ({
    player: state.player
},{
    IS_PLAYING
}))(Home)

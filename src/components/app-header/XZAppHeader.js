import React, { memo } from 'react';
import { NavLink } from 'react-router-dom'

import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import { routeData } from '@/common/local-data.js'
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'
export default memo(function XZAppHeader() {
    // 遍历link数据
    const linkData = (item, index) => {
        if(index === 0) {
            return (
                <NavLink to="/discovery">
                    { item.title }
                    <i className='sprite_01 icon'></i>
                </NavLink>
            )
        }
        if(index < 3) {
            return (
                <NavLink to={ item.link }>
                    { item.title }
                    <i className='sprite_01 icon'></i>
                </NavLink>
            )
        }else {
            return (
                <a href={ item.link }>
                    { item.title }
                </a>
            )
        }
    }

    return (
        <HeaderWrapper>
            <div className="content wrap-v1">
                <HeaderLeft>
                    <a href='#/' className='logo sprite_01'>网易云音乐</a>
                    <div className='nav-list'>
                        {
                            routeData.map((item, index) => {
                                return (
                                    <div className='nav-list-item' key={ item.title }>
                                        { linkData(item, index) }
                                    </div>
                                )
                            })
                        }
                    </div>
                </HeaderLeft>
                <HeaderRight>
                    <Input size="small" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined /> } className='search-input' />
                    <div className='create-btn'>
                        创作者中心
                    </div>
                    <div className='login-btn'>
                        登录
                    </div>
                </HeaderRight>
            </div>
            <div className='under'></div>
        </HeaderWrapper>
    );
});

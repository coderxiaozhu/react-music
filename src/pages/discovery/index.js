import React, { memo, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { DiscoveryWarpper, TopMenu } from './style'
import { dicoverMenu } from '@/common/local-data.js'
import request from '@/services/request.js'

export default memo(function Discovery(props) {
    useEffect(() => {
        request("/banner")
        .then(res => {
            console.log(res);
        })
    })
    return (
        <DiscoveryWarpper>
            <div className='top wrap-v1'>
                <TopMenu className="wrap-v2">
                    {
                        dicoverMenu.map((item, index) => {
                            return (
                                <div key={item.title} className='menuList'>
                                    <NavLink to={item.link}>
                                        <span>{ item.title }</span>
                                    </NavLink>
                                </div>
                            )
                        })
                    }
                </TopMenu>
            </div>
           <Outlet />
        </DiscoveryWarpper>
    );
});
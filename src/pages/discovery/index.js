import React, { memo } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { DiscoveryWarpper, TopMenu } from './style'
import { dicoverMenu } from '@/common/local-data.js'

export default memo(function Discovery(props) {
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
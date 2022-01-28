import React, { memo } from 'react';

import { TopRankWapper } from './style'
import { getSizeImage } from '@/utils/data-formate.js'
export default memo(function XZtopRank(props) {
    const { info } = props;
    const { tracks = [] } = info;
    return (
        <TopRankWapper>
            <div className='topHeader'>
                <div className='headerImg'>
                    <img src={ getSizeImage(info.coverImgUrl) } alt={ info.name } />
                    <a href='todo' className='mask'> </a>
                </div>
                <div className='headerTitle'>
                    <a href='todo'>{ info.name }</a>
                    <div className='iconWapper'>
                        <a href='todo' className='icon1'> </a>
                        <a href='todo' className='icon2'> </a>
                    </div>
                </div>
            </div>
            <div className='content'>
                {
                    tracks.slice(0, 10).map((item, index) => {
                        return (
                            <div className='content-item' key={ item.id }>
                                <span className='rank'>{ index + 1 }</span>
                                <a href='todo' title='4444'>{ item.name }</a>
                                <div className='oper'>
                                    <a href='todo' title='播放' className='play'> </a>
                                    <a href='todo' title='添加到播放列表' className='addPlay'> </a>
                                    <a href='todo' title='收藏' className='collect'> </a>
                                </div>
                            </div>
                        )
                    })
                }  
                <div className='more'>
                    <a href='todo'>查看全部</a>
                </div>
            </div>
        </TopRankWapper>
    );
});

import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

import { TopRankWapper } from './style'
import { getSizeImage } from '@/utils/data-formate.js'
import { getCurrentSongAction } from '@/pages/player/store'

export default memo(function XZtopRank(props) {
    // props and state
    const { info } = props;
    const { tracks = [] } = info;

    // redux hooks
    const dispatch = useDispatch();

    // other handle
    const playMusic = item => {
        dispatch(getCurrentSongAction(item.id))
    }
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
                                <a href='todo' title={ item.name }>{ item.name }</a>
                                <div className='oper'>
                                    <button className='play' onClick={ e => playMusic(item) }> </button>
                                    <button  className='addPlay'> </button>
                                    <button  className='collect'> </button>
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

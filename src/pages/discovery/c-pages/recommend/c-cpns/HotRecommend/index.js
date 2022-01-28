import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { HotRecommendWapper } from './style'
import { HOT_RECOMMEND_LIMIT } from '@/common/constants'
import XZthemeHeaderRcm from '@/components/theme-header-rcm'
import { getHotRecommendAction } from '../../store/actionCreators'
import SongsCover from '@/components/songs-cover';
export default memo(function XZhotRecommend() {
    // state

    // redux
    const { hotRecommends } = useSelector(state => ({
        hotRecommends: state.getIn(["recommend", "hotRecommends"])
    }), shallowEqual)
    const dispatch = useDispatch()

    // other hook
    useEffect(() => {
        dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT))
    }, [dispatch])
    return (
        <HotRecommendWapper>
            <XZthemeHeaderRcm title="热门推荐" keywords={["华语", "流行", "摇滚", "民谣", "电子"]}></XZthemeHeaderRcm>
            <div className='recommend-list'>
                {
                    hotRecommends.map((item, index) => {
                        return (
                            <div key={item.id}>
                                <SongsCover info={ item } margin="30px 0 0px 0" writer={ false }></SongsCover>
                            </div>
                        )
                    })
                }
            </div>
        </HotRecommendWapper>
    );
});

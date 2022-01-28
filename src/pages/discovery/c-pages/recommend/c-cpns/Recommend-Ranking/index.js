import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import {
    RankingWapper
} from './style'
import XZthemeHeaderRcm from '@/components/theme-header-rcm'
import XZtopRank from '@/components/top-ranking'
import { getRecommendRanksAction } from '../../store/actionCreators'
export default memo(function XZrecommendRanking() {

    // redux hooks
    const dispatch = useDispatch()
    const { originRanking, newRanking, upRanking } = useSelector(state => ({
        originRanking:  state.getIn(["recommend", "originRanking"]),
        newRanking: state.getIn(["recommend", "newRanking"]),
        upRanking: state.getIn(["recommend", "upRanking"])
    }), shallowEqual)

    // other hooks
    useEffect(() => {
        dispatch(getRecommendRanksAction(0))
        dispatch(getRecommendRanksAction(2))
        dispatch(getRecommendRanksAction(3))
    }, [dispatch])
    return (
        <RankingWapper>
            <XZthemeHeaderRcm title="榜单" />
            <div className='contentWapper'>
                <div className='content'>
                    <XZtopRank info={ originRanking } />
                    <XZtopRank info={ newRanking } />
                    <XZtopRank info={ upRanking } />
                </div>
            </div>
        </RankingWapper>
    );
});

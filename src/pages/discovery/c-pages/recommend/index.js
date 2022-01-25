import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { RecommendWrapper } from './style'
import { getTopBannersAction } from './store/actionCreators'

function XZrecommend() {
    const { topBanners } = useSelector(state => ({
        topBanners: state.recommend.topBanners
    }), shallowEqual)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTopBannersAction())
    }, [dispatch])
    return (
        <RecommendWrapper>
            <h2>XZrecommend: { topBanners.length }</h2>
        </RecommendWrapper>
    );
};

export default memo(XZrecommend)

// const mapStateToProps = state => ({ 
//     topBanners: state.recommend.topBanners
// })

// const mapDispatchToProps = dispatch => ({
//     getTopBanners: () => {
//         dispatch(getTopBannersAction())
//     }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(XZrecommend))
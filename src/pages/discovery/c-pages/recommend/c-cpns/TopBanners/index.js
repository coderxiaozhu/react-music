import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'antd';

import { getTopBannersAction } from '../../store/actionCreators'
import { TopBannersWapper, BannerLeft, BannerRight, ButtonControl } from './style'
export default memo(function XZtopBanner() {
    // 获取当前图片url
    const [currentIndex, setCurrentIndex] = useState()

    // 与redux进行联系
    const { topBanners } = useSelector(state => ({
        topBanners: state.getIn(["recommend", "topBanners"])
    }), shallowEqual)
    const dispatch = useDispatch();

    // 其他hooks
    const bannerRef = useRef();
    useEffect(() => {
        dispatch(getTopBannersAction())
    }, [dispatch])
    const changeBannerImg = useCallback((from, to) => {
        setTimeout(() => {
            setCurrentIndex(to)
        }, 0)
    }, [])

    // 传入背景图片的url
    const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20")
    return (
        <TopBannersWapper bgImage={ bgImage }>
            <div className='wrap-v2 bannerMain'>
                <BannerLeft>
                <Carousel effect="fade" autoplay beforeChange={ changeBannerImg } ref={ bannerRef }>
                    {
                        topBanners.map((item, index) => {
                            return (
                                <div key={item.imageUrl} className='banner-item'>
                                    <img src={ item.imageUrl } alt={ item.typeTitle } />
                                </div>
                            )
                        })
                    }
                </Carousel>
                </BannerLeft>
                <BannerRight>
                </BannerRight>
                <ButtonControl>
                    <div className='btn btn-left' onClick={ e => bannerRef.current.prev() }></div>
                    <div className='btn btn-right' onClick={ e => bannerRef.current.next() }></div>
                </ButtonControl>
            </div>
        </TopBannersWapper>
    );
});

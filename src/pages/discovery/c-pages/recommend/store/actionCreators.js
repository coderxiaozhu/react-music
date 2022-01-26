import * as actionTypes from './constant'
import { getTopBanners, getHotRecommends } from '@/services/recommend'

const changeBanners = res => ({
    type: actionTypes.CHANGE_TOP_BANNERS,
    topBanners: res.banners
})

const changeHotRecommend = res => ({
    type: actionTypes.CHANGE_HOT_RECOMMEND,
    hotRecommends: res.result
})

export const getTopBannersAction = () => {
    return dispatch => {
        getTopBanners().then(res => {
            dispatch(changeBanners(res))
        })
    }
}

export const getHotRecommendAction = limit => {
    return dispatch => {
        getHotRecommends(limit).then(res => {
            dispatch(changeHotRecommend(res))
        })
    }
}
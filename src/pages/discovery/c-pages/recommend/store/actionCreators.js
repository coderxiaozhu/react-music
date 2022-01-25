import * as actionTypes from './constant'
import { getTopBanners } from '@/services/recommend.js'

const changeBanners = res => ({
    type: actionTypes.CHANGE_TOP_BANNERS,
    topBanners: res.banners
})

export const getTopBannersAction = () => {
    return dispatch => {
        getTopBanners().then(res => {
            dispatch(changeBanners(res))
        })
    }
}
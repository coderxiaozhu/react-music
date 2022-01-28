import * as actionTypes from './constant';
import { getTopBanners, getHotRecommends, getNewAlbums, getRecommendRanks } from '@/services/recommend';

const changeBanners = res => ({
    type: actionTypes.CHANGE_TOP_BANNERS,
    topBanners: res.banners
});

const changeHotRecommend = res => ({
    type: actionTypes.CHANGE_HOT_RECOMMEND,
    hotRecommends: res.result
});

const changeNewAlbums = res => ({
    type: actionTypes.CHANGE_NEW_ALBUMS,
    newAlbums: res.albums
})

// 原创
const changeOriginRanking = res => ({
    type: actionTypes.CHANGE_ORIGIN_RANKING,
    originRanking: res.playlist
})

// 新歌
const changeNewRanking = res => ({
    type: actionTypes.CHANGE_NEW_RANKING,
    newRanking: res.playlist
})

// 飙升
const changeUpRanking = res => ({
    type: actionTypes.CHANGE_UP_RANKING,
    upRanking: res.playlist
})

export const getTopBannersAction = () => {
    return dispatch => {
        getTopBanners().then(res => {
            dispatch(changeBanners(res))
        })
    }
};

export const getHotRecommendAction = limit => {
    return dispatch => {
        getHotRecommends(limit).then(res => {
            dispatch(changeHotRecommend(res))
        })
    }
};

export const getNewAlbumsAction = limit => {
    return dispatch => {
        getNewAlbums(limit).then(res => {
            dispatch(changeNewAlbums(res))
        })
    }
}

export const getRecommendRanksAction = idx => {
    return dispatch => {
        getRecommendRanks(idx).then(res => {
            switch(idx) {
                case 0:
                    dispatch(changeNewRanking(res))
                    break;
                case 2:
                    dispatch(changeOriginRanking(res))
                    break;
                case 3:
                    dispatch(changeUpRanking(res))
                    break;
                default:
    
            }
        })
    }
}
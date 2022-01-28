import request from './request'

export const getTopBanners = () => {
    return request({
        url: '/banner'
    })
}
export const getHotRecommends = (limit) => {
    return request({
        url: "/personalized",
        params: {
          limit
        }
      })
}

// 新碟上架
export const getNewAlbums = (limit) => {
    return request({
        url: "/top/album",
        params: {
          limit
        }
    })
}

// 榜单
export const getRecommendRanks = (idx) => {
    return request({
        url: "/top/list",
        params: {
            idx
        }
    })
}
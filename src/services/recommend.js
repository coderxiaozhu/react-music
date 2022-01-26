import request from './request'

export const getTopBanners = () => {
    return request({
        url: '/banner'
    })
}
export function getHotRecommends(limit) {
    return request({
        url: "/personalized",
        params: {
          limit
        }
      })
}
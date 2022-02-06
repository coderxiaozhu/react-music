import request from './request'

export const getCurrentSongs = (ids) => {
    return request({
        url: "/song/detail",
        params: {
            ids
        }
    })
}
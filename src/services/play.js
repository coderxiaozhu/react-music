import request from './request'

export const getCurrentSongs = (ids) => {
    return request({
        url: "/song/detail",
        params: {
            ids
        }
    })
}

export const getLyricData = (id) => {
    return request({
        url: "/lyric",
        params: {
            id
        }
    })
}
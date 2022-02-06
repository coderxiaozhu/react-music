import { getCurrentSongs } from '@/services/play';
import * as actionTypes from './constants'

const changeCurrentSong = currentSong => ({
    type: actionTypes.CHANGE_CURRENT_SONG,
    currentSong
})

export const getCurrentSongAction = (ids) => {
    return dispatch => {
        getCurrentSongs(ids).then(res => {
            dispatch(changeCurrentSong(res.songs[0]))
        })
    }
}
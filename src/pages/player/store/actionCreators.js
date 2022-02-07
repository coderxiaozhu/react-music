import { getCurrentSongs } from '@/services/play';
import * as actionTypes from './constants'
import { getRandomNumber } from '@/utils/data-formate.js'

const changeCurrentSong = currentSong => ({
    type: actionTypes.CHANGE_CURRENT_SONG,
    currentSong
})

const changeCurrentIndex = currentIndex => ({
    type: actionTypes.CHANGE_CURRENT_INDEX,
    currentIndex
})

const changePlayList = playList => ({
    type: actionTypes.CHANGE_PLAYLIST,
    playList
})

export const changeSequeue = sequeue => ({
    type: actionTypes.CHANGE_SEQUEUE,
    sequeue
})

// 上一首下一首的歌曲
export const changeCurrentIndexAndSongAction = tag => {
    return (dispatch, getState) => {
        let currentIndex = getState().getIn(["player", "currentIndex"])
        let song = getState().getIn(["player", "currentSong"])
        const sequence = getState().getIn(["player", "sequeue"])
        const playList = getState().getIn(["player", "playList"])
        switch(sequence) {
            case 1:    //随机播放
                let songIndex = getRandomNumber(playList.length);
                while(songIndex === currentIndex) {
                    songIndex = getRandomNumber(playList.length);
                }
                currentIndex = songIndex;
            break;
            default:  // 顺序和循环播放
                currentIndex += tag
                if(currentIndex >= playList.length) currentIndex = 0
                if(currentIndex < 0) currentIndex = playList.length - 1
        }
        song = playList[currentIndex];
        dispatch(changeCurrentIndex(currentIndex));
        dispatch(changeCurrentSong(song));
    }
}

export const getCurrentSongAction = (ids) => {
    return (dispatch, getState) => {
        const playList = getState().getIn(['player', 'playList'])
        const index = playList.findIndex(item => item.id === ids);
        let song = null;
        if(index !== -1) {
            dispatch(changeCurrentIndex(index));
            song = playList[index];
            dispatch(changeCurrentSong(song));
        }else {
            getCurrentSongs(ids).then(res => {
                song = res.songs && res.songs[0];
                if(!song) return

                const newPlayList = [...playList];
                newPlayList.push(song)
                dispatch(changeCurrentSong(song))
                dispatch(changePlayList(newPlayList));
                dispatch(changeCurrentIndex(newPlayList.length - 1));
            })
        }
    }
}

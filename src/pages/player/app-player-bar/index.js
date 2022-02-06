import React, { memo, useState, useCallback, useEffect, useRef } from 'react';
// import { NavLink } from 'react-router-dom';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { Slider } from 'antd';

import {
    PlayerBarWrapper,
    Control,
    PlayInfo,
    Operator
} from './style'
import { getSizeImage, formatDate, getPlaySong } from '@/utils/data-formate.js'
import { getCurrentSongAction } from '../store/actionCreators'
export default memo(function HYAppPlayerBar() {
    // props and state
    const [currentTime, setCurrentTime] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isChanging, setIsChangeing] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)

    // redux hooks
    const { currentSong } = useSelector(state => ({
        currentSong:  state.getIn(["player", "currentSong"])
    }), shallowEqual)
    const dipatch = useDispatch()

    // other hooks
    const audioRef = useRef();
    // setCurrentTime(audioRef.current.currentTime)
    useEffect(() => {
        dipatch(getCurrentSongAction(167876))
    }, [dipatch])
    useEffect(() => {
        const currentSongSrc = getPlaySong(currentSong.id)
        audioRef.current.src = currentSongSrc
    }, [currentSong])

    // other handle
    const imgUrl = (currentSong.al && currentSong.al.picUrl) || "";
    const songName = (currentSong.name && currentSong.name) || "";
    const singerName = (currentSong.ar && currentSong.ar[0].name) || "";
    const songTime = (currentSong.dt && currentSong.dt) || 0;


    // handle function
    const playMusic = useCallback(() => {
        isPlaying ? audioRef.current.pause() : audioRef.current.play()
        setIsPlaying(!isPlaying);
    }, [isPlaying])
    const timeUpdate = e => {
        const tempTime = e.target.currentTime;
        if(!isChanging) {
            setCurrentTime(tempTime * 1000);
            setProgress(tempTime * 1000 / songTime * 100)
        }
    }
    const sliderChange = useCallback(value => {
        setProgress(value)
        const currentTime = value / 100 * songTime
        setCurrentTime(currentTime)
        setIsChangeing(true)
    }, [songTime])
    const sliderAfterChange = useCallback(value => {
        const currentTime = value / 100 * songTime / 1000
        audioRef.current.currentTime = currentTime;
        setCurrentTime(currentTime * 1000)
        setIsChangeing(false)
        if(!isPlaying) {
            playMusic()
        }
    },[songTime, isPlaying, playMusic])
    return (
        <PlayerBarWrapper className='sprite_player'>
            <div className='content wrap-v2'>
                <Control isPlaying={ isPlaying }>
                    <button className='sprite_player prv'></button>
                    <button className='sprite_player ply' onClick={ e => playMusic() }></button>
                    <button className='sprite_player nxt'></button>
                </Control>
                <PlayInfo>
                    <div className='coverImg'>
                         <img 
                           src={ getSizeImage(imgUrl, 35) }
                           alt='图片'
                            />
                    </div>
                    <div className='play'>
                        <div className='song'>
                            <span className='song-name f-thide'>{ songName }</span>
                            <a href='#/' className='singer-name f-thide'>{ singerName }</a>
                        </div>
                        <div className='process'>
                            <Slider defaultValue={30} 
                                value={progress}
                                onChange={sliderChange}
                                onAfterChange={sliderAfterChange}
                                />
                            <div className="time">
                                <span className="now-time">{ formatDate(currentTime, "mm:ss") }</span>
                                <span className="divider">/</span>
                                <span className="duration">{ formatDate(songTime, "mm:ss") }</span>
                            </div>
                        </div>
                    </div>
                </PlayInfo>
                <Operator>
                    <div className="left">
                        <button className="sprite_player btn favor"></button>
                        <button className="sprite_player btn share"></button>
                    </div>
                    <div className="right sprite_player">
                        <button className="sprite_player btn volume"></button>
                        <button className="sprite_player btn loop"></button>
                        <button className="sprite_player btn playlist"></button>
                    </div>
                    <audio ref={audioRef}
                           onTimeUpdate={ timeUpdate }
                            />
                </Operator>
            </div>
        </PlayerBarWrapper>
    );
});

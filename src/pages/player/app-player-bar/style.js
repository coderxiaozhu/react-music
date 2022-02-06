import styled from "styled-components";

export const PlayerBarWrapper = styled.div`
    height: 47px;
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    background-position: 0 0;
    background-repeat: repeat-x;
    .content {
        padding-top: 2px;
        display: flex;
        justify-content: space-between;
    }
`

export const Control = styled.div`
    display: flex;
    width: 137px;
    padding: 6px 0 0 0;
    button {
        width: 28px;
        height: 28px;
        margin-right: 8px;
        margin-top: 5px;
        cursor: pointer;
    }
    .prv {
        cursor: pointer;
        
        background-position: 0 -130px;
        &:hover {
            background-position: -30px -130px;
        }
    }
    .ply {
        width: 36px;
        height: 36px;
        margin-top: 0;
        background-position: 0 ${ props => props.isPlaying ?  "-165px" : "-204px" };
        cursor: pointer;
        &:hover {
            background-position: ${ props => props.isPlaying ?  "0px -165px" : "-40px -204px" };
        }
    }
    .nxt {
        background-position: -80px -130px;
        cursor: pointer;
        &:hover {
            background-position: -110px -130px;
        }
    }
`

export const PlayInfo = styled.div`
    display: flex;
    width: 642px;
    padding-top: 6px;
    .coverImg {
        width: 34px;
        height: 34px;
        margin: 0px 15px 0 0;
        cursor: pointer;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .play {
        display: flex;
        width: 100%;
        flex-direction: column;
        .song {
            display: flex;
            .song-name {
                color: #e8e8e8;
                cursor: pointer;
                &:hover {
                    text-decoration: underline;
                }
            }
            .singer-name {
                color: #9b9b9b;
                margin-left: 15px;
            }
        }
        .process {
            display: flex;
            align-items: center;

            .ant-slider {
                width: 493px;
                margin: 4px 1px 5px;
                margin-right: 10px;

                .ant-slider-rail {
                    height: 9px;
                    background: url(${require("@/assets/img/progress_bar.png")}) right 0;
                }

                .ant-slider-track {
                    height: 9px;
                    background: url(${require("@/assets/img/progress_bar.png")}) left -66px;
                }

                .ant-slider-handle {
                    width: 22px;
                    height: 24px;
                    border: none;
                    margin-top: -7px;
                    background: url(${require("@/assets/img/sprite_icon.png")}) 0 -250px;
                }
            }
            .time {
                color: #797979;
                .now-time {
                color: #a1a1a1;
                }
                .divider {
                    margin: 0 3px;
                }
            }
        }
    }
`

export const Operator = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    top: 5px;

    .btn {
        width: 25px;
        height: 25px;
        cursor: pointer;
    }

    .favor {
        background-position: -88px -163px;
        &:hover {
            background-position: -88px -189px;
        }
    }

    .share {
        background-position: -114px -163px;
        &:hover {
            background-position: -114px -189px;
        }
    }

    .right {
        width: 126px;
        padding-left: 13px;
        background-position: -147px -248px;
        
        .volume {
            background-position: -2px -248px;
            &:hover {
                background-position: -31px -248px;
            }
        }

        .loop {
            background-position: ${props => {
                switch(props.sequence) {
                case 1:
                    return "-66px -248px"
                case 2:
                    return "-66px -344px"
                default:
                    return "-3px -344px"
                }
            }};
        }

        .playlist {
            width: 59px;
            background-position: -42px -68px;
            &:hover {
                background-position: -42px -98px;
            }
        }
    }
`
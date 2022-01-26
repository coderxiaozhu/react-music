import styled from "styled-components";

export const SongsCoverWapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 140px;
    height: 188px;
    margin: ${ props => props.margin };
    .bgUrl {
        background: url(${require("@/assets/img/sprite_cover.png")});
    }
    .coverTop {
        width: 140px;
        height: 140px;
        position: relative;
        img {
            width: 100%;
            height: 100%;
        }
        .mask {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 1;
            background-position: 0 0;
        }
        .play {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 27px;
            background-position: 0 -537px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: #ccc;
            z-index: 2;
            .play-left {
                display: flex;
                align-items: center;
                .playIcon {
                    width: 14px;
                    height: 11px;
                    margin: 0px 5px 0px 9px;
                    background-position: 0 -24px;
                    background-image: url(${require("@/assets/img/sprite_icon.png")});
                }
            }
            .playBtn {
                position: absolute;
                right: 10px;
                bottom: 5px;
                width: 16px;
                height: 17px;
                background-position: 0 0;
                background-image: url(${require("@/assets/img/sprite_icon.png")});
                cursor: pointer;
                &:hover {
                    background-position: 0 -60px;
                }
            }
        }
    }
    .coverBottom {
        display: flex;
        flex-direction: column;
        height: 40px;
        margin-top: 5px;
        .songName, .authorName {
            display: inline-block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-wrap: normal;
        }
        .songName {
            color: #000;
        }
        .songAuthor {
            display: flex;
            align-items: center;
            span {
                font-size: 12px;
                color: #999;
            }
            .authorName {
                color: #666;
                margin-left: 3px;
            }
        }
    }
`
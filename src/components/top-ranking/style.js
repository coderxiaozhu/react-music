import styled from "styled-components";

export const TopRankWapper = styled.div`
    width: 230px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .topHeader {
        height: 118px;
        padding: 20px 0 0 19px;
        display: flex;
        .headerImg {
            width: 80px;
            height: 80px;
            position: relative;
            img {
                width: 100%;
                height: 100%;
            }
            .mask {
                display: block;
                width: 100%;
                height: 100%;
                position: absolute;
                left: 0;
                top: 0;
                background-image: url(${ require("@/assets/img/sprite_cover.png") });
                background-position: -145px -57px;
            }
        }
        .headerTitle {
            width: 116px;
            margin: 6px 0 0 10px;
            display: flex;
            flex-direction: column;
            a {
                display: block;
                width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                word-wrap: normal;
                font-size: 14px;
                color: #333;
                font-weight: 700;
            }
            .iconWapper {
                margin-top: 10px;
                display: flex;
                .icon1, .icon2 {
                    width: 22px;
                    height: 22px;
                    display: block;
                    background-image: url(${ require("@/assets/img/sprite_02.png") });
                }
                .icon1 {
                    margin-right: 10px;
                    background-position: -267px -205px;
                    &:hover {
                        background-position: -267px -235px;
                    }
                }
                .icon2 {
                    background-position: -300px -205px;
                    &:hover {
                        background-position: -300px -235px;
                    }
                }
            }
        }
    }
    .content {
        display: flex;
        flex-direction: column;
        margin-left: 5px;
        height: 319px;
        .content-item {
            display: flex;
            height: 32px;   
            position: relative;
            &:nth-child(-n+3) .rank {
                color: #c10d0c;
            }
            .rank {
                display: block;
                width: 50px;
                height: 32px;
                text-align: center;
                font-size: 16px;
                color: #000;
                line-height: 32px;
            }
            a {
                display: block;
                width: 170px;
                height: 32px;
                line-height: 32px;
                color: #000;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                word-wrap: normal;
                cursor: pointer;
            }
            &:hover {
                .oper {
                    a {
                        display: block;
                    }
                }
                a {
                    width: 80px;
                }
            }
            .oper {
                display: flex;
                position: absolute;
                top: 7px;
                right: 4px;
                a {
                    display: none;
                    width: 17px;
                    height: 17px;
                    background-image: url(${ require("@/assets/img/sprite_02.png") });
                }
                .play {
                    background-position: -267px -268px;
                    margin-right: 10px;
                    &:hover {
                        background-position: -267px -288px;
                    }
                }
                .addPlay {
                    background-image: url(${ require("@/assets/img/sprite_icon2.png") });
                    background-position: 0 -700px;
                    margin: 2px 6px 0 0;
                    &:hover {
                        background-position: -22px -700px;
                    }
                }
                .collect {
                    background-position: -297px -268px;
                    margin-right: 10px;
                    &:hover {
                        background-position: -297px -288px;
                    }
                }
            }
        }
        .more {
            a {
                display: block;
                height: 32px;
                line-height: 40px;
                text-align: right;
                margin-right: 32px;
            }
        }
    }
`

// export const Numspan = styled.span`
//     display: block;
//     width: 50px;
//     height: 32px;
//     text-align: center;
//     font-size: 16px;
//     color: ${ props => props.color };
//     line-height: 32px;
// `
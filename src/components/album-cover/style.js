import styled from "styled-components";

export const AlbumCoverWapper = styled.div`
    width: 100px;
    height: 109px;
    margin-left: 10px;
    background-image: url(${ require("@/assets/img/sprite_02.png") });
    background-position: -260px 99px;
    margin-top: 20px;
    .coverWapper {
        width: 100px;
        height: 100px;
        margin-bottom: 7px;
        position: relative;
        &:hover .icon {
            display: block;
        }
        .mask {
            position: absolute;
            left: 0;
            top: 0;
            display: block;
            width: 118px;
            height: 100px;
            background-position: 0 -570px;
            background-image: url(${ require("@/assets/img/sprite_cover.png") });
        }
        .icon {
            display: none;
            width: 22px;
            height: 22px;
            background-image: url(${ require("@/assets/img/sprite_icon.png") });
            position: absolute;
            right: 5px;
            bottom: 4px;
            background-position: 0 -85px;
        }
    }
    .albumName, .albumWriter {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
        width: 90%;
        a {
            line-height: 18px;
            font-size: 12px;
            cursor: pointer;
        }
    }
    .albumName a {
        color: #000 !important;
    }
    .albumWriter a {
        color: #666 !important;
    }
`
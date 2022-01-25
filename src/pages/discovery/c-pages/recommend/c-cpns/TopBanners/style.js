import styled from "styled-components";

export const TopBannersWapper = styled.div`
    height: 285px;
    width: 100%;
    background: url(${ props => props.bgImage }) center center/6000px;
    position: relative;
    .bannerMain {
        display: flex;
        height: 100%;
    }
`

export const BannerLeft = styled.div`
    width: 730px;
    .banner-item {
        height: 285px;
        width: 100%;
        img {
            width: 100%;
            height: 100%;
        }
    }
`

export const BannerRight = styled.a.attrs({
    href: "https://music.163.com/#/download",
    target: "_blank"
})`
    display: block;
    position: relative;
    width: 250px;
    height: 100%;
    background-image: url(${ require("@/assets/img/download.png") });
`

export const ButtonControl = styled.div`
    .btn {
        position: absolute;
        top: 50%;
        margin-top: -31px;
        width: 37px;
        height: 70px;
        /* background-color: #000; */
        cursor: pointer; 
        background-image: url(${ require("@/assets/img/banner_sprite.png") });
    }
    .btn-left {
        left: 195px;
        background-position: 0 298px;
        &:hover {
            background-position: 0 228px;
        }
    }
    .btn-right {
        right: 195px;
        background-position: 0 151px;
        &:hover {
            background-position: 0 81px;
        }
    }
`
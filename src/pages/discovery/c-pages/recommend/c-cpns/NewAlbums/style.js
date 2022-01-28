import styled from "styled-components";

export const NewAlbumsWapper = styled.div`
    .content {
        height: 186px;
        margin: 20px 0 37px;
        border: 1px solid #d3d3d3;
        padding: 0 16px;
        background: #f5f5f5;
        position: relative;
        display: flex;
        align-items: center;
        .arrow {
            width: 25px;
            height: 25px;
            background-image: url(${ require("@/assets/img/sprite_02.png") });
            position: absolute;
            cursor: pointer;
        }
        .arrow-left {
            background-position: -260px -75px;
            top: 50%;
            left: 4px;
            &:hover {
                background-position: -280px -75px;
            }
        }
        .arrow-right {
            right: -5px;
            top: 50%;
            background-position: -300px -75px;
            &:hover {
                background-position: -320px -75px;
            }
        }
        .album {
            width: 640px;
            height: 180px;
            .ant-carousel .slick-slide {
                height: 180px;
                overflow: hidden;
            }

            .page {
                display: flex !important;
                justify-content: space-between;
                align-items: center;
            }
        }
    }
`
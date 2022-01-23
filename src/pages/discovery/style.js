import styled from "styled-components";

export const DiscoveryWarpper = styled.div`
    box-sizing: border-box;
    .top {
        width: 100%;
        height: 30px;
        background-color: #C20C0C;
    }
`

export const TopMenu = styled.div`
    box-sizing: border-box;
    padding-left: 116px;
    line-height: 30px;
    display: flex;
    .menuList {
        height: 30px;
        width: 84px;
        text-align: center;
        a {
            display: block;
            width: 100%;
            height: 100%;
            text-decoration: none;
            color: #fff;
            span {
                display: inline-block;
                height: 20px;
                line-height: 20px;
                color: #fff;
                border-radius: 20px;
                padding: 0 13px;
                &:hover {
                    background-color: #9B0909;
                }
            }
        }
        a.active span {
            background-color: #9B0909;
        }
    }
`
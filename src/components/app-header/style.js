import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    height: 70px;
    box-sizing: border-box;
    background: #242424;
    font-size: 14px;
    border-bottom: 1px solid #C20C0C;
    .content {
        height: 70px;
        line-height: 70px;
        display: flex;
        justify-content: space-between;
    }
    .under {
        height: 5px;
        width: 100%;
        background-color: #C20C0C;
        border-bottom: 1px solid #C20C0C;
    }
`

export const HeaderLeft = styled.div`
    display: flex;
    .logo {
        display: block;
        width: 157px;
        height: 70px;
        padding-right: 20px;
        text-indent: -9999px;
        margin-right: 20px;
    }
    .nav-list {
        display: flex;
        .nav-list-item {
            a {
                color: #ccc;
                display: block;
                height: 70px;
                padding: 0 19px;
                text-align: center;
                line-height: 70px;
                position: relative;
                &.active, &:hover {
                    background: #000;
                    text-decoration: none;
                    color: #fff;
                }
                &.active {
                    .icon {
                        display: block;
                    }
                }
            }
            .current {
                .icon {
                    display: none;
                }
            }
            .icon {
                display: none;
                position: absolute;
                left: 50%;
                top: 64px;
                width: 12px;
                height: 7px;
                margin-left: -6px;
                background-position: -226px 0;
            }
            &:last-of-type {
                a {
                    position: relative;
                    &:after {
                        content: "";
                        position: absolute;
                        top: 21px;
                        left: 102px;
                        width: 28px;
                        height: 19px;
                        background-position: -190px 0;
                        background-image: url(${ require("@/assets/img/sprite_01.png") });
                    }
                }
            }
        }
    }
`

export const HeaderRight = styled.div`
    height: 70px;
    display: flex;
    align-items: center;
    .search-input {
        width: 158px;
        height: 32px;
        line-height: 32px;
        background-color: #fff;
        border-radius: 32px;
        .ant-input {
            font-size: 12px;
        }
    }
    .create-btn {
        width: 90px;
        height: 32px;
        box-sizing: border-box;
        border: 1px solid #4F4F4F;
        line-height: 33px;
        color: #ccc;
        text-align: center;
        font-size: 12px;
        margin: 0 20px 0 12px;
        border-radius: 20px;
        cursor: pointer;
        &:hover {
            border: 1px solid #FFF;
            color: #FFF
        }
    }
    .login-btn {
        cursor: pointer;
        color: #787878;
    }
`
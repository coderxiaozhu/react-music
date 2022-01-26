import styled from "styled-components";

export const ThemeHeaderCpnWapper = styled.div`
    height: 33px;
    width: 100%;
    padding: 0 10px 0 34px;
    background-position: -225px -156px;
    border-bottom: 2px solid #C10D0C;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
        display: flex;
        align-items: center;
        .title {
            font-size: 20px;
            font-weight: normal;
        }
        .tab {
            margin-left: 20px;
            display: flex;
            .line {
                margin: 0 10px;
                color: #ccc;
            }
        }
    }
    .more {
        display: flex;
        a {
            margin-right: 4px;
        }
        .icon {
            background-position: 0 -240px;
            width: 12px;
            height: 12px;
            margin-left: 2px;
            margin-top: 5px;
            vertical-align: middle;
        }
    }
`
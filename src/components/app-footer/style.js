import styled from "styled-components";

export const FooterWrapper = styled.div`
    width: 100%;
    height: 173px;
    background: #f2f2f2;
    .content {
        padding-top: 15px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
    }
`

export const FooterLeft = styled.div`
    display: flex;
    flex-wrap: wrap;
    a {
        font-size: 12px;
        color: #999;
    }
    .line {
        padding: 0 10px;
        color: #999;
    }
    .copyright, .report, .copyright a, .report a, .info a {
        color: #666;
    }
    .copyright {
        margin-top: 10px;
    }
    .report {
        margin: 10px 0;
    }
    .sep {
        margin-right: 10px;
    }
`

export const FooterRight = styled.div`
    display: flex;
    align-items: center;
    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 40px;
        a {
            display: block;
            width: 50px;
            height: 45px; 
            background-image: url(${require("@/assets/img/sprite_footer_02.png")});
            background-size: 110px 450px;
            margin-bottom: 10px;
        }
        &:nth-child(1) .link {
            background-position: -60px -101px;
        }
        &:nth-child(2) .link {
            background-position: 0 0;
        }
        &:nth-child(3) .link {
            background-position: -60px -50px;
        }
        &:nth-child(4) .link {
            background-position: 0 -101px;
        }
        span {
            font-size: 12px;
            width: 60px;
            color: #999;
            text-align: center;
        }
    }
`
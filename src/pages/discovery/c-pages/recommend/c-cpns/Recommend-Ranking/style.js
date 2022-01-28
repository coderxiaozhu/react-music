import styled from "styled-components";

export const RankingWapper = styled.div`
    .contentWapper {
        height: 475px;
        background-repeat: no-repeat;
        width: 689px;
        padding-left: 1px;
        background-image: url(${ require("@/assets/img/recommend-top-bg.png") });
        margin-top: 20px;
        .content {
            display: flex;
            justify-content: space-between;
        }
    }
`
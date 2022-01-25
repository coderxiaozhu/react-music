import React, { memo } from 'react';

import { RecommendWrapper } from './style'
import XZtopBanner from './c-cpns/TopBanners';

function XZrecommend() {

    return (
        <RecommendWrapper>
            <XZtopBanner></XZtopBanner>
        </RecommendWrapper>
    );
};

export default memo(XZrecommend)
import React, { memo } from 'react';

import { 
    RecommendWrapper, 
    RecommendContent, 
    RecommendContentLeft,
    RecommendContentRight
} from './style'
import XZtopBanner from './c-cpns/TopBanners';
import XZhotRecommend from './c-cpns/HotRecommend'
import XZnewAlbums from './c-cpns/NewAlbums'
import XZrecommendRanking from './c-cpns/Recommend-Ranking'
function XZrecommend() {

    return (
        <RecommendWrapper>
            <XZtopBanner></XZtopBanner>
            <RecommendContent className='wrap-v2'>
                <RecommendContentLeft>
                    <XZhotRecommend />
                    <XZnewAlbums />
                    <XZrecommendRanking />
                </RecommendContentLeft>
                <RecommendContentRight></RecommendContentRight>
            </RecommendContent>
        </RecommendWrapper>
    );
};

export default memo(XZrecommend)
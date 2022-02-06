import React, { memo } from 'react';

import HYAppPlayerBar from './app-player-bar/index'
import { PlayWrapper 
} from './style'
export default memo(function XZPlayer() {
    return (
        <PlayWrapper>
            <HYAppPlayerBar />
        </PlayWrapper>
    );
});

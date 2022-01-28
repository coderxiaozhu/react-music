import React, { memo } from 'react';

import { getSizeImage } from '@/utils/data-formate.js'
import { 
    AlbumCoverWapper
} from './style'
export default memo(function XZalbumcover(props) {
    const { info } = props
    return (
        <AlbumCoverWapper>
            <div className='coverWapper'>
                <img src={ getSizeImage(info.picUrl, 100) } alt={ info } />
                <a href='todo' className='mask'> </a>
                <a href='todo' className='icon'> </a>
            </div>
            <p className='albumName'>
                <a href='todo'>{ info.name }</a>
            </p>
            <p className='albumWriter'>
                <a href='todo'>{ info.artist.name }</a>
            </p>
        </AlbumCoverWapper>
    );
});

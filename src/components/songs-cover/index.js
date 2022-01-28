// 如果需要显示by作者的话，传入writer=true

import React, { memo } from 'react';

import { 
    SongsCoverWapper,
} from './style'
import { getCount, getSizeImage } from '@/utils/data-formate'
export default memo(function XZsongCover(props) {
    const { info, margin, writer } = props;
    return (
        <SongsCoverWapper margin={ margin }>
            <div className='coverTop'>
                <img src={ getSizeImage(info.picUrl, 140) } alt='图片' />
                <div className='mask bgUrl'></div>
                <div className='play bgUrl'>
                    <div className='play-left'>
                        <div className='playIcon'></div>
                        <div className='playNum'>{ getCount(info.playCount) }</div>
                    </div>
                    <div className='playBtn'></div>
                </div>
            </div>
            {
                writer ? (
                    <div className='coverBottom'>
                        <a href='todo' className='songName'>
                            { info.name }
                        </a>
                        <div className='songAuthor'>
                            <span>by</span>
                            <a href='todo' className='authorName'>{ info.copywriter }</a>
                        </div>
                    </div>
                ) : (
                    <div className='coverBottom'>
                        <a href='todo' className='songNameNext'>
                            { info.name }
                        </a>
                    </div>
                )
            }
        </SongsCoverWapper>
    );
});

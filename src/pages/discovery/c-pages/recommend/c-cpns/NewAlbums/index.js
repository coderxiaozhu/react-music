import React, { memo, useEffect, useRef } from 'react';
import { Carousel } from 'antd';

import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { NewAlbumsWapper } from './style'
import {
    getNewAlbumsAction
} from '@/pages/discovery/c-pages/recommend/store/actionCreators.js'
import XZthemeHeaderRcm from '@/components/theme-header-rcm'
import XZalbumcover from '@/components/album-cover'
export default memo(function XZnewAlbums() {
    // state

    // redux hooks
    const { newAlbums } = useSelector(state => ({
        newAlbums: state.getIn(["recommend", "newAlbums"])
    }), shallowEqual)
    const dispatch = useDispatch();

    // other hooks
    const albumRef = useRef()
    useEffect(() => {
        dispatch(getNewAlbumsAction(10));
    }, [dispatch])
    return (
        <NewAlbumsWapper>
            <XZthemeHeaderRcm title="新碟上架" />
            <div className='content'>
                <div className='arrow arrow-left' onClick={ e => albumRef.current.prev() }></div>
                <div className='album'>
                    <Carousel ref={albumRef} dots={ false }>
                        {
                            [0, 1].map(item => {
                                return (
                                    <div key={item} className='page'>
                                        {
                                            newAlbums.slice(item * 5, (item + 1) * 5).map(iten => {
                                                return <XZalbumcover  key={iten.id} info={iten} />
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
                <div className='arrow arrow-right' onClick={ e => albumRef.current.next() }></div>
            </div>
        </NewAlbumsWapper>
    );
});

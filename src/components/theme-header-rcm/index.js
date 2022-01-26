import React, { memo } from 'react';
import propTypes from 'prop-types'

import { ThemeHeaderCpnWapper } from './style'
const XZthemeHeaderRcm = memo(function(props) {
    const { title, keywords } = props
    return (
        <ThemeHeaderCpnWapper className='sprite_02'>
            <div className='left'>
                <div className='title'>
                    {
                        title
                    }
                </div>
                <div className='tab'>
                    {
                        keywords.map((item, index) => {
                            return (
                                <div key={item}>
                                    <a href='todo'>{ item }</a>
                                    { index === keywords.length - 1 ? "" : <span className='line'>|</span> }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='more'>
                <a href='todo'>更多</a>
                <i className='sprite_02 icon'></i>
            </div>
        </ThemeHeaderCpnWapper> 
    );
});

XZthemeHeaderRcm.propTypes = {
    title: propTypes.string.isRequired,
    keywords: propTypes.array
}

XZthemeHeaderRcm.defaultProps = {
    keywords: []
}

export default XZthemeHeaderRcm

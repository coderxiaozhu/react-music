import React, { memo, Fragment } from 'react';

import { footerLinks, footerImages } from "@/common/local-data.js"
import { FooterWrapper, FooterLeft, FooterRight } from './style'
export default memo(function XZAppFooter() {
    return (
        <FooterWrapper>
            <div className='content wrap-v2'>
                <FooterLeft>
                    <div>
                        {
                            footerLinks.map((item, index) => {
                                return (
                                    <Fragment key={item.title}>
                                        <a href={ item.link }>{ item.title }</a>
                                        { index < 5 && <span className='line'>|</span> }
                                    </Fragment>
                                )
                            })
                        }
                    </div>
                    <div className="copyright">
                        <span className='sep'>
                            网易公司版权所有©1997-2022
                        </span>
                        <span>
                            杭州乐读科技有限公司运营：
                            <a href='https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/8282703158/452a/ca0c/3a10/caad83bc8ffaa850a9dc1613d74824fc.png'>
                                浙网文[2021] 1186-054号
                            </a>
                        </span>
                    </div>
                    <div className='report'>
                        <span className='sep'>
                            违法和不良信息举报电话：0571-89853516
                        </span>
                        <span>
                            举报邮箱：
                        </span>
                        <a href='mailto:ncm5990@163.com'>ncm5990@163.com</a>
                    </div>
                    <div className='info'>
                        <span className='sep'>
                            <a href='https://beian.miit.gov.cn/#/Integrated/index'>
                                粤B2-20090191-18  工业和信息化部备案管理系统网站
                            </a>
                        </span>
                    </div>
                </FooterLeft>
                <FooterRight>
                    {
                        footerImages.map((item, index) => {
                            return (
                                <li key={item.title}>
                                    <a href={ item.link } target="_blank" rel="noreferrer" className='link'>  </a>
                                    <span>{ item.title }</span>
                                </li>
                            )
                        })
                    }
                </FooterRight>
            </div>
        </FooterWrapper>
    );
});

import React, { memo } from 'react';
import { useRoutes } from 'react-router-dom'
import routes from './router';

import XZAppfooter from '@/components/app-footer/XZAppFooter'
import XZAppHeader from '@/components/app-header/XZAppHeader'
export default memo(function App() {
    return (
        <div>
            <XZAppHeader />
            { useRoutes(routes) }   
            <XZAppfooter />
        </div>
    );
});

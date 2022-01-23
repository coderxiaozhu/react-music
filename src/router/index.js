import { Navigate } from 'react-router-dom'

import Discovery from '@/pages/discovery'
import Friend from '@/pages/friend'
import Mine from '@/pages/mine'
import Recommend from '../pages/discovery/c-pages/recommend/index'
import Ranking from '@/pages/discovery/c-pages/ranking'
import Songs from '@/pages/discovery/c-pages/songs'
import Djradio from '@/pages/discovery/c-pages/djradio'
import Artist from '@/pages/discovery/c-pages/artist'
import Album from '@/pages/discovery/c-pages/album'
const routes = [
    {
        path: "/",
        exact: true,
        element: <Navigate to="/discovery" />
    },
    {
        path: "/discovery",
        element: <Discovery />,
        children: [
            {
              path: "/discovery",
              exact: true,
              element: <Navigate to="/discovery/recommend" />
            },
            {
              title: "推荐",
              path: "/discovery/recommend",
              element: <Recommend />
            },
            {
              title: "排行榜",
              path: "/discovery/ranking",
              element: <Ranking />
            },
            {
              title: "歌单",
              path: "/discovery/songs",
              element: <Songs />
            },
            {
              title: "主播电台",
              path: "/discovery/djradio",
              element: <Djradio />
            },
            {
              title: "歌手",
              path: "/discovery/artist",
              element: <Artist />
            },
            {
              title: "新碟上架",
              path: "/discovery/album",
              element: <Album />
            }
        ]
    },
    {
        path: "/my",
        element: <Mine />
    },
    {
        path: "/friend",
        element: <Friend />
    }
]

export default routes
import Discovery from '@/pages/discovery'
import Friend from '@/pages/friend'
import Mine from '@/pages/mine'

const routes = [
    {
        path: "/",
        exact: true,
        element: <Discovery />
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
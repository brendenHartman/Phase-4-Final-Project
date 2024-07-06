
import { createBrowserRouter } from "react-router-dom"
import App from './components/App'
import Home from './components/Home'
import Drivers from './components/Drivers'
import Cars from './components/Cars'
import Login from './components/Login'
import Meets from './components/Meets'

const router = createBrowserRouter([{
    path: '/',
    element: <App/>,
    errorElement: <Error />,
    children: [
        {
            path: '/',
            element: <Login/>,
            errorElement: <Error />
        },
        {
            path: '/home',
            element: <Home/>,
            errorElement: <Error />
        },
        {
            path: '/my_driver',
            element: <Drivers/>,
            errorElement: <Error />
        },
        {
            path: '/cars',
            element: <Cars/>,
            errorElement: <Error />
        },
        {
            path: '/meets',
            element: <Meets/>,
            errorElement: <Error />
        },
    ]
}])

export default router
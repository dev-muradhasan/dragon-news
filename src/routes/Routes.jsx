import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../Page/Home";
import NewsByCategory from "../Page/NewsByCategory";
import AuthLayout from "../layout/AuthLayout";
import Login from "../Page/Login";
import Register from "../Page/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <NewsByCategory></NewsByCategory>,
                loader: ()=> fetch('/news.json')
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            },
        ]
    }
]);


export default router
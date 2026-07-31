import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../Page/Home";
import NewsByCategory from "../Page/NewsByCategory";

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
    }
]);


export default router
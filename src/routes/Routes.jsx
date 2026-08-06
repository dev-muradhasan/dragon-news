import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../Page/Home";
import NewsByCategory from "../Page/NewsByCategory";
import AuthLayout from "../layout/AuthLayout";
import Login from "../Page/Login";
import Register from "../Page/Register";
import NewsDetails from "../Page/NewsDetails";
import PrivateRoute from "./PrivateRoute";
import Loading from "../Page/Loading";
import About from "../Page/About";
import Career from "../Page/Career";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <NewsByCategory></NewsByCategory>,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/news-details/:id",
    loader: () => fetch(`/news.json`),
    element: (
      <PrivateRoute>
        <NewsDetails></NewsDetails>
      </PrivateRoute>
    ),
    hydrateFallbackElement: <Loading></Loading>,
  },
  {path: '/about', element: <About></About>},
  {path: '/career', element: <Career></Career>},
]);


export default router
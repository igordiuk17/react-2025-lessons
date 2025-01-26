import {createBrowserRouter} from "react-router";
import MainLayout from "../layouts/MainLayout.tsx";
import {UserPage} from "../pages/UsersPage.tsx";
import {PostsPage} from "../pages/PostsPage.tsx";


export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>,children:[
            {path:'Users',element:<UserPage/>},
            {path:'Posts',element:<PostsPage/>},
        ]

    }
])
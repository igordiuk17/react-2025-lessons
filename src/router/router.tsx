import {createBrowserRouter} from "react-router";
import MainLayout from "../layouts/MainLayout.tsx";
import {UserPage} from "../pages/UserPage.tsx";
import {PostsPage} from "../pages/PostsPage.tsx";


export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>,children:[
            {path:'User',element:<UserPage/>},
            {path:'Posts',element:<PostsPage/>},
        ]

    }
])

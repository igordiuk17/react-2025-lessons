import {createBrowserRouter} from "react-router";
import MainLayout from "../layouts/MainLayout.tsx";
// import {UserPage} from "../pages/UserPage.tsx";

export const routes = createBrowserRouter([
    {
        path: "/", element: <MainLayout/>

    }
])
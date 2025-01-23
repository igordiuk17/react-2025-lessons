import {CreateBrowserRouter} from "react-router";
import {UserPage} from "../pages/UserPage.tsx";
import App from "../layouts/App.tsx";
export const routes= CreateBrowserRouter([
    {
        path:"/",element:<MainLayout/>,children:[
            {
                path:'users',element:<UserPage/>
            }
        ]
    }
]);
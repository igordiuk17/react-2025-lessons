import {createBrowserRouter,Outlet} from "react-router";
function MainLayout(){
    return<>
        <Outlet/>
    </>;
}

export const routes = createBrowserRouter([
    {
        path:"/",element:<MainLayout/>
    }
])
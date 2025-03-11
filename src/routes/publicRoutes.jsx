import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import Home from "../pages/Home/Home";
import Project from "../pages/Project/Project";

export const publicRoutes = [
    {path: "/", component: Home, layout: DefaultLayout},
    {path: "/project", component: Project, layout: DefaultLayout},
]
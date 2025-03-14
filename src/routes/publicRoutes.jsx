import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home";

export const publicRoutes = [
  { path: "/", component: Home, layout: DefaultLayout },
  { path: "/blog", component: Blog, layout: DefaultLayout },
  { path: "/about", component: About, layout: DefaultLayout },
];

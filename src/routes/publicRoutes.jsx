import ContactLayout from "../layouts/ContactLayout/ContactLayout";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import Test from "../pages/Test/Test";

export const publicRoutes = [
  { path: "/", component: Home, layout: DefaultLayout },
  { path: "/blog", component: Blog, layout: DefaultLayout },
  { path: "/about", component: About, layout: DefaultLayout },
  { path: "/contact", component: Contact, layout: ContactLayout },
  { path: "/services", component: Services, layout: ContactLayout },
  { path: "/test", component: Test, layout: DefaultLayout },
];

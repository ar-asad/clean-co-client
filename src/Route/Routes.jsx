import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../Layout/Main";
import Login from "../pages/Login/Login";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Services from "../pages/Services";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/service',
                element: <Services />
            },
        ]
    },
    {
        path: '/login',
        element: <Login />
    }
]);
export default router;
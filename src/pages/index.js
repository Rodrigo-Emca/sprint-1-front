import IndexLayout from "../layouts/IndexLayout/IndexLayout";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Index from "./Index/Index";
import Hero from "./Hero/Hero";
import Register from "./Register/Register";
import SignIn from "./SignIn/SignIn";
import NotFound from "./NotFound/NotFound";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {path: "/", 
    element: <IndexLayout/>,
    children: [
        {path: "/", element: <Index/>},
        // {path: "/hero", element: <Hero/>},
        // {path: "/signup", element: <Register/>},
        // {path: "/signin", element: <SignIn/>},
        {path: "/*", element: <NotFound/>}
    ]
},
    {path: "/", 
    element: <MainLayout/>,
    children: [
        {path: "/signup", element: <Register/>},
        {path: "/signin", element: <SignIn/>},
        {path: "/*", element: <NotFound/>}
    ]
},
])
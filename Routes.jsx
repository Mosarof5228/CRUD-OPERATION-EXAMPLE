import {
    createBrowserRouter, Outlet,

} from "react-router-dom";

import AddCoffe from "./src/Pages/home/addCoffee/AddCoffe";
import AllCoffee from "./src/Pages/home/allCoffee/AllCoffee";
import UpdateCoffee from "./src/Pages/home/updateCoffee/UpdateCoffee";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Outlet></Outlet>,
        children: [
            {
                path: '/',
                element: <AllCoffee></AllCoffee>,
                loader: () => fetch('http://localhost:5000/coffee')

            },
            {
                path: '/addCoffee',
                element: <AddCoffe></AddCoffe>

            },
            {
                path: '/updateCoffee/:id',
                element: <UpdateCoffee></UpdateCoffee>,
                loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
            }

        ]
    },

]);
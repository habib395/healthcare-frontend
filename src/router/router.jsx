import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <h2>route not found.</h2>,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
]);

export default router;
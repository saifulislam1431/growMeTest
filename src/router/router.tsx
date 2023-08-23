import { createBrowserRouter } from "react-router-dom";
import PageOne from "../Pages/PageOne/PageOne";
import PageTwo from "../Pages/PageTwo/PageTwo";

const router = createBrowserRouter([
    {
        path:"/",
        element:<PageOne/>
    },
    {
        path:"/secondPage",
        element:<PageTwo />
    }
])
export default router;

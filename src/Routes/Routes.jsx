import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import AllFoods from "../pages/AllFoods/AllFoods";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader:()=>fetch('http://localhost:5000/topsell')
        }, 
        {
            path:'/allFoods',
            element:<AllFoods></AllFoods>,
            loader:()=>fetch('http://localhost:5000/foods')
        }
    ]
},
]);
export default router;
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import AllFoods from "../pages/AllFoods/AllFoods";
import FoodDetails from "../pages/FoodDetails/FoodDetails";
import BlogPage from "../pages/BlogPage/BlogPage";
import Login from "../pages/Login/Login";

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
            path:'/login',
            element:<Login></Login>,
            
        }, 
        {
            path:'/allFoods',
            element:<AllFoods></AllFoods>,
            
        },
        {
            path:'/blog',
            element:<BlogPage></BlogPage>,
            
        },
        {
            path: '/foodDetails/:id',
            element: <FoodDetails></FoodDetails>,
            loader:({params})=>fetch(`http://localhost:5000/foodDetails/${params.id}`)
        }
    ]
},
]);
export default router;
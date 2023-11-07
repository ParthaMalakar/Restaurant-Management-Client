import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import AllFoods from "../pages/AllFoods/AllFoods";
import FoodDetails from "../pages/FoodDetails/FoodDetails";
import BlogPage from "../pages/BlogPage/BlogPage";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Ordering from "../pages/Ordering/Ordering";
import PrivateRoute from "./PrivateRoute";
import MyaddedFood from "../pages/MyaddedFood/MyaddedFood";
import AddFood from "../pages/AddFood/AddFood";


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
            path:'/register',
            element: <Registration></Registration>,
            
        }, 
        {
            path:'/ordering/:id',
            element:<PrivateRoute><Ordering></Ordering></PrivateRoute>,
            loader:({params})=>fetch(`http://localhost:5000/foodDetails/${params.id}`)

        },
        {
            path:'/myfood',
            element:<PrivateRoute><MyaddedFood></MyaddedFood></PrivateRoute>,

        },
        {
            path:'/addfood',
            element:<PrivateRoute><AddFood></AddFood></PrivateRoute>,

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
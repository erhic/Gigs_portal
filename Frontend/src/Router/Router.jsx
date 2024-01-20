import { createBrowserRouter } from "react-router-dom";
import App from "../App";
// import Home from "../../Pages/Home";
import Createjob from "../Components/Createjob";
import ApplyJob from "../Components/ApplyJob";
import MyApplication from "../Components/MyApplication";
import Login from "../../Pages/Login";
import Register from "../../Pages/Register";
import Applicants from "../Components/Applicants";
import Home from "../../Pages/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />

      },
      {
        path: "/createjob",
        element: <Createjob />

      },
      {
        path: "/applyjob",
        element: <ApplyJob />

      }
      , {
        path: "/myapplications",
        element: <MyApplication />
      },
      , {
        path: "/applicants",
        element: <Applicants />
      },

      {
        path: "/login",
        element: <Login />

      }
      , {
        path: "/register",
        element: <Register />

      }
    ]

  },
],)
export default router
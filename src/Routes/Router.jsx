import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Errorpage from "../components/Errorpage";
import Home from "../components/Home";
import Register from "../pages/Register";
import Signin from "../pages/Signin";
import Allmodels from "../pages/Allmodels";
import Addmodel from "../pages/Addmodel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "",     // <-- Default (index) route
        element: <Home />,
        loader: () => fetch('http://localhost:3000/ai-model')
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "Signin",
        element:<Signin/>,
      },
      {
        path: "Addmodel",
        element:<Addmodel/>,
      },
      {
        path: "Allmodels",
        element:<Allmodels/>,
        loader: () => fetch('http://localhost:3000/ai-model')
      },
     
    ],
  },
]);

export default router;

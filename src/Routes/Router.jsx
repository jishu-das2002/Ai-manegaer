import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Errorpage from "../components/Errorpage";
import Home from "../components/Home";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "",     // <-- Default (index) route
        element: <Home />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;

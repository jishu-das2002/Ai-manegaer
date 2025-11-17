import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Errorpage from "../components/Errorpage";
import Home from "../components/Home"; // <-- make sure the path is correct
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "home",        // child route (no leading slash)
        element: <Home />,   // component for the route
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;

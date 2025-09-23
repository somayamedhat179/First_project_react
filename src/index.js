import App from "./App";
import AllAbout from "./About/AllAbout";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,RouterProvider,Route,Link,
} from "react-router-dom";
import AllDownload from "./Download/AllDownload";
import AllContact from "./Contact/AllContact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "about",
    element: <AllAbout/>,
  },
  {
    path: "download",
    element: <AllDownload/>,
  },
  {
    path: "contact",
    element: <AllContact/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

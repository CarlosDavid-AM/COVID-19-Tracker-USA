import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Fallecidos from "../pages/Fallecidos";
import Hospitalizados from "../pages/Hospitalizados";
import Vacunados from "../pages/Vacunados";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/",
    element: <Fallecidos/>
  },
  {
    path: "/",
    element: <Hospitalizados />
  },
  {
    path: "/",
    element: <Vacunados />
  }
])

export default Router
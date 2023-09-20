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
    path: "/fallecidos",
    element: <Fallecidos/>
  },
  {
    path: "/hospitalizados",
    element: <Hospitalizados />
  },
  {
    path: "/vacunados",
    element: <Vacunados />
  }
])

export default Router
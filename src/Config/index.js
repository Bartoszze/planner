import { createHashRouter } from "react-router-dom";
import "../Assets/Sass/_reset.sass";
import { lazy } from "react";
const HomePage = lazy(() => import("../Views/HomePage/index"));
const ErrorPage = lazy(() => import("../Views/ErrorPage/index"));
const Main = lazy(() => import("../Views/Main/index"));
const Category = lazy(() => import("../Views/Category/index"));

const App = createHashRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/category/:categoryName",
        element: <Category />,
      },
    ],
  },
]);

export default App;

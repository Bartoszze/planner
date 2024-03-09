import Loader from "../Loader/";
import Nav from "../../Components/Nav";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./index.sass";

const Main = () => {
  return (
    <Suspense fallback={<Loader />}>
      <div className="container">
        <div className="block">
          <Nav />
          <div className="block__content">
            <Outlet />
          </div>
        </div>
      </div>
      <ToastContainer />
    </Suspense>
  );
};

export default Main;

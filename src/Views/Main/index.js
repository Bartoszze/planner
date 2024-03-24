import Loader from "../Loader/";
import Nav from "../../Components/Nav";
import { Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./index.sass";

const Main = () => {
  const [annimation, setAnimation] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimation(false);
    }, 300);
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <div className="container">
        <div className={annimation ? "block animation" : "block"}>
          <Nav />
          <div className="block__content">
            <Outlet />
          </div>
        </div>
      </div>
      <ToastContainer limit={3} />
    </Suspense>
  );
};

export default Main;

import Loader from "../Loader/";
import Nav from "../../Components/Nav";
import { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import "./index.sass";

const Main = () => {
  useEffect(() => {}, []);
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
    </Suspense>
  );
};

export default Main;

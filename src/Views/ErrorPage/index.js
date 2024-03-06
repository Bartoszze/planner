import "./index.sass";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="error">
      <div className="error__blur">
        <h1>Oops!</h1>
        <p>
          <i>{error.data}</i>
          <br />
          <i>{error.status}</i>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;

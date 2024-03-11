import notFoundImage from "../../Assets/Images/404.svg";

const ErrorComponent = (props) => {
  return (
    <div className="errorCategory">
      <img src={notFoundImage} alt="404 Error" />
      <h1>
        Brak takiej kategorii <span>{props.urlError}</span>. Popraw swój url.
      </h1>
    </div>
  );
};

export default ErrorComponent;

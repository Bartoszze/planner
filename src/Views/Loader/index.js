import "./index.sass";

const Loader = () => {
  return (
    <div className="bgloader">
      <div className="loader">
        <h1>Ładowanie.</h1>
        <div className="loader__container">
          <div className="loader__container--dot" id="first" />
          <div className="loader__container--dot" id="second" />
          <div className="loader__container--dot" id="third" />
        </div>
      </div>
    </div>
  );
};

export default Loader;

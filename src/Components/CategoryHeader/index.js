import { Link } from "react-router-dom";
import arrow from "../../Assets/Images/arrow.png";
import "./index.sass";

const HeaderCategory = (props) => {
  return (
    <div className="headerCategory">
      <h2>{props.headline}</h2>
      <Link to="/">
        <div className="headerCategory__button">
          <img src={arrow} alt="arrow" />
        </div>
      </Link>
    </div>
  );
};

export default HeaderCategory;

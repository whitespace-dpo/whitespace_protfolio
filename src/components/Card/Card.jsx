import { Link } from "react-router-dom";
import styles from "./card.module.css";
const Card = (props) => {
  return (
    <div className={styles["card_container"]}>
      <Link to={props.prop.link}>
        <img src={props.prop.img} alt="Test" />
        <h2>{props.prop.projectName}</h2>
        <p>{props.prop.time}</p>
      </Link>
    </div>
  );
};
export default Card;

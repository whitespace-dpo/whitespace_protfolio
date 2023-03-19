import { Link } from "react-router-dom";

const Card = (props) => {
    return <div>
    <Link to={props.prop.link}> <img src={props.prop.img} alt="Test" /> 
    <h2>{props.prop.projectName}</h2>
    <p>{props.prop.time}</p>
    </Link>
    </div>
}
export default Card;
const Card = (props) => {
    return <div>
    <img src={props.prop.img} alt="Test" /> 
    <h2>{props.prop.projectName}</h2>
    <p>{props.prop.time}</p>
    </div>
}
export default Card;
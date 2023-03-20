import styles from "./wireframecard.module.css";
const WireframeCard = (props) => {
  return (
    <>
      <div>
        {props.props.map((item) => (
          <div className={styles["wf_container"]}>
            <p>{item.title}</p>
            <img src={item.img} alt="test" />
          </div>
        ))}
      </div>
    </>
  );
};
export default WireframeCard;

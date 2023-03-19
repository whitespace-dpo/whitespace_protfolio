const WireframeCard = (props) => {
  return (
    <>
      <div>
        <div>
          <p>1</p>
          <img src={props.props[0]} />
        </div>
        <div>
          <p>2</p>
          <img src={props.props[1]} />
        </div>
        <div>
          <p>3</p>
          <img src={props.props[2]} />
        </div>
      </div>
    </>
  );
};
export default WireframeCard;

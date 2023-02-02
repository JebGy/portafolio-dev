function Card(props) {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">{props.title}</h3>
      </div>
      <div className="card-body">
        <p className="card-text">
          {props.description}
        </p>
      </div>
      <div className="card-footer">
        <button className="card-btn"><a target="_blank" href={props.link}>See project</a></button>
      </div>
    </div>
  );
}

export default Card;

const Description = ({ details }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="Descriptions-item">
            <p>{details?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;

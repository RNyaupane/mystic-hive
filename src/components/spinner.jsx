const Spinner = ({ title }) => {
  return (
    <div className="spinner-container">
      <div className="spinner-border text-warning" role="status">
        <span className="sr-only">{title || "Loading..."}</span>
      </div>
    </div>
  );
};

export default Spinner;

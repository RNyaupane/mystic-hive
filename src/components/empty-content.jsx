const EmptyContent = ({ title }) => {
  return (
    <div className="w-100 h-100 d-flex" style={{ minHeight: "300px" }}>
      <div className="m-auto text-center">
        <img src="/assets/img/empty.png" alt="No Data" width={160} />
        <h4 className="pt-4 text-secondary">{title || "No Data Found"}</h4>
      </div>
    </div>
  );
};

export default EmptyContent;

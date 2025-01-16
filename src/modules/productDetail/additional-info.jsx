const AdditionalInformation = ({ details }) => {
  return (
    <div className="container">
      <div className="Additional-wrap">
        <div className="row">
          <div className="col-12">
            <table className="table-responsive">
              <tbody>
                <tr>
                  <td>Ratings</td>
                  <td className="ratting">
                    <ul>
                      <li>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </li>
                      <li>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </li>
                      <li>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </li>
                      <li>
                        <i className="fa fa-star-half-o" aria-hidden="true"></i>
                      </li>
                      <li>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Material Type</td>
                  <td>Hill Honey</td>
                </tr>
                <tr>
                  <td>weight</td>
                  <td>250 gm</td>
                </tr>
                <tr>
                  <td>Seller</td>
                  <td>Annahl</td>
                </tr>
                <tr>
                  <td>Size</td>
                  <td>Small Jar</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInformation;

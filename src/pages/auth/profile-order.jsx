const OrderList = ({ orders }) => (
  <div className="cart-wrapper">
    <table className="table-responsive cart-wrap">
      <thead>
        <tr>
          {[
            "ID",
            "Date",
            "Quantity",
            "Ship To",
            "Total Price",
            "Status",
            "Action",
          ].map((heading, idx) => (
            <th key={idx} className={heading.toLowerCase().replace(" ", "-")}>
              {heading}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {orders.map((order, idx) => (
          <tr key={idx}>
            <td className="images">{order.id}</td>
            <td className="product">{order.date}</td>
            <td className="ptice">{order.quantity}</td>
            <td className="name">{order.shipTo}</td>
            <td className="ptice">${order.totalPrice}</td>
            <td className={order.status.toLowerCase()}>
              <span>{order.status}</span>
            </td>
            <td className="action">
              <ul>
                <li className="w-btn-view">
                  <a href="#" title="View">
                    <i className="fi ti-eye"></i>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default OrderList;

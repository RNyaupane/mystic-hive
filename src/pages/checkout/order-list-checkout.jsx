import { useSelector } from "react-redux";

const OrderListCheckout = () => {
  const { items } = useSelector((state) => state.cart);

  const subTotal = items.reduce(
    (total, item) => total + parseFloat(item.sub_total),
    0
  );
  const vat = subTotal * 0.1; // Assuming 10% VAT
  const ecoTax = 100; // Static eco tax
  const discount = 100; // Static discount
  const total = subTotal + vat + ecoTax - discount;

  return (
    <div className="col-lg-4 col-12">
      <div className="cout-order-area">
        <div className="oreder-item">
          <ul>
            <li className="o-header">
              Your Order<span>({items.length})</span>
            </li>
            {items.map((item, index) => (
              <li key={index}>
                {item.product.name} X {item.quantity}
                <span>{parseFloat(item.sub_total).toFixed(2)}</span>
              </li>
            ))}
            <li className="s-total">
              Sub Total<span>{subTotal.toFixed(2)}</span>
            </li>
            <li>
              ( + ) VAT<span>{vat.toFixed(2)}</span>
            </li>
            <li>
              ( + ) Eco Tax<span>{ecoTax.toFixed(2)}</span>
            </li>
            <li>
              ( - ) Discount Price<span>{discount.toFixed(2)}</span>
            </li>
            <li className="o-bottom">
              Total price<span>{total.toFixed(2)}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrderListCheckout;

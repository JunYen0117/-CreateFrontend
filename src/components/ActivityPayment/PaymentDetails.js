function PaymentDetails(props) {
  const { order } = props;
  return (
    <>
      <div className="border mar p-4">
        <h1 className="mb-4 card-title">明細</h1>
        <h2 className="mb-3">{order.exhibition_name}</h2>
        <h4 className="mb-5">
          日期:{order.date.start} ~ {order.date.end}
        </h4>
        <h2>項目</h2>
        <div className="row">
          <div className="col-4 col-md-3">票卷</div>
          <div className="col-4 col-md-3 text-center">
            NT {order.price}/每張
          </div>
          <div className="col-4 col-md-3 text-center">{order.count}張</div>
          <div className="col-12 col-md-3 text-end">
            總金額 <span>NT {order.price * order.count}</span>
          </div>
        </div>
      </div>
    </>
  );
}
export default PaymentDetails;

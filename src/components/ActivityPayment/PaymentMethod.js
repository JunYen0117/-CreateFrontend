function PaymentMethod() {
  return (
    <>
      <div className="border p-4 mar">
        <h1 className="card-title mb-4">付款方式</h1>
        <div className="border">
          <div className="form-check m-3">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              defaultChecked={true}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              LINE PAY
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
export default PaymentMethod;

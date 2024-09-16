function CheckoutItem(props) {
  const { product_name, image, price, quantity, subtotal } = props;

  return (
    <>
      <div className="my-3">
        <div className="p-1 d-flex align-items-center cart_product_border">
          <figure className="checkout_modal_img">
            <img src={`http://localhost:3003/images/product/${image}`} alt="" />
          </figure>
          <p className="text-center mx-auto cart_product_name">
            {product_name}
          </p>
          <p className="fw-bolder text-center mx-auto w-25">NT {price}</p>
          <div className="text-center mx-auto cart_product_count">
            <span className="border fw-bolder">{quantity}</span>
          </div>
          <p className="fw-bolder text-center mx-auto w-25">NT {subtotal}</p>
        </div>
      </div>
    </>
  );
}

export default CheckoutItem;

import CheckoutItem from './CheckoutItem';

function CheckoutList(props) {
  const { checkList } = props;

  return (
    <>
      {checkList.map((v, i) => {
        return (
          <CheckoutItem
            key={v.id}
            product_name={v.product_name}
            image={v.image}
            price={v.price}
            quantity={v.quantity}
            subtotal={v.price * v.quantity}
          />
        );
      })}
    </>
  );
}

export default CheckoutList;

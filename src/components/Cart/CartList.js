import CartItem from './CartItem';
import { useCart } from '../../utils/useCart';

function CartList(props) {
  const { items } = useCart();
  return (
    <>
      {items.map((v, i) => {
        return (
          <CartItem
            key={v.id}
            productId={v.id}
            product_name={v.product_name}
            vendorId={v.vendor_id}
            vendor={v.business_name}
            image={v.image}
            price={v.price}
            quantity={v.quantity}
            checked={v.checked}
          />
        );
      })}
    </>
  );
}

export default CartList;

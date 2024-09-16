import { Modal } from 'react-bootstrap';
import Swal from 'sweetalert2';
import CheckoutList from './CheckoutList';
import { useHistory } from 'react-router-dom';
import { useCart } from '../../utils/useCart';
import { useLogin } from '../../utils/useLogin';
import { checkoutSubmit } from '../../utils/api';

import { PaymentElement } from '@stripe/react-stripe-js';

function CheckoutModal(props) {
  const { items, addItem, clearCart } = useCart();
  const { user } = useLogin();
  const history = useHistory();
  const { checkList, setCheckList, checkListTotal, shippingData } = props;
  const { show, handleClose } = props;

  // 移除結帳商品
  const checkoutRemove = () => {
    // 取出 未選購商品
    let newList = items.filter((v, i) => {
      return v.checked === false;
    });

    clearCart();

    newList.forEach((v) => {
      addItem({ ...v });
    });

    setCheckList([]);
  };

  // 結帳
  const handleSubmit = async () => {
    try {
      let response = await checkoutSubmit({
        userID: user.userID,
        shippingData,
        checkList,
        total: checkListTotal,
      });
    } catch (e) {
      console.error(e);
    }
  };

  const handleConfirmCheckout = (e) => {
    e.preventDefault();
    handleSubmit();
    checkoutRemove();
    handleClose();
    setTimeout(() => {
      history.push('/order');
    }, 1000);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: '結帳成功',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header
          closeButton
          className="checkout_modal_header"
        ></Modal.Header>
        <div className="container p-3">
          {checkList.length === 0 ? (
            <>
              <h1 className="checkout_modal_title text-center">
                您沒有選擇任何商品
              </h1>
              <div className="text-center">
                <button
                  className="cart_checkout_btn w-50 py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    handleClose();
                  }}
                >
                  返回購物車
                </button>
              </div>
            </>
          ) : (
            <form className="checkout_modal_body row g-3">
              <div className="col-12">
                <h1 className="checkout_modal_title text-center">購買明細</h1>
              </div>
              <div className="col-12 mt-1 checkout_list">
                <CheckoutList checkList={checkList} />
              </div>
              <div className="col-12 d-flex justify-content-end">
                <p className="fw-bolder checkout_modal_items">
                  共{checkList.length}項商品
                </p>
                <p className="fw-bolder checkout_modal_total">
                  總金額 NT {checkListTotal}
                </p>
              </div>
              <div className="col-12">
                <h1 className="checkout_modal_title text-center">付款資訊</h1>
              </div>
              <div className="col-12 d-flex justify-content-center mt-1">
                <PaymentElement className="w-100" />
              </div>
              <div className="col-12 d-flex justify-content-center mb-3">
                <button
                  className="mx-3 cart_checkout_btn py-2 w-100"
                  onClick={(e) => {
                    e.preventDefault();
                    handleClose();
                  }}
                >
                  返回購物車
                </button>
                <button
                  className="mx-3 cart_checkout_btn py-2 w-100"
                  onClick={handleConfirmCheckout}
                >
                  確認結帳
                </button>
              </div>
            </form>
          )}
        </div>
      </Modal>
    </>
  );
}

export default CheckoutModal;

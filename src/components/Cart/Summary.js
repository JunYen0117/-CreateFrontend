import { useState, useEffect } from 'react';
import { useCheckList } from '../../utils/useCheckList';
import { useLogin } from '../../utils/useLogin';
import TwCitySelector from 'tw-city-selector/dist/tw-city-selector';
import CheckoutModal from './CheckoutModal';
import { checkoutPayment } from '../../utils/api';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Swal from 'sweetalert2';

function Summary() {
  const { checkList, setCheckList, checkListTotal } = useCheckList();
  const { user } = useLogin();
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
  const [clientSecret, setClientSecret] = useState('');

  // 接收key
  useEffect(() => {
    const showStripe = async () => {
      const response = await checkoutPayment();
      setClientSecret(response.data.clientSecret);
    };
    showStripe();
  }, []);

  //取得縣市行政區API資料
  useEffect(() => {
    cityselect();
  }, []);

  function cityselect() {
    new TwCitySelector({
      el: '.my-selector-c',
      elCounty: '#county', // 在 el 裡查找 dom
      elDistrict: '#district', // 在 el 裡查找 dom
      elZipcode: '.zipcode', // 在 el 裡查找 dom
    });
  }

  const appearance = {
    theme: 'stripe',
  };

  const options = {
    clientSecret,
    appearance,
  };

  const deliveryMethod = [
    { id: 1, method: '超商取貨' },
    { id: 2, method: '宅配到府' },
    { id: 3, method: '門市自取' },
  ];

  // 收件資料
  // customerId 會抓 登入會員的 id
  const [shippingData, setShippingData] = useState({
    recipient: '',
    email: '',
    tel: '',
    delivery: '',
    county: '',
    district: '',
    address: '',
  });

  const handleChange = (e) => {
    setShippingData({
      ...shippingData,
      [e.target.name]: e.target.value,
    });
  };

  // CheckoutModal
  const [show, setShow] = useState(false);
  const handleShow = (e) => {
    e.preventDefault();
    if (!user.userID) {
      Swal.fire({
        icon: 'error',
        title: '錯誤',
        text: '您尚未登入！',
      });
    } else {
      setShow(true);
    }
  };
  const handleClose = () => setShow(false);

  return (
    <>
      <p className="h2 p-3 cart_order_summary cart_order_border text-center fw-bold">
        訂單摘要
      </p>
      <div className="h2 px-5 py-4 cart_order_border">
        <div className="d-flex justify-content-between mb-3">
          <p>商品總計</p>
          <p className="text-end">NT ${checkListTotal}</p>
        </div>
        <div className="d-flex justify-content-between mb-3">
          <p>運費</p>
          <p>100</p>
        </div>
        <div className="d-flex justify-content-between">
          <p className="cart_coupon">優惠券折抵</p>
          <p className="cart_coupon">-100</p>
        </div>
      </div>
      <div className="h2 px-5 py-4 cart_order_border">
        <div className="d-flex justify-content-between">
          <p>結帳總金額</p>
          <p className="text-end">NT ${checkListTotal}</p>
        </div>
      </div>
      <div className="h2 px-5 py-4 cart_order_border">
        <div className="container p-3">
          <form
            id="checkoutForm"
            className="my-selector-c"
            onSubmit={handleShow}
          >
            <div className="checkout_modal_body row g-3">
              <div className="col-12">
                <h1 className="checkout_modal_title text-center">收件資料</h1>
              </div>
              <div className="col-12">
                <label className="w-100 mb-2 h2">收件人姓名</label>
                <input
                  type="text"
                  placeholder="真實姓名"
                  id="recipient"
                  name="recipient"
                  value={shippingData.recipient}
                  className="w-100 form-control"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <label className="w-100 mb-2 h2">Email</label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  id="email"
                  name="email"
                  value={shippingData.email}
                  className="w-100 form-control"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="col-6">
                <label className="w-100 mb-2 h2">聯絡電話</label>
                <input
                  type="text"
                  id="tel"
                  name="tel"
                  value={shippingData.tel}
                  className="w-100 form-control"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="col-6">
                <label className="w-100 mb-2 h2">運送方式</label>
                <select
                  className="form-control"
                  id="delivery"
                  name="delivery"
                  onChange={handleChange}
                  required
                >
                  <option value="">請選擇</option>
                  {deliveryMethod.map((delivery) => (
                    <option key={delivery.id} value={delivery.id}>
                      {delivery.method}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-6">
                <label htmlFor="county" className="w-100 mb-2 h2">
                  縣市
                </label>
                <select
                  className="form-control"
                  id="county"
                  name="county"
                  value={shippingData.county}
                  onChange={handleChange}
                  required
                ></select>
              </div>
              <div className="col-6">
                <label htmlFor="district" className="w-100 mb-2 h2">
                  鄉鎮市區
                </label>
                <select
                  className="form-control"
                  id="district"
                  name="district"
                  value={shippingData.district}
                  onChange={handleChange}
                  required
                ></select>
              </div>
              <div className="col-12">
                <label className="w-100 mb-2 h2">地址</label>
                <input
                  type="text"
                  className="w-100 form-control"
                  id="address"
                  name="address"
                  value={shippingData.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12">
                <button
                  type="submit"
                  form="checkoutForm"
                  className="cart_checkout_btn py-2 w-100"
                >
                  前往結帳
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="text-center px-3 my-3">
          {clientSecret && (
            <Elements stripe={stripePromise} options={options}>
              <CheckoutModal
                checkList={checkList}
                checkListTotal={checkListTotal}
                shippingData={shippingData}
                setCheckList={setCheckList}
                show={show}
                handleClose={handleClose}
              />
            </Elements>
          )}
        </div>
      </div>
    </>
  );
}

export default Summary;

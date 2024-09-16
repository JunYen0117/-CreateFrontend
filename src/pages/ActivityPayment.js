import PaymentDetails from '../components/ActivityPayment/PaymentDetails';
import PaymentMethod from '../components/ActivityPayment/PaymentMethod';
import PaymentUser from '../components/ActivityPayment/PaymentUser';
import Swal from 'sweetalert2';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useLogin } from '../utils/useLogin';
import axios from 'axios';
import { API_URL } from '../utils/config';
function ActivityPayment() {
  const [phoneMessage, setPhoneMessage] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [nameMessage, setNameMessage] = useState('');

  const history = useHistory();
  if (sessionStorage.getItem('order')) {
    console.log('有資料');
  } else {
    console.log('沒資料');
    history.push('/exhibition');
  }
  sessionStorage.getItem('order');
  let order = JSON.parse(sessionStorage.getItem('order'));

  const [orderName, setOrderName] = useState('');
  const [orderEmail, setOrderEmail] = useState('');
  const [orderPhone, setOrderPhone] = useState('');
  const { user } = useLogin();

  const handleClick = async (e) => {
    if (
      orderName !== '' &&
      orderEmail !== '' &&
      orderPhone !== '' &&
      nameMessage === '' &&
      emailMessage === '' &&
      nameMessage === ''
    ) {
      try {
        let response = await axios.post(API_URL + '/activitypayment', {
          userID: user.userID,
          order,
          orderName,
          orderEmail,
          orderPhone,
        });
        sessionStorage.removeItem('order');
        console.log(response.data);
        window.location.href = response.data.payUrl;
      } catch (e) {
        console.error(e);
      }
    } else {
      if (orderName === '') {
        setNameMessage('❌欄位尚未填寫');
      }
      if (orderEmail === '') {
        setEmailMessage('❌欄位尚未填寫');
      }
      if (orderPhone === '') {
        setPhoneMessage('❌欄位尚未填寫');
      }
      Swal.fire({
        title: '有欄位未填或填寫錯誤',
        icon: 'warning',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '確定',
      });
    }
  };
  return (
    <>
      <div className="container mt-4 mb-5 activitypayment">
        <h1 className="text-center payment-title">結帳</h1>
        <PaymentDetails order={order} />
        <PaymentUser
          setOrderName={setOrderName}
          setOrderEmail={setOrderEmail}
          setOrderPhone={setOrderPhone}
          setPhoneMessage={setPhoneMessage}
          setEmailMessage={setEmailMessage}
          setNameMessage={setNameMessage}
          phoneMessage={phoneMessage}
          emailMessage={emailMessage}
          nameMessage={nameMessage}
        />
        <PaymentMethod />
        <div className="text-end">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleClick}
          >
            確認付款
          </button>
        </div>
      </div>
    </>
  );
}
export default ActivityPayment;

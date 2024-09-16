import { useState } from 'react';


function PaymentUser(props) {
  const {
    setOrderName,
    setOrderEmail,
    setOrderPhone,
    setNameMessage,
    nameMessage,
    setPhoneMessage,
    phoneMessage,
    setEmailMessage,
    emailMessage,
  } = props;
  const [orderInformation, setOrderInformation] = useState({
    email: '',
    name: '',
    phone: '',
  });
  function handleChange(e) {
    let orderIn = {
      ...orderInformation,
      [e.target.name]: e.target.value,
    };
    setOrderInformation(orderIn);
    setOrderName(orderIn.name);
    setOrderEmail(orderIn.email);
    setOrderPhone(orderIn.phone);
  }
  function emailReg(e) {
    const emailRegExp = new RegExp(
      /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
    );
    if (!emailRegExp.test(e.target.value)) {
      setEmailMessage('❌請輸入正確E-mail格式');
      console.log(orderInformation.email, !emailRegExp.test(e.target.value));
    } else {
      setEmailMessage('');
    }
  }
  function phoneReg(e) {
    const phoneRegExp = new RegExp(/^09[0-9]{8}$/);

    if (!phoneRegExp.test(e.target.value)) {
      setPhoneMessage('❌請輸入正確格式');
      console.log(e.target.value, !phoneRegExp.test(e.target.value));
    } else {
      setPhoneMessage('');
    }
  }

  function handleName(e) {
    if (e.target.value !== '') {
      setNameMessage('');
    } else {
      setNameMessage('❌請填寫欄位');
    }
  }

  return (
    <>
      <div className="border mar p-4">
        <h1 className="card-title mb-4">填寫聯絡人資料</h1>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            姓名
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="請輸入姓名"
            name="name"
            value={orderInformation.name}
            onChange={(e) => {
              handleChange(e);
              handleName(e);
            }}
          />
        </div>
        <label className="errortext mb-3">{nameMessage}</label>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            E-mail
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="請輸入E-mail"
            name="email"
            value={orderInformation.email}
            onChange={(e) => {
              handleChange(e);
              emailReg(e);
            }}
          />
        </div>
        <label className="errortext mb-3">{emailMessage}</label>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            手機
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="請輸入手機號碼"
            name="phone"
            value={orderInformation.phone}
            onChange={(e) => {
              handleChange(e);
              phoneReg(e);
            }}
          />
        </div>
        <label className="errortext mb-3">{phoneMessage}</label>
        {/* <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            同會員資料
          </label>
        </div> */}
      </div>
    </>
  );
}
export default PaymentUser;

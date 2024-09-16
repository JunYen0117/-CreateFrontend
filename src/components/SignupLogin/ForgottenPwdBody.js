import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import Swal from 'sweetalert2';
import LogoSvg1 from '../../img/header/logo.svg';

function ForgottenPwdBody() {
  const [emailInfo, setEmailInfo] = useState({
    account: '',
  });

  const handleChange = (e) => {
    setEmailInfo({ [e.target.name]: e.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(API_URL + '/email', emailInfo, {
        withCredentials: true,
      });
      console.log(response);
      Swal.fire({
        icon: 'success',
        title: response.data, //已寄送認證信至信箱
        showConfirmButton: false,
        timer: 1000,
      });
    } catch {
      Swal.fire({
        icon: 'info',
        title: '這個信箱沒有註冊過喔',
        confirmButtonText: '了解',
      });
    }
  }
  return (
    <>
      <form className="forgotten_pwd_form">
        <div className="forgotten_pwd_body">
          <figure className="forgotten_pwd_logo">
            <img src={LogoSvg1} alt="#/" />
          </figure>
          <h3 className="forgotten_pwd_title text-center pb-4">忘記密碼</h3>
          <div className="forgotten_pwd">
            <input
              name="account"
              value={emailInfo.account}
              onChange={handleChange}
              className="mx-auto mb-5"
              placeholder="請輸入註冊信箱"
            />
          </div>
          <div className="d-flex justify-content-center mb-4">
            <button
              className="forgotten_pwd_btn mx-auto"
              onClick={handleSubmit}
            >
              傳送密碼確認信至信箱
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
export default ForgottenPwdBody;

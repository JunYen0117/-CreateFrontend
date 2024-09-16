import Swal from 'sweetalert2';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';

import { IconContext } from 'react-icons';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { AiOutlineEye } from 'react-icons/ai';
import LogoSvg1 from '../../img/header/logo.svg';

import { useLogin } from '../../utils/useLogin';

function LoginBody() {
  //傳入登入狀態，從App.js -> Header.js -> SignupLogin.js -> LoginBody.js
  const { setIsLogin } = useLogin();

  const [loginInfo, setLoginInfo] = useState({
    account: '',
    password: '',
  });

  const handleChange = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(API_URL + '/auth/login', loginInfo, {
        withCredentials: true,
      });
      // console.log(response);
      setIsLogin(true);
      Swal.fire({
        icon: 'success',
        title: '登入成功',
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (e) {
      console.error('前端沒有送到後端:' + e);
      Swal.fire({
        icon: 'error',
        title: '帳號或密碼錯誤，請重新登入',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }

  const [loginPwdEye, setLoginPwdEye] = useState(false);
  const [pwdReveal, setPwdReveal] = useState('password');

  return (
    <>
      <Form className="login_form">
        <div className="login_body">
          <figure className="login_form_logo">
            <img src={LogoSvg1} alt="#/" />
          </figure>
          <h3 className="login_title text-center pb-4">會員登入</h3>
          <Form.Group className="account">
            <Form.Control
              type="text"
              id="loginAccount"
              name="account"
              value={loginInfo.account}
              onChange={handleChange}
              className="mx-auto mb-4"
              placeholder="帳號（電子信箱）"
            />
          </Form.Group>
          <Form.Group className="password">
            <Form.Control
              type={pwdReveal}
              id="loginPassword"
              name="password"
              value={loginInfo.password}
              onChange={handleChange}
              className="mx-auto mb-5"
              placeholder="密碼"
              autoComplete="on"
            />
            <div
              className="login_eye"
              onClick={() => {
                setLoginPwdEye(!loginPwdEye);
                pwdReveal === 'password'
                  ? setPwdReveal('text')
                  : setPwdReveal('password');
              }}
            >
              <IconContext.Provider value={{ color: '#b99664', size: '35px' }}>
                {loginPwdEye === true ? (
                  <AiOutlineEye />
                ) : (
                  <AiOutlineEyeInvisible />
                )}
              </IconContext.Provider>
            </div>
          </Form.Group>
          <Form.Group className="d-flex justify-content-center mb-4">
            <button
              type="submit"
              className="login_btn mx-auto"
              onClick={handleSubmit}
            >
              登入
            </button>
          </Form.Group>
        </div>
      </Form>
    </>
  );
}
export default LoginBody;

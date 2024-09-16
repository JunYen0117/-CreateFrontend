import axios from 'axios';
import Swal from 'sweetalert2';
import { API_URL } from '../../utils/config';
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { IconContext } from 'react-icons';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { AiOutlineEye } from 'react-icons/ai';

import { useLogin } from '../../utils/useLogin';
function SignupBody() {
  //傳入登入狀態，從App.js -> Header.js -> SignupLogin.js -> SignupBody.js
  const { setIsLogin } = useLogin();

  const [signupInfo, setSignInfo] = useState({
    member_name: '',
    account: '',
    password: '',
    re_password: '',
    gender: '',
    age: '',
    phone: '',
    address: '',
  });

  const [signupPwdEye, setSignupPwdEye] = useState(false);
  const [pwdReveal, setPwdReveal] = useState('password');

  const [signupPwdEye2, setSignupPwdEye2] = useState(false);
  const [pwdReveal2, setPwdReveal2] = useState('password');

  //checkbox 勾選是否同意網站政策 (沒有做完)
  const [isAgree, setIsAgree] = useState('disable');

  const [errorMessage, setErrorMessage] = useState([]);

  const handleChange = (e) => {
    setSignInfo({ ...signupInfo, [e.target.name]: e.target.value });
  };

  // useEffect(() => {
  //   if (errorMessage.length === 0) return;
  //   ErrorAccount();
  // }, [errorMessage]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(API_URL + '/auth/signup', signupInfo);
      // console.log('miu', response.data.id)
      const newCustomer = await axios.get(
        API_URL + `/coupons/available/new/${response.data.id}`
      );
      Swal.fire({
        icon: 'success',
        showConfirmButton: false,
        title: '註冊成功，請再次登入',
        timer: 1500,
      });
    } catch (e) {
      Swal.fire({
        icon: 'error',
        title: '註冊失敗，請檢查欄位',
      });
      // window.errorMessage = e.response.data.error;
      if (!e.response.data.error) {
        setErrorMessage(e.response.data);
      } else {
        setErrorMessage(e.response.data.error);
      }

      // console.log('e.response.data', e.response.data);
      // console.log('e.response.data.error', e.response.data.error);
    }
  }

  // // 新戶優惠券
  // const newCustomer = async () => {
  //   try {
  //     let response = await axios.get(
  //       API_URL + `/coupons/available/new/${response.data.id}`
  //     );
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };
  console.log('errorMessage', errorMessage);

  function ErrorAccount() {
    const ErrorAccountIndex = errorMessage.findIndex(
      (v, i) => v.param === 'account'
    );
    if (ErrorAccountIndex > -1) {
      return errorMessage[ErrorAccountIndex].msg;
    }
    return '';
  }

  function ErrorPassword() {
    const ErrorPasswordIndex = errorMessage.findIndex(
      (v, i) => v.param === 'password'
    );
    if (ErrorPasswordIndex > -1) {
      return errorMessage[ErrorPasswordIndex].msg;
    }
    return '';
  }

  function ErrorRepassword() {
    const ErrorRepasswordIndex = errorMessage.findIndex(
      (v, i) => v.param === 're_password'
    );
    if (ErrorRepasswordIndex > -1) {
      return errorMessage[ErrorRepasswordIndex].msg;
    }
    return '';
  }

  return (
    <>
      <form className="signup_form">
        <div className="signup_body pb-3 mb-2">
          <h3 className="signup_title text-center py-4">新會員註冊</h3>
          <div className="is_required mb-1">*為必填欄位</div>

          <Form.Group className="account  pb-4">
            <Form.Control
              type="text"
              id="signupAccount"
              name="account"
              value={signupInfo.account}
              onChange={handleChange}
              className="mx-auto"
              placeholder="帳號（電子信箱）*"
            />
            <span className="error_message pb-4">{ErrorAccount()}</span>
          </Form.Group>

          <Form.Group className="password pb-4">
            <Form.Control
              type={pwdReveal}
              id="signupPassword"
              name="password"
              value={signupInfo.password}
              onChange={handleChange}
              className="mx-auto"
              placeholder="密碼 *"
            />

            {/* 眼睛模組 */}
            <div
              className="signup_eye"
              onClick={() => {
                setSignupPwdEye(!signupPwdEye);
                pwdReveal === 'password'
                  ? setPwdReveal('text')
                  : setPwdReveal('password');
              }}
            >
              <IconContext.Provider value={{ color: '#b99664', size: '35px' }}>
                {signupPwdEye === true ? (
                  <AiOutlineEye />
                ) : (
                  <AiOutlineEyeInvisible />
                )}
              </IconContext.Provider>
            </div>
            <div className="error_message pb-4">{ErrorPassword()}</div>
          </Form.Group>

          <Form.Group className="re_password pb-4">
            <Form.Control
              type={pwdReveal2}
              id="re_password"
              name="re_password"
              value={signupInfo.re_password}
              onChange={handleChange}
              className="mx-auto"
              placeholder="請再確認密碼 *"
            />

            {/* 眼睛模組 */}
            <div
              className="signup_eye2"
              onClick={() => {
                setSignupPwdEye2(!signupPwdEye2);
                pwdReveal2 === 'password'
                  ? setPwdReveal2('text')
                  : setPwdReveal2('password');
              }}
            >
              <IconContext.Provider value={{ color: '#b99664', size: '35px' }}>
                {signupPwdEye2 === true ? (
                  <AiOutlineEye />
                ) : (
                  <AiOutlineEyeInvisible />
                )}
              </IconContext.Provider>
            </div>
            <div className="error_message pb-4">{ErrorRepassword()}</div>
          </Form.Group>

          <Form.Group className="member_name pb-4">
            <Form.Control
              type="text"
              id="member_name"
              name="member_name"
              value={signupInfo.member_name}
              onChange={handleChange}
              className="mx-auto "
              placeholder="用戶名 *"
            />
          </Form.Group>

          <Form.Group className="phone pb-4">
            <Form.Control
              type="tel"
              id="phone"
              name="phone"
              value={signupInfo.phone}
              onChange={handleChange}
              className="mx-auto"
              placeholder="電話"
            />
          </Form.Group>

          <Form.Group className="address pb-4">
            <Form.Control
              type="text"
              id="address"
              name="address"
              value={signupInfo.address}
              onChange={handleChange}
              className="mx-auto"
              placeholder="地址"
            />
          </Form.Group>

          <Form.Group className="gender pb-4">
            <Form.Select
              id="gender"
              name="gender"
              value={signupInfo.gender}
              onChange={handleChange}
              className="gender_select mx-auto"
              aria-label="Default select example"
            >
              <option>請選擇性別</option>
              <option value="男">男</option>
              <option value="女">女</option>
              <option value="不提供">不提供</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="age pb-4">
            <Form.Control
              type="text"
              id="age"
              name="age"
              value={signupInfo.age}
              onChange={handleChange}
              className="mx-auto "
              placeholder="年齡"
            />
          </Form.Group>
        </div>
        <div className="signup_footer d-flex flex-column">
          <div className="my-3 d-flex justify-content-center">
            <input type="checkbox" className="align-self-center me-3" />
            <div className="isagree_text d-inline-block">
              我同意網站&ensp;
              <a href="#/" alt="#/">
                隱私權政策
              </a>
              &ensp;和&ensp;
              <a href="#/" alt="#/">
                服務條款
              </a>
            </div>
          </div>
          <div className="d-flex justify-content-center mb-4">
            <button className="signup_btn mx-auto" onClick={handleSubmit}>
              註冊
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
export default SignupBody;
